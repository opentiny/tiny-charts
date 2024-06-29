import fs from 'node:fs';
import less from 'less';
import path from 'node:path';
import postcss from 'postcss';
import { rollup } from 'rollup';
import url from '@rollup/plugin-url';
import copy from 'rollup-plugin-copy';
import autoprefixer from 'autoprefixer';
import strip from '@rollup/plugin-strip';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import { getBabelOutputPlugin } from '@rollup/plugin-babel';

// 编译处理路径
const OUTPUT_DIR_PATH = './build';

// 编译less考虑的浏览器
const autoprefixerOption = {
    overrideBrowserslist: [
        'Firefox >= 40',
        'chrome >= 50',
        'ie > 11',
        'edge >= 12'
    ]
}

// 拷贝的文件
const copyConfig = {
    targets: [
        { src: './README.md', dest: OUTPUT_DIR_PATH },
        { src: './CompilePackage.json', dest: OUTPUT_DIR_PATH, rename: 'package.json' }
    ]
}

// JS输入编译配置
const inputOptions = {
    // 编译需要排除的第三方依赖，未来增加新的依赖需要增加相应的依赖项
    external: ['echarts', 'echarts/extension/bmap/bmap'],
    input: './src/index.js',
    plugins: [
        // 解析第三方依赖模块
        resolve(),
        // commonjs转为esmodule
        commonjs(),
        // 解析非js文件导入，图片等
        url(),
        // babel编译es6降级,Unlike the regular babel plugin, getBabelOutputPlugin(...) will not automatically search for Babel configuration files.
        getBabelOutputPlugin({
            presets: [['@babel/preset-env', { loose: true, modules: false }]]
        }),
        strip({
            // 删除debugger语句
            debugger: true,
            // 仅删除console.log
            functions: ['console.log'],
        }),
        // 拷贝文件
        copy(copyConfig)
    ]
}

// JS输出编译配置
const outputOptions = {
    dir: OUTPUT_DIR_PATH,
    // 输出为esm包
    format: 'es',
    // 保证编译结果保持原来的文件结构
    preserveModules: true,
    preserveModulesRoot: 'src',
}

// 清空build文件夹
function cleanBuild() {
    console.log('build文件夹开始清除...');
    // 递归删除文件
    function deleteAllFile(path) {
        let files = [];
        if (fs.existsSync(path)) {
            files = fs.readdirSync(path);
            files.forEach((file) => {
                const curPath = path + '/' + file;
                if (fs.statSync(curPath).isDirectory()) {
                    deleteAllFile(curPath);
                } else {
                    fs.unlinkSync(curPath);
                }
            });
            fs.rmdirSync(path);
        }
    };
    if (fs.existsSync(OUTPUT_DIR_PATH)) {
        deleteAllFile(OUTPUT_DIR_PATH)
        console.log('build文件夹清除已完成。');
    }
}

async function build() {
    console.warn('JavaScript开始编译...');
    let bundle
    let buildFailed = false
    try {
        // 1.启动一次打包
        bundle = await rollup(inputOptions);
        // 2. 拿到 bundle 对象，根据每一份输出配置，调用 write 方法将产物写入磁盘
        await bundle.write(outputOptions);
    } catch (error) {
        buildFailed = true;
        console.error(error);
    }
    if (bundle) {
        // 最后调用 bundle.close 方法结束打包
        await bundle.close();
        console.warn('JavaScript编译已完成。');
        // 异步，下一步的编译静态文件必须是在打包完成后再去操作，不然读取不到相应的路径
        return Promise.resolve()
    }
    process.exit(buildFailed ? 1 : 0);
}


function compileLess(inputFilePath, outputFilePath, root) {
    const inputContent = fs.readFileSync(inputFilePath, 'utf8');
    less.render(inputContent, {
        paths: [root],  // Specify search paths for @import directives
        compress: true  // Minify CSS output
    }).then((output) => {
        let processed = postcss([autoprefixer(autoprefixerOption)]).process(output.css, {});
        fs.writeFileSync(outputFilePath, processed.css);
        console.warn(`成功编译 ${inputFilePath} 到 ${outputFilePath}`);
    }).catch((error) => {
        console.error(`编译失败：${error}`);
    });
}

// 递归文件夹，获得所有.less后缀文件
function traverseDirectory(dirPath, lessFiles) {
    const dirEntries = fs.readdirSync(dirPath);
    for (let entry of dirEntries) {
        const filePath = path.join(dirPath, entry);
        if (fs.statSync(filePath).isFile()) {
            // 判断文件后缀名是否为.less
            if (entry.endsWith('.less')) {
                lessFiles.push(filePath);
            }
        } else {
            traverseDirectory(filePath, lessFiles);
        }
    }
}

// 编译.less文件
function compileAssets() {
    console.warn('开始编译.less静态资源...');
    // 1. 找到所有后缀为.less的文件
    const root = './src';
    const lessFiles = [];
    // 递归文件夹，获得所有.less后缀文件
    traverseDirectory(root, lessFiles);
    // 2. 编译所有.less文件
    lessFiles.forEach(inputFilePath => {
        let outputFilePath = inputFilePath.replace(/less/g, 'css').replace(/src/g, OUTPUT_DIR_PATH);
        compileLess(inputFilePath, outputFilePath, root);
    });
}

cleanBuild();
await build();
compileAssets();


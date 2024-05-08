import fs from 'fs';
const basePath = './doc'
const writeFileArr = ['.vue']; // 需要插入的文件后缀数组
// 需要插入的内容
const writeData =
`<!--
 * Copyright (c) 2022 - present TinyCharts Authors.
 * Copyright (c) 2022 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 -->
`;



// 读取文件路径
const readFile = function(path){
    const readDir = fs.readdirSync(path);
    readDir.forEach(i=>{
        const curDir = `${path}/${i}`
        const stat = fs.statSync(curDir);
        if(stat.isDirectory()){
            console.log(`当前路径为目录；进入下级目录${curDir}`);
            readFile(curDir);
        }
        if(stat.isFile()){
            const isWrite = writeFileArr.some(j=>curDir.endsWith(j));
            console.log(`当前文件 ${curDir} ======>>>${isWrite ? '需要插入;正在插入中...' : '无需插入'}`);
            if(isWrite){
                writeFile(curDir);
            }
        }
    })
}

// 读取文件并插入内容
const writeFile = function(path){
    const oldData = fs.readFileSync(path, "utf8");
    fs.writeFileSync(path, `${writeData}${oldData}`);
}

readFile(basePath);

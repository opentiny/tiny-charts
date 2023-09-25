#！/bin/bash
set -ex
#获取jinkins的$buildNumber，获取时间戳，获取build随机数
if [ -z ${buildNumber} ];then
    if [ -e /proc/sys/kernel/random/uuid ] && [ -r /proc/sys/kernel/random/uuid ];then
        build=`cat /proc/sys/kernel/random/uuid| cksum | cut -f1 -d" "`
    else
        build=${RANDOM}
    fi
    datetime=`date +%Y%m%d%H%M%S`
    buildNumber="${datetime}.${build}"
else
    buildNumber="${buildNumber}"
fi
#微服务名称
SERVICE_NAME="HuiCharts"
#包所在的项目路径
PACKAGE_PATH="."
#包名称
PACKAGE_NAME="@hui/charts.zip"
echo "aaaaaaaaaaaaaaaaaaaa"
pwd
echo "bbbbbb"
ls
# rm -rf /opt/buildtools/node.js-14.19.1/lib/node_modules/${SERVICE_NAME}
# rm -rf ./node_modules/
# rm -rf ./package-lock.json
npm config set strict-ssl false
npm cache clean --force

echo "install..."
npm install --legacy-peer-deps

echo "Release is ${isRelease}"
# #判断当前构建是否为版本构建，以及定义构建变量(包版本,包服务名称,包编译存放路径,包类型,包编译名称,包打包名称)
if [ "${isRelease}"x = "false"x ];then
    SERVICE_VERSION='MergeReques-Hui-Charts'
    #版本号+时间戳+build随机数写入buildInfo.properties
    echo "buildVersion=${SERVICE_VERSION}.$buildNumber">buildInfo.properties
    echo "MR stage: npm run compile..."
    
    npm run compile
    

elif [ "${isRelease}"x = "true"x ];then
    SERVICE_VERSION=${releaseVersion}
    #版本号+时间戳+build随机数写入buildInfo.properties
    echo "buildVersion=${SERVICE_VERSION}">buildInfo.properties
    # sed -i 's/VERSION/'${SERVICE_VERSION}'/g' appspec.yml
    #压缩包名称
    # PACKAGE_TAR_PATH="${SERVICE_NAME}_${SERVICE_VERSION}"
    
    #  npm --registry http://cmc.centralrepo.rnd.huawei.com/npm/  install

    #  npm run build:prod
fi

# currentPath=`pwd`
# echo ${currentPath}

# # npm --registry https://cmc.centralrepo.rnd.huawei.com/npm/  install 
# # npm install .
echo 'VersionTag:' ${VersionTag}
echo 'releaseVersion:' ${releaseVersion}
echo 'buildNumber:' ${buildNumber}
echo 'developmentVersion:' ${developmentVersion}

# echo ${releaseVersion}
# echo ${buildNumber}
npm config set registry https://cmc.centralrepo.rnd.huawei.com/npm/

# npm install -g pnpm

echo "compile..."
npm run compile

echo "publish..."

new_version=""
if [ -n "${releaseVersion}" ]; then
  new_version=${releaseVersion}
else
 new_version=${developmentVersion}
 echo "not releaseVersion, dont need to release"
 exit 0
fi

# 进入编译输出目录
cd build

if [[ ! -f "./package.json" ]] ; then
  echo "not found build/package.json"
  exit 1
fi

# 修改版本号
npm --no-git-tag-version --allow-same-version version ${new_version}


echo "now publish to cmc.centralrepo.rnd.huawei.com"
cat >.npmrc <<- EndOfMessage
@hui:registry=https://cmc.centralrepo.rnd.huawei.com/artifactory/api/npm/product_npm/
_auth = aHVpX2FkbWluOmh1aV9CZXN0NjY2IQ==
always-auth = true
email = wangqiang82@huawei.com
EndOfMessage

if [ ! -n "${VersionTag}" ]; then
  echo "not found VersionTag, we will publish beta version"
  npm publish --tag beta
  exit 0
fi

if [ "$VersionTag" = "latest" ]; then         
    npm publish --tag latest
elif [ "$VersionTag" = "next" ]; then       
    npm publish --tag next
else          
    npm publish --tag beta
fi   

# git tag ${new_version}
# git push origin --tags

#!/bin/bash
echo CID_WORKSPACE:${CID_WORKSPACE}

npm config get registry
npm config set strict-ssl false
npm cache clean --force


# 安装并自动复制目录到sites文件夹
echo "install..."
node -v
npm install --legacy-peer-deps

# 扩大内存
export NODE_OPTIONS="--max-old-space-size=8192"

npm run compile

cd build

npm --no-git-tag-version --allow-same-version version ${version}

echo "compile finished..."
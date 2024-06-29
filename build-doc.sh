#!/bin/bash
echo CID_WORKSPACE:${CID_WORKSPACE}
npm config get registry
npm config set strict-ssl false
npm cache clean --force

# 安装并自动复制目录到sites文件夹
echo "install..."
node -v
npm install --unsafe-perm=true --allow-root --legacy-peer-deps

# 扩大内存
export NODE_OPTIONS="--max-old-space-size=8192"


echo "build..."
npm run build:opentiny


if [ $? -ne 0 ]
then
    echo "[ERROR] build falid!"
    exit 1
fi
echo '[INFO] build completed'
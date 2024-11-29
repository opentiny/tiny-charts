/**
 * Copyright (c) 2024 - present OpenTiny HUICharts Authors.
 * Copyright (c) 2024 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 */
/**
 * 百分比变成小数
 */
const percentToDecimal = (percent) => {
    return parseFloat(percent) / 100;
}

/**
 * 已知两条边和他们的夹角，求另一条边的长度
 * @param {边长} a 
 * @param {边长} b 
 * @param {a&b的夹角} angle 
 * return 另一条边的长度
 */
const getEdge = (a, b, angle) => {
    let edgeSqrt = Math.pow(a, 2) + Math.pow(b, 2) - 2 * a * b * Math.cos(angle / 180 * Math.PI)
    return Math.sqrt(edgeSqrt);
}

/**
 * 已知三条边的长度，求任意角的大小
 * @param {边长} a 
 * @param {边长} b 
 * @param {边长} c 
 * return [b和c的夹角，a和c的夹角，b和a的夹角]
 */
const getAngle = (a, b, c) => {
    let cosA = (b * b + c * c - a * a) / (2 * b * c);
    let cosB = (a * a + c * c - b * b) / (2 * a * c);
    let cosC = (a * a + b * b - c * c) / (2 * a * b);
    let angleA = Math.acos(cosA) * 180 / Math.PI;
    let angleB = Math.acos(cosB) * 180 / Math.PI;
    let angleC = Math.acos(cosC) * 180 / Math.PI;
    return [angleA, angleB, angleC];
}

/**
 * 已知三个点位置，求任意角的大小
 * @param {点} a 
 * @param {点} b 
 * @param {点} c 
 * return [c点所在角，a点所在角，b点所在角]
 */
const getAngleByPoints = (a, b, c) => {
    let edgeA = Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2));
    let edgeB = Math.sqrt(Math.pow(b.x - c.x, 2) + Math.pow(b.y - c.y, 2));
    let edgeC = Math.sqrt(Math.pow(a.x - c.x, 2) + Math.pow(a.y - c.y, 2));
    return getAngle(edgeA, edgeB, edgeC)
}

/**
 * 假设有三个点A(x1, y1), B(x2, y2), C(x3, y3)，则可以通过计算向量AB和向量AC的叉积来判断C点在AB线段的顺时针方向还是逆时针方向。
 * 如果AB × AC > 0，则C在AB的逆时针方向；如果AB × AC < 0，则C在AB的顺时针方向。 此处的顺逆针指的是ABC的连线方向
 * console.log(pointsDirection(0, 0, 1, 1, 2, 0)); // "顺时针方向"
 * console.log(pointsDirection(0, 0, 1, 1, 0, 2)); // "逆时针方向"
 * console.log(pointsDirection(0, 0, 1, 1, 1, 1)); // "点C在线段AB上"
 * 由于web中的坐标系和数学坐标系相反，因此顺逆的结论需要反过来
 */
const pointsDirection = (a, b, c) => {
    let { x: x1, y: y1 } = a;
    let { x: x2, y: y2 } = b;
    let { x: x3, y: y3 } = c;
    // 计算向量AB和向量AC的坐标差
    const ABx = x2 - x1;
    const ABy = y2 - y1;
    const ACx = x3 - x1;
    const ACy = y3 - y1;
    // 计算向量AB和向量AC的叉积
    const crossProduct = ABx * ACy - ABy * ACx;
    if (crossProduct > 0) {
        // "顺时针方向"
        return true;
    } else if (crossProduct < 0) {
        // "逆时针方向"
        return false;
    } else {
        // "点C在线段AB上"
        return false;
    }
}

/**
 * 获取数组中的每项出现的次数
 */
const getItemCount = (arr, item) => {
    let count = 0;
    arr.forEach(key => {
        if (key === item) {
            count++;
        }
    });
    return count;
}

/**
 * 获取安全的随机数，替代Math.random()
 */
function random() {
    return parseFloat('0.' + window.crypto.getRandomValues(new Uint32Array(1))[0])
}
/**
 * @returns {string}
 *  生成uuid，用于标记数据，推荐给数据添加唯一标识的场景使用
 */
function uuid() {
    if (typeof crypto === "object") {
        if (typeof crypto.randomUUID === "function") {
            return crypto.randomUUID();
        }
        if (typeof crypto.getRandomValues === "function" && typeof Uint8Array === "function") {
            const callback = (c) => {
                const num = Number(c);
                return (num ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (num / 4)))).toString(16);
            };
            return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, callback);
        }
    }
    let timestamp = new Date().getTime();
    let perforNow = (typeof performance !== "undefined" && performance.now && performance.now() * 1000) || 0;
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
        let random = random() * 16;
        if (timestamp > 0) {
            random = (timestamp + random) % 16 | 0;
            timestamp = Math.floor(timestamp / 16);
        } else {
            random = (perforNow + random) % 16 | 0;
            perforNow = Math.floor(perforNow / 16);
        }
        return (c === "x" ? random : (random & 0x3) | 0x8).toString(16);
    });
}
/**
 * 
 * @param {number} length  字符串的长度
 * @returns {string} 
 * 生成16位hash字符串，用于标记节点 参考crypto-random-string
 */
function hashString(length = 16) {
    function toHex(uInt8Array) {
        const array = Array.from(uInt8Array);
        const arrayString = array.map(byte => {
            return byte.toString(16).padStart(2, '0')
        }).join('');
        return arrayString
    }
    // `crypto.getRandomValues` throws an error if too much entropy is requested at once. (https://developer.mozilla.org/en-US/docs/Web/API/Crypto/getRandomValues#exceptions)
    const maxEntropy = 65_536;
    function getRandomValues(byteLength) {
        const generatedBytes = new Uint8Array(byteLength);
        for (let totalGeneratedBytes = 0; totalGeneratedBytes < byteLength; totalGeneratedBytes += maxEntropy) {
            generatedBytes.set(
                window.crypto.getRandomValues(new Uint8Array(Math.min(maxEntropy, byteLength - totalGeneratedBytes))),
                totalGeneratedBytes,
            );
        }
        return generatedBytes;
    }
    const byteLength = Math.ceil(length * 0.5)// Needs 0.5 bytes of entropy per character
    const generatedBytes = getRandomValues(byteLength);
    return toHex(generatedBytes).slice(0, length);
}
export {
    getEdge,
    getAngle,
    getItemCount,
    getAngleByPoints,
    pointsDirection,
    percentToDecimal,
    random,
    uuid,
    hashString
}
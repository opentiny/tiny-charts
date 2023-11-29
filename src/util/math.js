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
    let edgeSqrt =  Math.pow(a, 2) + Math.pow(b, 2) - 2 * a * b * Math.cos(angle / 180 * Math.PI)
    return Math.sqrt(edgeSqrt);
}

/**
 * 已知三条边的长度，求任意角的大小
 * @param {边长} a 
 * @param {边长} b 
 * @param {边长} c 
 * return [b和c的夹角，a和c的夹角，b和a的夹角]
 */
const getAngle = (a,b,c) => {
    let cosA = (b * b + c * c - a * a) / (2 * b * c);
    let cosB = (a * a + c * c - b * b) / (2 * a * c);
    let cosC = (a * a + b * b - c * c) / (2 * a * b);
    let angleA = Math.acos(cosA) * 180 / Math.PI;
    let angleB = Math.acos(cosB) * 180 / Math.PI;
    let angleC = Math.acos(cosC) * 180 / Math.PI;
    return [angleA, angleB, angleC];
}

export { 
    getEdge,
    getAngle,
    percentToDecimal 
}
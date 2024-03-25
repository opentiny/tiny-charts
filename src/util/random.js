/**
 * 获取安全的随机数，替代Math.random()
 */
export default function random(){
    return parseFloat('0.'+window.crypto.getRandomValues(new Uint32Array(1))[0]) 
    
}
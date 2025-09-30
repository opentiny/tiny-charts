// 判断是否是移动端
function mobile() {
  const userAgent = /Mobi|Android|iPhone/i.test(navigator.userAgent)
  return userAgent
}

export default mobile
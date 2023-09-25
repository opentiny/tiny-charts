// 页面滚动函数
export default function scrollToAnchor(anchorName) {
  anchorName === '线形图 LineChart'
    ? (document.documentElement.scrollTop = 0)
    : (document.documentElement.scrollTop = document.getElementById(anchorName).offsetTop - 18);
}

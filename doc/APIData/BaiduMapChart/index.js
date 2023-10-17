import keyMd from './key.md?raw'
import urlMd from './url.md?raw'
import versionMd from './version.md?raw'
import bmapMd from './bmap.md?raw'
import seriesMd from './series.md?raw'

var data = {
  dataset: [
    ['key', '百度地图密钥', 'string', "无"],
    ['url', '百度地图前缀地址', 'string', "见详情"],
    ['v', '百度地图版本', 'string', "2.0"],
    ['bmap', '百度地图配置项', 'object', "见详情"],
    ['series', '百度地图插件配置项', 'object', "见详情"],

  ],
  markdown: [
    keyMd,
    urlMd,
    versionMd,
    bmapMd,
    seriesMd,
  ],
};

export default data;
import keyMd from './key.md?raw'
import urlMd from './url.md?raw'
import versionMd from './version.md?raw'
import amapMd from './amap.md?raw'
import seriesMd from './series.md?raw'

const data = {
  dataset: [
    ['key', '高德地图密钥', 'string', '无'],
    ['url', '高德地图前缀地址', 'string', '见详情'],
    ['v', '高德地图版本', 'string', '1.4.3'],
    ['amap', '高德地图配置项', 'object', '见详情'],
    ['series', '高德地图插件配置项', 'object', '见详情'],
  ],
  markdown: [
    keyMd,
    urlMd,
    versionMd,
    amapMd,
    seriesMd,
  ],
};

export default data;
import { themeMd, theme } from '../common/theme';
import typeMd from './type.md?raw';
import positionMd from './position.md?raw';
import centerDomMd from './centerDom.md?raw';
import dataMd from './data.md?raw';
import radarMaxMd from './radarMax.md?raw';
import radarMarkMd from './radarMark.md?raw';
import showWaveMd from './showWave.md?raw';

var data = {
    dataset: [
        theme,
        ['type', '设置波纹图的主题类型', 'string', 'health'],
        ['position', '设置波纹图的位置和大小', 'object', "{center:['50%','50%'],radius:['35%','70%'}"],
        ['centerDom', '自定义波纹图的内部dom', 'function', '无'],
        ['data', '雷达坐标数据', 'array', '无'],
        ['radarMax', '自定义雷达维度大小', 'array', '无'],
        ['radarMark', '是否显示雷达刻度值', 'boolean', 'true'],
        ['showWave', '是否显示背景', 'boolean', 'true'],
    ],
    markdown: [
        themeMd,
        typeMd,
        positionMd,
        centerDomMd,
        dataMd,
        radarMaxMd,
        radarMarkMd,
        showWaveMd,
    ]
};
export default data;
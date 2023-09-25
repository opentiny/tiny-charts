import { themeMd, theme } from '../common/theme';
import typeMd from './type.md?raw';
import positionMd from './position.md?raw';
import renderMd from './render.md?raw';
import dataMd from './data.md?raw';
import showWaveMd from './showWave.md?raw';

var data = {
    dataset: [
        theme,
        ['type', '设置波纹图的主题类型', 'string', 'health'],
        ['position', '设置波纹图的位置和大小', 'object', "{center:['50%','50%'],radius: '50%'}"],
        ['render', '自定义波纹图的内部dom', 'function', '无'],
        ['data', '雷达坐标文本', 'array', '无'],
        ['showWave', '是否显示波纹', 'boolean', 'true'],
    ],
    markdown: [
        themeMd,
        typeMd,
        positionMd,
        renderMd,
        dataMd,
        showWaveMd,
    ]
};
export default data;
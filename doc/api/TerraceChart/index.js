import { themeMd, theme } from '../common/theme';
import typeMd from './type.md?raw';
import positionMd from './position.md?raw';
import centerDomMd from './centerDom.md?raw';
import showTerraceMd from './showTerrace.md?raw';

const data = {
    dataset: [
        theme,
        ['type', '设置梯田图的主题类型', 'string', 'health'],
        ['position', '设置梯田图的位置和大小', 'object', '{center:[\'50%\',\'50%\'],radius:[\'30%\',\'70%\'}'],
        ['centerDom', '自定义梯田图的内部dom', 'function', '无'],
        ['showTerrace', '是否显示梯田背景', 'boolean', 'true'],
    ],
    markdown: [
        themeMd,
        typeMd,
        positionMd,
        centerDomMd,
        showTerraceMd,
    ]
};
export default data;
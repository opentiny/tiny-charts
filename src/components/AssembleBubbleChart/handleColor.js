import { codeToRGB, getColor } from '../../util/color';
import Theme from '../../feature/theme';
function colorfun(color, type) {
  color = color.map(item => {
    if (type === 'non-nested' || type === 'non-nested-aggregate') {
      item = `${item},8`;
    } else {
      item = `${item},0.2`;
    }
    item = codeToRGB(item.substring(0, item.lastIndexOf(',')), item.substring(item.lastIndexOf(',') + 1) - 0);
    return item;
  });
  return color;
}

function depthFirstfun(params) {
  const { depthFirst, findColor, muchColor, colorData, color, type, seriesData, colorLegend } = params;
  depthFirst.forEach(_item => {
    if (!findColor.includes(_item.type)) {
      findColor.push(_item.type);
      muchColor.push(_item);
      // 颜色组，循环使用
      muchColor.forEach((item, index) => {
        item.color = getColor(color, index);
      });
      _item.colorSec = _item.color.replace('0.', '1');
      _item.colorBg = _item.color.replace('0.2', '0.1');
      colorData.push(_item.color);
      colorData.push(_item.colorSec);
      colorData.push(_item.colorBg);
      // 当以下类型且未不展示文本时，球的颜色
      if (type === 'non-nested') {
        seriesData.forEach(item => {
          if (item.showLabel === false || !item.showLabel) {
            item.colorSec = 'rgba(31,85,181,.2)';
          }
        });
      }
      colorLegend.push(_item.colorSec);
    } else {
      muchColor.forEach(item => {
        if (_item.type === item.type) {
          _item.color = item.color;
        }
      });
    }
  });
}

function handleBullColor({ seriesData, theme, type, depthMore, depthFirst }) {
  // 当nest类型时为定义showLabel或值为false，不展示球的label值s
  seriesData.forEach(item => {
    // 定义labelS用于展示球的文本，showLabel为false则不展示。label是划入一定展示的文本信息
    item.labelS = item.label;
    // 定义球的文字颜色
    item.textColor = Theme.color.base.font  
    if (item.showLabel === false || !item.showLabel) {
      item.labelS = '';
    }
  });
  // 当non-nested类型时未定义文本时，球的颜色为rgba(31,85,181,.2)
  if (type === 'non-nested') {
    seriesData.forEach(item => {
      if (item.showLabel === false || !item.showLabel) {
        item.color = 'rgba(31,85,181,.2)';
      }
    });
  }
  // 将depth为2的球设置与其同前缀id名的depth为1的球的颜色
  if (depthMore.length) {
    depthMore.forEach(item => {
      depthFirst.forEach(_item => {
        if (_item.id === item.id.substring(0, item.id.lastIndexOf('.'))) {
          item.color = _item.color;
          item.colorSec = _item.colorSec;
          item.colorBg = _item.colorBg;
        }
      });
    });
  }
}

export function handleColor(params) {
  const { depthFirst, seriesData, type, depthMore, theme } = params;
  let color = params.color;
  // 将颜色组中的16进制颜色转换为rgba颜色，type为nested时，颜色会自带0.2的透明度
  color = colorfun(color, type);
  // 给depth为1的球添加图例颜色并且如果type一样，则颜色一致
  depthFirstfun({ ...params, color });
  handleBullColor({ seriesData, theme, type, depthMore, depthFirst });
}

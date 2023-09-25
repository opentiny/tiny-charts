export const lightColorGroup = [
  '#6d8ff0', // rgba(109,143,240,1)
  '#00a874', // rgba(0  ,168,116,1)
  '#bd72f0', // rgba(189,114,240,1)
  '#c6e5ec', // rgba(198,229,236,1)
  '#fdc000', // rgba(253,192,0  ,1)
  '#9185f0', // rgba(145,133,240,1)
];

export const darkColorGroup = [
  '#1f55b5', // rgba(31 ,85 ,181,1)
  '#278661', // rgba(39 ,134,97 ,1)
  '#8a21bc', // rgba(138,33 ,188,1)
  '#26616b', // rgba(38 ,97 ,107,1)
  '#b98c1d', // rgba(185,140,29 ,1)
  '#745ef7', // rgba(116,94 ,247,1)
];

export const darkColor = '#191919';
// 深色主题文字颜色
export const darkFontColor = '#f5f5f5';
// 深色主题次级文字颜色
export const darkSecondaryFontColor = '#4e4e4e';
// 深色主题-刻度线
export const darkAxis = 'rgba(238,238,238,0.1)';
// 深色主题-刻度label文本
export const darkAxisLabel = '#bbbbbb';
// 次级底色，颜色稍深
export const darkSecondaryColor = '#2e2e2e';
// 初级底色，颜色最深
export const darkBackgroundColor = '#191919';

export const lightColor = '#ffffff';
// 浅色主题文字颜色
export const lightFontColor = '#191919';
// 浅色主题次级文字颜色
export const lightSecondaryFontColor = '#bbbbbb';
// 浅色主题-刻度线
export const lightAxis = '#eeeeee';
// 浅色主题-刻度label文本
export const lightAxisLabel = '#4e4e4e';
// 次级底色，颜色稍亮
export const lightSecondaryColor = '#e8e8e8';
// 初级底色，颜色最亮
export const lightBackgroundColor = '#ffffff';

// 阈值告警颜色
export const marklineColor = '#f43146';

/**
 * 循环取出颜色
 */
export function getColor(colors, index) {
  return colors[index % colors.length];
}

// 十六进制转rgba  codeToRGB("#6d8ff0",0.5) --> 'rgba(109,143,240,0.5)'
export function codeToRGB(code, opacity) {
  if (code === undefined) {
    return undefined;
  }
  const result = [];
  result.push(parseInt(code.substring(1, 3), 16));
  result.push(parseInt(code.substring(3, 5), 16));
  result.push(parseInt(code.substring(5), 16));
  return `rgba(${result.join(',')},${opacity})`;
}

// rgb转十六进制 codeToHex('rgba(255,0,0,.5)') --> '#fffcfc'
// 也可以将red、blue等转换为十六进制 codeToHex
export function codeToHex(color) {
  switch (color) {
    case 'red':
      return '#ff0000';
    case 'blue':
      return '#0000ff';
    case 'green':
      return '#00ff00';
    case 'pink':
      return '#FFC0CB';
    case 'yellow':
      return '#FFFF00';
    case 'orange':
      return '#FFA500';
    case 'black':
      return '#000000';
    case 'white':
      return '#ffffff';
    case 'gray':
      return '#808080';
    case 'purple':
      return '#800080';
  }
  if (color.includes('#')) {
    if (color.length === 7) {
      return color;
    } else if (color.length === 4) {
      return color[0] + color[1] + color[1] + color[2] + color[2] + color[3] + color[3];
    }
  }
  const values = color
    .replace(/rgba?\(/, '')
    .replace(/\)/, '')
    .replace(/[\s+]/g, '')
    .split(',');
  const a = parseFloat(values[3] || 1);
  const r = Math.floor(a * parseInt(values[0]) + (1 - a) * 255);
  const g = Math.floor(a * parseInt(values[1]) + (1 - a) * 255);
  const b = Math.floor(a * parseInt(values[2]) + (1 - a) * 255);
  return `#${  (`0${  r.toString(16)}`).slice(-2)  }${(`0${  g.toString(16)}`).slice(-2)  }${(`0${  b.toString(16)}`).slice(-2)}`;
}

// 修改 'rgba(109,143,240,0.5)' 格式下的颜色透明度,
export function changeRgbaOpacity(rgba, opacity) {
  const [r, g, b] = rgba.match(/\d+(\.\d+)?/g);
  return `rgba(${r},${g},${b},${opacity})`;
}

import { showTooltip, hideTooltip } from "./handleTooltip.js";
import { isObjEqual } from '../../util/equal.js';

// 创建SVG元素并设置属性
export const createSvgElement = (tag, attrs = {}) => {
  const element = document.createElementNS('http://www.w3.org/2000/svg', tag);
  Object.entries(attrs).forEach(([key, value]) => {
    if (value) {
      element.setAttribute(key, value);
    }
  });
  return element;
}

// 模拟flex计算列的X轴位置
export function calcColumnX(flexs, totalWidth, padding) { 
    // flexs: 弹性系数数组, totalWidth: 容器的总宽度, padding: 内边距
    const sum = flexs.reduce((s, f) => s + f, 0); // 计算flex系数总和
    let offset = 0;
    return flexs.map(f => {
      const x = offset + padding;
      offset += (f / sum) * totalWidth;
      return x;  //根据flex比例计算在实际宽度下的x坐标，用于header和row的信息对齐
    });
}

// 为文本元素设置省略号并添加tooltip
export function setEllipsisWithTooltip(textElement, text, maxLength) { 
    if (text.length <= maxLength) {
      textElement.textContent = text;
      return; // 如果没有达到最大长度直接返回
    }
    
    // 截断文本并添加省略号
    const truncatedText = text.slice(0, maxLength) + '...';
    textElement.textContent = truncatedText;

    const handleMouseOver = (e) => {
        const data = {
            name: '',
            value: text,
            percent: '',
            color: '',
            content: ''
        };
        showTooltip(data, e);
    };
    
    const handleMouseOut = () => {
        hideTooltip();
    };
    
    // 绑定事件
    textElement.addEventListener('mouseenter', handleMouseOver);
    textElement.addEventListener('mouseleave', handleMouseOut);
}

function setAttr(el, attrs) {
  for(const k in attrs) {
    el.setAttribute(k, attrs[k])
  }
}

export function updateSvgs(updates) {
  if (!updates || !Array.isArray(updates)) return;

   requestAnimationFrame(() => {
    for(const u of updates) {
      if (u.el && u.attrs) {
        setAttr(u.el, u.attrs);
      }
    }
   })
}

// 通过对象比较两个对象，可指定属性排除
export function isChanged(curr, last, exclude = []) {
  const currFiltered = filterOption(curr, exclude);
  const lastFiltered = filterOption(last, exclude);

  return !isObjEqual(currFiltered, lastFiltered);
}

// 过滤属性
function filterOption(obj, exclude) {
  if(exclude.length === 0) return obj
  const filtered = {};

  for (const key in obj) {
    if (!exclude.includes(key)) {
      filtered[key] = obj[key];
    }
  }

  return filtered;
}

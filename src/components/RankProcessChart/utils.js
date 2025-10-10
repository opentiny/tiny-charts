import { showTooltip, hideTooltip } from "./handleTooltip.js";
import { isObjEqual } from '../../util/equal.js';
import { isNumber } from '../../util/type.js';

// 验证数值是否有效（封装isNumber，确保为number的同时非NaN和Infinity）
export const isValidNumber = (value) => {
  return isNumber(value) && !isNaN(value) && isFinite(value);
};

// 创建SVG元素并设置属性,并且可以直接挂载在父元素上
export const createSvgElement = (tag, attrs = {}, parent = null) => {
  const element = document.createElementNS('http://www.w3.org/2000/svg', tag);
  Object.entries(attrs).forEach(([key, value]) => {
    if (value) {
      element.setAttribute(key, value);
    }
  });
  
  // 如果提供了父容器，自动挂载元素
  if (parent) {
    parent.appendChild(element);
  }
  
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
    if (!textElement || typeof text !== 'string') {
      return;
    }

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
    
    handleEvents(textElement, 'mouseenter', [handleMouseOver], true);
    handleEvents(textElement, 'mouseleave', [handleMouseOut], true);
}

// 处理事件绑定与解绑
export function handleEvents(el, eventName, eventHandlers, isBind) {
  if(!el.events) {
    el.events = new Map();
  }

  if(isBind) {
    // 绑定事件
    for(const handler of eventHandlers) {
      el.addEventListener(eventName, handler);
     
      if(!el.events.has(eventName)) {
        el.events.set(eventName, []);
      }
      el.events.get(eventName).push(handler);
    }
  } else {
    if(!eventName) {
      // 如果没有传eventName，解绑所有事件
      el.events.forEach((handlers, eventName) => {
        handlers.forEach(handler => {
          el.removeEventListener(eventName, handler);
        });
      });
      el.events.clear();
    } 
    else {
      // 如果传了eventName和eventHandlers，只解绑指定的处理器
      if(el.events.has(eventName)) {
        if(eventHandlers && eventHandlers.length > 0) {
          // 只解绑指定的处理器
          const handlers = el.events.get(eventName);
           
          for(let i = handlers.length - 1; i >= 0; i--) {
            const handler = handlers[i];
            if(eventHandlers.includes(handler)) {
              el.removeEventListener(eventName, handler);
              handlers.splice(i, 1);
            }
          }
           
          // 如果该事件没有处理器了，删除整个事件
          if(handlers.length === 0) {
            el.events.delete(eventName);
          }
         } 
         else {
          // 没有eventHandlers就解绑指定事件名的所有处理器
          const handlers = el.events.get(eventName);
          handlers.forEach(handler => {
            el.removeEventListener(eventName, handler);
          });
          el.events.delete(eventName);
        }
      }
    }
  }
}

// 解绑所有事件
export function unbindAllEvents(el) {
  handleEvents(el, null, [], false);
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

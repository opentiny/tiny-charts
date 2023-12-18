const setAttribute = (dom, attribute) => {
  for (let i in attribute) {
    dom.setAttribute(i, attribute[i]);
  }
};

const setStyle = (dom, styles) => {
  for (let i in styles) {
    dom.style[i] = styles[i];
  }
};


const getTextWidth = text => {
  const measureText = document.createElement('canvas');
  const ctx = measureText.getContext('2d');
  const { width } = ctx.measureText(text);
  return width;
};

function codeToRGB(code, opacity) {
  if (code === undefined) {
    return undefined;
  }
  const result = [];
  result.push(parseInt(code.substring(1, 3), 16));
  result.push(parseInt(code.substring(3, 5), 16));
  result.push(parseInt(code.substring(5), 16));
  return `rgba(${result.join(',')},${opacity})`;
}

const imageOnload = (imageList, callback) => {
  let onloadNum = 0;
  const loadEvent = () => {
    onloadNum++;
    if (onloadNum === Object.keys(imageList).length) {
      callback();
    }
  };

  for (let image in imageList) {
    imageList[image].addEventListener('load', loadEvent);
  }

};

const pxToNumber = (pxText) => {
  return pxText.split('px')[0] - 0;
};

const createDom = (type = 'div') => {
  return document.createElement(type);
};

const insertDom = (container, attribute, styles, type) => {
  const dom = createDom(type);
  setAttribute(dom, attribute);
  setStyle(dom, styles);
  container.appendChild(dom);
  return dom;
};

const getStyle = (dom, cssName) => {
  return window.getComputedStyle(dom)[cssName];
};

export { setAttribute, setStyle, getTextWidth, codeToRGB, imageOnload, pxToNumber, createDom, insertDom, getStyle };
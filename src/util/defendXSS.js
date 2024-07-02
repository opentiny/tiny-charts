/**
 * Copyright (c) 2024 - present OpenTiny HUICharts Authors.
 * Copyright (c) 2024 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 */
/**
 *  转义字符 防止xss攻击
 */
const matchHtmlRegExp = /["'&<>/]/;
function escapeHtml(string) {
  const str = `${string}`;
  const match = matchHtmlRegExp.exec(str);
  if (!match) {
    return str;
  }
  let escape;
  let html = '';
  let index;
  let lastIndex = 0;

  for (index = match.index; index < str.length; index++) {
    switch (str.charCodeAt(index)) {
      case 34: // "
        escape = '&quot;';
        break;
      case 38: // &
        escape = '&amp;';
        break;
      case 39: // '
        escape = '&#x27;'; // modified from escape-html; used to be '&#39'
        break;
      case 60: // <
        escape = '&lt;';
        break;
      case 62: // >
        escape = '&gt;';
        break;
      case 47:// /
        escape = '&#x2F;';
        break;
      default:
        continue;
    }

    if (lastIndex !== index) {
      html += str.substring(lastIndex, index);
    }

    lastIndex = index + 1;
    html += escape;
  }

  return lastIndex !== index ? html + str.substring(lastIndex, index) : html;
}


const defendXSS = obj => {
  if (typeof obj === 'string') {
    return escapeHtml(obj);
  } else if (typeof obj === 'number') {
    return obj;
  } else if (typeof obj === 'object') {
    for (const key in obj) {
      if (Object.hasOwnProperty.call(obj, key)) {
        obj[key] = defendXSS(obj[key]);
      }
    }
    return obj;
  } else {
    return obj;
  }
};

export default defendXSS;
export { escapeHtml };

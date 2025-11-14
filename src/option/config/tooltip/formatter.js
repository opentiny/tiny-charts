import defendXSS from '../../../util/defendXSS';
import Token from '../../../feature/token';
import { isObject } from '../../../util/type';
import mobile from '../../../util/mobile';

function validateName(name) {
    return name !== null && name !== undefined && name !== ''
}

// 暂时不校验''
function formatValue(value) {
    if(isObject(value)){
        value = value.value
    }
    if (value === null || value === undefined || value === '') {
        return '--'
    }
    return value
}

// 移动端tooltip关闭按钮
function getCloseIcon(tooltipCloseColor = '#808080') {
   return `<svg width="16px" height="16px" viewBox="0 0 16 16" fill="none" customFrame="#000000" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <rect id="close" width="16" height="16" x="0" y="0"/>
      <g id="组合 1">
          <path id="直线 1" d="M0 0L12 0" stroke="${tooltipCloseColor}" stroke-linecap="round" stroke-width="1" transform="matrix(0.707107,0.707107,-0.707107,0.707107,3.75,3.75)" />
          <path id="直线 1" d="M0 0L12 0" stroke="${tooltipCloseColor}" stroke-linecap="round" stroke-width="1" transform="matrix(-0.707107,0.707107,-0.707107,-0.707107,12.2354,3.75)" />
      </g>
    </svg>`
}

function getDataHtmlStr(dataConfig) {
    const { tooltipIconGap, tooltipValueGap, legendCircleItemHeight, tooltipDataNameColor, tooltipValueColor } = Token.config
    const {
        iconColor,
        name,
        nameColor = tooltipDataNameColor,
        value,
        valueColor = tooltipValueColor,
        unit = '',
        unitColor = tooltipValueColor,
        type
    } = dataConfig
    let iconStr = '', unitStr = '', iconStyle = '';
    if (type === 'line') {
        iconStyle = `width:${legendCircleItemHeight + 2}px;height:2px;`
    } else {
        iconStyle = `width:${legendCircleItemHeight}px;height:${legendCircleItemHeight}px;border-radius:50%;`
    }
    if (iconColor) {
        iconStr = `<div style="background-color:${defendXSS(iconColor)};${iconStyle}"></div>`
    }
    if (unit) {
        unitStr = `<span style="font-weight:bold;color:${unitColor};">${defendXSS(unit)}</span>`
    }
    const validateVal = formatValue(value)
    return `<div style="display:flex;align-items:center;justify-content:space-between;gap:${tooltipValueGap}px">
                      <div style="display:flex;gap:${tooltipIconGap}px;align-items:center;">
                      ${iconStr}
                      <span style="display:inline-block;color:${nameColor};">${defendXSS(name)}</span>
                      </div>
                      <div style="display:flex;">
                      <span style="font-weight:bold;color:${valueColor};">${defendXSS(validateVal)}</span>
                      ${unitStr}
                      </div> 
            </div>`;
}

function getTooltipContentHtmlStr(tipConfig, tooltip) {
    const { tooltipItemGap, tooltipTitleColor, tooltipCloseColor } = Token.config
    let { title, titleColor = tooltipTitleColor, children, hideEmpty, isMobile } = tipConfig
    let content = ''
    if (validateName(title)) {
        content = `<div class="hui-charts-tooltip-title" style="color:${titleColor}">${defendXSS(title)}</div>`;
    }
    if (tooltip?.order === 'seriesDesc') {
        children = children.reverse();
    }
    if (children && children.length !== 0) {
        for (let index = 0; index < children.length; index++) {
            const item = children[index];
            if( hideEmpty && (item.value === null || item.value === undefined || item.value === '')) continue;
            content += getDataHtmlStr(item)
        }
    }
    if (isMobile) {
        content += `<div class="hui-charts-tooltip-close">${getCloseIcon(tooltipCloseColor)}</div>`
    }
    const htmlString = `<div class="hui-charts-tooltip-container" style="display:flex;flex-direction:column;gap:${tooltipItemGap}px;">${content}</div>`
    return htmlString;
}

export default getTooltipContentHtmlStr
export { getDataHtmlStr, formatValue, validateName, getCloseIcon }

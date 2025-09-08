import defendXSS from '../../../util/defendXSS';
import Token from '../../../feature/token';
import { isObject } from '../../../util/type';

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

function getDataHtmlStr(dataConfig) {
    const { tooltipIconGap, tooltipValueGap, legendCircleItemHeight, tooltipDataNameColor, tooltipValueColor } = Token.config
    const {
        iconColor,
        name,
        nameColor = tooltipDataNameColor,
        value,
        valueColor = tooltipValueColor,
        unit = '',
        unitColor = tooltipValueColor
    } = dataConfig
    let iconStr = '', unitStr = ''
    if (iconColor) {
        iconStr = `<div style="width:${legendCircleItemHeight}px;height:${legendCircleItemHeight}px;border-radius:50%;background-color:${defendXSS(iconColor)};"></div>`
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
    const { tooltipItemGap, tooltipTitleColor } = Token.config
    let { title, titleColor = tooltipTitleColor, children, hideEmpty } = tipConfig
    let content = ''
    if (validateName(title)) {
        content = `<div style="color:${titleColor}">${defendXSS(title)}</div>`;
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
    const htmlString = `<div style="display:flex;flex-direction:column;gap:${tooltipItemGap}px;">${content}</div>`
    return htmlString;
}

export default getTooltipContentHtmlStr
export { getDataHtmlStr, formatValue, validateName }
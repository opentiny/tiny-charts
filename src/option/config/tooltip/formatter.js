import defendXSS from '../../../util/defendXSS';
import Theme from '../../../feature/token';

function validateName(name) {
    return name !== null && name !== undefined && name !== ''
}

// 暂时不校验''
function formatValue(value) {
    if (value === null || value === undefined || value === '') {
        return '--'
    }
    return value
}

function getDataHtmlStr(dataConfig) {
    const { tooltipIconGap, tooltipValueGap, legendCircleItemHeight, tooltipDataNameColor, tooltipValueColor } = Theme.config
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

function getTooltipContentHtmlStr(tipConfig) {
    const { tooltipItemGap, tooltipTitleColor } = Theme.config
    const { title, titleColor = tooltipTitleColor, children } = tipConfig
    let content = ''
    if (validateName(title)) {
        content = `<div style="color:${titleColor}">${defendXSS(title)}</div>`;
    }
    if (children && children.length !== 0) {
        children.forEach(item => {
            content += getDataHtmlStr(item)
        })
    }
    const htmlString = `<div style="display:flex;flex-direction:column;gap:${tooltipItemGap}px;">${content}</div>`
    return htmlString;
}

export default getTooltipContentHtmlStr
export { getDataHtmlStr, formatValue }
/**
 * Copyright (c) 2022 - present TinyCharts Authors.
 * Copyright (c) 2022 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 */
import defendXSS from '../../util/defendXSS';
const currentSvg = (color = '#ffffff') => {
    return `<svg width="41.000000" height="28.437988" viewBox="0 0 41 28.438" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <desc>
                Created with Pixso.
        </desc>
        <defs/>
        <path id="合并" d="M15.2659 23L19.3477 27.8983C19.4272 27.9938 19.5159 28.0773 19.613 28.1487L19.613 28.1487C19.6948 28.2086 19.7827 28.2601 19.877 28.303C19.9705 28.3456 20.0664 28.3782 20.1646 28.4006L20.1646 28.4006C20.2734 28.4255 20.3853 28.438 20.5 28.438C20.6147 28.438 20.7266 28.4255 20.8354 28.4006L20.8354 28.4006C20.9336 28.3782 21.0295 28.3456 21.123 28.303C21.2173 28.2601 21.3052 28.2086 21.387 28.1487L21.387 28.1487C21.4841 28.0773 21.5728 27.9938 21.6523 27.8983L25.7341 23L36.5 23C37.1213 23 37.6973 22.8901 38.2275 22.6705C38.7578 22.4508 39.2427 22.1213 39.6819 21.6819C40.1213 21.2426 40.4509 20.7578 40.6704 20.2275C40.8901 19.6971 41 19.1213 41 18.5L41 4.5C41 3.87866 40.8901 3.30286 40.6704 2.77252C40.4509 2.24219 40.1213 1.75732 39.6819 1.31799C39.2427 0.878662 38.7578 0.549133 38.2275 0.329468C37.6973 0.109802 37.1213 0 36.5 0L4.5 0C3.87866 0 3.30273 0.109802 2.77246 0.329468C2.24219 0.549194 1.75732 0.878662 1.31812 1.31799C0.878662 1.75732 0.549072 2.24219 0.32959 2.77246C0.109863 3.3028 0 3.87866 0 4.5L0 18.5C0 19.1213 0.109863 19.6971 0.32959 20.2274C0.549072 20.7578 0.878662 21.2426 1.31812 21.6819C1.75732 22.1213 2.24219 22.4508 2.77246 22.6705C3.30273 22.8901 3.87866 23 4.5 23L15.2659 23ZM15.9121 22.2135L20.116 27.2581C20.1658 27.3181 20.2229 27.363 20.2869 27.393C20.3508 27.423 20.4219 27.438 20.5 27.438C20.5781 27.438 20.6492 27.423 20.7131 27.393C20.7771 27.363 20.8342 27.3181 20.884 27.2581L25.0879 22.2135C25.1387 22.1401 25.2085 22.0814 25.291 22.0443C25.3699 22.0074 25.4568 21.9923 25.5425 22L36.5 22C37.6667 22 38.5417 21.7083 39.125 21.125C39.7083 20.5416 40 19.6666 40 18.5L40 4.5C40 3.33331 39.7083 2.45831 39.125 1.875C38.5417 1.29163 37.6667 1 36.5 1L4.5 1C3.33325 1 2.45825 1.29163 1.875 1.875C1.29175 2.45831 1 3.33331 1 4.5L1 18.5C1 19.6666 1.29175 20.5416 1.875 21.125C2.45825 21.7083 3.33325 22 4.5 22L15.4575 22C15.5432 21.9923 15.6301 22.0074 15.709 22.0443C15.7915 22.0814 15.8613 22.1401 15.9121 22.2135Z" clip-rule="evenodd" fill="${color}" fill-opacity="1.000000" fill-rule="evenodd"/>
    </svg>`;
};
const successSvg = (color = '#575D6C') => {
    return `<svg width="12.000000" height="12.000000" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <desc>
                Created with Pixso.
        </desc>
        <defs/>
        <circle cx="6.000000" cy="6.000000" r="6.000000" fill="${color}" fill-opacity="1.000000"/>
        <g opacity="0.200000"/>
        <path d="M3.1875 5.63104L5.40918 7.87476L8.8125 4.43726" stroke="#FFFFFF" stroke-opacity="1.000000" stroke-width="0.562500" stroke-linejoin="round" stroke-linecap="round"/>
    </svg>`;
};
const doneSvg = (color = '#575D6C') => {
    return `<svg width="12.000000" height="12.000000" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <desc>
                Created with Pixso.
        </desc>
        <defs/>
        <circle cx="6.000000" cy="6.000000" r="6.000000" fill="${color}" fill-opacity="1.000000"/>
    </svg>`;
};
const doingSvg = (color = '#575D6C',borderFillColor) => {
    return `<svg width="12.000000" height="12.000000" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <desc>
                Created with Pixso.
        </desc>
        <defs/>
        <circle cx="6.000000" cy="6.000000" r="6.000000" fill="${borderFillColor}" fill-opacity="1.000000"/>
        <circle cx="6.000000" cy="6.000000" r="5.500000" stroke="${color}" stroke-opacity="1.000000" stroke-width="1.000000"/>
        <circle cx="6.000000" cy="6.000000" r="3.750000" fill="${color}" fill-opacity="1.000000"/>
    </svg>`;
};
const todoSvg = (color = '#575D6C',borderFillColor) => {
    return `<svg width="12.000000" height="12.000000" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <desc>
                Created with Pixso.
        </desc>
        <defs/>
        <circle cx="6.000000" cy="6.000000" r="6.000000" fill="${color}" fill-opacity="1.000000"/>
        <circle cx="6.000000" cy="6.000000" r="5.500000" stroke="${borderFillColor}" stroke-opacity="1.000000" stroke-width="1.000000"/>
    </svg>`;
};

function getSVG( name, color, doingFillColor, todoFillColor) {
    let image = '';
    
    switch (name) {
        case 'success':
            image = successSvg(color);
            break;
        case 'done':
            image = doneSvg(color);
            break;
        case 'doing':
            image = doingSvg(color,doingFillColor);
            break;
        case 'todo':
            image = todoSvg(color,todoFillColor);
            break;
        case 'current':
            image = currentSvg(color);
            break;
        case 'custom':
            image = `<img class="mc-bar-current-bg" src="${color}" />`;
            break;
    }
    return image;
}

function insertSvg(container, option = { theme: 'light' },Theme) {
    let image = '';
    let color = '';
    const name = option.icon && option.icon.src ? 'custom' : (option.icon && option.icon.name || 'success');
    if (name === 'current') {
        color = defendXSS(option.icon && option.icon.color || (option.theme.indexOf('dark') !== -1 ? '#FFFFFF' : '#191919'))
    } else if (name === 'custom') {
        color = defendXSS(option.icon && option.icon.src || '')
    } else {
        color = defendXSS(option.icon && (option.icon.color || option.icon.defColor))
    }
    let doingFillColor = option.theme.indexOf('dark') !== -1 ? Theme.config.colorBoard.blue.colorBlue80 : Theme.config.colorBoard.gray.colorGray5;
    let todoFillColor = option.theme.indexOf('dark') !== -1 ? Theme.config.colorBoard.gray.colorGray20 : Theme.config.colorBoard.gray.colorGray20;
    image = getSVG(name, color, doingFillColor, todoFillColor);
    container.insertAdjacentHTML('beforeend', image);
}

export {
    insertSvg
}
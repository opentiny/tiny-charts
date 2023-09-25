import ictLight from './ict-light';
import ictDark from './ict-dark';
import hwCloudLight from './huawei-cloud-light';
import hwCloudDark from './huawei-cloud-dark';
import cloneDeep from '../cloneDeep';

export default {
    ictLight,
    ictDark,
    hwCloudLight,
    hwCloudDark,
}

function getColor(theme, key){
    let color = null;
    switch (theme) {
        case 'light':
            color = ictLight[key];
            break;
        case 'dark':
            color = ictDark[key];
            break;
        case 'hwCloud-light':
            color = hwCloudLight[key];
            break;
        case 'hwCloud-dark':
            color = hwCloudDark[key];
            break;
        default:
            color = ictLight[key];
            break;
    }
    return cloneDeep(color);
}

function getColorBase(theme){
    return getColor(theme, 'colorBase');
}

function getColorState(theme) {
    return getColor(theme, 'colorState');
}

function getColorGroup(theme) {
    return getColor(theme, 'colorGroup');
}


export {
    getColorGroup,
    getColorState,
    getColorBase,
}
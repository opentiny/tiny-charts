import base from './base';
import merge from '../../../util/merge';

function toolbox(iChartOption) {
    const { toolbox } = iChartOption
    if (!toolbox) return undefined
    const baseToolbox = base()
    toolbox && merge(baseToolbox, toolbox)
    return baseToolbox
}

export default toolbox;
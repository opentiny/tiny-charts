
const EXPORT_COLORS_KEY = [
    'group',
    'error',
    'alert',
    'warning',
    'success',
    'info',
    'none',
    'alarmFatal',
    'alarmError',
    'alarmWarning',
    'alarmSecondary',
    'alarmOrdinary',
    'textPrimary',
    'textSecondary',
    'textPlaceholder',
    'textDisabled'
]

function getExportColors(colorSet, sceneToken) {
    const { colorTextPrimary, colorTextSecondary, colorTextPlaceholder, colorTextDisabled } = sceneToken
    return {
        group: colorSet.colorGroup,
        // 状态色
        error: colorSet.colorState.colorError,
        alert: colorSet.colorState.colorAlert,
        warning: colorSet.colorState.colorWarning,
        success: colorSet.colorState.colorSuccess,
        info: colorSet.colorState.colorInfo,
        none: colorSet.colorState.colorNone,
        // 告警色
        alarmFatal: colorSet.colorAlarms.colorAlarmFatal,
        alarmError: colorSet.colorAlarms.colorAlarmError,
        alarmWarning: colorSet.colorAlarms.colorAlarmWarning,
        alarmSecondary: colorSet.colorAlarms.colorAlarmSecondary,
        alarmOrdinary: colorSet.colorAlarms.colorAlarmOrdinary,
        textPrimary: colorTextPrimary,
        textSecondary: colorTextSecondary,
        textPlaceholder: colorTextPlaceholder,
        textDisabled: colorTextDisabled
    }
}

export default getExportColors
export { EXPORT_COLORS_KEY }
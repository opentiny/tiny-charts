import Theme from '../../../feature/token'

function getCommonProperty() {
    return {
        show: false,
        // 指定 visualMapPiecewise 组件的最小值,
        // 在 连续型数据自定义分段 模式（即 visualMap-piecewise.pieces 被使用）或 离散数据根据类别分段 模式（即 visualMap-piecewise.categories 被使用）时，max 和 min 不需指定。
        // 在 连续型数据平均分段 模式（即 (that is, when visualMap-piecewise.splitNumber 被使用时）需指定 min、max，如果不指定，则默认为 [0, 200]（注意并不是默认为 series.data 的 dataMin 和 dataMax）。
        // 指定 visualMapContinuous 组件的允许的最小值。'min' 必须用户指定
        min: undefined,
        // 指定 visualMapPiecewise 组件的最大值。参见 visualMap-piecewise.splitNumber
        // 连续型数据自定义分段 模式（即 visualMap-piecewise.pieces 被使用）或 离散数据根据类别分段 模式（即 visualMap-piecewise.categories 被使用），max 和 min 不需指定。
        // 连续型数据平均分段 模式（即 (that is, when visualMap-piecewise.splitNumber 被使用时）需指定 min、max，如果不指定，则默认为 [0, 200]（注意并不是默认为 series.data 的 dataMin 和 dataMax）。
        // 指定 visualMapContinuous 组件的允许的最大值
        max: undefined,
        // 是否反转
        inverse: false,
        // visualMapPiecewise代表每个小块的宽度
        // visualMapcontinuous代表图形的宽度，即长条的宽度
        itemWidth: 20,
        // 指定组件中手柄和文字的摆放位置
        align: 'auto',
        // 两端的文本，如['High', 'Low']
        text: undefined,
        // 每项的色块与文本标签之间的距离
        textGap: 10,
        // 指定用数据的『哪个维度』，映射到视觉元素上
        dimension: undefined,
        // 鼠标悬浮到 visualMap 组件上时，鼠标位置对应的数值 在 图表中对应的图形元素，会高亮
        hoverLink: true,
        // 定义 在选中范围中 的视觉元素
        inRange: undefined,
        // 定义 在选中范围外 的视觉元素
        outOfRange: undefined,
        left: 0,
        top: 'auto',
        right: 'auto',
        bottom: 0,
        // 放置 visualMap 组件，水平（'horizontal'）或者竖直（'vertical'）。
        orient: 'vertical',
        // visualMap内边距,默认各方向内边距为5
        padding: 0,
        // 以下三个属性暂时不考虑写出来，一般不会涉及，后续需要再调整
        // backgroundColor: 'rgba(0,0,0,0)',
        // borderColor: '#ccc',
        // borderWidth: 0,
        // visualMap 文字样式
        textStyle: {
            color:Theme.config.visualMapTextColor,
            fontSize: Theme.config.visualMapTextFontSize
        },
        formatter: undefined,
    }
}

function visualMap(type = 'piecewise') {
    if (type === 'piecewise') {
        return {
            type: 'piecewise',
            // 连续型数据，自动平均切分成几段
            splitNumber: 5,
            // 自定义『分段式视觉映射组件（visualMapPiecewise）』的每一段的范围，以及每一段的文字，以及每一段的特别的样式。
            pieces: undefined,
            // 用于表示离散型数据（或可以称为类别型数据、枚举型数据）的全集。
            categories: undefined,
            // 选择模式
            selectedMode: 'multiple',
            // 每个小块的高度
            itemHeight: 14,
            // 是否显示每项的文本标签
            showLabel: true,
            // 每两个图元之间的间隔距离
            itemGap: 10,
            // 默认的图形
            itemSymbol: 'rect',
            ...getCommonProperty()
        }
    }
    return {
        // 连续型
        type: 'continuous',
        // 是否显示拖拽用的手柄（手柄能拖拽调整选中范围）
        calculable: false,
        // 拖拽时，是否实时更新
        realtime: true,
        itemHeight: 140,
        ...getCommonProperty()
    }
}

export default visualMap
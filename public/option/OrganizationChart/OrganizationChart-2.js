const ftGroup= [
    {
        name: 'FT001',
        children: [
            {
                name: '工位001',
            },{
                name: '工位002',
            },{
                name: '工位003',
            },{
                name: '工位004',
            },{
                name: '工位005',
            },{
                name: '工位006',
            },{
                name: '工位007',
            },{
                name: '工位008',
            },{
                name: '工位009',
            },{
                name: '工位010',
            }
        ]
    },{
        name: 'FT002',
        children: [
            {
                name: '工位011',
            },{
                name: '工位012',
            },{
                name: '工位013',
            },{
                name: '工位014',
            },{
                name: '工位015',
            },{
                name: '工位016',
            },{
                name: '工位017',
            },{
                name: '工位018',
            },{
                name: '工位019',
            },{
                name: '工位020',
            }
        ]
    },{
        name: 'FT003',
        children: [
            {
                name: '工位021',
            },{
                name: '工位022',
            },{
                name: '工位023',
            },{
                name: '工位024',
            },{
                name: '工位025',
            },{
                name: '工位026',
            },{
                name: '工位027',
            },{
                name: '工位028',
            },{
                name: '工位029',
            },{
                name: '工位030',
            }
        ]
    },{
        name: 'FT004',
        children: [
            {
                name: '工位031',
            },{
                name: '工位032',
            },{
                name: '工位033',
            },{
                name: '工位034',
            },{
                name: '工位035',
            },{
                name: '工位036',
            },{
                name: '工位037',
            },{
                name: '工位038',
            },{
                name: '工位039',
            },{
                name: '工位040',
            }
        ]
    },{
        name: 'FT005',
        children: [
            {
                name: '工位041',
            },{
                name: '工位042',
            },{
                name: '工位043',
            },{
                name: '工位044',
            },{
                name: '工位045',
            },{
                name: '工位046',
            },{
                name: '工位047',
            },{
                name: '工位048',
            },{
                name: '工位049',
            },{
                name: '工位050',
            }
        ]
    },{
        name: 'FT006',
        children: [
            {
                name: '工位051',
            },{
                name: '工位052',
            },{
                name: '工位053',
            },{
                name: '工位054',
            },{
                name: '工位055',
            },{
                name: '工位056',
            },{
                name: '工位057',
            },{
                name: '工位058',
            },{
                name: '工位059',
            },{
                name: '工位060',
            }
        ]
    },{
        name: 'FT007',
        children: [
            {
                name: '工位061',
            },{
                name: '工位062',
            },{
                name: '工位063',
            },{
                name: '工位064',
            },{
                name: '工位065',
            },{
                name: '工位066',
            },{
                name: '工位067',
            },{
                name: '工位068',
            },{
                name: '工位069',
            },{
                name: '工位070',
            }
        ]
    },{
        name: 'FT008',
        children: [
            {
                name: '工位071',
            },{
                name: '工位072',
            },{
                name: '工位073',
            },{
                name: '工位074',
            },{
                name: '工位075',
            },{
                name: '工位076',
            },{
                name: '工位077',
            },{
                name: '工位078',
            },{
                name: '工位079',
            },{
                name: '工位080',
            }
        ]
    },{
        name: 'FT009',
        children: [
            {
                name: '工位081',
            },{
                name: '工位082',
            },{
                name: '工位083',
            },{
                name: '工位084',
            },{
                name: '工位085',
            },{
                name: '工位086',
            },{
                name: '工位087',
            },{
                name: '工位088',
            },{
                name: '工位089',
            },{
                name: '工位090',
            }
        ]
    },{
        name: 'FT010',
        children: [
            {
                name: '工位091',
            },{
                name: '工位092',
            },{
                name: '工位093',
            },{
                name: '工位094',
            },{
                name: '工位095',
            },{
                name: '工位096',
            },{
                name: '工位097',
            },{
                name: '工位098',
            },{
                name: '工位099',
            },{
                name: '工位100',
            }
        ]
    }
]

const workshops=  [
    {
        name: '半成品1车间',
        children:ftGroup
    },{
        name: '半成品2车间',
        children: ftGroup
    },{
        name: '半成品3车间',
        children:ftGroup
    },{
        name: '半成品4车间',
        children:ftGroup
    },{
        name: '整机1车间',
        children: ftGroup
    },{
        name: '整机2车间',
        children: ftGroup
    },{
        name: '整机3车间',
        children: ftGroup
    },{
        name: '整机4车间',
        children: ftGroup
    }
]         

const option = {
    theme: 'light',
    radius: {
        min: 120,  // 最小圆环半径
        gap: 180,  // 圆环半径递增量
        angle: 30, // 最小圆环的间隔角度
        direction: 'left' // 元素球在圆圈的上下左右位置
    },
    position: {   // 图表在容器中的位置
        right: '-40%'
    },
    render: (container, data, state) => {
        let node = '';
        if(state.boss){ // 关系图中心点
            node = `<div class='workshop_icon'>
                        <div class='workshop_head_icon'>
                            <img src='./image/charts/workshop/18.png'>
                        </div>
                    </div>`;
        }else if(state.selected){ // 选中单位
            node = `<div class='workshop_icon'>
                        <div class='workshop_name_icon'>${data.name}</div>
                        <div class='workshop_head_icon'>
                            <img src='./image/charts/workshop/13.png'>
                        </div>
                    </div>`;
        }else if(state.prevSelected){ // 拖拽过程中临时选中单位
            node = `<div class='workshop_icon workshop_icon_temp'>
                        <div class='workshop_name_icon'>${data.name}</div>
                        <div class='workshop_head_icon'>
                            <img src='./image/charts/workshop/13.png'>
                        </div>
                    </div>`;
        }else { // 常规样式
            node = `<div class='workshop'>
                        <div class='workshop_name'>${data.name}</div>
                        <div class='workshop_head'></div>
                    </div>`;
        }
        container.insertAdjacentHTML('beforeend', node);
    }, 
    // 各层选中状态
    selected: [1, 1, 3, 3, 3],
    // 数据
    data: {
        name: '',
        children: [
            {
                name: '中央工厂',
                children: [
                    {
                        name: '中1楼',
                        children:workshops
                    }, {
                        name: '中2楼',
                        children: workshops
                    }, {
                        name: '中3楼',
                        children: workshops
                    }, {
                        name: '中4楼',
                        children: workshops
                    }
                ]
            },
            {
                name: '北部工厂',
                children: [
                    {
                        name: '北1楼',
                        children:workshops
                    }, {
                        name: '北2楼',
                        children: workshops
                    }, {
                        name: '北3楼',
                        children: workshops
                    }
                ]
            },
            {
                name: '南部工厂',
                children: [
                    {
                        name: '南1楼',
                        children:workshops
                    }, {
                        name: '南2楼',
                        children:workshops
                    }, {
                        name: '南3楼',
                        children: workshops
                    }, {
                        name: '南4楼',
                        children: workshops
                    }
                ]
            },
            {
                name: '启慧工厂',
                children: [
                    {
                        name: '启慧1楼',
                        children:workshops
                    }, {
                        name: '启慧2楼',
                        children:workshops
                    }, {
                        name: '启慧3楼',
                        children: workshops
                    }, {
                        name: '启慧4楼',
                        children: workshops
                    }
                ]
            },
        ]
    }
};
const option = {
    theme: 'light',
    radius: {
        min: 200,  // 最小圆环半径
        gap: 200,  // 圆环半径递增量
        angle: 45, // 最小圆环的间隔角度
        direction: 'bottom' // 元素球在圆圈的上下左右位置
    },    
    position: {   // 图表在容器中的位置
        top: '-0%'
    },
    autoRotate: {  // 开启自动旋转
        speed: 0.1,
        direction: 'clockwise'
    },
    lineStyle: {  // 圆环线条渐变
        color: 'linear-gradient(180deg, #ff0000, #17ffff)'
    },
    render: (container, data) => {
        let node = `
            <div class='user_card'>
                <div class='user_head'>
                    ${
                        data.head ? '<img class="user_head_img " draggable="false" src="' + data.head + '"/>' : ''
                    }
                </div>
                <div class='user_name'>${data.name}</div>
                <div class='user_id'>${data.id}</div>
                <div class='user_address'>${data.address}</div>
                <div class='user_subordinates'>${data.children ? data.children.length : 0}个下层组织</div>
            </div>`;
        container.insertAdjacentHTML('beforeend', node);
    }, 
    data: {
        id: '001',
        name: '克莱恩·莫雷蒂',
        head: './image/charts/avatar/avatar.svg',
        address: 'N公司总裁办',
        level: '一层',
        children: [
            {
                name: '奥黛丽·霍尔',
                head: './image/charts/avatar/avatar.svg',
                id: '002',
                address: 'N公司行政中心',
                level: '二层',
                children: [
                    {
                        name: '格尔曼.斯帕罗',
                        head: './image/charts/avatar/avatar.svg',
                        id: '006',
                        address: 'N公司人力资源部',
                    }, {
                        name: '佛尔思·沃尔',
                        head: './image/charts/avatar/avatar.svg',
                        id: '007',
                        address: 'N公司行政部',
                    }, {
                        name: '埃姆林·怀特',
                        head: './image/charts/avatar/avatar.svg',
                        id: '008',
                        address: 'N公司后勤管理部',
                    }, {
                        name: '嘉德丽雅',
                        head: './image/charts/avatar/avatar.svg',
                        id: '009',
                        address: 'N公司档杆管理部',
                    }
                ]
            },
            {
                name: '阿尔杰·威尔逊',
                head: './image/charts/avatar/avatar.svg',
                id: '003',
                address: 'N公司营销中心',
                level: '二层',
                children: [
                    {
                        name: '伦纳德·米切尔',
                        head: './image/charts/avatar/avatar.svg',
                        id: '010',
                        address: 'N公司营销部',
                    }, {
                        name: '科林.伊利亚特',
                        head: './image/charts/avatar/avatar.svg',
                        id: '011',
                        address: 'N公司大客户部',
                    }, {
                        name: '洛薇雅.蒂芙尼',
                        head: './image/charts/avatar/avatar.svg',
                        id: '012',
                        address: 'N公司策划部',
                    }
                ]
            },
            {
                name: '休·迪尔查',
                head: './image/charts/avatar/avatar.svg',
                id: '004',
                address: 'N公司财经部',
                level: '二层',
                children: []
            },
            {
                name: '戴里克·伯格',
                head: './image/charts/avatar/avatar.svg',
                id: '005',
                address: 'N公司技术和生产中心',
                level: '二层',
                children: [
                    {
                        name: '巴洛斯.霍普金斯',
                        head: './image/charts/avatar/avatar.svg',
                        id: '013',
                        address: 'N公司生产部',
                    }, {
                        name: '哈尔.康斯坦丁',
                        head: './image/charts/avatar/avatar.svg',
                        id: '014',
                        address: 'N公司采购部',
                    }, {
                        name: '韦特.希尔蒙',
                        head: './image/charts/avatar/avatar.svg',
                        id: '015',
                        address: 'N公司研发部',
                    }, {
                        name: '纳斯特.所罗门',
                        head: './image/charts/avatar/avatar.svg',
                        id: '016',
                        address: 'N公司物流部',
                    }, {
                        name: '罗塞尔·古斯塔夫',
                        head: './image/charts/avatar/avatar.svg',
                        id: '017',
                        address: 'N公司仓储部',
                    }, {
                        name: '布拉托夫.伊万',
                        head: './image/charts/avatar/avatar.svg',
                        id: '018',
                        address: 'N公司品管部',
                    }, {
                        name: '阿加里图',
                        head: './image/charts/avatar/avatar.svg',
                        id: '019',
                        address: 'N公司技术部',
                    }
                ]
            }
        ]
    }
};
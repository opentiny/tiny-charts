const option = {
    theme: 'light',
    legend: {
        show: true,
        position:{
            left: 'center',
            bottom: 20
        },
        orient:'horizontal'
    },
    data:{
        'Domestic':{
            'Equipment': 43,
            'VM': 90,
            'CSP': 80,
            'RD': 53,
            'Markets': 78
        }
    },
    position:{
        radius:['20%','50%']
    },
    // 自定中心dom
    centerDom:()=>{
        const dom=`
            <div style="font-size:14px;">
                <span style="font-size:56px">85</span>分
            </div>
            <div style="color:#4e4e4e; font-size:12px;">
                健康评分
            </div>`;
        return dom;
    }
};
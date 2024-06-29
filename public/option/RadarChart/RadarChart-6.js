const option = {
    theme: 'hdesign-light',
    legend: {
        show: true,
        position:{
            left: 'center',
            bottom: 20.4
        },
        orient:'horizontal'
    },
    tipHtml: (params, radarKeys)=>{
        let data = params.data;
        let markLine = 81;
        let marklineColor = '#f43146';
        let htmlString = '<div style="margin-bottom:4px;">' +'自定义tip'+ '</div>';
        data.value.forEach((item, index) => {
            let color = (item >= markLine) ? marklineColor : params.color;
            htmlString +=  '<div style="margin-bottom:4px;">' + 
                                '<span style="display:inline-block;width:8px;height:8px;margin-right:8px;border-radius:5px;background-color:' + color + ';"></span>' + 
                                '<span style="display:inline-block;margin-right:8px;min-width:60px;font-size:12px">' + radarKeys[index] + '</span>' +
                                '<span style="font-size:14px">' + (item || '-') + '</span>' + 
                           '</div>';
        });
        return htmlString
    },
    radarMax: 100,
    markLine: 81,
    data:{
        Domestic:{
            Equipment: 46,
            VM: 90,
            CSP: 80,
            RD: 53,
            Markets: 76
        },
        Abroad:{
            Equipment: 76,
            VM: 55,
            CSP: 93,
            RD: 90,
            Markets: 86
        }
    }
};

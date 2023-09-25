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
    tipHtml: (params, radarKeys, ticket, callback)=>{
        let data = params.data;
        let dataName = data.name;
        let markLine = 81;
        let marklineColor = '#f43146';
        let htmlString = '<div style="margin-bottom:4px;">' + dataName + '</div>';
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
        'Domestic':{
            'Equipment': 43,
            'VM': 90,
            'CSP': 80,
            'RD': 53,
            'Markets': 78
        },
        'Abroad':{
            'Equipment': 75,
            'VM': 55,
            'CSP': 93,
            'RD': 90,
            'Markets': 86
        }
    }
};

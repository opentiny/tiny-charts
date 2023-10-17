const option = {
    key: 'oBvDtR6nzWtVchkY4cLHtnah1VVZQKRK',
    url: 'https://api.map.baidu.com/getscript',
    v: '2.0',
    bmap: {
        center: [118.775859, 31.985021],
        zoom: 17,
        roam: true,
        mapStyle: {}
    },
    series: [{
        type: 'scatter',
        coordinateSystem: 'bmap',
        data: [[118.775859, 31.985021, 1]],
        encode: {
            value: 2
        }
    }]
}


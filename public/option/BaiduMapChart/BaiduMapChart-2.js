let option = {
    key: 'oBvDtR6nzWtVchkY4cLHtnah1VVZQKRK',
    url: 'https://api.map.baidu.com/getscript',
    v: '2.0'
};
axios.get('/json/hangzhou-tracks.json').then(res => {
    var points = [].concat.apply(
        [], res.data.map(track => {
            return track.map(seg => {
                return seg.coord.concat([1]);
            });
        })
    );
    option = {
        ...option,
        animation: false,
        bmap: {
            center: [120.13066322374, 30.240018034923],
            zoom: 14,
            roam: true
        },
        visualMap: {
            show: false,
            top: 'top',
            min: 0,
            max: 5,
            seriesIndex: 0,
            calculable: true,
            inRange: {
                color: ['blue', 'blue', 'green', 'yellow', 'red']
            }
        },
        series: [{
            type: 'heatmap',
            coordinateSystem: 'bmap',
            data: points,
            pointSize: 5,
            blurSize: 6
        }]
    };
    resolve(option)
});


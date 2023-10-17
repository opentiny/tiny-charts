let option = {
  key: '4b5f2cf2cba25200cc6b68c398468899',
  url: 'https://webapi.amap.com/maps',
  v: '2.0',
  amap: {
      center: [120.13066322374, 30.240018034923],
      zoom: 14,
      viewMode: '3D',
      roam: true
  }
};

axios.get('/json/hangzhou-tracks.json').then(res => {
    const points = [].concat.apply(
        [], res.data.map(track => {
            return track.map(seg => {
                return seg.coord.concat([1]);
            });
        })
    );
    Object.assign(option, {
        animation: false,
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
            coordinateSystem: 'amap',
            data: points,
            pointSize: 5,
            blurSize: 6
        }]
    });
    resolve(option)
});
  
  
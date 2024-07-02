const option = {
    theme: 'light',
    tipHtml: (params, ticket, callback)=>{
      let htmlString = 
          '<div>' + 
              '<span style="display:inline-block;width:10px;height:10px;border-radius:5px;background-color:'+ 
              params.color +';">' +
              '</span>' + 
              '<span style="margin-left:5px;color:#ffffff">' + 
                  '<span style="display:inline-block;min-width:80px;">' + params.name + ' :</span>' + 
                  '<span style="font-weight:bold">' + params.value + '</span>' +
              '</span>' + 
          '</div>';
      return htmlString;
    },
    data:[
        {
          name: 'visualMap',
          value: 122199,
        },
        {
          name: 'continuous',
          value: 10288,
        },
        {
          name: 'contoller',
          value: 620,
        },
        {
          name: 'series',
          value: 274470,
        },
        {
          name: 'gauge',
          value: 72311,
        },
        {
          name: 'detail',
          value: 7206,
        },
        {
          name: 'piecewise',
          value: 4885,
        },
        {
          name: 'textStyle',
          value: 32294,
        },
        {
          name: 'markPoint',
          value: 38574,
        },
        {
          name: 'pie',
          value: 88929,
        },
        {
          name: 'roseType',
          value: 969,
        },
        {
          name: 'label',
          value: 37517,
        },
        {
          name: 'emphasis',
          value: 12053,
        },
        {
          name: 'yAxis',
          value: 127299,
        },
        {
          name: 'name',
          value: 15418,
        },
        {
          name: 'type',
          value: 22905,
        },
        {
          name: 'gridIndex',
          value: 5146,
        }
    ]
};

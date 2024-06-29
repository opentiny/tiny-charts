function getRandom(){
  return parseFloat('0.'+window.crypto.getRandomValues(new Uint32Array(1))[0]) 
}
const option = {
    theme: 'light',
    // 网格大小，各文本之间距离，默认值 16
    gridSize: 5,
    // 字体大小范围，默认值 [16, 64]
    sizeRange: [14, 60],
    // 文字旋转角度范围， 默认 [0, 0]
    rotationRange: [-90, 90],
    // 文字旋转步值，默认 0                                                                    
    rotationStep: 45,
    // 自定义每个文本的颜色，本示例中设置颜色为随机值
    textColor: (data) => {
      return 'rgb('+ Math.round(getRandom() * 256) +','+ 
      Math.round(getRandom() * 256) +',' + 
      Math.round(getRandom() * 256) + ')';
    },
    data:[
        {
          name: '生活资源',
          value: '995',
        },
        {
          name: '供热管理',
          value: '885',
        },
        {
          name: '供气质量',
          value: '775',
        },
        {
          name: '生活用水管理',
          value: '685',
        },
        {
          name: '一次供水问题',
          value: '585',
        },
        {
          name: '交通运输',
          value: '515',
        },
        {
          name: '城市交通',
          value: '515',
        },
        {
          name: '环境保护',
          value: '485',
        },
        {
          name: '房地产管理',
          value: '465',
        },
        {
          name: '城乡建设',
          value: '445',
        },
        {
          name: '社会保障与福利',
          value: '425',
        },
        {
          name: '社会保障',
          value: '405',
        },
        {
          name: '文体与教育管理',
          value: '405',
        },
        {
          name: '公共安全',
          value: '405',
        },
        {
          name: '公交运输管理',
          value: '385',
        },
        {
          name: '出租车运营管理',
          value: '385',
        },
        {
          name: '供热管理',
          value: '375',
        },
        {
          name: '市容环卫',
          value: '355',
        },
        {
          name: '自然资源管理',
          value: '355',
        },
        {
          name: '粉尘污染',
          value: '335',
        },
        {
          name: '噪声污染',
          value: '325',
        },
        {
          name: '土地资源管理',
          value: '305',
        },
        {
          name: '物业服务与管理',
          value: '305',
        },
        {
          name: '医疗卫生',
          value: '285',
        },
        {
          name: '粉煤灰污染',
          value: '285',
        },
        {
          name: '占道',
          value: '285',
        },
        {
          name: '供热发展',
          value: '255',
        },
        {
          name: '农村土地规划管理',
          value: '255',
        },
        {
          name: '生活噪音',
          value: '255',
        },
        {
          name: '供热单位影响',
          value: '255',
        },
        {
          name: '城市供电',
          value: '225',
        },
        {
          name: '房屋质量与安全',
          value: '225',
        },
        {
          name: '大气污染',
          value: '225',
        },
        {
          name: '房屋安全',
          value: '225',
        },
        {
          name: '文化活动',
          value: '225',
        },
        {
          name: '拆迁管理',
          value: '225',
        },
        {
          name: '公共设施',
          value: '225',
        },
        {
          name: '供气质量',
          value: '225',
        },
        {
          name: '供电管理',
          value: '225',
        },
        {
          name: '燃气管理',
          value: '155',
        },
        {
          name: '教育管理',
          value: '155',
        },
        {
          name: '医疗纠纷',
          value: '155',
        },
        {
          name: '执法监督',
          value: '155',
        },
        {
          name: '设备安全',
          value: '155',
        },
        {
          name: '政务建设',
          value: '155',
        },
        {
          name: '县区、开发区',
          value: '155',
        },
        {
          name: '宏观经济',
          value: '155',
        },
        {
          name: '教育管理',
          value: '115',
        },
        {
          name: '社会保障',
          value: '115',
        },
        {
          name: '生活用水管理',
          value: '115',
        },
        {
          name: '物业服务与管理',
          value: '115',
        },
        {
          name: '分类列表',
          value: '115',
        },
        {
          name: '农业生产',
          value: '115',
        },
        {
          name: '二次供水问题',
          value: '115',
        },
        {
          name: '城市公共设施',
          value: '95',
        },
        {
          name: '拆迁政策咨询',
          value: '95',
        },
        {
          name: '物业服务',
          value: '95',
        },
        {
          name: '物业管理',
          value: '95',
        },
        {
          name: '社会保障保险管理',
          value: '95',
        },
        {
          name: '低保管理',
          value: '95',
        },
        {
          name: '文娱市场管理',
          value: '75',
        },
        {
          name: '城市交通秩序管理',
          value: '75',
        },
        {
          name: '执法争议',
          value: '75',
        },
        {
          name: '商业烟尘污染',
          value: '75',
        },
        {
          name: '占道堆放',
          value: '75',
        },
        {
          name: '地上设施',
          value: '75',
        },
        {
          name: '水质',
          value: '75',
        },
        {
          name: '无水',
          value: '75',
        },
        {
          name: '供热单位影响',
          value: '75',
        },
        {
          name: '人行道管理',
          value: '75',
        },
        {
          name: '主网原因',
          value: '75',
        },
        {
          name: '集中供热',
          value: '75',
        },
        {
          name: '客运管理',
          value: '75',
        },
        {
          name: '国有公交（大巴）管理',
          value: '75',
        },
        {
          name: '工业粉尘污染',
          value: '75',
        },
        {
          name: '治安案件',
          value: '75',
        },
        {
          name: '压力容器安全',
          value: '75',
        },
        {
          name: '身份证管理',
          value: '75',
        },
        {
          name: '群众健身',
          value: '45',
        },
        {
          name: '工业排放污染',
          value: '45',
        },
        {
          name: '破坏森林资源',
          value: '45',
        },
        {
          name: '市场收费',
          value: '45',
        },
        {
          name: '生产资金',
          value: '45',
        },
        {
          name: '生产噪声',
          value: '45',
        },
        {
          name: '农村低保',
          value: '45',
        },
        {
          name: '劳动争议',
          value: '45',
        },
        {
          name: '劳动合同争议',
          value: '45',
        },
        {
          name: '劳动报酬与福利',
          value: '45',
        },
        {
          name: '医疗事故',
          value: '25',
        },
        {
          name: '停供',
          value: '25',
        },
        {
          name: '基础教育',
          value: '25',
        },
        {
          name: '职业教育',
          value: '25',
        },
        {
          name: '物业资质管理',
          value: '25',
        },
        {
          name: '拆迁补偿',
          value: '25',
        },
        {
          name: '设施维护',
          value: '25',
        },
        {
          name: '市场外溢',
          value: '15',
        },
        {
          name: '占道经营',
          value: '15',
        },
        {
          name: '树木管理',
          value: '15',
        },
        {
          name: '农村基础设施',
          value: '15',
        },
        {
          name: '无水',
          value: '15',
        },
        {
          name: '供气质量',
          value: '15',
        },
        {
          name: '停气',
          value: '15',
        },
        {
          name: '市政府工作部门（含部门管理机构、直属单位）',
          value: '15',
        },
        {
          name: '燃气管理',
          value: '15',
        },
        {
          name: '市容环卫',
          value: '15',
        },
        {
          name: '新闻传媒',
          value: '15',
        },
        {
          name: '人才招聘',
          value: '15',
        },
        {
          name: '市场环境',
          value: '15',
        },
        {
          name: '行政事业收费',
          value: '15',
        },
        {
          name: '食品安全与卫生',
          value: '15',
        },
        {
          name: '城市交通',
          value: '15',
        },
        {
          name: '房地产开发',
          value: '15',
        },
        {
          name: '房屋配套问题',
          value: '15',
        },
        {
          name: '物业服务',
          value: '15',
        },
        {
          name: '物业管理',
          value: '15',
        },
        {
          name: '占道',
          value: '15',
        },
        {
          name: '园林绿化',
          value: '15',
        },
        {
          name: '户籍管理及身份证',
          value: '15',
        },
        {
          name: '公交运输管理',
          value: '15',
        },
        {
          name: '公路（水路）交通',
          value: '15',
        },
        {
          name: '房屋与图纸不符',
          value: '15',
        },
        {
          name: '有线电视',
          value: '15',
        },
        {
          name: '社会治安',
          value: '15',
        },
        {
          name: '林业资源',
          value: '15',
        },
        {
          name: '其他行政事业收费',
          value: '15',
        },
        {
          name: '经营性收费',
          value: '15',
        },
        {
          name: '食品安全与卫生',
          value: '15',
        },
        {
          name: '体育活动',
          value: '15',
        },
        {
          name: '有线电视安装及维护',
          value: '15',
        },
        {
          name: '低保管理',
          value: '15',
        },
        {
          name: '劳动争议',
          value: '15',
        },
        {
          name: '社会福利及事务',
          value: '15',
        },
        {
          name: '一次供水问题',
          value: '15',
        },
    ]
};

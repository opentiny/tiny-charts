// 词云图需要的遮罩图片
const base64 =
  'data:image/png;base64,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';
window.maskImage = new Image();
window.maskImage.src = base64;

const option = {
  theme: 'light',

  // 形状宽度
  width: '70%',
  // 形状高度
  height: '95%',
  // 事先已经加载onload完毕的图片
  maskImage: window.maskImage,
  // 网格大小, 各文本之间距离, 默认值 16
  gridSize: 5,
  // 字体大小范围, 默认值 [16, 64]
  sizeRange: [12, 24],
  // 文字旋转角度范围,  默认 [0, 0]
  rotationRange: [-90, 90],
  // 文字旋转步值, 默认 0
  rotationStep: 45,
  data: [
    {
      name: '生活资源',
      value: '994',
    },
    {
      name: '供热管理',
      value: '884',
    },
    {
      name: '供气质量',
      value: '774',
    },
    {
      name: '生活用水管理',
      value: '684',
    },
    {
      name: '一次供水问题',
      value: '584',
    },
    {
      name: '交通运输',
      value: '514',
    },
    {
      name: '城市交通',
      value: '514',
    },
    {
      name: '环境保护',
      value: '484',
    },
    {
      name: '房地产管理',
      value: '464',
    },
    {
      name: '城乡建设',
      value: '444',
    },
    {
      name: '社会保障与福利',
      value: '424',
    },
    {
      name: '粉尘污染',
      value: '334',
    },
    {
      name: '噪声污染',
      value: '324',
    },
    {
      name: '土地资源管理',
      value: '304',
    },
    {
      name: '物业服务与管理',
      value: '304',
    },
    {
      name: '医疗卫生',
      value: '284',
    },
    {
      name: '粉煤灰污染',
      value: '284',
    },
    {
      name: '占道',
      value: '284',
    },
    {
      name: '供热发展',
      value: '254',
    },
    {
      name: '农村土地规划管理',
      value: '254',
    },
    {
      name: '生活噪音',
      value: '254',
    },
    {
      name: '供热单位影响',
      value: '254',
    },
    {
      name: '城市供电',
      value: '224',
    },
    {
      name: '房屋质量与安全',
      value: '224',
    },
    {
      name: '大气污染',
      value: '224',
    },
    {
      name: '房屋安全',
      value: '224',
    },
    {
      name: '文化活动',
      value: '224',
    },
    {
      name: '拆迁管理',
      value: '224',
    },
    {
      name: '公共设施',
      value: '224',
    },
    {
      name: '供气质量',
      value: '224',
    },
    {
      name: '供电管理',
      value: '224',
    },
    {
      name: '燃气管理',
      value: '154',
    },
    {
      name: '教育管理',
      value: '154',
    },
    {
      name: '医疗纠纷',
      value: '154',
    },
    {
      name: '执法监督',
      value: '154',
    },
    {
      name: '设备安全',
      value: '154',
    },
    {
      name: '政务建设',
      value: '154',
    },
    {
      name: '县区、开发区',
      value: '154',
    },
    {
      name: '宏观经济',
      value: '154',
    },
    {
      name: '教育管理',
      value: '114',
    },
    {
      name: '社会保障',
      value: '114',
    },
    {
      name: '生活用水管理',
      value: '114',
    },
    {
      name: '物业服务与管理',
      value: '114',
    },
    {
      name: '分类列表',
      value: '114',
    },
    {
      name: '农业生产',
      value: '114',
    },
    {
      name: '二次供水问题',
      value: '114',
    },
    {
      name: '城市公共设施',
      value: '94',
    },
    {
      name: '拆迁政策咨询',
      value: '94',
    },
    {
      name: '物业服务',
      value: '94',
    },
    {
      name: '物业管理',
      value: '94',
    },
    {
      name: '社会保障保险管理',
      value: '94',
    },
    {
      name: '低保管理',
      value: '94',
    },
    {
      name: '文娱市场管理',
      value: '74',
    },
    {
      name: '城市交通秩序管理',
      value: '74',
    },
    {
      name: '执法争议',
      value: '74',
    },
    {
      name: '商业烟尘污染',
      value: '74',
    },
    {
      name: '占道堆放',
      value: '74',
    },
    {
      name: '地上设施',
      value: '74',
    },
    {
      name: '水质',
      value: '74',
    },
    {
      name: '无水',
      value: '74',
    },
    {
      name: '供热单位影响',
      value: '74',
    },
    {
      name: '人行道管理',
      value: '74',
    },
    {
      name: '主网原因',
      value: '74',
    },
    {
      name: '集中供热',
      value: '74',
    },
    {
      name: '客运管理',
      value: '74',
    },
    {
      name: '国有公交（大巴）管理',
      value: '74',
    },
    {
      name: '工业粉尘污染',
      value: '74',
    },
    {
      name: '治安案件',
      value: '74',
    },
    {
      name: '压力容器安全',
      value: '74',
    },
    {
      name: '身份证管理',
      value: '74',
    },
    {
      name: '群众健身',
      value: '44',
    },
    {
      name: '工业排放污染',
      value: '44',
    },
    {
      name: '破坏森林资源',
      value: '44',
    },
    {
      name: '市场收费',
      value: '44',
    },
    {
      name: '生产资金',
      value: '44',
    },
    {
      name: '生产噪声',
      value: '44',
    },
    {
      name: '农村低保',
      value: '44',
    },
    {
      name: '劳动争议',
      value: '44',
    },
    {
      name: '劳动合同争议',
      value: '44',
    },
    {
      name: '劳动报酬与福利',
      value: '44',
    },
    {
      name: '医疗事故',
      value: '24',
    },
    {
      name: '停供',
      value: '24',
    },
    {
      name: '基础教育',
      value: '24',
    },
    {
      name: '职业教育',
      value: '24',
    },
    {
      name: '物业资质管理',
      value: '24',
    },
    {
      name: '拆迁补偿',
      value: '24',
    },
    {
      name: '设施维护',
      value: '24',
    },
    {
      name: '市场外溢',
      value: '14',
    },
    {
      name: '占道经营',
      value: '14',
    },
    {
      name: '树木管理',
      value: '14',
    },
    {
      name: '农村基础设施',
      value: '14',
    },
    {
      name: '无水',
      value: '14',
    },
    {
      name: '供气质量',
      value: '14',
    },
    {
      name: '停气',
      value: '14',
    },
    {
      name: '市政府工作部门（含部门管理机构、直属单位）',
      value: '14',
    },
    {
      name: '燃气管理',
      value: '14',
    },
    {
      name: '市容环卫',
      value: '14',
    },
    {
      name: '新闻传媒',
      value: '14',
    },
    {
      name: '人才招聘',
      value: '14',
    },
    {
      name: '市场环境',
      value: '14',
    },
    {
      name: '行政事业收费',
      value: '14',
    },
    {
      name: '食品安全与卫生',
      value: '14',
    },
    {
      name: '城市交通',
      value: '14',
    },
    {
      name: '房地产开发',
      value: '14',
    },
    {
      name: '房屋配套问题',
      value: '14',
    },
    {
      name: '物业服务',
      value: '14',
    },
    {
      name: '物业管理',
      value: '14',
    },
    {
      name: '占道',
      value: '14',
    },
    {
      name: '园林绿化',
      value: '14',
    },
    {
      name: '户籍管理及身份证',
      value: '14',
    },
    {
      name: '公交运输管理',
      value: '14',
    },
    {
      name: '公路（水路）交通',
      value: '14',
    },
    {
      name: '房屋与图纸不符',
      value: '14',
    },
    {
      name: '有线电视',
      value: '14',
    },
    {
      name: '社会治安',
      value: '14',
    },
    {
      name: '林业资源',
      value: '14',
    },
    {
      name: '其他行政事业收费',
      value: '14',
    },
    {
      name: '经营性收费',
      value: '14',
    },
    {
      name: '食品安全与卫生',
      value: '14',
    },
    {
      name: '体育活动',
      value: '14',
    },
    {
      name: '有线电视安装及维护',
      value: '14',
    },
    {
      name: '低保管理',
      value: '14',
    },
    {
      name: '劳动争议',
      value: '14',
    },
    {
      name: '社会福利及事务',
      value: '14',
    },
    {
      name: '一次供水问题',
      value: '14',
    },
  ],
};

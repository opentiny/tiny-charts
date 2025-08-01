/**
 * Copyright (c) 2024 - present OpenTiny HUICharts Authors.
 * Copyright (c) 2024 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 */
const BaseOption = {
  series: [
    {
      type: 'graph',
      layout: 'force',
      // 可拖动
      draggable: false,
      lineStyle: {},
      // symbol保持纵横比例
      symbolKeepAspect: true,
      edgeSymbolSize: 6,
    },
  ],
};

// 虚拟节点图标---(小黄块symbolSize=20)
const virtualNodeSymbol =
  'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAGRJREFUSEtjZBggwDhA9jKMWky3kB8N6tGgplkIEJ247u+y/0+MKxTdDhJlJlGKQBaOWowr2EeDGlfIjCYunFl15GUnYkotUtQQnbhIMZQYtaMWExNKVFEzGtRUCUZiDBl5QQ0AkpooH6Q8aKIAAAAASUVORK5CYII=';

// 亮色箭头 #939393
const lightArrow =
  'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAoCAYAAADDo7u9AAAAAXNSR0IArs4c6QAAAWhJREFUOE+F0k1uwkAMBeBxsotUrlGOUY5RtlmSjCKVYxQpys8yWzhGOQZcA6TsEld+ikdWmahsUJgnP/NlyJnPMAxv8pjn+VN/Jhuo6/pdnququkcDbdt+yEFZltdooO/7Tzk4HA6XaKBpmi858N6fooGu677loCiK49qE8zJhv7bkz7Lkbq3itlRs1yoeS8XmJSCK4zgikGXZRjWDpCimaYqKaZq2qhkCiyKWdM7tVDMERHGeZ/zNJEn2qhkCokhEgGLmo2qGgCgyM6iJ6KSadsKZiPCymPnivYemXVIWxOt2zl3LsoSmrbgxMy4MEd2LooCmrXgQEa4cMz+999BEwCoqsWoiYBU1oJoI/FHUDDQRsIp6qpoIWEUNqCYCVjHcg0VTJwRFMwGauqRV1Aw0tSIomgpoakVQNBXQpJii1aSYotWkFcWgSTFFq0kxRatJMUWrKRNeFK2mLBlTDJoSYH2Kff8b+AXnbeyqFFaSkgAAAABJRU5ErkJggg==';

// 暗色箭头 #dddddd
const darkArrow =
  'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAoCAYAAADDo7u9AAAAAXNSR0IArs4c6QAAAVtJREFUOE+F0s1tg0AQhmE+7uFGAcBKcRlxGXYbdhlxG3YZdhmxxE8BvuE7E82nndUoLAoXBPtqx34WFO56vV4f+ljX9dtewwfjOH7qc9u2z2wwTdOXLjRN89gKDjG4bY04xRGXbND3/bcuhBDOW8E1Bset4B6DfTYYhuFHF7qu223tMMcdqlWgivM8M6iqqjLNJKmKIsIRAHammQJVXJaFP7Isy71p+uCwLAv/ZlmWx6ZpqOlHnESEUADObdtSMwWqCIDUInIxTR9cAfCwROQWQqCmD+4AeNwi8gghUDMFUZEfTFEUT9P0O8wA+MmJyDuEQE0GXtGITZOBV0xnEDUZeEULTNOCpOgCatqIpOhGUJOBV7TANC1Iii6gpgVJ0QXUZPBH0Rpq2g5J0e1ATeQUvSZyil4TOUWvqcFK0WvqiJWi10RO0WtqsFL0mhqsFL0mhmEQe5G7/xv8AiXLAYACDjIWAAAAAElFTkSuQmCC';

const lightColor = '#939393';
const darkColor = '#dddddd';

export { BaseOption, lightArrow, darkArrow, virtualNodeSymbol, lightColor, darkColor };

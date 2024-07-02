const option = {
  theme: 'light',
  title: {
    top: 30,
    left: 30,
    text: `{data|合计配置项}{value|400个}`,
    textStyle: {
      rich: {
        data: {
          color: '#888888',
          fontSize: 20,
          padding: [0, 8, 0, 0]
        },
        value: {
          color: '#888888'
        }
      }
    }
  },
  data: [{
    value: 140,
    name: 'Access',
    children: [{
      value: 75,
      name: 'Access1',
    },{
      value: 25,
      name: 'Access2',
    }],
  },{
    value: 120,
    name: 'Node',
    children: [{
      value: 30,
      name: 'NodeA',
      children: [{
        value: 12,
        name: 'NodeA1',
      },{
        value: 18,
        name: 'NodeA2',
      }],
    },{
      value: 70,
      name: 'NodeB',
      children: [{
        value: 35,
        name: 'NodeB1',
      },{
        value: 25,
        name: 'NodeB2',
      }],
    },{
      value: 20,
      name: 'NodeC',
      children: [{
        value: 20,
        name: 'NodeC',
      }]
    }],
  },{
    value: 180,
    name: 'Plugs',
    children: [{
      value: 90,
      name: 'PlugsA',
      children: [{
        value: 40,
        name: 'PlugsA1',
      },{
        value: 50,
        name: 'PlugsA2',
        children: [{
          value: 26,
          name: 'PlugsA21',
        },{
          value: 24,
          name: 'PlugsA22',
        }],
      }],
    },{
      value: 20,
      name: 'PlugsB',
      children: [{
        value: 10,
        name: 'PlugsB1',
      },{
        value: 10,
        name: 'PlugsB2',
      }],
    },{
      value: 70,
      name: 'PlugsC',
    }],
  }]
};
const option = {
  render: data => {
    const nodeColor = {
      1: 'disable',
      2: 'error',
      3: 'info',
      4: 'success',
    };
    const nodeContainer = document.createElement('div');
    nodeContainer.classList.add('rc_nodesGroup');
    const nodes = data.initalNode.nodes;
    const label = data.initalNode.label;
    const nodeTitle = `<div class='rc_nodesTitle' title='${defendXSS(label)}'>${defendXSS(label)}</div>`;
    nodeContainer.insertAdjacentHTML('beforeend', nodeTitle);
    if (nodes && nodes.length > 0) {
      nodes.forEach(item => {
        const html = `<div class='rc_dataNodeContainer'>
          <div class='rc_dataNode ${nodeColor[item.status]}'></div>
          <div class='rc_dataLabel'>${defendXSS(item.label)}</div>
        </div>`;
        nodeContainer.insertAdjacentHTML('beforeend', html);
      });
    }
    return nodeContainer;
  },
  data: {
    nodes: [
      {
        name: '0',
        label: 'GFD Technology Co., Ltd. Shenzhen XXX Subsidiary',
        nodes: [
          {
            label: '需求感知',
            status: 3,
            isRequired: 'N',
            isHidden: 'Y',
            id: '000',
          },
          {
            label: '供应策略',
            status: 3,
            isRequired: 'N',
            isHidden: 'N',
            id: '001',
          },
          {
            label: '配置引导',
            status: 3,
            isRequired: 'N',
            isHidden: 'N',
            id: '002',
          },
        ],
        row: 0,
        col: 0,
        value: 18,
      },
      {
        name: '1',
        label: 'GFD Technology Co., Ltd. Shenzhen XXX Subsidiary',
        nodes: [
          {
            label: '需求感知1',
            status: 2,
            isRequired: 'N',
            isHidden: 'N',
            id: '100',
          },
          {
            label: '供应策略1',
            status: 3,
            isRequired: 'N',
            isHidden: 'N',
            id: '101',
          },
          {
            label: '配置引导1',
            status: 1,
            isRequired: 'N',
            isHidden: 'N',
            id: '102',
          },
          {
            label: '配置引导',
            status: 3,
            isRequired: 'N',
            isHidden: 'N',
            id: '103',
          },
        ],
        row: 0,
        col: 1,
        value: 8,
      },
      {
        name: '2',
        label: 'GFD Technology ',
        nodes: [
          {
            label: '感知2',
            status: 3,
            isRequired: 'N',
            isHidden: 'N',
            id: '200',
          },
          {
            label: '供应策略2',
            status: 3,
            isRequired: 'N',
            isHidden: 'N',
            id: '201',
          },
          {
            label: '配置引导2',
            status: 2,
            isRequired: 'N',
            isHidden: 'N',
            id: '202',
          },
          {
            label: '配置引导',
            status: 3,
            isRequired: 'N',
            isHidden: 'N',
            id: '203',
          },
        ],
        row: 1,
        col: 1,
        value: 2,
      },
      {
        name: '3',
        label: 'GFD Technology ',
        nodes: [
          {
            label: '需求感知3',
            status: 1,
            isRequired: 'N',
            isHidden: 'N',
            id: '300',
          },
          {
            label: '供应策略3',
            status: 3,
            isRequired: 'N',
            isHidden: 'N',
            id: '301',
          },
          {
            label: '配置3',
            status: 3,
            isRequired: 'N',
            isHidden: 'N',
            id: '302',
          },
          {
            label: '配置引导3',
            status: 4,
            isRequired: 'N',
            isHidden: 'N',
            id: '303',
          },
        ],
        row: 2,
        col: 1,
        value: 6,
      },
      {
        name: '4',
        label: 'GFD Technology ',
        nodes: [
          {
            label: '需求感知4',
            status: 3,
            isRequired: 'N',
            isHidden: 'N',
            id: '400',
          },
          {
            label: '供应策略4',
            status: 1,
            isRequired: 'N',
            isHidden: 'N',
            id: '401',
          },
          {
            label: '配置引导4',
            status: 3,
            isRequired: 'N',
            isHidden: 'N',
            id: '402',
          },
          {
            label: '配置引导4',
            status: 2,
            isRequired: 'N',
            isHidden: 'N',
            id: '403',
          },
        ],
        row: 3,
        col: 1,
        value: 2,
      },
      {
        name: '5',
        label: '实施 ',
        nodes: [
          {
            label: '需求感知5',
            status: 3,
            isRequired: 'N',
            isHidden: 'N',
            id: '500',
          },
          {
            label: '供应策略5',
            status: 4,
            isRequired: 'N',
            isHidden: 'N',
            id: '501',
          },
          {
            label: '配置引导5',
            status: 3,
            isRequired: 'N',
            isHidden: 'N',
            id: '502',
          },
          {
            label: '配置引导5',
            status: 1,
            isRequired: 'N',
            isHidden: 'N',
            id: '503',
          },
          {
            label: '需求',
            status: 3,
            isRequired: 'N',
            isHidden: 'N',
            id: '504',
          },
        ],
        row: 0,
        col: 2,
        value: 8,
      },
      {
        name: '6',
        label: 'GFD Technology ',
        nodes: [
          {
            label: '需求感知6',
            status: 3,
            isRequired: 'N',
            isHidden: 'N',
            id: '600',
          },
          {
            label: '供应6',
            status: 3,
            isRequired: 'N',
            isHidden: 'Y',
            id: '601',
          },
          {
            label: '配置引导6',
            status: 3,
            isRequired: 'N',
            isHidden: 'N',
            id: '602',
          },
          {
            label: '配置引导6',
            status: 3,
            isRequired: 'N',
            isHidden: 'N',
            id: '603',
          },
          {
            label: '需求',
            status: 2,
            isRequired: 'N',
            isHidden: 'N',
            id: '604',
          },
        ],
        row: 1,
        col: 2,
        value: 4,
      },
      {
        name: '7',
        label: 'GFD Technology ',
        nodes: [
          {
            label: '需求感知7',
            status: 3,
            isRequired: 'N',
            isHidden: 'N',
            id: '700',
          },
          {
            label: '策略7',
            status: 3,
            isRequired: 'N',
            isHidden: 'Y',
            id: '701',
          },
          {
            label: '配置引导7',
            status: 3,
            isRequired: 'N',
            isHidden: 'N',
            id: '702',
          },
          {
            label: '配置引导7',
            status: 3,
            isRequired: 'N',
            isHidden: 'N',
            id: '703',
          },
          {
            label: '需求',
            status: 4,
            isRequired: 'N',
            isHidden: 'N',
            id: '704',
          },
        ],
        row: 2,
        col: 2,
        value: 6,
      },
    ],
    links: [
      {
        source: '0',
        target: '1',
        value: 8,
      },
      {
        source: '0',
        target: '2',
        value: 2,
      },
      {
        source: '0',
        target: '3',
        value: 6,
      },
      {
        source: '0',
        target: '4',
        value: 2,
      },
      {
        source: '1',
        target: '5',
        value: 4,
      },
      {
        source: '1',
        target: '7',
        value: 4,
      },
      {
        source: '2',
        target: '5',
        value: 2,
      },
      {
        source: '3',
        target: '5',
        value: 2,
      },
      {
        source: '3',
        target: '6',
        value: 4,
      },
      {
        source: '4',
        target: '7',
        value: 2,
      },
    ],
  },
  depthWidth: ['20%', '45%', '35%'],
  background: '#e5eff9',
  marginWidth: [
    {
      left: 20,
      right: 20,
    },
    {
      left: 100,
      right: 100,
    },
    {
      left: 20,
      right: 20,
    },
  ],
  offsetY: 20,
  statusColor: {
    1: '#BBC0C7',
    2: '#EB171F',
    3: '#1970D8',
    4: '#2DA769',
  },
};

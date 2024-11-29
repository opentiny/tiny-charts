const option = {
  theme: 'hdesign-light',
  layout: {
    type: 'circle',
    center: [600,380],
    radius: 350
  },
  node: {
    width: 50,
    height: 50,
  },
  line: {
    type: 'Direct',
    style: {
      hover: {
        color: 'tan',
      },
      active: {
        color: 'red'
      },
      disable: {
        color: 'blue'
      },
    }
  },
  canvas: {
    show: true,
    grid: {
        size: 20,
        show: true,
        type: 'dot',
        config: {
          color: '#fff',
          unitSize: 1,
        }
    }
  },
  connector: {
    startSharing: 'merge',
    endSharing: 'merge',
    type: 'dot'
  },
  render: (container, data) => {
    let id = data.id;
    let nodeClass = 'mmc-node-example-red';
    if (id.indexOf('3') !== -1) {
      nodeClass = 'mmc-node-example-green';
    }
    if (id.indexOf('2') !== -1) {
      nodeClass = 'mmc-node-example-orange';
    }
    if (id.indexOf('1') !== -1) {
      nodeClass = 'mmc-node-example-blue';
    }
    let node = `<div class="mmc-node-example ${nodeClass}">${data.label}<div>`;
    container.insertAdjacentHTML('beforeend', node);
  },
  // 图表数据
  data: {
    nodes: [{
        id: '0',
        text: 'gridbox-colud-space-ceil-1',
        name: 'main',
      },
      {
        id: '1',
        text: 'gridbox-colud-space-ceil-2',
        name: 'portal'
      },
      {
        id: '2',
        text: 'gridbox-colud-space-ceil-3',
        name: 'portal'
      },
      {
        id: '3',
        text: 'gridbox-colud-space-ceil-4',
        name: 'portal'
      },
      {
        id: '4',
        text: 'gridbox-colud-space-ceil-5',
        name: 'hecs'
      },
      {
        id: '5',
        text: 'gridbox-colud-space-ceil-6',
        name: 'hecs'
      },
      {
        id: '6',
        text: 'gridbox-colud-space-ceil-7',
        name: 'bms'
      },
      {
        id: '7',
        text: 'gridbox-colud-space-ceil-8',
        name: 'bms'
      },
      {
        id: '8',
        text: 'gridbox-colud-space-ceil-9',
        name: 'bms'
      },
      {
        id: '9',
        text: 'gridbox-colud-space-ceil-10',
        name: 'ecs'
      },
      {
        id: '10',
        text: 'gridbox-colud-space-ceil-11',
        name: 'ecs'
      },
      {
        id: '11',
        text: 'gridbox-colud-space-ceil-12',
        name: 'ecs'
      },
      {
        id: '12',
        text: 'gridbox-colud-space-ceil-13',
        name: 'portal'
      },
      {
        id: '13',
        text: 'gridbox-colud-space-ceil-14',
        name: 'portal'
      },
      {
        id: '14',
        text: 'gridbox-colud-space-ceil-15',
        name: 'ecs'
      },
      {
        id: '15',
        text: 'gridbox-colud-space-ceil-16',
        name: 'ecs'
      },
      {
        id: '16',
        text: 'gridbox-colud-space-ceil-17',
        name: 'bms'
      },
      {
        id: '17',
        text: 'gridbox-colud-space-ceil-18',
        name: 'bms'
      },
      {
        id: '18',
        text: 'gridbox-colud-space-ceil-19',
        name: 'bms'
      },
      {
        id: '19',
        text: 'gridbox-colud-space-ceil-20',
        name: 'portal'
      },
      {
        id: '20',
        text: 'gridbox-colud-space-ceil-21',
        name: 'portal'
      },
      {
        id: '21',
        text: 'gridbox-colud-space-ceil-22',
        name: 'portal'
      },
      {
        id: '22',
        text: 'gridbox-colud-space-ceil-23',
        name: 'hecs'
      },
      {
        id: '23',
        text: 'gridbox-colud-space-ceil-24',
        name: 'hecs'
      },
      {
        id: '24',
        text: 'gridbox-colud-space-ceil-25',
        name: 'hecs'
      },
      {
        id: '25',
        text: 'gridbox-colud-space-ceil-26',
        name: 'bms'
      },
      {
        id: '26',
        text: 'gridbox-colud-space-ceil-27',
        name: 'bms'
      },
      {
        id: '27',
        text: 'gridbox-colud-space-ceil-27',
        name: 'bms'
      },
      {
        id: '28',
        text: 'gridbox-colud-space-ceil-29',
        name: 'bms'
      },
      {
        id: '29',
        text: 'gridbox-colud-space-ceil-30',
        name: 'portal'
      },
      {
        id: '30',
        text: 'gridbox-colud-space-ceil-31',
        name: 'portal'
      },
      {
        id: '31',
        text: 'gridbox-colud-space-ceil-32',
        name: 'portal'
      },
      {
        id: '32',
        text: 'gridbox-colud-space-ceil-33',
        name: 'ecs'
      },
      {
        id: '33',
        text: 'gridbox-colud-space-ceil-34',
        name: 'ecs'
      },
    ],
    edges: [
      {
        start: '0',
        end: '1',
      },
      {
        start: '0',
        end: '2',
      },
      {
        start: '0',
        end: '3',
      },
      {
        start: '0',
        end: '4',
      },
      {
        start: '0',
        end: '5',
      },
      {
        start: '0',
        end: '7',
      },
      {
        start: '0',
        end: '8',
      },
      {
        start: '0',
        end: '9',
      },
      {
        start: '0',
        end: '10',
      },
      {
        start: '0',
        end: '11',
      },
      {
        start: '0',
        end: '13',
      },
      {
        start: '0',
        end: '14',
      },
      {
        start: '0',
        end: '15',
      },
      {
        start: '0',
        end: '16',
      },
      {
        start: '2',
        end: '3',
      },
      {
        start: '4',
        end: '5',
      },
      {
        start: '4',
        end: '6',
      },
      {
        start: '5',
        end: '6',
      },
      {
        start: '7',
        end: '13',
      },
      {
        start: '8',
        end: '14',
      },
      {
        start: '9',
        end: '10',
      },
      {
        start: '10',
        end: '22',
      },
      {
        start: '10',
        end: '14',
      },
      {
        start: '10',
        end: '12',
      },
      {
        start: '10',
        end: '24',
      },
      {
        start: '10',
        end: '21',
      },
      {
        start: '10',
        end: '20',
      },
      {
        start: '11',
        end: '24',
      },
      {
        start: '11',
        end: '22',
      },
      {
        start: '11',
        end: '14',
      },
      {
        start: '12',
        end: '13',
      },
      {
        start: '16',
        end: '17',
      },
      {
        start: '16',
        end: '18',
      },
      {
        start: '16',
        end: '21',
      },
      {
        start: '16',
        end: '22',
      },
      {
        start: '17',
        end: '18',
      },
      {
        start: '17',
        end: '20',
      },
      {
        start: '18',
        end: '19',
      },
      {
        start: '19',
        end: '20',
      },
      {
        start: '19',
        end: '33',
      },
      {
        start: '19',
        end: '22',
      },
      {
        start: '19',
        end: '23',
      },
      {
        start: '20',
        end: '21',
      },
      {
        start: '21',
        end: '22',
      },
      {
        start: '22',
        end: '24',
      },
      {
        start: '22',
        end: '25',
      },
      {
        start: '22',
        end: '26',
      },
      {
        start: '22',
        end: '23',
      },
      {
        start: '22',
        end: '28',
      },
      {
        start: '22',
        end: '30',
      },
      {
        start: '22',
        end: '31',
      },
      {
        start: '22',
        end: '32',
      },
      {
        start: '22',
        end: '33',
      },
      {
        start: '23',
        end: '28',
      },
      {
        start: '23',
        end: '27',
      },
      {
        start: '23',
        end: '29',
      },
      {
        start: '23',
        end: '30',
      },
      {
        start: '23',
        end: '31',
      },
      {
        start: '23',
        end: '33',
      },
      {
        start: '32',
        end: '33',
      },
    ],
  }
  
};
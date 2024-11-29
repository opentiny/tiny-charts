const option = {
  theme: 'hdesign-light',
  layout: {
    type: 'mindmap',
    direction: 'LR',
    nodeShape: 'rect',
    vGap: 10,
    hGap: 100,
    bufferRender: true
  },
  node: {
    width: 200,
    height: 100,
  },
  legend: {
    render(parmas) {
      const { name, dataIndex } = parmas
      const colors = ['#E02128', '#2070F3', '#09AA71', '#F4840C']
      const color = colors[dataIndex]
      return `<div class="demo-legend-container">
      <div class="demo-legend-icon">
        <div class="demo-legend-state" style="background-color:${color}"></div>
      </div>
      <div class="demo-legend-label">${name}</div>
    </div>`
    },
    data: [
      {
        name: '产品研发中心',
      },
      {
        name: '研发部',
      },
      {
        name: '设计部',
      },
      {
        name: '产品部',
      }
    ]
  },
  line: {
    type: 'Bezier',
    style: {
      active: {
        color: 'red',
        width:2,
      },
      disable: {
        color: 'blue'
      }
    }
  },
  canvas: {
    show: true,
    grid: {
      size: 20,
      show: true,
      type: 'dot', 
      config: {
        color: '#aaaaaa', 
        unitSize: 1,
      }
    }
  },
  connector: {
    startSharing: 'merge',
    endSharing: 'merge',
    type: 'expand',
    show: true
  },
  data: {
    id: 'root',
    text: '产品研发中心',
    peopleNum: 100,
    more: {
      introduction: '部门介绍:产品研发',
      address: '部门地址:xx',
      iphone: '部门电话:xx',
      email: '部门邮箱:xxx',
      contact: '部门联系人:xx'
    },
    children: [
      {
        id: 'R&DDept1',
        text: '研发部',
        peopleNum: 20,
        more: {
          introduction: '部门介绍:研发部',
          address: '部门地址:xx',
          iphone: '部门电话:xx',
          email: '部门邮箱:xxx',
          contact: '部门联系人:xx'
        },
        children: [
          {
            id: 'frontend1',
            text: '研发一部',
            peopleNum: 8,
            more: {
              introduction: '部门介绍:研发一部',
              address: '部门地址:xx',
              iphone: '部门电话:xx',
              email: '部门邮箱:xxx',
              contact: '部门联系人:xx'
            },
          },
          {
            id: 'backend1',
            text: '研发二部',
            peopleNum: 12,
            more: {
              introduction: '部门介绍:研发二部',
              address: '部门地址:xx',
              iphone: '部门电话:xx',
              email: '部门邮箱:xxx',
              contact: '部门联系人:xx'
            },
          },
          {
            id: 'backend11',
            text: '研发三部',
            peopleNum: 12,
            more: {
              introduction: '部门介绍:研发二部',
              address: '部门地址:xx',
              iphone: '部门电话:xx',
              email: '部门邮箱:xxx',
              contact: '部门联系人:xx'
            },
          }
        ]
      },
      {
        id: 'designDept2',
        text: '设计部',
        peopleNum: 60,
        more: {
          introduction: '部门介绍:设计部',
          address: '部门地址:xx',
          iphone: '部门电话:xx',
          email: '部门邮箱:xxx',
          contact: '部门联系人:xx'
        },
        children: [
          {
            id: 'UI2',
            text: '设计一部',
            peopleNum: 20,
            more: {
              introduction: '部门介绍:设计一部',
              address: '部门地址:xx',
              iphone: '部门电话:xx',
              email: '部门邮箱:xxx',
              contact: '部门联系人:xx'
            },
          },
          {
            id: 'UX2',
            text: '设计二部',
            peopleNum: 40,
            more: {
              introduction: '部门介绍:设计二部',
              address: '部门地址:xx',
              iphone: '部门电话:xx',
              email: '部门邮箱:xxx',
              contact: '部门联系人:xx'
            },
          },
          {
            id: 'UX22',
            text: '设计三部',
            peopleNum: 40,
            more: {
              introduction: '部门介绍:设计二部',
              address: '部门地址:xx',
              iphone: '部门电话:xx',
              email: '部门邮箱:xxx',
              contact: '部门联系人:xx'
            },
          },
          {
            id: 'UX222',
            text: '设计四部',
            peopleNum: 40,
            more: {
              introduction: '部门介绍:设计二部',
              address: '部门地址:xx',
              iphone: '部门电话:xx',
              email: '部门邮箱:xxx',
              contact: '部门联系人:xx'
            },
          },
          // {
          //   id: 'UX2222',
          //   text: '设计五部',
          //   peopleNum: 40,
          //   more: {
          //     introduction: '部门介绍:设计二部',
          //     address: '部门地址:xx',
          //     iphone: '部门电话:xx',
          //     email: '部门邮箱:xxx',
          //     contact: '部门联系人:xx'
          //   },
          // }
        ]
      },
      {
        id: 'productDept3',
        text: '产品部',
        peopleNum: 20,
        more: {
          introduction: '部门介绍:产品部',
          address: '部门地址:xx',
          iphone: '部门电话:xx',
          email: '部门邮箱:xxx',
          contact: '部门联系人:xx'
        },
        children: [
          {
            id: 'productManager3',
            text: '产品一部',
            peopleNum: 11,
            more: {
              introduction: '部门介绍:产品一部',
              address: '部门地址:xx',
              iphone: '部门电话:xx',
              email: '部门邮箱:xxx',
              contact: '部门联系人:xx'
            },
          },
          {
            id: 'productOperation3',
            text: '产品二部',
            peopleNum: 9,
            more: {
              introduction: '部门介绍:产品二部',
              address: '部门地址:xx',
              iphone: '部门电话:xx',
              email: '部门邮箱:xxx',
              contact: '部门联系人:xx'
            },
          }
        ]
      }
    ]
  },
  menu: {
    node: {
      data: [
        { icon: './image/charts/contextmenu/delete.svg', label: '删除节点', value: 'delete' },
        { icon: './image/charts/contextmenu/copy.svg', label: '复制节点', value: 'copy' },
        { icon: './image/charts/contextmenu/merge.svg', label: '合并节点', value: 'merge' },
        { icon: './image/charts/contextmenu/setting.svg', label: '数据配置', value: 'setting' },
        { icon: './image/charts/contextmenu/add.svg', label: '新增子节点', value: 'add' },
      ],
      onclick: (itemData, targetId, e) => {
        // console.log('node--------', itemData, targetId, e)
      }
    },
    canvas: {
      data: [
        { icon: './image/charts/contextmenu/broom.svg', label: '清除', value: 'clear' },
        { icon: './image/charts/contextmenu/resetting.svg', label: '重置', value: 'reset' },
      ],
      onclick: (itemData, el) => {
        // console.log('canvas------', itemData, el)
      }
    },
    line: {
      data: [
        { icon: './image/charts/contextmenu/paint.svg', label: '线条', value: 'line' },
      ],
      itemRender: (itemData, targetId) => {
        return `<div style="display: flex; align-item: center;">
        <img style="width: 20px; height: 20px; margin-right: 6px;" src=${itemData.icon} alt="" />
        <p>${itemData.label}高亮</p>
        <div>`
      },
      onclick: (itemData, targetId, e) => {
        // console.log('line--------', itemData, targetId)
      }
    },
    legend: {
      data: [
        { label: '高亮', value: 'highlight' },
      ],
      onclick: (itemData, targetId, e) => {
        // console.log('legend--------', itemData, targetId)
      }
    }
  }
};
<template>
  <div className="chart-container">
    <div class='chart drag-manager-wrap' ref="chartRef">
    </div>
  </div>
</template>

<script>
import CircleChart from '../../../../src/framework/charts/CircleChart';
import Demo from '../../../nodeExample/GridNode.vue';
import '../../../../src/feature/nodeRender/vue-node';
const svg = 'data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0eWxlPSJoZWlnaHQ6IDgwcHg7IHdpZHRoOiA4MHB4OyIgZmlsbD0iIzIwNzBmMyI+PHBhdGggZD0iTTgyOC40NSA4MjIuNzVjNzkuNDUtODAuMDQgMTI4LjY1LTE4OS43IDEyOC42NS0zMTAuNjIgMC0yNDQuMzYtMTk4LjgtNDQzLjE2LTQ0My4xNi00NDMuMTYtMjQ2LjM5IDAtNDQ2Ljg0IDE5OC44LTQ0Ni44NCA0NDMuMTZzMTk4LjggNDQzLjE2IDQ0My4xNiA0NDMuMTZjMTIxLjc5IDAgMjMyLjI0LTQ4LjY5IDMxMi45Mi0xMjcuMzNsNS42NCAwLjA5YzAuMDItMS44NC0wLjMtMy41Mi0wLjM3LTUuM3pNMTMyLjIyIDUxMi4xM2MwLTIwOC40NSAxNzEuMjQtMzc4LjAzIDM4MS43Mi0zNzguMDMgMjA4LjQ1IDAgMzc4LjAzIDE2OS41OSAzNzguMDMgMzc4LjAzIDAgOTMuODMtMzQuOSAxNzkuNTktOTIuMjYgMjQ1Ljc1LTM1LjcyLTM4Ljg2LTkyLjcyLTU4LjA4LTEwMS44Ni02MC45NmwtNi44OC0xLjM4Yy01Ni45LTUuMDktNzguMDgtMjIuNDYtODIuODEtMzAuNjN2LTIzLjM3YzU5Ljc0LTM3LjczIDc4LjIyLTExOS43OSA4MC4zLTEyOS45NWwwLjY3LTYuNTRjMC0yOC4zOC04LjYyLTQ1LjI0LTE3Ljg0LTU1LjE2di00Mi44MmMtMC40Mi00NC4yOS0xMi4xOS03Ni4wMi0zNC45OC05NC4yOS0xMi42OS0xMC4xNi0yOC4zNS0xNS41Ny00NC42LTE1LjYzYTMwMDMuNDkgMzAwMy40OSAwIDAgMS0yMy40My0xOC41NWMtMzIuMi0yNC43OS04MC4yNy05LjQ3LTEwMS43NS0wLjUxLTYwLjgxIDMuMjktOTAuODUgNDIuMzktOTkuMDkgNjUuNDVsLTEuOTUgNS40NiAwLjc3IDgzLjkxYzAuMDYgNi43Ni0xLjkyIDEwLjk2LTMuMTggMTIuMDItMjQuMDUgMjAuMDktMjMuNTQgNTQuNTMtMjIuODIgNjQuNTMgMS4wOCA0OS45OSA1NS43IDEwMy4zMyA4Mi40OSAxMjYuNTQtMC40NyAyMi40LTcuMTkgMzcuODUtMTIuMjcgNDYuNDItMzcuNTYgMy4zMi03NC45NCAxMC40NS0xMTIuMDYgMjEuNTFsLTUuOTkgMi4wMmMtMjcuOTIgMTAuNDYtNTEuODMgMjguMi02OS42OCA1MS4wMS01Ni4zMS02Ni4wMy05MC41My0xNTEuNDUtOTAuNTMtMjQ0LjgzeiBtMTM3LjUgMjkxLjQxYzEwLjgzLTE2LjQ4IDI2LjI1LTI5LjM4IDQ0LjQ5LTM2LjIybDMuODUtMS4zYTQ5OC41NTUgNDk4LjU1NSAwIDAgMSAxMTEuMzktMTkuNzFsMTIuMDItMC43MyA4LjY0LTguMzhjNC40Ni00LjMxIDQzLjQxLTQ0LjQgMzcuMTMtMTE5LjU5bC0xLjE3LTE0LjA0LTExLjA0LTguNzZjLTMyLjk0LTI2LjEzLTY5LjY2LTY4LjIyLTY5LjY2LTg2Ljg0bC0wLjEyLTIuNzZjLTAuMjktMy43OSAwLjI0LTkuMSAxLjEtMTEuNiAxNi4xNi0xNC4zNiAyNS4yNi0zNi41NyAyNS4wNC02MS4yOWwtMC42NS03MC4xOWM0LjUyLTYuNzcgMTYuMTYtMTguNDMgNDMuMDItMTkuMWw3LjE5LTAuMDQgNi40NS0yLjk1YzE1LjItNi45NyAzNi4wNy0xMS41MyA0MC43MS0xMC4xOSA0MS45MiAzMy40MiA0MS45MiAzMy40MiA1NC4wOCAzMy40Mmw3LjExLTAuNzdjMC45MS0wLjIgNC4wNy0wLjY4IDYuMjcgMS4wOCA0Ljc0IDMuNzkgMTAuMzQgMTcuNjMgMTAuNiA0My44djQ4LjIzYzAgMTUuMjEgNi4wNSAyOC45NSAxNi42NyAzOC4xNyAwLjM3IDEuMjggMC45IDMuNzkgMS4wOSA3Ljk3LTUuNjEgMjMuMTYtMjUuMDIgNzUuOTEtNjAuMTYgODkuNjJsLTIwLjczIDguMDh2NzAuNzJsMC4yOCA0LjIzYzAuOTkgNy41MSAxMy4xOSA3My4yMSAxMzguMDcgODUuNjYgMjAuMzggNi45NyA1NC42NSAyMy41OSA3MS44MSA0My40My02Ni4wNSA1NC4xMS0xNTAuNzMgODYuNjgtMjQyLjk1IDg2LjY4LTkxLjI5LTAuMDEtMTc1LjEyLTMyLjU1LTI0MC41My04Ni42M3oiLz48L3N2Zz4=';
const option = {
  theme: 'hdesign-light',
  layout: {
    type: 'circle',
    center: [550,220],            // 可选,默认[0,0]
    radius: 220,                  // 可选
  },
  node: {
    width: 40,
    height: 40,
  },
  line: {
    type: 'Direct',
    style: {
      color:'#c2c2c2',
      hover: {
        color: 'tan',
      },
      active: {
        color: 'red',
        // width:3,
      },
      disable: {
        color: 'blue',
        // width:1,
      },
    }
  },
  canvas: {
    show: true,
    grid: {
        size: 20,
        show: true,
        type: 'dot', //dot mesh doubleMesh
        config: {
          color: '#fff',    // 颜色
          unitSize: 1, // 宽度
        }
    }
  },
  connector: {
    startSharing: 'merge', // 均分方式 merge sharing  strict
    endSharing: 'merge',
    type: 'dot',
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
        text: 'colud-ceil-1',
        iconPath: svg,
      },
      {
        id: '1',
        text: 'colud-ceil-2',
        iconPath: svg,
      },
      {
        id: '2',
        text: 'colud-ceil-3',
        iconPath: svg,
      },
      {
        id: '3',
        text: 'colud-ceil-4',
        iconPath: svg,
      },
      {
        id: '4',
        text: 'colud-ceil-5',
        iconPath: svg,
      },
      {
        id: '5',
        text: 'colud-ceil-6',
        iconPath: svg,
      },
      {
        id: '6',
        text: 'colud-ceil-7',
        iconPath: svg,
      },
      {
        id: '7',
        text: 'colud-ceil-8',
        iconPath: svg,
      },
      {
        id: '8',
        text: 'colud-ceil-9',
        iconPath: svg,
      },
      {
        id: '9',
        text: 'colud-ceil-10',
        iconPath: svg,
      },
      {
        id: '10',
        text: 'colud-ceil-11',
        iconPath: svg,
      },
      {
        id: '11',
        text: 'colud-ceil-12',
        iconPath: svg,
      },
      {
        id: '12',
        text: 'colud-ceil-13',
        iconPath: svg,
      },
      {
        id: '13',
        text: 'colud-ceil-14',
        iconPath: svg,
      },
      {
        id: '14',
        text: 'colud-ceil-15',
        iconPath: svg,
      },
      {
        id: '15',
        text: 'colud-ceil-16',
        iconPath: svg,
      }
    ],
    edges: [
      {
        start: '0',
        end: '2',
      },
      {
        start: '1',
        end: '3',
      },
      {
        start: '2',
        end: '4',
      },
      {
        start: '3',
        end: '5',
      },
      {
        start: '4',
        end: '6',
      },
      {
        start: '5',
        end: '7',
      },
      {
        start: '6',
        end: '8',
      },
      {
        start: '7',
        end: '9',
      },
      {
        start: '8',
        end: '10',
      },
      {
        start: '9',
        end: '11',
      },
      {
        start: '10',
        end: '12',
      },
      {
        start: '11',
        end: '13',
      },
      {
        start: '12',
        end: '14',
      },
      {
        start: '13',
        end: '15',
      },
      {
        start: '1',
        end: '6',
      },
      {
        start: '2',
        end: '7',
      },
      {
        start: '3',
        end: '8',
      },
      {
        start: '4',
        end: '9',
      },
      {
        start: '5',
        end: '10',
      },
      {
        start: '6',
        end: '11',
      },
      {
        start: '7',
        end: '12',
      },
      {
        start: '8',
        end: '13',
      },
      {
        start: '9',
        end: '14',
      },
      {
        start: '10',
        end: '15',
      },
      {
        start: '11',
        end: '0',
      },
      {
        start: '12',
        end: '1',
      },
      {
        start: '13',
        end: '2',
      },
      {
        start: '14',
        end: '3',
      },
      {
        start: '15',
        end: '4',
      },
      {
        start: '0',
        end: '5',
      }
    ],
  }
  
};

export default {
  name: 'DragManagerExample',
  props: {
    datas:Object
  },
  data() {
    return {
      currentTheme: localStorage.getItem('chartTheme') || 'hdesign-light',
    }
  },
  created() {
  },
  mounted() {
    this.renderChart();
    this.$bus.on('themeChange', (val) => {
      this.currentTheme = val;
      this.renderChart();
    })
  },
  methods: {
    renderChart() {
      if(this.$refs.chartRef) this.$refs.chartRef.innerHTML = '';
      this.integrateChart = new CircleChart();
      this.integrateChart.init(this.$refs.chartRef);
      let options = JSON.parse(JSON.stringify(option));
      options.component = Demo;
      this.integrateChart.setOption(options);
      this.integrateChart.render();
    }
  },
  watch: {
    datas:{
      handler: function (newValue, oldValue) {
        option.canvas.grid.size = newValue.gridSize;
        option.canvas.grid.type = newValue.gridType;
        if (newValue.gridType === 'doubleMesh') {
          option.canvas.grid.config = [
              {
                color: newValue.gridColor,    // 主网格线颜色
                unitSize: newValue.thickness, // 主网格线宽度
            },
            {
                color: newValue.SecondaryColor,    // 次网格线颜色
                unitSize: newValue.SecondaryThickness, // 次网格线宽度
                factor: newValue.factor,        // 主次网格线间隔
            }
          ]
        } else {
          option.canvas.grid.config = {
            color: newValue.gridColor,
            unitSize: newValue.thickness
          }
        }
        this.integrateChart.canvas.setGrid(option.canvas.grid);
      },
      deep:true
    }
  }
}
</script>
<style scoped>
.drag-manager-wrap{
  width: 100% !important;
}
:deep(.grid-card){
  /* border-color: salmon; */
  :is(img){
    width: 45px;
    height: 45px;
  }
}
</style>
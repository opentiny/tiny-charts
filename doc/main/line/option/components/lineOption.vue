<template>
  <div class="line-demo">
    <div class="line-demo-con" ref="dom">
    </div>
  </div>
</template>

<script>
import LineNode from './node.vue'
import '../../../../../src/feature/nodeRender/vue-node';
import merge from '../../../../../src/util/merge';
// 引用图表库
import CustomizeChart from '../../../../../src/framework/charts/CustomizeChart';

export default {
  name: 'lineOption',
  props: {
    datas: Object
  },
  data() {
    return {
      option: {
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
        component: LineNode,
        layout: {
          type: 'grid',
          algorithm: function (nodes, containerSize) {
            const arr = [{ x: 188, y: 100 }, { x: 288, y: 200 }, { x: 388, y: 100 }]
            nodes.forEach((node, i) => {
              node.x = arr[i].x
              node.y = arr[i].y
            })

          }
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
              color: 'red',
              width: 3,
            }
          },
          onHover: (dom) => {
            // console.log('onHover----',dom)
          },
          onClick: (dom) => {
            // console.log('onClick----',dom)
          },
        },
        connector: {
          startSharing: 'merge', // 均分方式 merge sharing  strict
          endSharing: 'merge',
          type: 'dot',
        },
        data: {
          nodes: [{
            id: '1',
            text: '1',
          },
          {
            id: '2',
            text: '2',
          }, {
            id: '3',
            text: '3',
          }],
          edges: [
            {
              start: '1',
              end: '2',
            },
            {
              start: '2',
              end: '3',
            }]
        }
      },
    }
  },
  mounted() {
    // 创建图表实例
    this.chartIns = new CustomizeChart();
    // 初始化图表容器
    this.chartIns.init(this.$refs.dom);
    this.chartIns.setOption(this.option);
    // 开始渲染
    this.chartIns.render();
  },
  methods: {
    confirm() {

    }
  },
  watch: {
    datas: {
      handler: function (newValue, oldValue) {
        this.option.line = merge(this.option.line, newValue.line)
        this.chartIns.refresh(this.option);
      },
      deep: true
    }
  }
}
</script>

<style lang="less" scoped>
.line-demo {
  width: 100%;
  height: 500px;
  border: 1px solid var(--ti-base-color-common-1);

  .line-demo-con {
    position: relative;
    width: 100%;
    height: 100%;
  }
}

:deep(.tiny-button) {

  background: transparent;
}
</style>
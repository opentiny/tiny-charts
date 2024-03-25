<template>
  <tiny-grid ref="apitable" :data="tableData" v-if="apiDescription.markdown"
    >
    <tiny-grid-column type="expand" width="60" >
      <template #default="data" v-if="tableData.length>1">
        <MdPreview  :modelValue="apiDescription.markdown[data.row.id]" class="main-editor api-table"></MdPreview >
      </template>
    </tiny-grid-column>
    <tiny-grid-column field="props" title="参数"></tiny-grid-column>
    <tiny-grid-column field="introduce" title="说明"></tiny-grid-column>
    <tiny-grid-column field="type" title="类型">
      <template #default="data">
        <span class="table-cell-tag">{{ data.row.type }}</span>
      </template>
    </tiny-grid-column>
    <tiny-grid-column field="default" title="默认值"></tiny-grid-column>
  </tiny-grid>
  <tiny-grid :data="tableData" v-else>
    <tiny-grid-column field="name" title="说明">
      <template #default>
        <span class="table-desc">{{ extendsEchartsDesc[0] }}</span>
        <a class="table-link" :href="extendsEchartsDesc[1]">{{ extendsEchartsDesc[1] }}</a>
      </template>
    </tiny-grid-column>
  </tiny-grid>
</template>

<script>
export default {
  name: 'ApiTable',
  data() {
    return {
      extendsEchartsOptionChart: ['GraphChart', 'RegionChart'],
      extendsEchartsDesc: []
    }
  },
  props: {
    chartName: {
      type: String,
      default: ''
    },
    apiDescription: {
      type: [String, Object],
      default: ''
    }
  },
  computed: {
    isSpecialChart(){
      return this.extendsEchartsOptionChart.includes(this.chartName)
    },
    tableData() {
      let arrData = []
      if (this.apiDescription.dataset) {
        this.apiDescription.dataset.forEach((item, index) => {
          arrData.push({
            id: index,
            props: item[0],
            introduce: item[1],
            type: item[2],
            default: item[3]
          })
        })
      } else {
        arrData=[{
          name: this.apiDescription
        }]
        if(arrData[0].name.length) {
          this.extendsEchartsDesc = arrData[0].name.split('：')
        }
      }
      return [...arrData]
    }
  }
}
</script>
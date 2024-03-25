/**
 * 根据传入数据的 nodes 和 edges 计算出绘制流程图需要的位置信息
 * 包括节点位置和边的位置
 */
export default class Layout {
  data;
  option;
  // 节点最小宽度
  minItemWidth = 120;

  constructor(data, option, dom) {
    this.dom = dom;
    this.scaleCon = this.dom.getElementsByClassName('mc-scales')[0];
    this.conWidth = this.scaleCon.offsetWidth;
    this.data = data;
    this.option = option;
    this.minItemWidth = this.option.minItemWidth || this.minItemWidth;
  }

  /**
   * 执行位置算法
   */
  // 根据用户传入数据与dom宽度，计算节点对应位置
  computePositions(option) {
    const data = option.data;
    this.minItemWidth = option.minItemWidth || this.minItemWidth;
    let dateSpan = data[data.length - 1].date - data[0].date;
    let minSpan = (this.minItemWidth / this.conWidth) * dateSpan;
    let newConWidth = this.conWidth - option.newPitch[0] - 20;
    newConWidth = option.newPitch.length > 1 ? newConWidth - option.newPitch[1] : newConWidth;
    let newdateSpan = dateSpan;
    data.forEach((item, index) => {
      let prev = data[index - 1];
      const prevDate = prev && prev.date || 0;
      const itemDate = item && item.date || 0;
      let differdate = itemDate - prevDate;
      item.min = false;
      if (prev && differdate < minSpan) {
        item.min = true;
        item.x = this.minItemWidth;
        dateSpan -= minSpan;
        newConWidth -= this.minItemWidth;
        newdateSpan -= differdate;
      }
      else {
        item.x = 0;
      }
    });
    data.forEach((item, index) => {
      const current = this.option.current || { date: 0 };
      const prev = data[index - 1];
      const prevDate = prev && prev.date || 0;
      const itemDate = item && item.date || 0;
      if (prev && item.min) {
        prev.width = item.x
        item.x = item.x + prev.x;
      }
      else if (!prev) {
        item.x = 0;
      }
      else {
        let differdate = itemDate - prevDate;
        let width = differdate / newdateSpan * newConWidth;
        if (width < this.minItemWidth) {
          width = this.minItemWidth;
          dateSpan -= minSpan;
          newConWidth -= this.minItemWidth;
          newdateSpan -= differdate;
        }
        item.x = prev.x + width;
        prev.width = width;
      }
      if (current.date === item.date) {
        current.x = item.x;
      }
      else if ((prev && prev.date < current.date) && (current.date < item.date)) {
        current.x = prev.x + ((current.date - prev.date) / dateSpan * newConWidth);
      }
    });
    option.newConWidth = newConWidth;
    option.dateSpan = dateSpan;
    return option;
  }

  // 根据用户传入数据与dom宽度，平均分配节点对应位置
  computeAveragePositions(option) {
    const data = option.data;
    this.minItemWidth = option.minItemWidth || this.minItemWidth;
    let dateSpan = data[data.length - 1].date - data[0].date;
    let newConWidth = this.conWidth - (data[data.length - 1].tipsWidth  || option.itemStyle && option.itemStyle.maxWidth || 160) - 40;
    let width = newConWidth / (data.length - 1);
    width = width < this.minItemWidth ? this.minItemWidth : width;
    data.forEach((item, index) => {
      const current = this.option.current || { date: 0 };
      const prev = data[index - 1];
      item.width = width;
      item.x = width*index;
      if (current.date === item.date) {
        current.x = item.x;
      }
      else if ((prev && prev.date < current.date) && current.date < item.date) {
        current.x = prev.x + ((current.date - prev.date) / dateSpan * newConWidth);
      }
    });
    option.dateSpan = dateSpan;
    option.newConWidth = newConWidth;
    return option;
  }

  // 设置含tips的节点定位信息
  setTipsPosition(option) {
    const layout = option.layout;
    const alignment = option.alignment;
    option.data.forEach((item, index) => {
      if (layout == 'interlaced') {
        item.position = index % 2 === 0 ? 'down-' + alignment : 'up-' + alignment;
      } else {
        item.position = layout+ '-' +alignment
      }
    });
    option.data.forEach(item => {
      item.dom.classList.add(item.position);
    });
  }
}

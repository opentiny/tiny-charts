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
/**
 * 根据传入数据的 nodes 和 edges 计算出绘制流程图需要的位置信息
 * 包括节点位置和边的位置
 */
export default class Layout {
  data;
  option;
  // 节点最小宽度
  minItemWidth = 120;
  size = 12;

  constructor(data, option, dom) {
    this.dom = dom;
    this.scaleCon = this.dom.getElementsByClassName('mc-scales')[0];
    
    this.data = data;
    this.option = option;
    let len = data.length;
    option.minItemWidth = this.option.minItemWidth || this.minItemWidth;
    let maxSize = option.itemStyle.iconSize;
    maxSize = data[0].icon && data[0].icon.size > maxSize ? data[0].icon.size : maxSize;
    maxSize = data[len - 1].icon && data[len - 1].icon.size > maxSize ? data[len - 1].icon.size : maxSize;
    this.option.maxSize = maxSize;
    this.conWidth = this.scaleCon.offsetWidth - maxSize ;
  }

  /**
   * 执行位置算法
   */
  // 根据用户传入数据与dom宽度，计算节点对应位置
  computePositions(option) {
    const data = option.data;
    const len = data.length;
    let minItemWidth = option.minItemWidth;
    let dateSpan = data[len - 1].date - data[0].date; // 总时间
    let minSpan = (minItemWidth / this.conWidth) * dateSpan; // 最小时间间隔宽度
    const minDiff = this.getMinDiff(data); // 获取所有时间中最下间隔值
    // 预留两边的间距，用于两边内容可正常显示
    let extrasWidth = minDiff < minSpan ? minItemWidth : (minDiff / dateSpan) * this.conWidth; 
    extrasWidth = extrasWidth == Infinity ? this.conWidth : extrasWidth
    this.computePitch(extrasWidth);
    let newConWidth = this.conWidth - extrasWidth - 20;
    data.forEach((item, index) => {
      const prev = data[index - 1];
      const prevDate = prev && prev.date || 0;
      const itemDate = item && item.date || 0;
      let differdate = itemDate - prevDate;
      item.min = false;
      if (prev && differdate < minSpan) {
        item.min = true;
        item.x = minItemWidth;
        newConWidth -= minItemWidth;
        dateSpan -= differdate;
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
        let width = differdate / dateSpan * newConWidth;
        if (width < minItemWidth) {
          width = minItemWidth;
        }
        item.x = prev.x + width;
        prev.width = width;
      }
      //计算‘今天’的位置
      if (current.date === item.date) {
        current.x = item.x;
      }
      else if ((prev && prev.date < current.date) && (current.date < item.date)) {
        current.x = prev.x + (((current.date - prev.date) / (item.date - prev.date)) * prev.width );
      }
    });
    option.newConWidth = newConWidth;
    return option;
  }

  // 根据用户传入数据与dom宽度，平均分配节点对应位置
  computeAveragePositions(option) {
    const data = option.data;
    const len = data.length;
    let minItemWidth = option.minItemWidth;
    let width = this.conWidth / len;
    width = width < minItemWidth ? minItemWidth : width;  
    this.computePitch(width)
    let newConWidth = this.conWidth - width
    data.forEach((item, index) => {
      const current = this.option.current || { date: 0 };
      const prev = data[index - 1];
      item.width = width;
      item.x = width*index;
      if (current.date === item.date) {
        current.x = item.x;
      }
      else if ((prev && prev.date < current.date) && current.date < item.date) {
        current.x = prev.x + (((current.date - prev.date) / (item.date - prev.date)) * prev.width );
      }
    });
    option.newConWidth = newConWidth;
    return option;
  }

  // 获取date最小间值
  getMinDiff(arr) {
    let minDiff = Infinity;
    for (let i = 1; i < arr.length; i++) {
      const diff = Math.abs(arr[i].date - arr[i - 1].date );
      if (diff < minDiff) {
        minDiff = diff;
      }
    }
    return minDiff;
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

  // 计算两边预留间距  26为两侧操作按钮大小
  computePitch(width) {
    width = width - 16;
    let num = [];
    let padding = '';
    const option = this.option;
    let data = option.data;
    const len = data.length;
    option.extrasWidth = width;
    if (option.alignment === 'left') {
      num = width;
      padding = '0 ' + num + 'px' + ' 0 26px';
      num = [num];
      data[len-1].tipsWidth = width
    } else if (option.alignment === 'right') {
      num = width;
      padding = '0 26px 0 ' + num + 'px';
      num = [num];
      data[0].tipsWidth = width
    } else {
      num = [width / 2 , width / 2];
      padding = '0 ' + num[1] + 'px' + ' 0 ' + num[0] + 'px';
      data[len-1].tipsWidth = width
    }
    option.padding = padding;
    option.newPitch = num;
  }
}

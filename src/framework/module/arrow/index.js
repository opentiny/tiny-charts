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
export default class Arrow {
  constructor(option, container) {
    this.option = option;
    this.container = container;
  }

  render() {
    const data = this.option;
    const markerType = `${data.position}_${data.type}`;
    let start_block =
      `<marker id="start-marker-block-${data.id}" overflow="visible" orient="auto" markerUnits="userSpaceOnUse">
        <path stroke="${data.color}" fill="${data.color}" d="M 0 0 L ${data.size} -${data.size/2} L ${data.size} ${data.size/2} Z"></path>
      </marker>`;
    let start_classic =
      `<marker id="start-marker-classic-${data.id}" overflow="visible" orient="auto" markerUnits="userSpaceOnUse">
        <path stroke="${data.color}" fill="${data.color}" d="M 0 0 L ${data.size} -${data.size/2} L ${data.size*3/4} 0 L ${data.size} ${data.size/2} Z"></path>
      </marker>`;
    let start_diamond = 
      `<marker id="start-marker-diamond-${data.id}" overflow="visible" orient="auto" markerUnits="userSpaceOnUse">
        <path stroke="${data.color}" fill="${data.color}" d="M 0 0 L ${data.size/2} -${data.size/2} L ${data.size} 0 L ${data.size/2} ${data.size/2} Z"></path>
      </marker>`;
    let start_cross =
      `<marker id="start-marker-cross-${data.id}" overflow="visible" orient="auto" markerUnits="userSpaceOnUse">
        <path stroke="${data.color}" fill="none" d="M 0 -${data.size/2} L ${data.size} ${data.size/2} M 0 ${data.size/2} L ${data.size} -${data.size/2}"></path>
      </marker>`;
    let start_async =
      `<marker id="start-marker-async-${data.id}" overflow="visible" orient="auto" markerUnits="userSpaceOnUse">
        <path stroke="${data.color}" fill="${data.color}"  d="M 0 0 L ${data.size} -${data.size} L ${data.size} 0 Z"></path>
      </marker>`; 
    let start_circle =
      `<marker id="start-marker-circle-${data.id}" overflow="visible" orient="auto" markerUnits="userSpaceOnUse">
        <circle stroke="${data.color}" fill="${data.color}" cx="${data.size/2}" width="${data.size}" height="${data.size}" offset="0" r="${data.size/2}"></circle>
      </marker>`;   
    let end_block =
      `<marker id="end-marker-block-${data.id}" overflow="visible" orient="auto" markerUnits="userSpaceOnUse">
        <path stroke="${data.color}" fill="${data.color}" transform="rotate(180)" d="M 0 0 L ${data.size} -${data.size/2} L ${data.size} ${data.size/2} Z"></path>
      </marker>`;
    let end_classic =
      `<marker id="end-marker-classic-${data.id}" overflow="visible" orient="auto" markerUnits="userSpaceOnUse">
        <path stroke="${data.color}" fill="${data.color}" transform="rotate(180)" d="M 0 0 L ${data.size} -${data.size/2} L ${data.size*3/4} 0 L ${data.size} ${data.size/2} Z"></path>
      </marker>`;
    let end_diamond = 
      `<marker id="end-marker-diamond-${data.id}" overflow="visible" orient="auto" markerUnits="userSpaceOnUse">
        <path stroke="${data.color}" fill="${data.color}" transform="rotate(180)" d="M 0 0 L ${data.size/2} -${data.size/2} L ${data.size} 0 L ${data.size/2} ${data.size/2} Z"></path>
      </marker>`;
    let end_cross =
      `<marker id="end-marker-cross-${data.id}" overflow="visible" orient="auto" markerUnits="userSpaceOnUse">
        <path stroke="${data.color}" fill="none" transform="rotate(180)" d="M 0 -${data.size/2} L ${data.size} ${data.size/2} M 0 ${data.size/2} L ${data.size} -${data.size/2}"></path>
      </marker>`;
    let end_async =
      `<marker id="end-marker-async-${data.id}" overflow="visible" orient="auto" markerUnits="userSpaceOnUse">
        <path stroke="${data.color}" fill="${data.color}" transform="rotate(180)" d="M 0 0 L ${data.size} -${data.size} L ${data.size} 0 Z"></path>
      </marker>`; 
    let end_circle =
      `<marker id="end-marker-circle-${data.id}" overflow="visible" orient="auto" markerUnits="userSpaceOnUse">
        <circle stroke="${data.color}" fill="${data.color}" cx="-${data.size/2}" width="${data.size}" height="${data.size}" offset="0" r="${data.size/2}"></circle>
      </marker>`;    
      
    let start_path =
      `<marker id="end-marker-path-${data.id}" overflow="visible" orient="auto" markerUnits="userSpaceOnUse">
        <path fill="${data.fill || data.color}" d="${data.d}" strokeWidth="${data.strokeWidth || 1}" stroke="${data.stroke || data.color}"></path>
      </marker>`; 
    let end_path =
      `<marker id="end-marker-path-${data.id}" overflow="visible" orient="auto" markerUnits="userSpaceOnUse">
        <path fill="${data.fill || data.color}" d="${data.d}" transform="rotate(180)" strokeWidth="${data.strokeWidth || 1}" stroke="${data.stroke || data.color}"></path>
      </marker>`; 
    let markerHtml = {
      start_block,
      start_classic,
      start_diamond,
      start_cross,
      start_async,
      start_circle,
      end_block,
      end_classic,
      end_diamond,
      end_cross,
      end_async,
      end_circle,
      start_path,
      end_path,
    }
    this.container.getElementsByTagName('defs')[0].insertAdjacentHTML('beforeend', `${markerHtml[markerType]}`);
  }
}

import {appendEL,addClass,createEl,attr,renderSvgDom} from './util.js';

function initSvgContainer(wrapper,_this) { 
    const svgEl=renderSvgDom('svg')
    _this.svgElement=svgEl
    attr(svgEl,'xmlns','http://www.w3.org/2000/svg') 
    attr(svgEl,'version','1.1')
    attr(svgEl,'width','100%')
    attr(svgEl,'height','100%')
    attr(svgEl,'class','rc_svg_container')
    appendEL(wrapper,svgEl)
}

function initNodeContainer(wrapper,_this){
    const  nodeContainerEl=createEl('div')
    _this.nodeContainer=nodeContainerEl
    addClass(nodeContainerEl,'rc_node_container')
    appendEL(wrapper,nodeContainerEl)
}

function initWrapper(container,_this){ 
   const wrapperEl=createEl('div')
   _this.wrapper=wrapperEl
   addClass(wrapperEl,'rc_wrapper')
   appendEL(container,wrapperEl)
   initSvgContainer(wrapperEl,_this)
   initNodeContainer(wrapperEl,_this)
}

export  {
    initWrapper
}
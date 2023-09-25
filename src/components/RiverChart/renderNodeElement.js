
import {createEl ,addClass,setStyle} from './util'

function renderNodeElement(nodePosition,nodeContainer,option){
    const  renderPar =option?.render
    nodePosition.forEach(item => {
        item.forEach(node => {
            const {render,position:{x,y,width,height}} =node
            const nodeEl=createEl('div')
            addClass(nodeEl,'rc_node')
            setStyle(nodeEl,'left',x+'px')
            setStyle(nodeEl,'top',y+'px')
            setStyle(nodeEl,'width',width+'px')
            setStyle(nodeEl,'height',height+'px')
            const renderFn=render||renderPar
            if(renderFn){
                const customNode=renderFn(node)
                if(customNode) nodeEl.appendChild(customNode)
            }
            nodeContainer.appendChild(nodeEl)
        });
      });

}

export default  renderNodeElement
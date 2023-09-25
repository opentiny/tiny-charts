import React, { Component, useState, FC, useEffect } from 'react'
import './Expand'
import './ExpandDark'

interface ExpandCollapseProps {
  /**
   * 是否必传
   */
  required?: boolean
  /**
   * 配置项类型
   */
  type?: string
  /**
   * 是否有默认值
   */
  defaults?: any
  /**
   * 配置项名称
   */
  name?: any
  /**
   * 说明
   */
  illustrate?: any
  /**
   * 默认值
   */
  value?: any
  /**
   * 传递进来的文件名
   */
  changeName?: any
  /**
   * 属性简介
   */
  introduce
}

const ExpandCollapse: FC<ExpandCollapseProps> = (props) => {
  const changeName = props.changeName
  const [open, setOpen] = useState(false)
  const handleClick = () => {
    setOpen(!open)
  }
  // 文件变化  开关关上
  useEffect(() => {
    setOpen(false)
  }, [changeName])

  const { type, defaults, required, name, children, introduce } = props
  const cls = open ? 'ev_expand_show' : 'ev_expand_hide'
  return (
    <div className='ev_exp' >
      <div className='ev_expand' onClick={handleClick}>
        {children && <div className={`ev_expand_icon ${cls}`} />}
        {name && <div className='ev_expand_name'>{name}</div>}
        {introduce && <div className='ev_expand_introduce'>{introduce}</div>}
        <div className='ev_expand_liubai'></div>
        {type && <span className="ev_expand_type">{type}</span>}
        {defaults && <span className='ev_expand_defaults'>{defaults}</span>}
        {required && <span className='ev_expand_required'>{required}</span>}
      </div>
      <div className='ev_expand_children' style={{ display: open ? 'block' : 'none' }}>
        {children}
      </div>
    </div>
  )
}
export default ExpandCollapse

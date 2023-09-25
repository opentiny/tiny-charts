import React, { useEffect, useState } from 'react'
import MarkdownElement from '../MarkdownElement';
import ExpandCollapse from './ExpandCollapse';

export default function configDescription(props) {
  // 修改md不传入的页面报错
  if (!props.configDescription_zh) {
    return null
  }
  const config = props.configDescription_zh;
  // 取出api数据
  const apiData = config.match(/<api(([\s\S])*?)<\/api>/g);
  const mark = [];
  apiData.forEach(item => {
    item = item.substring(item.indexOf('</defaults>') + 11);
    mark.push(item);
  });
  // 取出标题
  const titleData = config.match(/<title(([\s\S])*?)<\/title>/g);
  let titleVal = '';
  titleVal = titleData[0].replace('<title>', '');
  titleVal = titleVal.replace('</title>', '');
  // 取出name数据
  const arry = config.match(/<name(([\s\S])*?)<\/name>/g);
  const array = [];
  if (arry) {
    for (let i = 0; i < arry.length; i++) {
      array.push(arry[i]);
    }
  }
  const newArray = [];
  array.forEach(item => {
    let items = '';
    items = item.replace('<name>', '');
    items = items.replace('</name>', '');
    newArray.push({ name: items });
  });
  // 取出type数据
  const arryType = config.match(/<type(([\s\S])*?)<\/type>/g);
  if (arryType) {
    for (let i = 0; i < arryType.length; i++) {
      let item = '';
      item = arryType[i].replace('<type>', '');
      item = item.replace('</type>', '');
      newArray[i].type = item;
    }
  }
  // 取出required数据
  const arryReq = config.match(/<required(([\s\S])*?)<\/required>/g);
  if (arryReq) {
    for (let i = 0; i < arryReq.length; i++) {
      let item = '';
      item = arryReq[i].replace('<required>', '');
      item = item.replace('</required>', '');
      newArray[i].required = item;
    }
  }
  // 取出defaults数据
  const arryDef = config.match(/<defaults(([\s\S])*?)<\/defaults>/g);
  if (arryDef) {
    for (let i = 0; i < arryDef.length; i++) {
      let item = '';
      item = arryDef[i].replace('<defaults>', '');
      item = item.replace('</defaults>', '');
      newArray[i].defaults = item;
    }
  }
  // 取出introduce数据
  const arryInt = config.match(/<introduce(([\s\S])*?)<\/introduce>/g);
  if (arryInt) {
    for (let i = 0; i < arryInt.length; i++) {
      let item = '';
      item = arryInt[i].replace('<introduce>', '');
      item = item.replace('</introduce>', '');
      newArray[i].introduce = item;
    }
  }
  // 给数组保留原始的index，便于排序之后将父级和子级绑定
  newArray.forEach((item, index) => {
    item.index = index
  })
  // 数据排序
  newArray.sort(function (a, b) {
    return a.name[0].charCodeAt() - b.name[0].charCodeAt()
  })
  // 获取新的child
  const childData = []
  const titleMatch = config.match(/<p class='ev_expand_title'(([\s\S])*?)<span class='ev_expand_required'>/g);
  if (titleMatch !== null) {
    for (let i = 0; i < titleMatch.length; i++) {
      let item = '';
      item = titleMatch[i].replace("<p class='ev_expand_title'>", '')
      item = item.replace("<span class='ev_expand_required'>", '')
      item = item.substring(0, item.indexOf('.'))
      if (!childData.includes(item)) {
        childData.push(item)
      }
    }
    newArray.forEach((item) => {
      item.padding = '12px 32px'
      childData.forEach((itemc) => {
        if (item.name === itemc) {
          item.child = true
          item.padding = '12px 32px 44px'
        }
      })
    })
  } else {
    newArray.forEach((item) => {
      item.padding = '12px 32px'
    })
  }
  const configDescription = () => {
    return newArray.map((item, index) => {
      return (
        item.name && (
          <ExpandCollapse
            key={index}
            name={item.name}
            type={item.type}
            required={item.required}
            defaults={item.defaults}
            introduce={item.introduce}
            changeName={config}
          >
            <MarkdownElement
              text={mark[item.index]}
              style={{
                marginBottom: '0px',
                fontSize: '14px',
                lineHeight: '32px',
                background: '#f5f5f5',
                // padding: item.padding
                padding: '12px 44px 44px'
              }}
            />

          </ExpandCollapse>
        )
      );
    });
  };
  return (
    <React.Fragment>
      <MarkdownElement text={titleVal} style={{ marginBottom: '15px' }} />
      {configDescription()}
    </React.Fragment>
  )
}


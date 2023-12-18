import React from 'react';

export default function Header() {
  return (
    <div className='tokenDemo_header example_container'>
      <div className="example_header">
        <div className="example_header_left">
          <img src="../../../../public/image/md/logo@3x.png" />
          <span style={{ color: '#fff' }}>华为</span>
        </div>
        <div className="example_header_right">
          <input type="text" placeholder="请输入" />
          <img src="../../../../public/image/md/info.svg" />
          <span className="line" />
          <img className="avatar" src='../../../../public/image/md/man.png' />
          <img src="../../../../public/image/md/arrow.svg" />
          <img src='../../../../public/image/md/more.svg'></img>
        </div>
      </div>
    </div>
  );
}

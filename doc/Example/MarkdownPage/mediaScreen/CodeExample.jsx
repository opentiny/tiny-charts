import React, { useState } from 'react';
import MarkdownElement from '../../../components/MarkdownElement';

export default function CodeExample(props) {
  const { code, children, title, className } = props;
  const [showOption, setShowOption] = useState(false);

  const btnClick = () => {
    setShowOption(!showOption);
  };

  const text = `\`\`\`javascript
${code}
  \`\`\``;

  return (
    <div className={`codeContainer ic-example-explore ${className}`}>
      <h4 className='codeHeader'>
        {title}
      </h4>
      <div className='codeContent'>
        {children}
      </div>
      <div className={'codeFooter'}>
        <div className={`codeBtnContainer ${showOption ? 'expand' : 'close'}`} onClick={btnClick}>
          <div title={'查看代码'}>
            <div className={`codeBtn ${showOption ? 'expand' : 'close'}`}></div>
            <div className='showCode'>查看代码</div>
          </div>
        </div>
        <MarkdownElement
          className="code-block-box"
          text={text}
          style={{ display: showOption ? 'block' : 'none' }}
        />
      </div>
    </div>
  );
}
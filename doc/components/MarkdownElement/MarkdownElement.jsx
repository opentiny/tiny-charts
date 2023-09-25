import React, { Component } from 'react';
import PropTypes from 'prop-types';
import marked from 'marked';
import highlight from 'highlight.js';

import './mui-github-markdown.less';
import './mui-github-markdown_dark.less';
import './mui-github-markdown_orange_white.less';
import './mui-github-markdown_orange_dark.less';

const styles = {
  root: {
    marginTop: 20,
    marginBottom: 20,
  },
};

class MarkdownElement extends Component {
  static propTypes = {
    style: PropTypes.object,
    text: PropTypes.string.isRequired,
    className: PropTypes.string,
  };

  static defaultProps = {
    text: '',
  };

  componentWillMount() {
    marked.setOptions({
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: false,
      smartLists: true,
      smartypants: false,
      highlight(code, lang) {
        return highlight.highlight(lang, code).value;
      },
    });
  }

  componentDidMount() {
    // 表格中的new deprecated标签的统一处理
    let emTags = document.getElementsByTagName('em') || [];
    emTags = Array.from(emTags);
    emTags.forEach(item => {
      if (item.outerText == 'new') {
        const newTag = document.createElement('span');
        newTag.className = 'new-tag';
        newTag.innerText = 'new';
        item.parentNode.replaceChild(newTag, item);
      } else if (item.outerText == 'deprecated') {
        const newTag = document.createElement('span');
        newTag.className = 'deprecated-tag';
        newTag.innerText = 'deprecated';
        item.parentNode.replaceChild(newTag, item);
      }
    });
  }

  render() {
    const { style, text, className } = this.props;
    /* eslint-disable react/no-danger */
    return (
      <div
        style={style}
        className={`markdown-body ${this.props.className}`}
        dangerouslySetInnerHTML={{ __html: marked(text) }}
      />
    );
    /* eslint-enable */
  }
}

export default MarkdownElement;

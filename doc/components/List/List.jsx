import React, { useState, useEffect } from 'react';
import cloneDeep from '../../../src/util/cloneDeep';
const List = props => {
  const { title, paths, theme, jsiframe } = props;
  const [menuData, setMenuData] = useState([]);
  const [value, setValue] = useState('');
  const [isOnComposition, setComposition] = useState(false);
  const [cardCount, setCardCount] = useState(5);
  const jumpToPlayGround = (event, routePath) => {
    window.open(`./playground.html?name=${routePath}&theme=${theme}&jsiframe=${jsiframe}`);
  };
  useEffect(() => {
    setValue('');
    searchValue();
  }, [props.paths]);
  useEffect(() => {
    if (!isOnComposition) {
      searchValue();
      onResize();
      window.addEventListener('resize', onResize); // 监听屏幕大小变化
    }
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, [value, isOnComposition]);
  const onResize = () => {
    if (document.body.clientWidth < 460) {
      setCardCount(1);
    } else if (document.body.clientWidth < 767 && document.body.clientWidth >= 460) {
      setCardCount(2);
    } else if (document.body.clientWidth < 900 && document.body.clientWidth >= 767) {
      setCardCount(3);
    } else if (document.body.clientWidth <= 1440 && document.body.clientWidth >= 900) {
      setCardCount(4);
    } else {
      setCardCount(5);
    }
  };
  const searchValue = () => {
    let menuData = cloneDeep(paths);
    setMenuData(menuData);
    // 筛选组件
    var filterData = [];
    menuData.forEach(el => {
      let filter = false;
      let filterItem = {
        title: el.title,
        children: [],
      };
      el.children.forEach(item => {
        if (item.name.indexOf(value) !== -1) {
          filter = true;
          filterItem.children.push(item);
        }
      });
      filter && filterData.push(filterItem);
    });
    setMenuData(filterData);
  };

  const chenageValue = e => {
    setValue(e.target.value);
  };

  const handleComposition = e => {
    if (e.type === 'compositionend') {
      // composition is end
      setComposition(false);
    } else {
      // in composition
      setComposition(true);
    }
  };
  const compMap = () => {
    // 循环卡片类别
    return (
      menuData &&
      menuData.map((item, index) => {
        return (
          <React.Fragment key={index}>
            <div className="chart-title">
              <h3>{item.title}</h3>
            </div>
            <div className="ic-example-card">{chMap(item.children)}</div>
          </React.Fragment>
        );
      })
    );
  };
  const chMap = data => {
    // 循环卡片组件
    return (
      data &&
      data.map((item, index) => {
        const imagePath = item.imagePath.split('/');
        imagePath[2] = theme;
        const newImagePath = imagePath.join('/');
        return (
          <div
            className="ic-example-list-box"
            key={index}
            onClick={e => {
              jumpToPlayGround(e, item.routePath);
            }}
            style={(index + 1) % cardCount === 0 ? { marginRight: 0 } : {}}
          >
            {' '}
            <div className="ic_box_title">{item.name}</div>
            <div className="ic_box_conten">
              <img className="ic-example-list-image" src={newImagePath} />
            </div>
          </div>
        );
      })
    );
  };
  return (
    <div className="ic-example-list" id={title}>
      <div className="ic-example-list-title">
        {title}
        {/* <span className="ic-example-list-bubbles">{menuData && menuData.length}</span> */}
      </div>
      <div className="ic-example-list-search">
        <i className="ic-example-list-icon" onClick={searchValue} />
        <input
          type="text"
          className="ic-example-list-input"
          placeholder="搜索组件"
          value={value}
          onChange={e => {
            chenageValue(e);
          }}
          onBlur={searchValue}
          onCompositionStart={handleComposition}
          onCompositionEnd={handleComposition}
        />
      </div>

      <div className="">{compMap()}</div>
    </div>
  );
};

export default List;

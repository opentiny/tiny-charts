import React, { useState, useEffect } from 'react';

import Accordion from '@nce/eview-react/Accordion';
import Icon from '@nce/eview-react/Icon';
import { IntlProvider } from 'react-intl';
import cloneDeep from 'lodash/cloneDeep';
import './index.less';
import './dark.less';
import { versionNumber, updateTime, NAV_DATA } from './data'
function Menu() {
    const [navVal, setNavVal] = useState('ReadMe')
    const [isSeach, setSeach] = useState(false)
    const [searchValue, setSeachValue] = useState('')
    const [menuData, setMenuData] = useState([])
    const [isShowNav, setShowNav] = useState(false)
    const [isMobile, setMobile] = useState(false)
    const [iconColor,setIconColor]=useState('#191919')
    let darkMode=false
    const handleMode=()=>{
        const darkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');
        return darkMode.matches
    }
    // 监听电脑系统暗黑主题
    useEffect(()=>{
        darkMode=handleMode()
        const windowTheme = window.matchMedia('(prefers-color-scheme: dark)');
        windowTheme.addListener(e => {
            darkMode=handleMode()
        });
        setIconColor(darkMode?'#fff':'#191919')
        const hash = window.location.hash.split('/')
        switchPage(hash[2])
        if (isShowNav) {
            setShowNav(true)
        }
    })
    // 监听url进行重新跳转
    useEffect(() => {
        const hash = window.location.hash.split('/')
        switchPage(hash[2])
    }, [window.location.hash])
    // 点击跳转路由
    const switchPage = data => {
        if (data === '0') {
            return
        }
        if (data === '1') {
            return
        }
        if (isShowNav) {
            setShowNav(false)
        }
        setNavVal(data)
        location.hash = `#/Menu/${data}`;
        // 网站部署添加
        window.parent.postMessage(
            {
              action: 'routechange',
              module: 'hui',
              iframeRoute: `/${data}`,
            },
            '*',
          );
        // 修改iframe的src
        const iframe = document.getElementById('ic-iframe')
        const theme = darkMode?'dark':'light'
        const jsiframe = 'origin'
        iframe.src = `./example.html#/Example/${data}?theme=${theme}&jsiframe=${jsiframe}`;
    }
    // 点击搜索，筛选数据
    const searchItem = () => {
        let menuData = [];
        // 使用深拷贝 复制数据
        const defaultData = cloneDeep(NAV_DATA);
        const filterObj = item => {
            if (item.title.toLowerCase().indexOf(searchValue.toLowerCase()) > -1) return true;
            if (item.children) {
                item.children = item.children.filter(child => {
                    if (child.title.toLowerCase().indexOf(searchValue.toLowerCase()) > -1) return true;
                });
                if (item.children.length > 0) {
                    return true;
                }
            } else {
                return item.title.toLowerCase().indexOf(searchValue.toLowerCase()) > -1;
            }
        };
        menuData = defaultData.filter(item => {
            return filterObj(item);
        });
        setMenuData(menuData)
    };
    // 监听val变化进行筛选
    useEffect(() => {
        searchItem()
    }, [searchValue])

    // 监听seach变化进行输入框聚焦
    useEffect(() => {
        const txtInput = document.getElementById('txtInput');
        if (isSeach) {
            txtInput.focus();
        }
    }, [isSeach])
    useEffect(() => {
        window.addEventListener('click', listenClick) // 监听屏幕点击事件
        onResize()
        window.addEventListener('resize', onResize); // 监听屏幕大小变化
        return () => {
            window.removeEventListener('click', listenClick)
            window.removeEventListener('resize', onResize);
        }
    }, [])
    const onResize = () => {
        if (document.body.clientWidth <= 1200) {
            setMobile(true)
        } else {
            setMobile(false)
            setShowNav(false)
        }
    };
    const listenClick = () => {
        const e = window.event;
        if (
            e.target.className !== 'version-seach seach-focus' &&
            e.target.className !== 'version-seach' &&
            e.target.className !== 'v-seach-icon' &&
            e.target.className !== 'v-close' &&
            e.target.className !== 'v-input' &&
            e.target.className !== 'v-seach-span'
        ) {
            setSeach(false)
            setSeachValue('')
        }
    };
    return (
        <IntlProvider locale={'zh'}>
            <div className={isShowNav ? 'ic-nav toggle' : 'ic-nav'}>
                <div className="ic-version-box">
                    <div className="version-title">HUI-Charts</div>
                    <div className="version-info">
                        <div className="version-date">
                            版本号：<span>{versionNumber}</span>
                        </div>
                        <div className="version-date">
                            更新时间：<span>{updateTime}</span>
                        </div>
                    </div>
                    <div
                        className={isSeach ? 'version-seach seach-focus' : 'version-seach'}
                        onClick={() => setSeach(true)}
                    >
                        {isSeach ? (
                            <>
                                <i className="v-seach-icon" onClick={searchItem} />
                                <input
                                    type="text"
                                    className="v-input"
                                    placeholder="Search"
                                    value={searchValue}
                                    id="txtInput"
                                    onChange={(e) => setSeachValue(e.target.value)}
                                    autoComplete="off"
                                />
                                <i className="v-close" onClick={() => setSeachValue('')} />
                            </>
                        ) : (
                            <span className="v-seach-span">
                                <i className="v-seach-icon" onClick={searchItem} />
                                Search
                            </span>
                        )}
                    </div>
                </div>
                <Accordion
                    data={menuData}
                    enableExpand={false}
                    expand={false}
                    hideIcons={true}
                    hideTitleBar={true}
                    className='ic-Accordion'
                    enableMultiOpen
                    onClick={(item) => { switchPage(item.value) }}
                    selectedValue={navVal}
                />
            </div>
            {isMobile && (
                <Icon
                    name={isShowNav ? 'ict_menuLeft' : 'ict_menuRight'}
                    size={[24, 24]}
                    title={isShowNav ? 'ict_menuLeft' : 'ict_menuRight'}
                    className={isShowNav ? 'resize-bar toggle' : 'resize-bar'}
                    onClick={() => setShowNav(!isShowNav)}
                    isStandard={false}
                    color={iconColor}
                />
            )}
            {isMobile && isShowNav ? <div className="navigaion-mask" /> : ''}
        </IntlProvider >
    );
}

export default Menu;

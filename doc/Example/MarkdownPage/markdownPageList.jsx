import MarkdownPage from './MarkdownPage';
import React from 'react';
import mediaScreen from './mediaScreen';
// 快速开始
const quickStart = [
    {
        name: 'ReadMe',
        path: 'quick_start/readme.md',
    },
    {
        name: 'Theme',
        path: 'quick_start/theme.md',
    },
    {
        name: 'DataStatus',
        path: 'quick_start/dataStatus.md',
    },
    {
        name: 'Events',
        path: 'quick_start/events.md',
    },
    {
        name: 'ChangeLog',
        path: 'quick_start/changeLog.md',
    },
];

// 解决方案
const solution = [
    {
        name: 'AxisMargin',
        path: 'quick_start/axisMargin.md',
    },
    {
        name: 'HighOrder',
        path: 'quick_start/highOrder.md',
    },
    {
        name: 'Mini',
        path: 'quick_start/mini.md',
    },
    {
        name: 'EChartsNative',
        path: 'quick_start/echartsNative.md',
    },
    {
        name: 'CustomTheme',
        path: 'quick_start/customTheme.md',
    },
    {
        name: 'LazyLoad',
        path: 'quick_start/lazyLoad.md',
    },
    {
        name: 'mediaScreen',
        component: mediaScreen,
        path: 'quick_start/mediaScreen.md',
    },
];


const markdownList = [
    ...quickStart,
    ...solution,
];

const markdownPageList = markdownList.map(item => {
    return { ...item, component: item.component ? item.component : () => <MarkdownPage path={item.path} /> };
});

export default markdownPageList;


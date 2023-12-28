import MarkdownPage from './MarkdownPage';
import React from 'react';

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
        name: 'DemandLoad',
        path: 'quick_start/demandLoad.md',
    },
    {
        name: 'HighOrder',
        path: 'quick_start/highOrder.md',
    },
    {
        name: 'CustomTheme',
        path: 'quick_start/customTheme.md',
    },
    {
        name: 'ReadScreen',
        path: 'quick_start/readScreen.md',
    },
    {
        name: 'LazyLoad',
        path: 'quick_start/lazyLoad.md',
    }
];

const markdownList = [
    ...quickStart,
    ...solution,
];

const markdownPageList = markdownList.map(item => {
    return { ...item, component: item.component ? item.component : () => <MarkdownPage path={item.path} /> };
});

export default markdownPageList;


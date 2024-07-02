/**
 * type='fan' 扇面图允许data为每条数据设置类型。
 * 同一类型的数据色值一致，从颜色组循环取色。
 */
const data = [
    { name: '站点-1', value: 2, type: 'a' },
    { name: '站点-2', value: 2, type: 'a' },
    { name: '站点-3', value: 2, type: 'a' },
    { name: '站点-4', value: 2, type: 'a' },
    { name: '站点-5', value: 2, type: 'b' },
    { name: '站点-6', value: 3, type: 'b' },
    { name: '站点-7', value: 4, type: 'b' },
    { name: '站点-8', value: 5, type: 'b' },
    { name: '站点-9', value: 8, type: 'b' },
    { name: '站点-10', value: 9, type: 'c' },
    { name: '站点-11', value: 15, type: 'c' },
    { name: '站点-12', value: 14, type: 'c' },
    { name: '站点-13', value: 15, type: 'c' },
    { name: '站点-14', value: 15, type: 'c' },
    { name: '站点-15', value: 17, type: 'a' },
    { name: '站点-16', value: 25, type: 'a' },
    { name: '站点-17', value: 15, type: 'a' },
    { name: '站点-18', value: 10, type: 'a' },
    { name: '站点-19', value: 7, type: 'a' },
    { name: '站点-20', value: 5, type: 'a' },
];
const option = {
    theme: 'light',
    type: 'fan',
    position: {
        center: ['50%', '50%'],
        radius: ['8%', '60%'],
    },
    data: data,
    color: ['#1f70f3', '#01a874', '#2cbbc9'],
    radiusAxis: {
        axisLabel: {
            color: '#999'
        },
    },
    angleAxis: {
        axisLabel: {
            color: '#555'
        },
    }
};
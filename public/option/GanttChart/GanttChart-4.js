const option = {
  theme: 'light',
  type: 'minute',
  tipHtml: (data, dataIndex, postIndex) => {
    let tagHtml;
    const status = data[dataIndex].data[postIndex].status;
    if (status === 'success') {
      tagHtml = '<span class=\'tag success\'>执行成功</span>';
    } else if (status === 'during') {
      tagHtml = '<span class=\'tag\'>执行中</span>';
    } else {
      tagHtml = '<span class=\'tag failed\'>执行失败</span>';
    }
    return `
            <p class='title'>${data[dataIndex].name}</p>
            ${tagHtml}
            <p class='time'>操作人员：xxx</p>
            <p class='time'>开始时间：${data[dataIndex].data[postIndex].startTime}</p>
            <p class='time'>结束时间：${data[dataIndex].data[postIndex].endTime}</p>
            <span class='ev_linkField'>查看报告</span>`;
  },
  currentTime: '2022-8-25 14:30:00',
  data: [
    {
      name: '科蓝贷款查询压测',
      data: [
        {
          startTime: '2022-8-25 13:30:32',
          endTime: '2022-8-25 13:32:30',
          status: 'during',
        },
        {
          startTime: '2022-8-25 13:39:28',
          endTime: '2022-8-25 13:40:53',
          status: 'during',
        },
        {
          startTime: '2022-8-25 13:45',
          endTime: '2022-8-25 13:44',
          status: 'success',
        },
      ]
    },
    {
      name: '多实例性能验证',
      data: [
        {
          startTime: '2022-8-25 13:42',
          endTime: '2022-8-25 13:46',
          status: 'success',
        },
        {
          startTime: '2022-8-25 14:18',
          endTime: '2022-8-25 14:32',
          status: 'success',
        },
      ]
    },
    {
      name: '科蓝贷款查询压测',
      data: [
        {
          startTime: '2022-8-25 13:50:20',
          endTime: '2022-8-25 13:53:41',
          status: 'success',
        },
      ]
    },
    {
      name: '科蓝贷款查询压测',
      data: [
        {
          startTime: '2022-8-25 13:34:01',
          endTime: '2022-8-25 13:38:56',
          status: 'success',
        },
        {
          startTime: '2022-8-25 14:05:20',
          endTime: '2022-8-25 14:18:55',
          status: 'during',
        },
      ]
    },
    {
      name: '多实例性能验证',
      data: [
        {
          startTime: '2022-8-25 13:56:26',
          endTime: '2022-8-25 14:10:01',
          status: 'failed',
        },
        {
          startTime: '2022-8-25 14:18:17',
          endTime: '2022-8-25 14:20:05',
          status: 'failed',
        },
      ]
    },
    {
      name: '科蓝贷款查询压测',
      data: [
        {
          startTime: '2022-8-25 13:34:44',
          endTime: '2022-8-25 13:38:22',
          status: 'failed',
        },
      ]
    },
    {
      name: '科蓝贷款查询压测',
      data: [
        {
          startTime: '2022-8-25 13:46:44',
          endTime: '2022-8-25 13:47:10',
          status: 'during',
        },
      ]
    },
    {
      name: '科蓝贷款查询压测',
      data: [
        {
          startTime: '2022-8-25 13:56:52',
          endTime: '2022-8-25 14:01:38',
          status: 'success',
        },
      ]
    },
  ],
};
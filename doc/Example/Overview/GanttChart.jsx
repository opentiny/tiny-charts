import React, { useEffect, useRef, useState } from 'react';
import GanttChart from '../../../src/components/GanttChart';

const GanttChartDemo = props => {
  let theme = props.theme;
  const ganttChartRef = useRef();
  const [chartIns, setChartIns] = useState(new GanttChart());

  let chartOpt = {
    theme: `hwCloud-${theme}`,
    type: 'minute',
    currentTime: "2022-8-25 14:30:00",
    data: [
      {
        name: '科蓝贷款查询压测',
        data: [
          {
            startTime: "2022-8-25 13:30:30",
            endTime: "2022-8-25 13:32:30",
            status: 'during',
          },
          {
            startTime: "2022-8-25 13:39:28",
            endTime: "2022-8-25 13:40:58",
            status: 'during',
          },
          {
            startTime: "2022-8-25 13:45",
            endTime: "2022-8-25 13:48",
            status: 'success',
          },
        ]
      },
      {
        name: '多实例性能验证',
        data: [
          {
            startTime: "2022-8-25 13:40",
            endTime: "2022-8-25 13:46",
            status: 'success',
          },
          {
            startTime: "2022-8-25 14:18",
            endTime: "2022-8-25 14:30",
            status: 'success',
          },
        ]
      },
      {
        name: '科蓝贷款查询压测',
        data: [
          {
            startTime: "2022-8-25 13:50:20",
            endTime: "2022-8-25 13:53:45",
            status: 'success',
          },
        ]
      },
      {
        name: '科蓝贷款查询压测',
        data: [
          {
            startTime: "2022-8-25 13:34:01",
            endTime: "2022-8-25 13:38:59",
            status: 'success',
          },
          {
            startTime: "2022-8-25 14:05:20",
            endTime: "2022-8-25 14:18:50",
            status: 'during',
          },
        ]
      },
      {
        name: '多实例性能验证',
        data: [
          {
            startTime: "2022-8-25 13:56:26",
            endTime: "2022-8-25 14:10:03",
            status: 'failed',
          },
          {
            startTime: "2022-8-25 14:18:13",
            endTime: "2022-8-25 14:20:00",
            status: 'failed',
          },
        ]
      },
      {
        name: '科蓝贷款查询压测',
        data: [
          {
            startTime: "2022-8-25 13:34:40",
            endTime: "2022-8-25 13:38:20",
            status: 'failed',
          },
        ]
      },
      {
        name: '科蓝贷款查询压测',
        data: [
          {
            startTime: "2022-8-25 13:46:45",
            endTime: "2022-8-25 13:47:00",
            status: 'during',
          },
        ]
      },
      {
        name: '科蓝贷款查询压测',
        data: [
          {
            startTime: "2022-8-25 13:56:55",
            endTime: "2022-8-25 14:01:30",
            status: 'success',
          },
        ]
      },
    ],
    tipHtml: (data, dataIndex, postIndex) => {
      let tagHtml;
      const status = data[dataIndex].data[postIndex].status;
      if (status === 'success') {
        tagHtml = "<span class='tag success'>执行成功</span>";
      } else if (status === 'during') {
        tagHtml = "<span class='tag'>执行中</span>";
      } else {
        tagHtml = "<span class='tag failed'>执行失败</span>";
      }
      return `
              <p class='title'>${data[dataIndex].name}</p>
              ${tagHtml}
              <p class='time'>操作人员：xxx</p>
              <p class='time'>开始时间：${data[dataIndex].data[postIndex].startTime}</p>
              <p class='time'>结束时间：${data[dataIndex].data[postIndex].endTime}</p>
              <span class='ev_linkField'>查看报告</span>`;
    },
  };

  useEffect(() => {
    chartIns.init(ganttChartRef.current);
    chartIns.setOption(chartOpt);
    return () => {
      chartIns.uninstall();
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (!props.shouldRender) { // 如果dom脱离视口，停止渲染
        return;
      }
      chartIns.render();
    }, 100);
  }, [props.shouldRender]);

  return <div style={{ width: '100%', height: '100%' }} ref={ganttChartRef}></div>;
};

export default GanttChartDemo;

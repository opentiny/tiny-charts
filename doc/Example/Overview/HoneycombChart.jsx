import React, { useEffect, useRef } from 'react';
import IntegrateChart from '../../../src/index';
import HoneycombChart from '../../../src/components/HoneycombChart';

const HoneycombChartDemo = props => {
    let theme = props.theme;
    const honeycombChartRef = useRef();

    useEffect(() => {
        let chartIns = new IntegrateChart();
        let chartOpt = {
            theme: `hwCloud-${theme}`,
            hGap: 6,
            vGap: -4,
            padding: '50px 30px',
            render: (container, data) => {
                let status = data.status;
                let node = `<div class="hc-node-example ${status} " style="background:url('../image/Doc/${status === 'error' ? 'hexagon-error' : 'hexagon'}.svg');width:30px;height:30px;background-size:30px 30px"><div>`;
                container.insertAdjacentHTML('beforeend', node);
            },
            tipHtml: (container, data) => {
                let tagHtml;
                const status = data.status;
                const name = data.name;
                if (status === 'success') {
                    tagHtml = `<div class='hc-tag success'>${name}：执行成功</div>`;
                } else if (status === 'error') {
                    tagHtml = `<div class='hc-tag failed'>${name}：执行失败</div>`;
                }
                container.insertAdjacentHTML('beforeend', tagHtml);
            },
            data: [
                {
                    name: 'node_1',
                    status: 'error',
                },
                {
                    name: 'node_2',
                    status: 'error',
                },
                {
                    name: 'node_3',
                    status: 'error',
                },
                {
                    name: 'node_4',
                    status: 'error',
                },
                {
                    name: 'node_5',
                    status: 'error',
                },
                {
                    name: 'node_6',
                    status: 'error',
                },
                {
                    name: 'node_7',
                    status: 'error',
                },
                {
                    name: 'node_8',
                    status: 'error',
                },
                {
                    name: 'node_9',
                    status: 'error',
                },
                {
                    name: 'node_10',
                    status: 'error',
                },
                {
                    name: 'node_11',
                    status: 'error',
                },
                {
                    name: 'node_12',
                    status: 'error',
                },
                {
                    name: 'node_13',
                    status: 'error',
                },
                {
                    name: 'node_14',
                    status: 'error',
                },
                {
                    name: 'node_15',
                    status: 'error',
                },
                {
                    name: 'node_16',
                    status: 'error',
                },
                {
                    name: 'node_17',
                    status: 'error',
                },
                {
                    name: 'node_18',
                    status: 'error',
                },
                {
                    name: 'node_19',
                    status: 'error',
                },
                {
                    name: 'node_20',
                    status: 'success',
                },
                {
                    name: 'node_21',
                    status: 'success',
                },
                {
                    name: 'node_22',
                    status: 'success',
                },
                {
                    name: 'node_23',
                    status: 'success',
                },
                {
                    name: 'node_24',
                    status: 'success',
                },
                {
                    name: 'node_25',
                    status: 'success',
                },
                {
                    name: 'node_26',
                    status: 'success',
                },
                {
                    name: 'node_27',
                    status: 'success',
                },
                {
                    name: 'node_28',
                    status: 'success',
                },
                {
                    name: 'node_29',
                    status: 'success',
                },
                {
                    name: 'node_30',
                    status: 'success',
                },
                {
                    name: 'node_31',
                    status: 'success',
                },
                {
                    name: 'node_32',
                    status: 'success',
                },
                {
                    name: 'node_33',
                    status: 'success',
                },
                {
                    name: 'node_34',
                    status: 'success',
                },
                {
                    name: 'node_35',
                    status: 'success',
                },
                {
                    name: 'node_36',
                    status: 'success',
                },
                {
                    name: 'node_37',
                    status: 'success',
                },
                {
                    name: 'node_38',
                    status: 'success',
                },
                {
                    name: 'node_39',
                    status: 'success',
                },
                {
                    name: 'node_40',
                    status: 'success',
                },
                {
                    name: 'node_41',
                    status: 'success',
                },
                {
                    name: 'node_42',
                    status: 'success',
                },
                {
                    name: 'node_43',
                    status: 'success',
                },
                {
                    name: 'node_44',
                    status: 'success',
                },
                {
                    name: 'node_45',
                    status: 'success',
                },
                {
                    name: 'node_46',
                    status: 'success',
                },
                {
                    name: 'node_47',
                    status: 'success',
                },
                {
                    name: 'node_48',
                    status: 'success',
                },
            ]
        };
        chartIns.init(honeycombChartRef.current);
        chartIns.setSimpleOption(HoneycombChart, chartOpt, {});
        setTimeout(() => {
            if (!props.shouldRender) { // 如果dom脱离视口，停止渲染
                return;
            }
            chartIns.render();
        }, 100);
    }, [props.shouldRender]);

    return <div style={{ width: '100%', height: '100%' }} ref={honeycombChartRef}></div>;
};

export default HoneycombChartDemo;

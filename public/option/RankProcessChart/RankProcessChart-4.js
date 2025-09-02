const option = {
    // 图表名称
    name: 'RankProcessChart',
    // 主题,默认值'hdesign-light'
    theme: 'hdesign-light',

    // padding控制图表距离容器的上、右、下、左padding值
    padding: [16, 16, 0, 16], 
    
    titleName: '团队成员',
    valueName: '工作时长',
    percentName: '效率',
    
    // Tooltip 自定义格式化配置
    tooltip: {
        show: true,
        formatter: function(params) {
            const { name, value, percent, color, content } = params;
            
            return `
                <div style="padding: 8px; min-width: 200px;">
                    <div style="font-weight: bold; font-size: 16px; margin-bottom: 8px; color: ${color};">
                        ${name}
                    </div>
                    <div style="margin-bottom: 4px;">
                        <span style="display: inline-block; width: 10px; height: 10px; background-color: ${color}; border-radius: 50%; margin-right: 8px;"></span>
                        工作时长: <strong>${value}小时</strong>
                    </div>
                    <div style="margin-bottom: 4px;">
                        效率指数: <strong>${percent}%</strong>
                    </div>
                    <div style="border-top: 1px solid #eee; padding-top: 6px; margin-top: 6px; font-size: 12px; color: #666;">
                        ${content}
                    </div>
                    <div style="text-align: right; font-size: 11px; color: #999; margin-top: 4px;">
                        数据更新时间: ${new Date().toLocaleTimeString()}
                    </div>
                </div>
            `;
        }
    },
    
    // 数据
    data: [
        { 
            name: '张三', 
            value: 42, 
            percent: 95, 
            content: '高级前端工程师，本周完成了用户界面优化和组件重构工作，表现优异' 
        },
        { 
            name: '李四', 
            value: 38, 
            percent: 88, 
            content: '后端开发工程师，负责API接口开发和数据库优化，进展顺利' 
        },
        { 
            name: '王五', 
            value: 35, 
            percent: 82, 
            content: '测试工程师，完成了自动化测试脚本编写和功能测试，质量保证到位' 
        },
        { 
            name: '赵六', 
            value: 40, 
            percent: 90, 
            content: '产品经理，负责需求分析和产品设计，沟通协调能力强' 
        },
        { 
            name: '钱七', 
            value: 33, 
            percent: 75, 
            content: 'UI设计师，完成了界面设计和交互原型，创意能力突出' 
        }
    ],
    
};


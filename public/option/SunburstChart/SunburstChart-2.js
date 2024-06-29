const option = {
    theme: 'light',
    series: {
        radius: [60, '65%'],// 自定义旭日图半径
        label: {
            show: false,
        },
        emphasis: {
            focus: 'ancestor'
        },
    },
    tipHtml: (params) => {
        let name = params.name === '' ? '--' : params.name;
        let value = params.value;
        let htmlString = `<div>
                <span style="display:inline-block;min-width:50px;">名称：</span>
                <span style="font-weight:bold">${name}</span>
            </div>`;
        htmlString +=
            `<div>
                <span style="display:inline-block;min-width:50px;">总数：</span>
                <span style="font-weight:bold">${value}</span>
            </div>`;
        return htmlString
    },
    data: [
        {
            name: 'a1',
            children: [
                {
                    value: 5,
                    name: 'a2',
                    children: [
                        {
                            value: 1,
                        },
                        {
                            value: 2,
                            children: [
                                {
                                    value: 1,
                                }
                            ]
                        },
                        {
                            children: [
                                {
                                    value: 1
                                }
                            ]
                        }
                    ],
                },
                {
                    value: 10,
                    name: 'a3',
                    children: [
                        {
                            value: 6,
                            children: [
                                {
                                    value: 1,
                                },
                                {
                                    value: 1
                                },
                                {
                                    value: 1,
                                },
                                {
                                    value: 2
                                }
                            ],
                        },
                        {
                            value: 2,
                            children: [
                                {
                                    value: 1
                                }
                            ],
                        },
                        {
                            children: [
                                {
                                    value: 1,
                                }
                            ]
                        }
                    ],
                }
            ],
        },
        {
            value: 9,
            name: 'b1',
            children: [
                {
                    value: 4,
                    name: 'b2',
                    children: [
                        {
                            value: 2,
                        },
                        {
                            children: [
                                {
                                    value: 1,
                                }
                            ]
                        }
                    ],
                },
                {
                    name: 'b3',
                    children: [
                        {
                            value: 3,
                            children: [
                                {
                                    value: 1
                                },
                                {
                                    value: 2,
                                }
                            ]
                        }
                    ],
                }
            ],
        },
        {
            value: 7,
            name: 'c1',
            children: [
                {
                    name: 'c2',
                    children: [
                        {
                            value: 1,
                        },
                        {
                            value: 3,
                            children: [
                                {
                                    value: 1,
                                },
                                {
                                    value: 1
                                }
                            ],
                        },
                        {
                            value: 2,
                            children: [
                                {
                                    value: 1
                                },
                                {
                                    value: 1,
                                }
                            ],
                        }
                    ],
                }
            ],
        },
        {
            name: 'd1',
            children: [
                {
                    value: 6,
                    name: 'd2',
                    children: [
                        {
                            value: 1,
                        },
                        {
                            value: 2,
                            children: [
                                {
                                    value: 2,
                                }
                            ],
                        },
                        {
                            value: 1,
                        }
                    ],
                },
                {
                    value: 3,
                    name: 'd3',
                    children: [
                        {
                            value: 1
                        },
                        {
                            children: [
                                {
                                    value: 1,
                                }
                            ]
                        },
                        {
                            value: 1
                        }
                    ],
                }
            ],
        }
    ],

};
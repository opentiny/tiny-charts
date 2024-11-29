const option = {
	theme: 'hdesign-dark',
	layout: {
		type: 'mindmap',
		direction: 'V',
		oneSide: ['mediaEnvironment', 'situational']
	},
	lineStyle: {
		type: 'Round',
		mode: 'dash'
	},
	node: {
		width: 280,
	},
	render: (container, data) => {
		let node = `<div class='mmc-node-item' >
                  <div class='mmc-node-item-title ${data.title && data.title.text ? '' : 'hide'}'>${data.title && data.title.text || ''}</div>
                  <div class='mmc-node-item-text'>${data.text || ''}</div>
                <div>`;
		container.insertAdjacentHTML('beforeend', node);
	},
	data: {
		id: 'root',
		text: '事件：XX模块存在变量未初始化问题',
		width: 300,
		height: 38,
		children: [{
				id: 'mediaEnvironment',
				title: {
					icon: '',
					text: '舆情 (13)'
				},
				width: 150,
				height: 97,
				text: '舆情名称<br/>舆情名称<br/>'
			},
			{
				id: 'situational',
				title: {
					icon: '',
					text: '态势感知预警 (13)'
				},
				width: 220,
				height: 97,
				text: '态势感知预警<br/>态势感知预警<br/>'
			},
			{
				id: 'hole1',
				title: {
					icon: '',
					text: '漏洞'
				},
				width: 180,
				height: 79,
				text: 'CVE-111111-11111',
				children: [{
						id: 'version1',
						title: {
							text: '版本'
						},
						width: 180,
						height: 38,
						text: 'Hongmeng 1.0.0',
					},
					{
						id: 'version2',
						title: {
							text: '版本'
						},
						width: 180,
						height: 79,
						text: 'Hongmeng 1.0.1',
						children: [{
								id: 'smartCar',
								text: '智能车 XZ0000',
								width: 150,
								height: 38,
							},
							{
								id: 'HiSilicon',
								text: '海思 XZ0000',
								width: 150,
								height: 38,
								children: [{
									id: 'HarmonyOS',
									text: 'HarmonyOS NEXT',
									width: 180,
									height: 38
								}, ]
							},
						]
					},
				]
			},
			{
				id: 'hole2',
				title: {
					icon: '',
					text: '漏洞'
				},
				width: 180,
				text: 'CVE-111111-11111'
			},
		]
	}
};
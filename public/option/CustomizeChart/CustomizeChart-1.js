const option = {
	theme: 'hdesign-light',
	layout: {
		algorithm: function (nodes, containerSize) {
			function pyramid(firstX, firstY, rows, spaceX, spaceY) {
				let pointArr = [];
				for (let i = 1; i <= rows; i++) {
					let rowNum = 2 * (i - 1) + 1;
					for (let k = 1; k <= rowNum; k++) {
						let n = Math.floor(rowNum / 2);
						pointArr.push({ x: firstX + spaceX * (k - n), y: firstY + (i - 1) * spaceY })
					}
				}
				return pointArr
			}
			let firstX = 500;
			let firstY = 100
			let arr = pyramid(firstX, firstY, 6, 100, 100);
			nodes.forEach((item, index) => {
				item.x = arr[index].x
				item.y = arr[index].y
			})
		}
	},
	node: {
		width: 50,
		height: 50,
	},
	line: {
		type: 'Direct',
		style: {
			hover: {
				color: 'tan',
			},
			active: {
				color: 'red',
				// width:3,
			},
			disable: {
				color: 'blue',
			},
		},
	},
	canvas: {
		show: true,
		grid: {
			size: 20,
			show: true,
			type: 'dot',
			config: {
				color: '#fff',
				unitSize: 1,
			}
		}
	},
	connector: {
		startSharing: 'merge',
		endSharing: 'merge',
		type: 'dot',
	},
	// 图表数据
	data: {
		nodes: [{
			id: '0',
			text: 'gridbox-server-ceil-1',
			name: 'main',
			ip: '101.0.1.128',
		},
		{
			id: '1',
			text: 'gridbox-server-ceil-2',
			name: 'portal',
			ip: '101.0.1.128',
		},
		{
			id: '2',
			text: 'gridbox-server-ceil-3',
			name: 'ecs',
			ip: '101.0.1.128',
		},
		{
			id: '3',
			text: 'gridbox-server-ceil-4',
			name: 'ecs',
			ip: '101.0.1.128',
		},
		{
			id: '4',
			text: 'gridbox-server-ceil-5',
			name: 'hecs',
			ip: '101.0.1.128',
		},
		{
			id: '5',
			text: 'gridbox-server-ceil-6',
			name: 'hecs',
			ip: '101.0.1.128',
		},
		{
			id: '6',
			text: 'gridbox-server-ceil-7',
			name: 'hecs',
			ip: '101.0.1.128',
		},
		{
			id: '7',
			text: 'gridbox-server-ceil-8',
			name: 'bms',
			ip: '101.0.1.128',
		},
		{
			id: '8',
			text: 'gridbox-server-ceil-9',
			name: 'portal',
			ip: '101.0.1.128',
		},
		{
			id: '9',
			text: 'gridbox-server-ceil-10',
			name: 'portal',
			ip: '101.0.1.128',
		},
		{
			id: '10',
			text: 'gridbox-server-ceil-11',
			name: 'hecs',
			ip: '101.0.1.128',
		},
		{
			id: '11',
			text: 'gridbox-server-ceil-12',
			name: 'hecs',
			ip: '101.0.1.128',
		},
		{
			id: '12',
			text: 'gridbox-server-ceil-13',
			name: 'hecs',
			ip: '101.0.1.128',
		},
		{
			id: '13',
			text: 'gridbox-server-ceil-14',
			name: 'portal',
			ip: '101.0.1.128',
		},
		{
			id: '14',
			text: 'gridbox-server-ceil-15',
			name: 'portal',
			ip: '101.0.1.128',
		},
		{
			id: '15',
			text: 'gridbox-server-ceil-16',
			name: 'portal',
			ip: '101.0.1.128',
		},
		{
			id: '16',
			text: 'gridbox-server-ceil-17',
			name: 'bms',
			ip: '101.0.1.128',
		},
		{
			id: '17',
			text: 'gridbox-server-ceil-18',
			name: 'bms',
			ip: '101.0.1.128',
		},
		{
			id: '18',
			text: 'gridbox-server-ceil-19',
			name: 'bms',
			ip: '101.0.1.128',
		},
		{
			id: '19',
			text: 'gridbox-server-ceil-20',
			name: 'portal',
			ip: '101.0.1.128',
		},
		{
			id: '20',
			text: 'gridbox-server-ceil-21',
			name: 'portal',
			ip: '101.0.1.128',
		},
		{
			id: '21',
			text: 'gridbox-server-ceil-22',
			name: 'portal',
			ip: '101.0.1.128',
		},
		{
			id: '22',
			text: 'gridbox-server-ceil-23',
			name: 'ecs',
			ip: '101.0.1.128',
		},
		{
			id: '23',
			text: 'gridbox-server-ceil-24',
			name: 'ecs',
			ip: '101.0.1.128',
		},
		{
			id: '24',
			text: 'gridbox-server-ceil-25',
			name: 'ecs',
			ip: '101.0.1.128',
		},
		{
			id: '25',
			text: 'gridbox-server-ceil-26',
			name: 'ecs',
			ip: '101.0.1.128',
		},
		{
			id: '26',
			text: 'gridbox-server-ceil-27',
			name: 'hecs',
			ip: '101.0.1.128',
		},
		{
			id: '27',
			text: 'gridbox-server-ceil-28',
			name: 'hecs',
			ip: '101.0.1.128',
		},
		{
			id: '28',
			text: 'gridbox-server-ceil-29',
			name: 'hecs',
			ip: '101.0.1.128',
		},
		{
			id: '29',
			text: 'gridbox-server-ceil-30',
			name: 'hecs',
			ip: '101.0.1.128',
		},
		{
			id: '30',
			text: 'gridbox-server-ceil-31',
			name: 'portal',
			ip: '101.0.1.128',
		},
		{
			id: '31',
			text: 'gridbox-server-ceil-32',
			name: 'portal',
			ip: '101.0.1.128',
		},
		{
			id: '32',
			text: 'gridbox-server-ceil-33',
			name: 'portal',
			ip: '101.0.1.128',
		},
		{
			id: '33',
			text: 'gridbox-server-ceil-34',
			name: 'portal',
			ip: '101.0.1.128',
		},
		{
			id: '34',
			text: 'gridbox-server-ceil-35',
			name: 'portal',
			ip: '101.0.1.128',
		},
		{
			id: '35',
			text: 'gridbox-server-ceil-36',
			name: 'portal',
			ip: '101.0.1.128',
		},

		],
		edges: [{
			start: '0',
			end: '1',
		},
		{
			start: '1',
			end: '2',
		},
		{
			start: '2',
			end: '3',
		},
		{
			start: '3',
			end: '4',
		},
		{
			start: '4',
			end: '5',
		},
		{
			start: '5',
			end: '6',
		},
		{
			start: '6',
			end: '7',
		},
		{
			start: '7',
			end: '8',
		},
		{
			start: '8',
			end: '9',
		},
		{
			start: '9',
			end: '10',
		},
		{
			start: '10',
			end: '11',
		},
		{
			start: '11',
			end: '12',
		},
		{
			start: '12',
			end: '13',
		},

		{
			start: '14',
			end: '15',
		},
		{
			start: '15',
			end: '16',
		},
		{
			start: '16',
			end: '17',
		},
		{
			start: '17',
			end: '18',
		},
		{
			start: '18',
			end: '19',
		},
		{
			start: '19',
			end: '20',
		},
		{
			start: '20',
			end: '21',
		},
		{
			start: '21',
			end: '22',
		},
		{
			start: '22',
			end: '23',
		},

		{
			start: '24',
			end: '25',
		},
		{
			start: '25',
			end: '26',
		},
		{
			start: '26',
			end: '27',
		},
		{
			start: '27',
			end: '28',
		},
		{
			start: '28',
			end: '29',
		},
		{
			start: '29',
			end: '30',
		},
		{
			start: '30',
			end: '31',
		},
		{
			start: '31',
			end: '32',
		},
		{
			start: '32',
			end: '33',
		},
		{
			start: '33',
			end: '24',
		},
		{
			start: '33',
			end: '34',
		},
		{
			start: '34',
			end: '35',
		},
		],
	}

};
const option = {
	theme: 'hdesign-light',
	layout: {
		type: 'linearArc',
        begin: [0,120]
	},
	node: {
		width: 20,
		height: 20,
	},
	line: {
		type: 'Ellipse',
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
		endMarker:{
		  type:'none',
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
		centerCircle: true
	},
	render: (container, data) => {
		let id = data.id;
		let nodeClass = 'mmc-node-example-red';
		if (id.indexOf('3') !== -1) {
			nodeClass = 'mmc-node-example-green';
		}
		if (id.indexOf('2') !== -1) {
			nodeClass = 'mmc-node-example-orange';
		}
		if (id.indexOf('1') !== -1) {
			nodeClass = 'mmc-node-example-blue';
		}
		let node = `<div class="mmc-node-example ${nodeClass}">${data.label}<div>`;
		container.insertAdjacentHTML('beforeend', node);
	},
	// 图表数据
	data: {
		nodes: [{
				id: '0',
				text: '0',
				width: 10,
				height: 10,
				fill: 'rgb(91, 143, 249)'
			},
			{
				id: '1',
				text: '1',
				width: 12,
				height: 12,
				fill: 'rgb(90, 216, 166)'
			},
			{
				id: '2',
				text: '2',
				width: 4,
				height: 4,
				fill: 'rgb(93, 112, 146)'
			},
			{
				id: '3',
				text: '3',
				width: 14,
				height: 14,
				fill: 'rgb(246, 189, 22)'

			},
			{
				id: '4',
				text: '4',
				width: 8,
				height: 8,
				fill: 'rgb(232, 104, 74)'
			},
			{
				id: '5',
				text: '5',
				width: 10,
				height: 10,
				fill: 'rgb(109, 200, 236)',
			},
			{
				id: '6',
				text: '6',
				width: 4,
				height: 4,
				fill: 'rgb(146, 112, 202)'
			},
			{
				id: '7',
				text: '7',
				width: 4,
				height: 4,
				fill: 'rgb(255, 157, 77)'
			},
			{
				id: '8',
				text: '8',
				width: 4,
				height: 4,
				fill: 'rgb(38, 154, 153)',
			},
			{
				id: '9',
				text: '9',
				width: 8,
				height: 8,
				fill: 'rgb(227, 137, 163)',
			},
			{
				id: '10',
				text: '10',
				width: 18,
				height: 18,
				fill: 'rgb(91, 143, 249)',

			},
			{
				id: '11',
				text: '11',
				width: 20,
				height: 20,
				fill: 'rgb(255, 157, 77)'

			},
			{
				id: '12',
				text: '12',
				width: 12,
				height: 12,
				fill: 'rgb(91, 143, 249)',

			},
			{
				id: '13',
				text: '13',
				width: 8,
				height: 8,
				fill: 'rgb(146, 112, 202)'

			},
			{
				id: '14',
				text: '14',
				width: 3,
				height: 3,
				fill: 'rgb(246, 189, 22)'

			},
			{
				id: '15',
				text: '15',
				width: 3,
				height: 3,
				fill: 'rgb(109, 200, 236)',

			},
			{
				id: '16',
				text: '16',
				width: 3,
				height: 3,
				fill: 'rgb(91, 143, 249)',

			},
			{
				id: '17',
				text: '17',
				width: 10,
				height: 10,
				fill: 'rgb(90, 216, 166)'

			},
			{
				id: '18',
				text: '18',
				width: 12,
				height: 12,
				fill: 'rgb(227, 137, 163)',

			},
			{
				id: '19',
				text: '19',
				width: 20,
				height: 20,
				fill: 'rgb(227, 137, 163)',

			},
			{
				id: '20',
				text: '20',
				width: 4,
				height: 4,
				fill: 'rgb(227, 137, 163)',

			},
			{
				id: '21',
				text: '21',
				width: 4,
				height: 4,
				fill: 'rgb(227, 137, 163)',

			},
			{
				id: '22',
				text: '22',
				width: 10,
				height: 10,
				fill: 'rgb(227, 137, 163)',

			},
			{
				id: '23',
				text: '23',
				width: 4,
				height: 4,
				fill: 'rgb(227, 137, 163)',

			},
			{
				id: '24',
				text: '24',
				width: 14,
				height: 14,
				fill: 'rgb(227, 137, 163)',

			},
			{
				id: '25',
				text: '25',
				width: 8,
				height: 8,
				fill: 'rgb(227, 137, 163)',

			},
			{
				id: '26',
				text: '26',
				width: 14,
				height: 14,
				fill: 'rgb(227, 137, 163)',

			},
			{
				id: '27',
				text: '27',
				width: 8,
				height: 8,
				fill: 'rgb(227, 137, 163)',

			},
			{
				id: '28',
				text: '28',
				width: 24,
				height: 24,
				fill: 'rgb(227, 137, 163)',

			},
			{
				id: '29',
				text: '29',
				width: 8,
				height: 8,
				fill: 'rgb(227, 137, 163)',

			}
		],
		edges: [{
			start: "10",
			end: "10",
		}, {
			start: "11",
			end: "11",
		}, {
			start: "3",
			end: "3",
		}, {
			start: "19",
			end: "19",
		}, {
			start: "13",
			end: "13",
		}, {
			start: "9",
			end: "9",
		}, {
			start: "12",
			end: "12",
		}, {
			start: "28",
			end: "19",
		}, {
			start: "4",
			end: "4",
		}, {
			start: "11",
			end: "10",
		}, {
			start: "28",
			end: "28",
		}, {
			start: "18",
			end: "18",
		}, {
			start: "26",
			end: "26",
		}, {
			start: "28",
			end: "13",
		}, {
			start: "5",
			end: "6",
		}, {
			start: "19",
			end: "13",
		}, {
			start: "17",
			end: "17",
		}, {
			start: "6",
			end: "6",
		}, {
			start: "12",
			end: "13",
		}, {
			start: "1",
			end: "19",
		}, {
			start: "5",
			end: "5",
		}, {
			start: "21",
			end: "19",
		}, {
			start: "25",
			end: "19",
		}, {
			start: "0",
			end: "0",
		}, {
			start: "3",
			end: "13",
		}, {
			start: "20",
			end: "19",
		}, {
			start: "19",
			end: "12",
		}, {
			start: "0",
			end: "19",
		}, {
			start: "24",
			end: "19",
		}, {
			start: "22",
			end: "22",
		}, {
			start: "24",
			end: "24",
		}, {
			start: "26",
			end: "3",
		}, {
			start: "24",
			end: "16",
		}, {
			start: "16",
			end: "16",
		}, {
			start: "10",
			end: "13",
		}, {
			start: "7",
			end: "7",
		}, {
			start: "22",
			end: "13",
		}, {
			start: "20",
			end: "20",
		}, {
			start: "1",
			end: "26",
		}, {
			start: "27",
			end: "19",
		}, {
			start: "28",
			end: "12",
		}, {
			start: "22",
			end: "7",
		}, {
			start: "28",
			end: "3",
		}, {
			start: "17",
			end: "7",
		}, {
			start: "26",
			end: "13",
		}, {
			start: "27",
			end: "13",
		}, {
			start: "1",
			end: "13",
		}, {
			start: "1",
			end: "3",
		}, {
			start: "26",
			end: "29",
		}, {
			start: "22",
			end: "16",
		}, {
			start: "18",
			end: "21",
		}, {
			start: "22",
			end: "12",
		}, {
			start: "23",
			end: "23",
		}, {
			start: "17",
			end: "29",
		}, {
			start: "28",
			end: "17",
		}, {
			start: "15",
			end: "15",
		}, {
			start: "17",
			end: "12",
		}, {
			start: "27",
			end: "27",
		}, {
			start: "14",
			end: "14",
		}, {
			start: "18",
			end: "29",
		}, {
			start: "25",
			end: "26",
		}, {
			start: "28",
			end: "9",
		}, {
			start: "27",
			end: "7",
		}, {
			start: "24",
			end: "12",
		}, {
			start: "17",
			end: "13",
		}, {
			start: "18",
			end: "13",
		}, {
			start: "20",
			end: "13",
		}, {
			start: "0",
			end: "13",
		}, {
			start: "24",
			end: "13",
		}, {
			start: "19",
			end: "6",
		}, {
			start: "29",
			end: "3",
		}, {
			start: "25",
			end: "3",
		}, {
			start: "24",
			end: "3",
		}, {
			start: "17",
			end: "3",
		}, {
			start: "0",
			end: "15",
		}, {
			start: "28",
			end: "26",
		}, {
			start: "24",
			end: "26",
		}, {
			start: "16",
			end: "13",
		}, {
			start: "1",
			end: "14",
		}, {
			start: "29",
			end: "21",
		}, {
			start: "21",
			end: "21",
		}, {
			start: "29",
			end: "19",
		}, {
			start: "19",
			end: "14",
		}, {
			start: "4",
			end: "13",
		}, {
			start: "19",
			end: "15",
		}, {
			start: "8",
			end: "17",
		}, {
			start: "2",
			end: "13",
		}, {
			start: "18",
			end: "19",
		}, {
			start: "1",
			end: "1",
		}, {
			start: "23",
			end: "17",
		}, {
			start: "23",
			end: "19",
		}, {
			start: "0",
			end: "3",
		}, {
			start: "18",
			end: "3",
		}, {
			start: "19",
			end: "3",
		}, {
			start: "29",
			end: "13",
		}, {
			start: "8",
			end: "29",
		}, {
			start: "21",
			end: "3",
		}, {
			start: "22",
			end: "3",
		}, {
			start: "3",
			end: "4",
		}, {
			start: "2",
			end: "29",
		}, {
			start: "22",
			end: "19",
		}, {
			start: "23",
			end: "3",
		}, {
			start: "2",
			end: "26",
		}, {
			start: "2",
			end: "19",
		}, {
			start: "26",
			end: "19",
		}, {
			start: "2",
			end: "17",
		}, {
			start: "27",
			end: "3",
		}, {
			start: "5",
			end: "13",
		}, {
			start: "2",
			end: "12",
		}, {
			start: "28",
			end: "20",
		}, {
			start: "18",
			end: "28",
		}, {
			start: "23",
			end: "21",
		}, {
			start: "8",
			end: "6",
		}, {
			start: "2",
			end: "3",
		}, {
			start: "1",
			end: "29",
		}, {
			start: "23",
			end: "28",
		}, {
			start: "6",
			end: "13",

		}, {
			start: "25",
			end: "13",
		}, {
			start: "8",
			end: "7",
		}, {
			start: "7",
			end: "13",
		}, {
			start: "27",
			end: "26",
		}, {
			start: "18",
			end: "7",
		}, {
			start: "0",
			end: "26",
		}, {
			start: "19",
			end: "7",
		}, {
			start: "8",
			end: "19",
		}, {
			start: "28",
			end: "29",
		}]

	},

}

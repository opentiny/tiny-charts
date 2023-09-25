const option = {

    background: '#0067D1',
    data: {
        nodes: [
            {
                name: 'A1',
                value: 25,
                row: 0,
                col: 0,
            },
            {
                name: 'B1',
                value: 10,
                row: 0,
                col: 1,
            },
            {
                name: 'B2',
                value: 9,
                row: 1,
                col: 1,
            },
            {
                name: 'B3',
                value: 3,
                row: 2,
                col: 1,
            },
            {
                name: 'B4',
                value: 1,
                row: 3,
                col: 1,
            },
            {
                name: 'B5',
                value: 2,
                row: 4,
                col: 1,
            },
            {
                name: 'C1',
                value: 12,
                row: 0,
                col: 2,
            },
            {
                name: 'C2',
                value: 8,
                row: 1,
                col: 2,
            },
            {
                name: 'C3',
                value: 3,
                row: 2,
                col: 2,
            },
            {
                name: 'C4',
                value: 2,
                row: 3,
                col: 2,
            }
        ],
        links: [
            {
                source: 'A1',
                target: 'B1',
                value: 10,
            },
            {
                source: 'A1',
                target: 'B3',
                value: 3,
            },
            {
                source: 'A1',
                target: 'B2',
                value: 9,
            },

            {
                source: 'A1',
                target: 'B4',
                value: 1,
            },
            {
                source: 'A1',
                target: 'B5',
                value: 2,
            },
            {
                source: 'B1',
                target: 'C1',
                value: 5,
            },
            {
                source: 'B1',
                target: 'C2',
                value: 5,
            },
            {
                source: 'B2',
                target: 'C1',
                value: 3,
            },
            {
                source: 'B2',
                target: 'C2',
                value: 3,
            },
            {
                source: 'B2',
                target: 'C3',
                value: 3,
            },
            {
                source: 'B3',
                target: 'C1',
                value: 3,
            },
            {
                source: 'B4',
                target: 'C1',
                value: 1,
            },
            {
                source: 'B5',
                target: 'C4',
                value: 2,
            },
        ]
    }
};
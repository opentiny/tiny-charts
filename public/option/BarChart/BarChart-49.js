const option = {
    theme: 'light',
    padding: [50, 60, 50, 20],
    data: [
        { 'Hobby': 'Cycling', 'Domestic': 49, 'Abroad': 37 },
        { 'Hobby': 'writings', 'Domestic': 27, 'Abroad': 39 },
        { 'Hobby': 'Swimming', 'Domestic': 31, 'Abroad': 20 },
        { 'Hobby': 'Basketball', 'Domestic': 30, 'Abroad': 15 },
        { 'Hobby': 'Soccer', 'Domestic': 37, 'Abroad': 13 },
        { 'Hobby': 'Parachuting', 'Domestic': 49, 'Abroad': 17 },
        { 'Hobby': 'Cinematic', 'Domestic': 42, 'Abroad': 22 },
        { 'Hobby': 'Badminton', 'Domestic': 22, 'Abroad': 12 },
        { 'Hobby': 'Paints', 'Domestic': 17, 'Abroad': 30 },
        { 'Hobby': 'Anime', 'Domestic': 40, 'Abroad': 33 },
        { 'Hobby': 'Jogging', 'Domestic': 49, 'Abroad': 22 },
    ],
    xAxis: {
        name: 'Hobby',
        data: 'Hobby',
        formatter: (value) => {
            const source = {
                Cycling: '骑车',
                writings: '写作',
                Swimming: '游泳',
                Basketball:'篮球',
                Soccer:'足球',
                Parachuting:'跳伞',
                Cinematic:'电影',
                Badminton:'羽毛球',
                Paints:'画画',
                Anime:'动漫',
                Jogging:'跑步'
            }
            // 过滤掉中文
            return source[value]
        }
    },
    yAxisName: 'Quantity',
};
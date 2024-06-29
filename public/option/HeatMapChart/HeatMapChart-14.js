const handleData = () => {
    let xData = [];
    const yData = [];
    function getNoiseHelper() {
        const module = {};
        function Grad(x, y, z) {
            this.x = x;
            this.y = y;
            this.z = z;
        }
        Grad.prototype.dot2 = function (x, y) {
            return this.x * x + this.y * y;
        };
        const grad3 = [
            new Grad(1, 1, 0),
            new Grad(-1, 1, 0),
            new Grad(1, -1, 0),
            new Grad(-1, -1, 0),
            new Grad(1, 0, 1),
            new Grad(-1, 0, 1),
            new Grad(1, 0, -1),
            new Grad(-1, 0, -1),
            new Grad(0, 1, 1),
            new Grad(0, -1, 1),
            new Grad(0, 1, -1),
            new Grad(0, -1, -1),
        ];
        const p = [
            151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225, 140, 36, 103, 30,
            69, 142, 8, 99, 37, 240, 21, 10, 23, 190, 6, 148, 247, 120, 234, 75, 0, 26, 197, 62, 94,
            252, 219, 203, 117, 35, 11, 32, 57, 177, 33, 88, 237, 149, 56, 87, 174, 20, 125, 136, 171,
            168, 68, 175, 74, 165, 71, 134, 139, 48, 27, 166, 77, 146, 158, 231, 83, 111, 229, 122,
            60, 211, 133, 230, 220, 105, 92, 41, 55, 46, 245, 40, 244, 102, 143, 54, 65, 25, 63, 161,
            1, 216, 80, 73, 209, 76, 132, 187, 208, 89, 18, 169, 200, 196, 135, 130, 116, 188, 159, 86,
            164, 100, 109, 198, 173, 186, 3, 64, 52, 217, 226, 250, 124, 123, 5, 202, 38, 147, 118, 126,
            255, 82, 85, 212, 207, 206, 59, 227, 47, 16, 58, 17, 182, 189, 28, 42, 223, 183, 170, 213,
            119, 248, 152, 2, 44, 154, 163, 70, 221, 153, 101, 155, 167, 43, 172, 9, 129, 22, 39, 253,
            19, 98, 108, 110, 79, 113, 224, 232, 178, 185, 112, 104, 218, 246, 97, 228, 251, 34, 242,
            193, 238, 210, 144, 12, 191, 179, 162, 241, 81, 51, 145, 235, 249, 14, 239, 107, 49, 192,
            214, 31, 181, 199, 106, 157, 184, 84, 204, 176, 115, 121, 50, 45, 127, 4, 150, 254, 138,
            236, 205, 93, 222, 114, 67, 29, 24, 72, 243, 141, 128, 195, 78, 66, 215, 61, 156, 180,
        ];
        const perm = new Array(512);
        const gradP = new Array(512);

        module.seed = function (seed) {
            if (seed > 0 && seed < 1) {
                seed *= 65536;
            }
            seed = Math.floor(seed);
            if (seed < 256) {
                seed |= seed << 8;
            }
            for (let i = 0; i < 256; i++) {
                let v;
                if (i & 1) {
                    v = p[i] ^ (seed & 255);
                } else {
                    v = p[i] ^ ((seed >> 8) & 255);
                }
                perm[i] = perm[i + 256] = v;
                gradP[i] = gradP[i + 256] = grad3[v % 12];
            }
        };
        module.seed(0);
        function fade(t) {
            return t * t * t * (t * (t * 6 - 15) + 10);
        }
        function lerp(a, b, t) {
            return (1 - t) * a + t * b;
        }
        module.perlin2 = function (x, y) {
            let X = Math.floor(x),
                Y = Math.floor(y);
            x = x - X;
            y = y - Y;
            X = X & 255;
            Y = Y & 255;
            const n00 = gradP[X + perm[Y]].dot2(x, y);
            const n01 = gradP[X + perm[Y + 1]].dot2(x, y - 1);
            const n10 = gradP[X + 1 + perm[Y]].dot2(x - 1, y);
            const n11 = gradP[X + 1 + perm[Y + 1]].dot2(x - 1, y - 1);
            const u = fade(x);
            return lerp(lerp(n00, n10, u), lerp(n01, n11, u), fade(y));
        };
        return module;
    }
    const noise = getNoiseHelper();
    noise.seed(parseFloat('0.' + window.crypto.getRandomValues(new Uint32Array(1))[0]));
    function generateData() {
        const data = [];
        for (let i = 0; i <= 420; i++) {
            for (let j = 0; j <= 136; j++) {
                data.push([i, j, noise.perlin2(i / 30, j / 70) + 0.75]);
            }
        }
        for (let j = 15; j < 136; j++) {
            yData.push(j);
        }
        return data;
    }
    function setXData() {
        let min = 0,
            hour = 17;
        for (let j = 17; j < 20; j++) {
            for (let i = 0; i < 60; i++) {
                if (i < 10) {
                    min = `0${i}`;
                } else {
                    min = i;
                }
                hour = j;
                if (j === 17 && i === 0) {
                    min = '00'
                    hour = '17'
                }
                hour -= 3;
                xData.push(`${hour}:${min}`);
            }
        }
        xData.push('17:00');
        return xData;
    }
    const data = generateData();
    xData = setXData();
    const initData = data.map((item, index) => {
        return {
            Time: xData[item[0]],
            Number: yData[item[1]],
            Value: item[2],
        };
    });
    const demoData = []
    initData.forEach(item => {
        if (item.Time != undefined && item.Number != undefined) {
            demoData.push(item);
        }
    });
    const defaultData = [];
    for (let i = 0; i < demoData.length; i++) {
        const template = {
            Time: demoData[i].Time,
            Number: demoData[i].Number,
            Value: demoData[i].Value,
        };
        defaultData.push(template);
    }
    return defaultData;
}

const option = {
    theme: 'light',
    // 图表类型(日历热力图)
    type: 'CalendarHeatMapChart',
    // padding控制图表距离容器的上、右、下、左padding值
    padding: [50, 120, 20, 20],
    // 矩形的颜色变化数组,根据颜色数组的颜色个数n,将data数据按照最小值到最大值均分为n个区间,图表各项的颜色取各数据所在区间的颜色
    color: ['#F43146', '#EEBA18', '#0D9458'],
    // 视觉滑块的配置,本属性传显示视觉滑块,不传不显示
    handle: {
        // 是否反转显示文本,默认值false
        inverse: true,
        // 两端的文本,默认值为data第三个属性值的最大值和最小值
        text: ['亮', '暗'],
        // 是否显示手柄,默认值不显示
        calculable: true,
        // 水平与垂直放置,默认值'vertical'
        // 'vertical' 或者 'horizontal'
        orient: 'vertical',
        // 视觉滑块的宽度,默认值20
        width: 16,
        // 视觉滑块的高度,默认值400
        height: 390,
        // 位置
        // top 的值可以是 20 这样的具体像素值,可以是 '20%' 这样相对于容器高宽的百分比,
        // left 的值可以是 20 这样的具体像素值,可以是 '20%' 这样相对于容器高宽的百分比,
        // right 的值可以是 20 这样的具体像素值,可以是 '20%' 这样相对于容器高宽的百分比,
        // bottom 的值可以是 20 这样的具体像素值,可以是 '20%' 这样相对于容器高宽的百分比,
        position: {
            right: '4%',
            bottom: '6%',
        },
    },
    // 设置x轴label刻度显示,第一个值类目的 index，第二个值是类目名称
    xAxisInterval: (index, value) => {
        if (index % 24 === 0) {
            return true;
        }
        return false;
    },
    // 自定义y轴
    yAxis: {
        // 设置刻度文本间隔
        interval: 29,
        // 坐标轴的位置
        position: 'right',
        // 坐标轴的名称
        name: 'Number',
        // 坐标轴的名称位置调整
        nameTextStyle: {
            align: 'right',
            // 用于调整y轴标题的位置
            padding: [0, -38, 0, 0],
        },
    },
    showLabel: false,
    // 控制热力图根据什么来体现热力的变化,取值'opcity','color',默认值'opcity'
    changeProperty: 'color',
    // data数据
    // Time:x轴数据类别,属性名称自定义
    // Number:y轴数据类别,属性名称自定义
    // Value:体现热力颜色变化的数据,属性名称自定义
    // x,y轴的数据类别显示顺序按照data中书写顺序决定
    data: handleData(),
};



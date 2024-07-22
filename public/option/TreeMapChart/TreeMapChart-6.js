const option = {
    theme: 'light',
    visualMap:{
        pieces: [
            {min:0,max:10},
            {min:10,max:20},
            {min:20,max:30},
            {min:30,max:40},
            {min:40,max:50},
            {min:50,max:60},
            {min:60,max:70},
            {min:70,max:80},
            {min:80,max:90},
            {min:90,max:100}
        ]
    },
    data: [
        {
            value:[3,10],
            name:'0~10℃',
            label: '(3%)'
        },
        {
            value:[3,20],
            name:'10~20℃',
            label: '(3%)'
        },
        {
            value:[5,30],
            name:'20~30℃',
            label: '(5%)'
        },
        {
            value:[6,40],
            name:'30~40℃',
            label: '(6%)'
        },
        {
            value:[10,50],
            name:'40~50℃',
            label: '(10%)'
        },
        {
            value:[10,60],
            name:'50~60℃',
            label: '(10%)'
        },
        {
            value:[5,70],
            name:'60~70℃',
            label: '(5%)'
        },
        {
            value:[20,80],
            name:'70~80℃',
            label: '(20%)'
        },
        {
            value:[30,90],
            name:'80~90℃',
            label: '(30%)'
        },
        {
            value:[8,100],
            name:'90~100℃',
            label: '(8%)'
        }
    ],
    label: {
        formatter: (param)=>{
            return param.data.name + '\n' + param.data.label
        }
    }
};
格式：

```d
textColor: (data) => {
      return 'rgb('+ Math.round(Math.random() * 256) +','+ Math.round(Math.random() * 256) +',' + Math.round(Math.random() * 256) + ')';
    },
```

说明：自定义词云图每个文本的颜色 ； 若同时定义了属性`color` ， 则以`textColor`为准

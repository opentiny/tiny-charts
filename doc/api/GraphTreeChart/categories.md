默认值：

```d
// 根节点样式
    {
      symbol: 'circle',
      symbolSize: 12,
      itemStyle: {
        color: '#dfba3f',
      },
    },
// 子节点样式
    {
      symbol: 'circle',
      symbolSize: 12,
      itemStyle: {
        color: theme === 'light' ? '#939393' : '#ddd',
      },
    },
// 虚拟节点样式(实例中方形小黄块)
    {
      symbol: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAGRJREFUSEtjZBggwDhA9jKMWky3kB8N6tGgplkIEJ247u+y/0+MKxTdDhJlJlGKQBaOWowr2EeDGlfIjCYunFl15GUnYkotUtQQnbhIMZQYtaMWExNKVFEzGtRUCUZiDBl5QQ0AkpooH6Q8aKIAAAAASUVORK5CYII=',
      symbolSize: 20,
      itemStyle: {
        color: '#dfba3f',
      },
    },
```

说明：设置节点样式，顺序不可颠倒，且 `length` 至少为 `3`。如果某个部分不用调整，在对应位置写`{}`。<br>
索引为 0-----根节点样式<br>
索引为 1-----全部子节点样式<br>
索引为 length-1-----虚拟节点样式（默认为方形小黄块），正常虚拟节点和箭头之间是有一点间隙的，箭头和虚拟节点都是 path 路径实现的，且虚拟节点的 symbolSize 为 20。如果需要调整虚拟节点的 symbolSize 和 symbol，箭头可能也要进行修正.

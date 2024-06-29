# 刻度均分

## 背景

对于图表x轴的显示，通常我们需要x轴首尾的文本都要显示，并对其平均分割，所以我们添加了sharing属性来实现此功能。

### 使用方式: 
当sharing值为auto时，`xAxis:{ sharing:'auto' }`，将按echarts自身算法对x轴刻度进行均分，并确保首尾都会显示

<div class="img-warpper">
    <div class="img-container" >
        <img src="{{VITE_BASEROUTER}}./image/md/EqualLabel1.png"/>
    </div>
</div>

</br>

通过添加x轴配置项类似`xAxis:{ sharing:4 }`对x轴刻度进行均分，并确保首尾都会显示。如下图会将x轴进行4等份，在不够均分的情况下，前面以大值均分，后面以小值均分

<div class="img-warpper">
    <div class="img-container" >
        <img src="{{VITE_BASEROUTER}}./image/md/EqualLabel.png"/>
    </div>
</div>

</br>


<style>
    .markdown-body p{
        line-height: 24px;
    }
    .img-warpper{
        width: 1200px;
        margin: auto;
        display: flex;
        margin-top: 16px;
        margin-bottom: 16px;
        align-items: center;
        flex-direction: row;
        justify-content: space-between;
    }
    .img-container{
        width: 800px;  
        height: 380px; 
        border: 1px solid #ccc;
        position: relative;
        margin: 0 auto;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        font-size: 14px;
    }
    .img-container img{
        width: 100%;
        height: 100%;
    }
    .img-container-dark{
        background-color:#191919;
    }
</style>

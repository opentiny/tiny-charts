# 刻度优化

## 场景1：数据波动不明显
当数据波动很小，但是轴范围很大时，会导致波动不明显，无法直观感受到数据波动：

<div class="img-warpper">
    <div class="img-container" >
        <img src="{{VITE_BASEROUTER}}./image/md/axisFluctuation.png"/>
    </div>
</div>

</br>

## 优化方案:
通过添加y轴配置项`yAxis:{ fluctuation:true }`优化波动区间，将波动范围控制在轴的50%范围，上方留10%，下方留40%的余量。

<div class="img-warpper">
    <div class="img-container" >
        <img src="{{VITE_BASEROUTER}}./image/md/axisOptimization1.png"/>
    </div>
</div>

## 场景2：噪点数据

存在部分噪点数据远大于大部分数据时，会导致数据波动不明显：

<div class="img-warpper">
    <div class="img-container" >
        <img src="{{VITE_BASEROUTER}}./image/md/axisNoise.png"/>
    </div>
</div>

</br>

### 优化方案1: 
通过添加y轴配置项类似`yAxis:{ type:'log'，logBase: 2 }`对数轴优化，展现出明显波动差异。

<div class="img-warpper">
    <div class="img-container" >
        <img src="{{VITE_BASEROUTER}}./image/md/axisOptimization2.png"/>
    </div>
</div>

</br>

### 优化方案2:  
通过添加y轴配置项`yAxis:{ allowRange:[min,max] }`，设置用户允许呈现的正常数据的最大值max以及最小值min，仅对[min,max]数据进行波动区间优化，展示不包含噪点的情况。

<div class="img-warpper">
    <div class="img-container" >
        <img src="{{VITE_BASEROUTER}}./image/md/axisOptimization3.png"/>
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
        height: 322px; 
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

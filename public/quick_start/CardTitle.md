# 图表卡片

图表卡片是一个融合标题区、功能区、关键数值区、图表区为一体的复合组件。

<div class="img-warpper">
    <div class="img-container">
        <img src="{{VITE_BASEROUTER}}./image/md/chartCard.png"/>
    </div>
</div>

<style>
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
        width: 1100px;  
        height: 400px; 
        border: 1px solid #ccc;
        position: relative;
        margin: 0 auto;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .img-container img{
        width: 100%;
        height: 100%;
    }
    .img-container-dark{
        background-color:#191919;
    }
</style>
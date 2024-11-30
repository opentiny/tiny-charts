
## 2.缓动曲线
<div class='easing-dom-box'>
  <div class='easing-dom-box-item'>
    <div class='title'>Linear: 线性匀速的缓动</div>
    <div class='img-title'>
      <div>Linear.In</div>
      <div>Linear.Out</div>
      <div>Linear.InOut</div>
    </div>
    <img src="{{VITE_BASEROUTER}}./image/md/animation/Linear.png" />
  </div>
  <div class='easing-dom-box-item'>
    <div class='title'>Quadratic: 二次方的缓动</div>
    <div class='img-title'>
      <div>Quadratic.In</div>
      <div>Quadratic.Out</div>
      <div>Quadratic.InOut</div>
    </div>
    <img src="{{VITE_BASEROUTER}}./image/md/animation/Quadratic.png" />
  </div>
  <div class='easing-dom-box-item'>
    <div class='title'>Cubic: 三次方的缓动</div>
    <div class='img-title'>
      <div>Cubic.In</div>
      <div>Cubic.Out</div>
      <div>Cubic.InOut</div>
    </div>
    <img src="{{VITE_BASEROUTER}}./image/md/animation/Cubic.png" />
  </div>
  <div class='easing-dom-box-item'>
    <div class='title'>Quartic: 四次方的缓动</div>
    <div class='img-title'>
      <div>Quartic.In</div>
      <div>Quartic.Out</div>
      <div>Quartic.InOut</div>
    </div>
    <img src="{{VITE_BASEROUTER}}./image/md/animation/Quartic.png" />
  </div>
  <div class='easing-dom-box-item'>
    <div class='title'>Quintic: 五次方的缓动</div>
    <div class='img-title'>
      <div>Quintic.In</div>
      <div>Quintic.Out</div>
      <div>Quintic.InOut</div>
    </div>
    <img src="{{VITE_BASEROUTER}}./image/md/animation/Quintic.png" />
  </div>
  <div class='easing-dom-box-item'>
    <div class='title'>Sinusoidal: 正弦曲线的缓动</div>
    <div class='img-title'>
      <div>Sinusoidal.In</div>
      <div>Sinusoidal.Out</div>
      <div>Sinusoidal.InOut</div>
    </div>
    <img src="{{VITE_BASEROUTER}}./image/md/animation/Sinusoidal.png" />
  </div>
  <div class='easing-dom-box-item'>
    <div class='title'>Exponential: 指数曲线的缓动</div>
    <div class='img-title'>
      <div>Exponential.In</div>
      <div>Exponential.Out</div>
      <div>Exponential.InOut</div>
    </div>
    <img src="{{VITE_BASEROUTER}}./image/md/animation/Exponential.png" />
  </div>
  <div class='easing-dom-box-item'>
    <div class='title'>Circular: 圆形曲线的缓动</div>
    <div class='img-title'>
      <div>Circular.In</div>
      <div>Circular.Out</div>
      <div>Circular.InOut</div>
    </div>
    <img src="{{VITE_BASEROUTER}}./image/md/animation/Circular.png" />
  </div>
  <div class='easing-dom-box-item'>
    <div class='title'>Elastic: 指数衰减的正弦曲线缓动</div>
    <div class='img-title'>
      <div>Elastic.In</div>
      <div>Elastic.Out</div>
      <div>Elastic.InOut</div>
    </div>
    <img src="{{VITE_BASEROUTER}}./image/md/animation/Elastic.png" />
  </div>
  <div class='easing-dom-box-item'>
    <div class='title'>Back: 超过范围的三次方的缓动</div>
    <div class='img-title'>
      <div>Back.In</div>
      <div>Back.Out</div>
      <div>Back.InOut</div>
    </div>
    <img src="{{VITE_BASEROUTER}}./image/md/animation/Back.png" />
  </div>
  <div class='easing-dom-box-item'>
    <div class='title'>Bounce: 指数衰减的反弹缓动</div>
    <div class='img-title'>
      <div>Bounce.In</div>
      <div>Bounce.Out</div>
      <div>Bounce.InOut</div>
    </div>
    <img src="{{VITE_BASEROUTER}}./image/md/animation/Bounce.png" />
  </div>
</div>

<style>
.easing-dom-box{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  color: var(--ti-base-color-common-7);
  .easing-dom-box-item{
    margin: 20px 20px 0 0;
    .title{
      font-size: 14px;
      line-height: 18px;
      margin-bottom: 10px;
      font-weight: bold;
    }
    .img-title{
      width: 100%;
      overflow: hidden;
      
      div{
        width: 300px;
        display: inline-block;
        vertical-align: middle;
        &:last-child{
          width: 250px;
        }
      }
    }
    img{
      width: 100%;
    }
  }
}
</style>
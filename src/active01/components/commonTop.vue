<template>
  <div>
    <div class="banner"></div>
    <div class="box">     
      <div class="part">
        <img src="../images/title1.png" alt="" class="title">
        <img src="../images/content1.jpg" alt="" class="content">
        <div class="wrap">
          <div class="tit">◆ 五路財神助招財 ◆</div>
          <div class="text">
            <span class="strong">五路财神</span>是中国民间普遍信奉的神灵，其中三月十五日是<span class="strong">中路财神</span>赵公明的诞辰。
            拜五路财神，就是收尽东南西北中<span class="strong">五方之财</span>的意思。<span class="strong">五路运财符</span>，调请五路财神，招各路财旺人气，<span class="strong">大旺正财！
            </span>
          </div>
        </div>
        <div class="bottom"></div>
      </div>
      <div class="goto"><div class="bg">招财请符</div></div>
    </div>
  	
  </div>
</template>

<script>
import publicJS from '../../../static/lib/public';
export default {
  methods: {
    goApp(e) {
      publicJS.goAPP(e, 'bmfapp');
    }
  }
};
</script>
<style lang="less" scoped>
  .banner{
    height: 5.59rem;
    background: url('../images/banner.jpg') no-repeat center;
    background-size: cover;
  }
  .box{
    padding: 0.12rem 0.24rem; 
  }
  .strong{
    color: #ff0a11;
  }
  .part{
    img{
      width: 100%;
      display: block;
    }
    .title{
      height: 1.57rem;
    }
    .content{
      height: 5.46rem;
      margin: -0.01rem 0;
    }
  }
  .wrap{
    text-align: center;
    background: url(../images/bg.jpg) repeat-y center;
    background-size: contain;
    width: 100%;
    .tit{
      font-size: 0.4rem;
      font-weight: bold;
    }
    .text{
      font-size: 0.26rem;
      padding: 0.2rem 0.53rem 0.1rem;
      line-height: 0.43rem;
    }
  }
  .bottom{
    height: 0.5rem;
    background: url(../images/bottom.png) no-repeat center;
    background-size: contain;
  }
  .goto{
    text-align: center;
    margin-top: 0.33rem;
    padding: 0 0.8rem;
    .bg{
      background: url(../images/btn1.png) no-repeat center;
      background-size: cover;
      height: 0.8rem;
      line-height: 0.8rem;
      display: inline-block;
      font-size: 0.36rem;
      border-radius: 0.1rem;
      width: 100%;
    }
    
  }
</style>
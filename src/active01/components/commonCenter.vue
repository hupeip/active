<template>
  <div class="g-wrap">   
    <div class="part">
      <img src="../images/title2.png" alt="" class="title">
      <div class="content">
        <div class="text">财运中正财是指：工作相关的钱财，工资、奖金、销售收入、盈利利润等</div>
        <ul>
          <li class="lf">
            <img src="../images/part2-1.png" alt="">
            <div class="goto"><div class="bg">招财请符</div></div>
          </li>
          <li class="lr">
            <img src="../images/part2-2.png" alt="">
            <div class="goto"><div class="bg">招财请符</div></div>
          </li>
        </ul>
      </div>
      <div class="bottom"></div>
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
  .g-wrap{
    padding: 0.12rem 0.24rem;
  }
  img{
    width: 100%;
    display: block;
  }
  .part{
    margin-top: 0.6rem;
  }
  .content{
    text-align: center;
    background: url(../images/bg2.jpg) repeat-y center;
    background-size: contain;
    width: 100%;
    .text{
      font-size: 0.26rem;
      padding: 0.30rem 0.53rem 0.37rem;
      line-height: 0.43rem;
    }
    ul{  
      overflow: hidden;   
      padding: 0 0.2rem; 
      li{
        width: 47%;
        float: left;
      }
      .lf{
        margin-right: 0.13rem;
      }
      .lr{
        margin-left: 0.13rem;
      }
    }
  }
  .bottom{
    height: 0.5rem;
    background: url(../images/bottom.png) no-repeat center;
    background-size: contain;
  }
  .goto{
    text-align: center;
    padding: 0.1rem 0.24rem 0.4rem;
    .bg{
      background: url(../images/btn2.png) no-repeat center;
      background-size: cover;
      height: 0.52rem;
      line-height: 0.52rem;
      display: inline-block;
      font-size: 0.28rem;
      color: #fff;
      width: 100%;
    }
    
  }
</style>
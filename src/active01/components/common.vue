<template>
  <div class="g-wrap">
    <div class="box">
      <div class="banner"></div>
      <div class="text"><span class="strong">普賢菩薩</span>是漢傳佛教中的<span class="strong">四大菩薩之一</span>，同時也是最廣為人知的菩薩之一，與地藏王菩薩、觀世音菩薩以及文殊菩薩齊名。</div>
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
    font-size: 0.12rem;
  }
  .box .banner{
    height: 7.11rem;
    background: url('../images/banner.jpg') no-repeat center;
    background-size: cover;
  }
  .strong{
    color: #a48d28;
  }
  .text{
    padding: 0.14rem 0.25rem 0.4rem;
    background-color: #1a0805;
    color: #b49c7e;
    margin-top: -0.01rem;
    text-align: center;
  }
</style>
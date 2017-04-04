<template>
  <div>
  	<h1>teststst001</h1>
    <div @click="goApp" data-gotype="3" data-controller="guanyin" data-type="1">我的APP 零机文化 国</div>
  	<img src="../../assets/img/logo.png">
    <img src="../../assets/img/001.jpg">
  </div>
</template>

<script>
import publicJS from '../../../static/lib/public';
export default {
  methods: {
    goApp(e) {
      console.log('111');
      publicJS.goAPP(e, 'guanyin');
    }
  }
};
</script>
<style scoped>
  .box-card{
    width: 600px;
  }
  h1 {
  	color:red;
  	height:300px;
  	width:300px;
  	background: url(../../assets/img/logo.png);
  }
</style>
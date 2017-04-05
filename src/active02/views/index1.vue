<template>
  <div>
    <div @click="goApp" data-gotype="16" data-controller="bmfapp" data-type="0">按钮</div>
    
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
      publicJS.goAPP(e, 'bmfapp');
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
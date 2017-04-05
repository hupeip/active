<template>
  <div>
    <!-- <div @click="goApp" data-gotype="16" data-controller="bmfapp" data-type="0">我的APP 零机文化 国</div> -->
    <Common></Common>
  </div>
</template>

<script>
import publicJS from '../../../static/lib/public';
import Common from '../components/common';
export default {
  methods: {
    goApp(e) {
      publicJS.goAPP(e, 'bmfapp');
    }
  },
  components: {
    Common: Common
  }
};
</script>
<style lang="less" scoped>
  h1 {
  	color:red;
  	height:300px;
  	width:300px;
  	background: url(../images/fu.jpg);
  }
</style>
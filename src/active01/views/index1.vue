<template>
  <div class="g-wrap">
    <!-- <div @click="goApp" data-gotype="16" data-controller="bmfapp" data-type="0">我的APP 零机文化 国</div> -->
    <CommonTop></CommonTop>
    <CommonCenter></CommonCenter>
  </div>
</template>

<script>
import publicJS from '../../../static/lib/public';
import CommonTop from '../components/commonTop';
import CommonCenter from '../components/commonCenter';
export default {
  methods: {
    goApp(e) {
      publicJS.goAPP(e, 'bmfapp');
    }
  },
  components: {
    CommonTop: CommonTop,
    CommonCenter: CommonCenter
  }
};
</script>
<style lang="less" scoped>
  .g-wrap{
    font-size: 0.2rem;
    background-color: #961c10;
    color: #6b0a11;
  }
</style>
<style scoped>
    @import "../../static/less/reset.less";
</style>
<template>
    <div>
        <router-view></router-view>
    </div>
</template>
<script>
  import publicJS from '../../static/lib/public';
  export default {
    mounted() {
      // 页面加载完毕时去切换简繁体 根据ua的lang来判断
      publicJS.setCNLang();
    }
  };
</script>
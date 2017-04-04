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
      publicJS.setCNLang();
    }
  };
</script>
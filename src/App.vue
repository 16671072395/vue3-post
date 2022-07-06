<template>
  <div class="backcolor">
    <HorizontalMenu></HorizontalMenu>
    <router-view></router-view>
  </div>
</template>

<script>
import HorizontalMenu from "./components/HorizontalMenu.vue";
import HomePage from "./views/HomePage";
export default {
  setup() {},
  components: { HomePage, HorizontalMenu },
};
</script>

<style lang="less" scoped>
.backcolor {
  height: 100%;
  width: 100%;
  background-color: "#545c64";
}
</style>




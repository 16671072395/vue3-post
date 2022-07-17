<template>
  <div class="backcolor">
    <HorizontalMenu v-if="isShow"></HorizontalMenu>
    <router-view></router-view>
  </div>
</template>

<script>
import HorizontalMenu from "./components/HorizontalMenu.vue";
import HomePage from "./views/HomePage";

let isLogin = localStorage.getItem("isLogin");
console.log(isLogin);
export default {
  data() {
    return {
      isShow: isLogin,
    };
  },
  components: { HomePage, HorizontalMenu },
};
</script>

<style lang="less" scoped>
.backcolor {
  height: 100%;
  width: 100%;
  background: rgb(84, 92, 100) url("../src/assets/backimage.webp") no-repeat;
  background-size: 110% 110%;
}
</style>
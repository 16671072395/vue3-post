<template>
  <div>
    <el-container>
      <el-aside class="aside">
        <!--竖向菜单 -->
        <el-menu
          active-text-color="#ffd04b"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          :default-active="activeIndex2"
          text-color="#fff"
          @open="handleOpen"
          @close="handleClose"
          :router="true"
        >
          <el-menu-item index="/postname">
            <span>研究生名单</span>
          </el-menu-item>
          <el-menu-item index="/postportrait">
            <span>研究生画像</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main class="allHeight">
        <router-view> </router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "PostgraduatePortrait",
  setup() {
    const activeIndex2 = ref("1");
    function handleOpen(key, keyPath) {
      console.log(key, keyPath);
    }
    function handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
    return {
      handleOpen,
      handleClose,
      activeIndex2,
    };
  },
};
</script>

<style scoped>
.el-menu-vertical-demo {
  height: 760px;
  width: 120px;
  background-color: #008bc2;
}
.aside {
  width: 120px;
}
div {
  font: size 0.625rem;
}
.allHeight {
  padding: 0px 0px 0px 10px;
}
</style>
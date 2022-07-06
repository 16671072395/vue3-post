<template>
  <div>
    <el-container>
      <el-aside class="aside">
        <!--竖向菜单 -->
        <el-menu
          active-text-color="#ffd04b"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          default-active="2"
          text-color="#fff"
          @open="handleOpen"
          @close="handleClose"
          :router="true"
        >
          <el-menu-item index="/posthome">
            <span>研究生首页</span>
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
import HorizontalMenu from "../components/HorizontalMenu.vue";
import VerticalMenu from "../components/VerticalMenu.vue";
import { ref } from "vue";
export default {
  name: "HomePage",
  setup() {
    const activeIndex2 = ref("1");
    const handleSelect = (key = "string", keyPath = "string[]") => {
      console.log(key, keyPath);
    };
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
      handleSelect,
    };
  },
  components: { HorizontalMenu, VerticalMenu },
};
</script>

<style scoped>
.el-menu-vertical-demo {
  height: 678px;
  width: 120px;
}
.aside {
  width: 120px;
}
</style>
<template>
  <el-row class="tac">
    <el-col :span="4">
      <el-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        default-active="2"
        text-color="#fff"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-menu-item index="1">
          <span>Navigator one</span>
        </el-menu-item>
        <el-menu-item index="2">
          <span>Navigator two</span>
        </el-menu-item>
        <el-menu-item index="3">
          <span>Navigator there</span>
        </el-menu-item>
        <el-menu-item index="4">
          <span>Navigator Four</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
import { ref } from "vue";
export default {
  name: "VerticalMenu",
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
};
</script>

<style scoped>
</style>
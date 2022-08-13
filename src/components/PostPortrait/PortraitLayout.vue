<template>
  <!-- header部分放研究生照片，个人基本信息，成绩简介 -->
  <header>
    <ItemPage>
      <BasicInformation></BasicInformation>
    </ItemPage>
  </header>
  <section class="container">
    <!-- 左容器部分放论文情况-->
    <section class="itemLeft">
      <ItemPage>
        <PortraitLeft></PortraitLeft>
      </ItemPage>
    </section>
    <!-- 中容器放研究生成绩单 -->
    <section class="itemCenter">
      <ProtratiCenter></ProtratiCenter>
    </section>
    <!-- 右容器放科研能力 -->
    <section class="itemRight">
      <ItemPage>
        <ProtraitRight></ProtraitRight>
      </ItemPage>
    </section>
  </section>
</template>

<script>
import ItemPage from "../PostHome/ItemPage";
import BasicInformation from "./BasicInformation.vue";
import PortraitLeft from "./PortraitLeft";
import ProtraitRight from "./ProtraitRight";
import ProtratiCenter from "./ProtratiCenter";
export default {
  components: {
    ItemPage,
    BasicInformation,
    ProtraitRight,
    PortraitLeft,
    ProtratiCenter,
  },
};
</script>

<style scoped>
header {
  height: 300px;
  border: 1px solid rgb(6, 6, 202);
}
.container {
  /* 这里就不需要设置使用rem了 使用rem那么页面就会根据html根结点大小改变而改变了 */
  min-width: 1200px;
  max-width: 2048px;
  margin: 0px 0px 0px 0px;
  /* 盒子上10px 左右0px 下0的外边距 */

  display: flex; /*父容器设置flex布局才能在子元素使用 */
  /* border: 1px solid blue; */
}
.itemLeft {
  flex: 5;
  /* border: 1px solid blue; */
}
.itemRight {
  flex: 5;
  float: right;
}
.itemCenter {
  flex: 6;
}
</style>
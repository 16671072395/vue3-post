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
</style>
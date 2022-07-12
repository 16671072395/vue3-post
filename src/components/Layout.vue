<template>
  <header>
    <ItemPage>
      <BarChartOne></BarChartOne>
      <BarChartTwo></BarChartTwo>
      <BarChartThree></BarChartThree>
      <BarChartFour></BarChartFour>
    </ItemPage>
  </header>
  <section class="container">
    <!-- 左容器 -->
    <section class="itemLeft">
      <ItemPage>
        <AsideOne id="1"></AsideOne>
        <AsideTwo id="2"></AsideTwo>
      </ItemPage>
    </section>
    <!-- 中容器 -->
    <section class="itemCenter">
      <ConterChar></ConterChar>
    </section>
    <!-- 右容器 -->
    <section class="itemRight">
      <ItemPage>
        <RightOne id="3"></RightOne>
        <RightTwo id="4"></RightTwo>
      </ItemPage>
    </section>
  </section>
</template>

<script>
import ItemPage from "../components/ItemPage";
import BarChartOne from "./PostHome/BarChartOne.vue";
import BarChartTwo from "./PostHome/BarChartTwo.vue";
import BarChartThree from "./PostHome/BarChartThree.vue";
import BarChartFour from "./PostHome/BarChartFour.vue";
import AsideOne from "./PostHome/AsideOne.vue";
import AsideTwo from "./PostHome/AsideTwo.vue";
import RightOne from "./PostHome/RightOne.vue";
import RightTwo from "./PostHome/RightTwo.vue";
import ConterChar from "./PostHome/ConterChar.vue";
export default {
  components: {
    BarChartOne,
    ItemPage,
    BarChartTwo,
    BarChartThree,
    BarChartFour,
    AsideOne,
    AsideTwo,
    RightOne,
    RightTwo,
    ConterChar,
  },
  name: "Layout",
};
</script>

<style>
header {
  height: 2rem;
  /* width: 21rem; */
  /* background-color: rgba(0, 0, 255, 0.2); */
  /* display: inline-block; */
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
  flex: 3;
  /* border: 1px solid blue; */
}
.itemRight {
  flex: 3;
  float: right;
}
.itemConter {
  flex: 5;

  /* border: 1px solid blue; */
}
</style>
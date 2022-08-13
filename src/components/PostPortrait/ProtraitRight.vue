<template>
  <div class="myDiv" ref="mychart"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "ProtraitRight",
  mounted() {
    let myEcharts = echarts.init(this.$refs.mychart);
    myEcharts.setOption({
      //不需要背景颜色
      // backgroundColor: "#2c343c",
      title: {
        text: "专业技能指数",
        top: 0,
        left: "center",
        textStyle: {
          color: "#fff",
        },
      },
      polar: {
        radius: [30, "80%"],
      },
      angleAxis: {
        max: 10,
        color: "black",
        startAngle: 0,
        axisLine: {
          show: true,
          lineStyle: {
            color: "black",
          },
        },
      },
      radiusAxis: {
        type: "category",
        data: ["学习能力", "科研能力", "编程能力"],
        axisLine: {
          show: false,
        },
        axisLabel: {
          show: false,
        },
      },
      tooltip: {},
      series: {
        type: "bar",
        data: [7.2, 6.8, 8.1],
        coordinateSystem: "polar",
        label: {
          show: true,
          position: "insideBottom",
          formatter: "{b}: {c}",
        },
        colorBy: "data",
      },
    });
    window.addEventListener("resize", () => {
      myEcharts.resize();
    });
  },
};
</script>

<style scoped>
.myDiv {
  /* 控制div的缺角样式 */
  /* -webkit-clip-path: polygon(10% 0, 100% 0, 100% 100%, 0 100%, 0 11%);
  clip-path: polygon(10% 0, 100% 0, 100% 100%, 0 100%, 0 11%); */
  /* div的其他属性 */
  /* background-color: aqua; */
  height: 7.5rem;
  width: 6.7rem;
  border: 1px solid rgb(6, 6, 202);
  margin: 10px 0px 10px 20px;
}
</style>
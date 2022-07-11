<template>
  <div class="myDiv" ref="mychart">dsa4d2154</div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "RightTwo",
  mounted() {
    let myEcharts = echarts.init(this.$refs.mychart);
    myEcharts.setOption({
      backgroundColor: "#2c343c",
      title: {
        text: "Customized Pie",
        left: "center",
        top: 20,
        textStyle: {
          color: "#ccc",
        },
      },
      tooltip: {
        trigger: "item",
      },
      visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
          colorLightness: [0, 1],
        },
      },
      series: [
        {
          name: "Access From",
          type: "pie",
          radius: "55%",
          center: ["50%", "50%"],
          data: [
            { value: 335, name: "Direct" },
            { value: 310, name: "Email" },
            { value: 274, name: "Union Ads" },
            { value: 235, name: "Video Ads" },
            { value: 400, name: "Search Engine" },
          ].sort(function (a, b) {
            return a.value - b.value;
          }),
          roseType: "radius",
          label: {
            color: "rgba(255, 255, 255, 0.3)",
          },
          labelLine: {
            lineStyle: {
              color: "rgba(255, 255, 255, 0.3)",
            },
            smooth: 0.2,
            length: 10,
            length2: 20,
          },
          itemStyle: {
            color: "#c23531",
            shadowBlur: 200,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
          animationType: "scale",
          animationEasing: "elasticOut",
          animationDelay: function (idx) {
            return Math.random() * 200;
          },
        },
      ],
    });
  },
};
</script>

<style scoped>
.myDiv {
  /* 控制div的缺角样式 */
  /* div的其他属性 */
  /* background-color: aqua; */
  height: 8.2rem;
  width: 11.5rem;
  /* border: 1px solid rgb(6, 6, 202); */
  margin: 10px 10px 0px 10px;
}
</style>
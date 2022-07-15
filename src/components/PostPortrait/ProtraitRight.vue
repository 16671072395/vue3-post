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
      tooltip: {
        trigger: "item",
      },
      angleAxis: {
        type: "category",
        data: [
          { value: 750, name: "已就业" },
          { value: 354, name: "未就业" },
          { value: 274, name: "升学" },
          { value: 245, name: "考公考编" },
        ],
        axisLabel: {
          show: false,
        },
      },
      radiusAxis: {
        max: 6,
        z: 10,
        splitLine: {
          lineStyle: {
            color: "rgba(166, 166, 180, 0.878)",
            type: "dashed",
          },
        },
        axisLabel: {
          show: false,
        },
        //坐标轴轴线相关设置。
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
      },
      polar: { center: ["50%", "50%"] },
      series: [
        {
          z: 10,
          type: "pie",
          // roseType: "area",
          radius: "70%",
          center: ["50%", "50%"],
          data: [
            { value: 750, name: "已就业" },
            { value: 354, name: "未就业" },
            { value: 274, name: "升学" },
            { value: 245, name: "考公考编" },
          ],
          coordinateSystem: "polar",
          label: {
            show: true,
            color: "rgba(255, 255, 255, 1)",
          },
          labelLine: {
            lineStyle: {
              color: "rgba(255, 255, 255,1)",
            },
            smooth: 0.2,
            length: 12,
            length2: 0,
          },
        },
        {
          type: "bar",
          data: [1],
          coordinateSystem: "polar",
        },
      ],
      legend: {
        show: true,
        data: ["已就业", "未就业", "升学", "考公考编"],
        bottom: "bottom",
        orient: "horizontal",
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
  -webkit-clip-path: polygon(10% 0, 100% 0, 100% 100%, 0 100%, 0 11%);
  clip-path: polygon(10% 0, 100% 0, 100% 100%, 0 100%, 0 11%);
  /* div的其他属性 */
  /* background-color: aqua; */
  height: 6rem;
  width: 6rem;
  border: 1px solid rgb(6, 6, 202);
  margin: 10px 0px 10px 20px;
}
</style>
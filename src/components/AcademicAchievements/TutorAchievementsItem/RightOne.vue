<template>
  <div class="myDiv" ref="mychart"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "RightOne",
  mounted() {
    let myEcharts = echarts.init(this.$refs.mychart);
    myEcharts.setOption({
      title: {
        text: "专著年份分析",
        left: "center",
        textStyle: {
          fontSize: 15,
          color: "#FFF",
        },
      },
      xAxis: {
        name: "数量",
        type: "value",
        // show: false,
        nameTextStyle: {
          // 坐标轴名称的颜色，默认取 axisLine.lineStyle.color
          color: "black",
        },
        max: 350,
        interval: 50,
        axisTick: {
          show: false,
        },
        // color: "black",
        axisLine: {
          show: true,
          lineStyle: {
            color: "rgb(78, 78, 199)",
          },
        },
        splitLine: {
          lineStyle: {
            color: "rgb(78, 78, 199)",
          },
        },
        axisLabel: {
          color: "black",
        },
      },
      yAxis: {
        type: "category",
        data: [2017, 2018, 2019, 2020, 2021],
        name: "年份",
        nameTextStyle: {
          // 坐标轴名称的颜色，默认取 axisLine.lineStyle.color
          color: "black",
        },
        // color: "black",
        axisLine: {
          show: true,
          lineStyle: {
            color: "rgb(78, 78, 199)",
          },
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          color: "black",
        },
        // show: false,
      },
      legend: {
        data: ["硕士导师", "博士导师"],
        top: 20,
        textStyle: {
          fontSize: 16, //标签字体
          fontFamily: "等线",
          fontWeight: "500",
          color: "#fff",
        },
      },
      series: [
        {
          name: "硕士导师",
          data: [150, 191, 224, 247, 268],
          // data: [2400, 1240],
          type: "bar",
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0.4, 0.8, 1, [
              { offset: 0, color: "#FFB477" },
              { offset: 1, color: "#FD9847" },
            ]),
          },
          barWidth: "30%",
          label: {
            show: false,
            position: [3, -20],
            formatter: function (params) {
              return params.data.name + ":" + params.data.value;
            },
          },
        },
        {
          name: "博士导师",
          data: [160, 202, 236, 264, 308],
          // data: [2400, 1240],
          type: "bar",
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0.4, 0.8, 1, [
              { offset: 0, color: "#2A86E3" },
              { offset: 1, color: "#48A3F1" },
            ]),
          },
          barWidth: "30%",
          label: {
            show: false,
            position: [3, -20],
            formatter: function (params) {
              return params.data.name + ":" + params.data.value;
            },
          },
        },
      ],
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
        textStyle: {
          color: "#ffffff",
        },
        borderWidth: "0",
        backgroundColor: "rgba(0,0,0,0.5)",
      },
      // grid: {
      //   x: 12,
      //   y: 35,
      height: "70%",
      //   width: "90%",
      // },
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
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 10% 100%, 0 90%);
  clip-path: polygon(0 0, 100% 0, 100% 100%, 10% 100%, 0 90%);
  /* div的其他属性 */
  /* background-color: aqua; */
  height: 4.45rem;
  width: 10.6rem;
  border: 1px solid rgb(6, 6, 202);
  margin: 10px 0px 10px 0px;
}
</style>
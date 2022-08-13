<template>
  <div class="myDiv" ref="mychart"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "RightTwo",
  mounted() {
    let myEcharts = echarts.init(this.$refs.mychart);
    myEcharts.setOption({
      title: {
        text: "已申请专利类型情况分析",
        left: "center",
        textStyle: {
          fontSize: 15,
          color: "#FFF",
        },
      },
      yAxis: {
        name: "数量",
        type: "value",
        // show: false,
        nameTextStyle: {
          // 坐标轴名称的颜色，默认取 axisLine.lineStyle.color
          color: "black",
        },
        max: 250,
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
      xAxis: {
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
        data: ["发明专利", "PCT专利", "软件著作权", "实用新型专利"],
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
          name: "发明专利",
          data: [120, 80, 157, 118, 143],
          // data: [2400, 1240],
          type: "bar",
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0.4, 0.8, 1, [
              { offset: 0, color: "#4fdc0a" },
              { offset: 1, color: "#498b21" },
            ]),
          },
          barWidth: "15%",
          label: {
            show: false,
            position: [3, -20],
            formatter: function (params) {
              return params.data.name + ":" + params.data.value;
            },
          },
        },
        {
          name: "PCT专利",
          data: [106, 125, 146, 132, 120],
          // data: [2400, 1240],
          type: "bar",
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0.4, 0.8, 1, [
              { offset: 0, color: "#9f6cbb" },
              { offset: 1, color: "#766cbb" },
            ]),
          },
          barWidth: "15%",
          label: {
            show: false,
            position: [3, -20],
            formatter: function (params) {
              return params.data.name + ":" + params.data.value;
            },
          },
        },
        {
          name: "软件著作权",
          data: [184, 196, 237, 204, 216],
          // data: [2400, 1240],
          type: "bar",
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0.4, 0.8, 1, [
              { offset: 0, color: "#99603e" },
              { offset: 1, color: "#69553a" },
            ]),
          },
          barWidth: "15%",
          label: {
            show: false,
            position: [3, -20],
            formatter: function (params) {
              return params.data.name + ":" + params.data.value;
            },
          },
        },
        {
          name: "实用新型专利",
          data: [135, 164, 189, 143, 152],
          // data: [2400, 1240],
          type: "bar",
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0.4, 0.8, 1, [
              { offset: 0, color: "#f8be57" },
              { offset: 1, color: "#c69239" },
            ]),
          },
          barWidth: "15%",
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
  -webkit-clip-path: polygon(10% 0, 100% 0, 100% 100%, 0 100%, 0 11%);
  clip-path: polygon(10% 0, 100% 0, 100% 100%, 0 100%, 0 11%);
  /* div的其他属性 */
  /* background-color: aqua; */
  height: 4.45rem;
  width: 10.6rem;
  border: 1px solid rgb(6, 6, 202);
  margin: 10px 0px 10px 0px;
}
</style>
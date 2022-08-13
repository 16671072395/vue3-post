<template>
  <div ref="mychart" id="myDiv"></div>
</template>

<script>
import * as echarts from "echarts";
import "../../assets/chalk.js";
export default {
  name: "BarChart",
  mounted() {
    let myEcharts = echarts.init(this.$refs.mychart);
    myEcharts.setOption({
      title: {
        text: "硕博结构",
        left: "35%",
        textStyle: {
          fontSize: 15,
        },
      },
      xAxis: {
        type: "value",
        show: false,
      },
      yAxis: {
        type: "category",
        data: ["硕士人数", "博士人数"],
        show: false,
      },
      series: {
        name: "硕博结构",
        data: [
          { name: "硕士人数", value: "21020" },
          { name: "博士人数", value: "15900" },
        ],
        // data: [2400, 1240],
        type: "bar",
        itemStyle: {
          barBorderRadius: 20,
          color: function (param) {
            if (param.dataIndex == "1") {
              return new echarts.graphic.LinearGradient(0, 0.4, 0.8, 1, [
                { offset: 0, color: "#FFB477" },
                { offset: 1, color: "#FD9847" },
              ]);
            } else {
              return new echarts.graphic.LinearGradient(0, 0.4, 0.8, 1, [
                { offset: 0, color: "#2A86E3" },
                { offset: 1, color: "#48A3F1" },
              ]);
            }
          },
        },
        barWidth: "30%",
        label: {
          show: true,
          position: [3, -20],
          formatter: function (params) {
            return params.data.name + ":" + params.data.value + "人";
          },
        },
      },
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
      grid: {
        x: 12,
        y: 35,
        height: "70%",
        width: "100%",
      },
    });
    window.addEventListener("resize", () => {
      myEcharts.resize();
    });
  },
};
</script>

<style scoped>
#myDiv {
  height: 2rem;
  width: 5.4rem;
  margin: 0rem 0rem 0rem 0.1rem;
  border: 1px solid rgb(6, 6, 202);
  float: right;
  /* display: inherit; */
}
</style>
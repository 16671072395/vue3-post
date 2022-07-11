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
        text: "办学资产",
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
        data: ["图书总量", "教研设备总值"],
        show: false,
      },
      series: {
        name: "师资结构",
        data: [
          { name: "图书总量24万套", value: "2400" },
          { name: "教研设备总值6723万元", value: "6723" },
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
            return params.data.name;
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
        width: "90%",
      },
    });
  },
};
</script>

<style scoped>
#myDiv {
  height: 2rem;
  width: 5rem;
  margin: 0rem 0.2rem 0rem 0.2rem;
  border: 1px solid rgb(6, 6, 202);
  float: left;
}
</style>
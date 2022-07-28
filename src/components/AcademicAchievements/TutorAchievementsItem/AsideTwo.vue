<template>
  <div class="myDiv" ref="mychart"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "AsideTwo",
  mounted() {
    let myEcharts = echarts.init(this.$refs.mychart);
    var option = {
      title: {
        text: "C9高校CSC人数情况统计",
        top: 0,
        left: "center",
        textStyle: {
          color: "#fff",
        },
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
          crossStyle: {
            color: "#999",
          },
        },
      },
      toolbox: {
        feature: {
          dataView: { show: true, readOnly: false },
          magicType: { show: true, type: ["line", "bar"] },
          restore: { show: true },
          saveAsImage: { show: true },
        },
        show: false,
      },
      legend: {
        data: ["Precipitation", "Temperature"],
        top: 20,
      },
      xAxis: [
        {
          type: "category",
          data: [
            "清华",
            "北大",
            "复旦",
            "上交",
            "南京",
            "浙大",
            "中科大",
            "哈工大",
            "西交",
          ],
          //坐标轴指示器配置项
          axisPointer: {
            type: "shadow", //指示器类型:阴影
          },
          //坐标轴刻度相关设置
          axisTick: {
            show: true,
            alignWithLabel: true, //保证刻度线和标签对齐
            interval: 0, //坐标轴刻度的显示间隔,0为强制显示所有，在类目轴中有效。
          },
          // 坐标轴刻度标签(刻度下对应的文字)的相关设置
          axisLabel: {
            show: true,
            interval: 0, //坐标轴刻度标签的显示间隔,0为强制显示所有，在类目轴中有效。
            fontSize: 9, //标签字体
            color: "black",
          },
          min: 0,
        },
      ],
      yAxis: [
        {
          type: "value",
          name: "数量",
          min: 0,
          max: 400,
          interval: 50,
          axisLabel: {
            formatter: "{value}",
            color: "black",
          },
          // 坐标轴名称的文字样式。
          nameTextStyle: {
            // 坐标轴名称的颜色，默认取 axisLine.lineStyle.color
            color: "black",
          },
          color: "black",
          // 坐标轴轴线相关设置。
          axisLine: {
            show: true,
            lineStyle: {
              color: "#e6ebf4",
            },
          },
        },
        {
          type: "value",
          name: "覆盖率",
          min: 0,
          max: 30,
          interval: 5,
          axisLabel: {
            formatter: "{value}%",
            color: "black",
          },
          //坐标轴在 grid 区域中的分隔线
          splitLine: {
            show: false,
          },
          // 坐标轴轴线相关设置。
          axisLine: {
            show: true,
            lineStyle: {
              color: "#e6ebf4",
            },
          },
          // 坐标轴名称的文字样式。
          nameTextStyle: {
            // 坐标轴名称的颜色，默认取 axisLine.lineStyle.color
            color: "black",
          },
        },
      ],
      series: [
        {
          name: "Precipitation",
          type: "bar",
          tooltip: {
            valueFormatter: function (value) {
              return value + " ml";
            },
          },
          data: [364, 329, 247, 264, 287, 315, 275, 212, 248],
          itemStyle: {
            color: "rgb(74,163,241)",
          },
        },
        {
          name: "Temperature",
          type: "line",
          yAxisIndex: 1,
          tooltip: {
            valueFormatter: function (value) {
              return value + " °C";
            },
          },
          data: [22.0, 16.2, 14.3, 16.5, 17.3, 19.2, 20.3, 15.4, 13.0],
          itemStyle: {
            color: "rgb(13, 195, 52)",
          },
        },
      ],
      grid: { top: 70, bottom: 20 },
    };

    option && myEcharts.setOption(option);
    window.addEventListener("resize", () => {
      myEcharts.resize();
    });
  },
};
</script>

<style scoped>
.myDiv {
  /* 控制div的缺角样式 */
  -webkit-clip-path: polygon(90% 0, 100% 10%, 100% 100%, 0 100%, 0 0);
  clip-path: polygon(90% 0, 100% 10%, 100% 100%, 0 100%, 0 0);
  /* div的其他属性 */
  /* background-color: aqua; */
  height: 4rem;
  width: 10.6rem;
  border: 1px solid rgb(6, 6, 202);
  margin: 10px 0px 0px 0px;
}
</style>
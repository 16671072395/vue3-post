<template>
  <div class="myDiv" ref="mychart">dsa4d2154</div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "AsideOne",
  mounted() {
    let myEcharts = echarts.init(this.$refs.mychart);
    var option = {
      title: {
        text: "高水平论文年份分析",
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
        data: ["硕士导师", "博士导师", "硕导人均", "博导人均"],
        top: 20,
        textStyle: {
          fontSize: 16, //标签字体
          fontFamily: "等线",
          fontWeight: "500",
          color: "#fff",
        },
      },
      xAxis: [
        {
          type: "category",
          data: [2017, 2018, 2019, 2020, 2021],
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
            fontSize: 12, //标签字体
            color: "black",
          },
          min: 0,
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
        },
      ],
      yAxis: [
        {
          type: "value",
          name: "数量",
          min: 0,
          max: 500,
          interval: 100,
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
              color: "rgb(78, 78, 199)",
            },
          },
          splitLine: {
            lineStyle: {
              color: "rgb(78, 78, 199)",
            },
          },
        },
        {
          type: "value",
          name: "人均",
          min: 0,
          max: 12,
          interval: 4,
          axisLabel: {
            formatter: "{value}",
            color: "black",
          },
          //坐标轴在 grid 区域中的分隔线
          // 坐标轴轴线相关设置。
          axisLine: {
            show: true,
            lineStyle: {
              color: "rgb(78, 78, 199)",
            },
          },
          splitLine: {
            show: false,
            lineStyle: {
              color: "rgb(78, 78, 199)",
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
          name: "硕士导师",
          type: "bar",
          tooltip: {
            valueFormatter: function (value) {
              return value + " 篇";
            },
          },
          data: [264, 278, 296, 324, 351],
          itemStyle: {
            // color: "#99603e",
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: "#99603e" },
              { offset: 0.5, color: "#815341" },
              { offset: 1, color: "#69553a" },
            ]),
          },
          barWidth: "20%",
        },
        {
          name: "博士导师",
          type: "bar",
          tooltip: {
            valueFormatter: function (value) {
              return value + " 篇";
            },
          },
          data: [284, 310, 331, 373, 402],
          itemStyle: {
            // color: "#f8be57",
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: "#f8be57" },
              { offset: 0.5, color: "#e3a843" },
              { offset: 1, color: "#c69239" },
            ]),
          },
          barWidth: "20%",
        },
        {
          name: "硕导人均",
          type: "line",
          yAxisIndex: 1,
          tooltip: {
            valueFormatter: function (value) {
              return value + " 篇";
            },
          },
          data: [6.1, 7.2, 7.9, 6.8, 8.0],
          itemStyle: {
            color: "rgb(13, 195, 52)",
          },
        },
        {
          name: "博导人均",
          type: "line",
          yAxisIndex: 1,
          tooltip: {
            valueFormatter: function (value) {
              return value + " 篇";
            },
          },
          data: [7.2, 8.6, 9.3, 10.5, 9.7],
          itemStyle: {
            color: "#dd3167",
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
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 90%, 90% 100%, 0 100%);
  clip-path: polygon(0 0, 100% 0, 100% 90%, 90% 100%, 0 100%);
  /* div的其他属性 */
  /* background-color: aqua; */
  height: 4.45rem;
  width: 10.6rem;
  border: 1px solid rgb(6, 6, 202);
  margin: 10px 0px 10px 0px;
  color: #9f6cbb;
}
</style>
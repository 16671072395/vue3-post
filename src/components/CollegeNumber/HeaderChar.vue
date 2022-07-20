<template>
  <div class="myDiv" ref="mychart"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "CenterChar",
  mounted() {
    let myEcharts = echarts.init(this.$refs.mychart);
    myEcharts.setOption({
      title: {
        text: "2022年研究生招生情况(上)",
        left: "center",
        top: 20,
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
        formatter: "{b}:{c}",
      },
      xAxis: {
        type: "category",
        data: [
          "轻工与食品工程学院",
          "生命科学与技术学院",
          "文学院",
          "数学与信息科学学院",
          "艺术学院",
          "海洋学院",
          "体育学院",
          "新闻与传播学院",
          "医学院",
          "物理科学与工程技术学院",
          "农学院",
          "外国语学院",
          "马克思主义学院",
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
          color: "black",
          fontSize: 12,
          align: "center",
        },

        min: 0,
      },
      yAxis: {
        name: "数量",
        type: "value",
        nameTextStyle: {
          // 坐标轴名称的颜色，默认取 axisLine.lineStyle.color
          color: "black",
        },
        axisLabel: {
          show: true,
          formatter: "{value}",
          color: "black",
        },
        //坐标轴轴线相关设置。
        axisLine: {
          show: true,
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: " rgba(166, 166, 180, 0.878)",
          },
        },
      },
      series: [
        {
          data: [
            { college: "轻工与食品工程学院", value: 215 },
            { college: "生命科学与技术学院", value: 140 },
            { college: "文学院", value: 98 },
            { college: "数学与信息科学学院", value: 57 },
            { college: "艺术学院", value: 51 },
            { college: "海洋学院", value: 45 },
            { college: "体育学院", value: 18 },
            { college: "新闻与传播学院", value: 84 },
            { college: "医学院", value: 97 },
            { college: "物理科学与工程技术学院", value: 183 },
            { college: "农学院", value: 116 },
            { college: "外国语学院", value: 98 },
            { college: "马克思主义学院", value: 64 },
          ],
          type: "bar",
          showBackground: false,
          backgroundStyle: {
            color: "rgba(180, 180, 180, 0.2)",
          },
          // 柱状图宽度
          barWidth: "50%",
          color: "rgb(74,163,241)",
        },
      ],
      grid: {
        bottom: "10%",
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
  width: 100%;
  height: 100%;
}
</style>
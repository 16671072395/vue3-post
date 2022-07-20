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
        text: "2022年研究生招生情况(下)",
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
          "公共管理学院",
          "电气工程学院",
          "动物科学技术学院",
          "法学院",
          "工商管理学院",
          "土木建筑工程学院",
          "化学化工学院",
          "机械工程学院",
          "计算机与电子信息学院",
          "林学院",
          "经济学院",
          "资源环境与材料学院",
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
            { college: "公共管理学院", value: 275 },
            { college: "电气工程学院", value: 322 },
            { college: "动物科学技术学院", value: 281 },
            { college: "法学院", value: 173 },
            { college: "工商管理学院", value: 614 },
            { college: "土木建筑工程学院", value: 366 },
            { college: "化学化工学院", value: 346 },
            { college: "机械工程学院", value: 286 },
            { college: "计算机与电子信息学院", value: 244 },
            { college: "林学院", value: 159 },
            { college: "经济学院", value: 208 },
            { college: "资源环境与材料学院", value: 409 },
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
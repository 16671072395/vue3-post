<template>
  <div class="myDiv" ref="mychart"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "PortraitLeft",
  mounted() {
    let myEcharts = echarts.init(this.$refs.mychart);
    myEcharts.setOption({
      title: {
        text: "论文发表情况",
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
      },
      xAxis: {
        type: "category",
        data: ["论文总数", "核心论文数", "IE论文数", "SCI论文数"],
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
        max: 10,
      },
      series: [
        {
          data: [8, 3, 3, 2],
          type: "bar",
          showBackground: false,
          backgroundStyle: {
            color: "rgba(180, 180, 180, 0.2)",
          },
          // 柱状图宽度
          barWidth: "40%",
          color: "#39c8e4",
        },
      ],
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
  /* -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 10% 100%, 0 90%);
  clip-path: polygon(0 0, 100% 0, 100% 100%, 10% 100%, 0 90%); */
  /* div的其他属性 */
  /* background-color: aqua; */
  height: 7.5rem;
  width: 6.7rem;
  border: 1px solid rgb(6, 6, 202);
  margin: 10px 0px 10px 0px;
}
</style>
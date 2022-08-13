<template>
  <div class="myDiv" ref="mychart"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "AsideOne",
  mounted() {
    let myEcharts = echarts.init(this.$refs.mychart);
    myEcharts.setOption({
      title: {
        text: "国际交流",
        textStyle: {
          color: "#fff",
        },
        left: "center",
      },
      //   backgroundColor: "#f7f7f7", //背景颜色
      tooltip: {
        show: true,
        // formatter: "{a} <br/>{b} : {c} ({d}%)",
        formatter: "{b} : {c}",
      },
      //   图例,不需要
      //   legend: {
      //     x: "center",
      //     data: ["班车", "包车"],
      //   },
      toolbox: {
        show: false,
        feature: {
          mark: { show: true },
          dataView: { show: true, readOnly: false },
          restore: { show: true },
          saveAsImage: { show: true },
        },
      },
      calculable: false,
      series: [
        // 第一个饼图
        {
          name: "出国学习",
          type: "pie",
          center: ["50%", "35%"],
          radius: [0, 40],
          data: [{ value: 56, name: "出国学习" }],
          itemStyle: {
            //系列级个性化
            normal: {
              color: "#AB7B94",
              shadowColor: "#E07CCB",
              shadowBlur: 10,
              labelLine: {
                //饼图不显示线条
                length: 2,
                show: false,
              },
              label: {
                //饼图不显示文字
                show: true,
                position: "center", //饼图图上显示百分比
                formatter: function (params) {
                  return params.data.name + "\n" + params.data.value + "人";
                },
                textStyle: {
                  fontSize: 14,
                  color: "#fff",
                },
              },
              labelLine: {
                show: true,
                length: 10,
                length2: 0,
                lineStyle: {
                  color: "#0066FF",
                  width: 1,
                },
              },
            },
          },
        },
        // 第二个饼图
        {
          name: "来校外籍学生",
          type: "pie",
          center: ["30%", "70%"],
          radius: [0, 45],
          data: [{ value: 512, name: "来校外籍学生" }],
          itemStyle: {
            //系列级个性化
            normal: {
              color: "#2A6BBA",
              shadowColor: "#5D9FFF",
              shadowBlur: 10,
              labelLine: {
                //饼图不显示线条
                length: 2,
                show: false,
              },
              label: {
                //饼图不显示文字
                show: true,
                position: "center", //饼图图上显示百分比
                formatter: function (params) {
                  return params.data.name + "\n" + params.data.value + "人";
                },
                textStyle: {
                  fontSize: 14,
                  color: "#fff",
                },
              },
            },
          },
        },
        // 第三个饼图
        {
          name: "出国参加会议",
          type: "pie",
          center: ["70%", "65%"],
          radius: [0, 45],
          data: [{ value: 268, name: "出国参加会议" }],
          itemStyle: {
            //系列级个性化
            normal: {
              color: "#475BD3",
              shadowColor: "#5D9FFF",
              shadowBlur: 20,
              labelLine: {
                //饼图不显示线条
                length: 2,
                show: false,
              },
              label: {
                //饼图不显示文字
                show: true,
                position: "center", //饼图图上显示百分比
                formatter: function (params) {
                  return params.data.name + "\n" + params.data.value + "人";
                },
                textStyle: {
                  fontSize: 14,
                  color: "#fff",
                },
              },
            },
          },
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
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 90%, 90% 100%, 0 100%);
  clip-path: polygon(0 0, 100% 0, 100% 90%, 90% 100%, 0 100%);
  /* div的其他属性 */
  /* background-color: aqua; */
  height: 4.5rem;
  width: 5.1rem;
  border: 1px solid rgb(6, 6, 202);
  margin: 10px 0px 10px 0px;
}
</style>
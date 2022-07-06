<template>
  <div ref="mychart" id="myDiv"></div>
</template>

<script>
import * as echarts from "echarts";

export default {
  name: "BarChart",
  mounted() {
    let myEcharts = echarts.init(this.$refs.mychart);
    myEcharts.setOption({
      title: {
        text: "我是一个条形图",
      },
    });
  },
};
</script>

<style>
#myDiv {
  height: 500px;
  width: 500px;
}
</style>
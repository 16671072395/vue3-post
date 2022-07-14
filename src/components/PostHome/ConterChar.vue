<template>
  <div class="myDiv" ref="mychart">dsa4d2154</div>
</template>

<script>
import * as echarts from "echarts";
import { mapData } from "../../assets/mapData.js";

export default {
  name: "RightTwo",

  mounted() {
    let myEcharts = echarts.init(this.$refs.mychart);
    //注册地图数据
    echarts.registerMap("ChinaMap", mapData);
    var lineData = new Array();
    var pointData = [
      {
        name: "北京", // 数据项名称，在这里指地区名称
        value: [
          // 数据项值
          116.46, // 地理坐标，经度
          39.92, // 地理坐标，纬度
          240, // 北京地区的数值
        ],
      },
      {
        name: "陕西", // 数据项名称，在这里指地区名称
        value: [108.95464, 34.346892, 140],
      },
      {
        name: "河南", // 数据项名称，在这里指地区名称
        value: [113.655149, 34.80912, 120],
      },
      {
        name: "西藏", // 数据项名称，在这里指地区名称
        value: [88.634825, 31.277171, 2],
      },
      {
        name: "新疆", // 数据项名称，在这里指地区名称
        value: [85.617669, 41.26232, 3],
      },
      {
        name: "青海", // 数据项名称，在这里指地区名称
        value: [96.508869, 36.014025, 10],
      },
      {
        name: "甘肃", // 数据项名称，在这里指地区名称
        value: [104.456501, 34.80912, 10],
      },
      {
        name: "四川", // 数据项名称，在这里指地区名称
        value: [102.837539, 30.515618, 14],
      },
      {
        name: "云南", // 数据项名称，在这里指地区名称
        value: [101.512933, 24.549794, 18],
      },
      {
        name: "贵州", // 数据项名称，在这里指地区名称
        value: [107.032122, 26.618626, 18],
      },
      {
        name: "内蒙", // 数据项名称，在这里指地区名称
        value: [118.659214, 44.455489, 8],
      },
      {
        name: "山西", // 数据项名称，在这里指地区名称
        value: [112.183365, 37.494395, 28],
      },
      {
        name: "湖北", // 数据项名称，在这里指地区名称
        value: [112.183365, 31.277171, 41],
      },
      {
        name: "山东", // 数据项名称，在这里指地区名称
        value: [118.438446, 36.252817, 14],
      },
      {
        name: "安徽", // 数据项名称，在这里指地区名称
        value: [116.966663, 32.532698, 26],
      },
      {
        name: "江苏", // 数据项名称，在这里指地区名称
        value: [119.174338, 33.709271, 28],
      },
      {
        name: "江西", // 数据项名称，在这里指地区名称
        value: [115.642057, 27.999098, 35],
      },
      {
        name: "黑龙江", // 数据项名称，在这里指地区名称
        value: [128.667343, 46.778951, 17],
      },
      {
        name: "吉林", // 数据项名称，在这里指地区名称
        value: [126.533257, 43.230492, 13],
      },
      {
        name: "辽宁", // 数据项名称，在这里指地区名称
        value: [123.184949, 41.567014, 12],
      },
      {
        name: "浙江", // 数据项名称，在这里指地区名称
        value: [120.020614, 28.877263, 53],
      },
      {
        name: "湖南", // 数据项名称，在这里指地区名称
        value: [111.705036, 27.442429, 36],
      },
      {
        name: "广东", // 数据项名称，在这里指地区名称
        value: [113.250409, 24.179016, 84],
      },
      {
        name: "福建", // 数据项名称，在这里指地区名称
        value: [117.886527, 25.655451, 72],
      },
      {
        name: "广西", // 数据项名称，在这里指地区名称
        value: [108.283139, 22.957987, 742],
      },
    ];
    //该函数用于给画线组件数据源填充数据
    function drawline(pointData, lineData) {
      for (var i = 0; i < pointData.length; i++) {
        //填充线段两点的地名
        var point = [pointData[i].name, pointData[pointData.length - 1].name];
        // lineData[0].push(point);
        //填充线段两点的经纬度
        var coords = [
          [pointData[i].value[0], pointData[i].value[1]],
          [108.283139, 22.957987], //广西南宁的经纬度
        ];
        var temp = { coords, point };
        // lineData[1].push(coord);
        lineData.push(temp);
      }
      return lineData;
    }
    drawline(pointData, lineData);
    myEcharts.setOption({
      title: {
        text: "各省生源情况",
        top: 0,
        left: "center",
        textStyle: {
          color: "#fff",
        },
      },
      geo: {
        //地理坐标组件
        type: "map",
        map: "ChinaMap",
        roam: false, //开启缩放和拖动
        zoom: 1.5, //地图层级
        center: [106.256471, 36.011222], //地图中心点
        itemStyle: {
          areaColor: "rgb(192, 195, 220)",
        },
        select: {
          disabled: true,
          label: {
            show: true,
            formatter: "{b}::{c}",
          },
        },
        label: {
          show: false,
          // formatter: "\n",
        },
      },
      series: [
        {
          type: "effectScatter", //带有涟漪特效动画的散点（气泡）图。利用动画特效可以将某
          coordinateSystem: "geo", //使用什么坐标系geo使用地理坐标系
          data: pointData,
          label: {
            show: true,
            formatter: "\n\n\n{b}:{@value}",
          },

          // 这个时候地图上就会有点的涟漪效果
          rippleEffect: {
            //涟漪特效相关配置。
            number: 1, //波纹的数量。
            scale: 2, //动画中波纹的最大缩放比例
          },
          itemStyle: {
            color: "rgb(214, 118, 118)",
          },
        },
        {
          name: "",
          type: "lines",
          zlevel: 6,
          lineStyle: {
            type: "solid",
            width: 2,
            opacity: 0.5, //线的透明度
            curveness: 0.1, //线的曲度
            orient: "horizontal",
            color: "red",
          },
          show: true,
          data: lineData,
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
  /* div的其他属性 */
  /* background-color: aqua; */
  height: 8.2rem;
  width: 11.5rem;
  /* border: 1px solid rgb(214, 118, 118); */
  margin: 10px 10px 10px 0px;
}
</style>
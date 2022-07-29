<template>
  <div ref="mychart" id="myDiv">
    <el-icon class="icon" :size="60" color="#0b26f1"><Avatar /></el-icon>
    <div class="text">
      <span>硕士生导师人均申请专利数：{{ postTutor }}个</span><br />
      <span>博士生导师人均申请专利数：{{ doctorTutor }}个</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "BarChart",
  data() {
    return {
      postTutor: 7,
      doctorTutor: 10,
    };
  },
};
</script>

<style scoped>
#myDiv {
  height: 2rem;
  width: 5.25rem;
  margin: 0rem 0.1rem 0rem 0.1rem;
  border: 1px solid rgb(6, 6, 202);
  float: left;
}
.icon {
  margin: 40px 0px 20px 20px;
}
.text {
  float: right;
  margin-right: 5px;
  margin-top: 35px;
  line-height: 30pt;
  font-family: 等线;
  font-size: 14pt;
  font-weight: 400;
  color: #fff;
}
</style>
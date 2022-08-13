<template>
  <div ref="mychart" id="myDiv">
    <el-icon class="icon" :size="60" color="#0b26f1"><Document /></el-icon>
    <div class="text">
      <span>硕士人均发表论文数：{{ postTutor }}篇</span><br />
      <span>博士人均发表论文数：{{ doctorTutor }}篇</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "BarChart",
  data() {
    return {
      postTutor: 5,
      doctorTutor: 7,
    };
  },
};
</script>

<style scoped>
#myDiv {
  height: 2rem;
  width: 5.3rem;
  margin: 0rem 0.1rem 0rem 0rem;
  border: 1px solid rgb(6, 6, 202);
  float: left;
}
.icon {
  margin: 40px 0px 20px 20px;
}
.text {
  float: right;
  margin-right: 50px;
  margin-top: 35px;
  line-height: 30pt;
  font-family: 等线;
  font-size: 14pt;
  font-weight: 400;
  color: #fff;
  /* color: #0b26f1; */
}
</style>
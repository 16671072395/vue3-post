<template>
  <el-row>
    <el-col :span="9"
      ><div class="grid-content ep-bg-purple">
        <img src="../../assets/headimage.jpg" />
      </div>
    </el-col>
    <el-col :span="8"
      ><div class="grid-content ep-bg-purple" />
      <el-row :gutter="2" align>
        <el-col> <span>姓名：张三</span> </el-col>
        <el-col><span>学校：广西大学</span></el-col>
        <el-col><span>导师：XX教授</span></el-col>
        <el-col><span>学制：3年</span></el-col>
      </el-row>
      <el-row :gutter="2">
        <el-col>
          <div class="grid-content ep-bg-purple" />
          <span>性别：男</span>
        </el-col>
        <el-col>
          <div class="grid-content ep-bg-purple" />
          <span>学院：计电学院</span>
        </el-col>
        <el-col>
          <div class="grid-content ep-bg-purple" />
          <span> 研究方向：人工智能</span>
        </el-col>
        <el-col>
          <div class="grid-content ep-bg-purple" />
          <span>电话：136****2354 </span>
        </el-col>
      </el-row>
      <el-row :gutter="2">
        <el-col>
          <div class="grid-content ep-bg-purple" />
          <span>民族：汉族</span>
        </el-col>
        <el-col>
          <div class="grid-content ep-bg-purple" />
          <!-- <span>地址：东21栋324室</span> -->
          <span>专业：电子信息</span>
        </el-col>
        <el-col>
          <div class="grid-content ep-bg-purple" />
          <span>硕士类型：学术型</span>
        </el-col>
        <el-col>
          <div class="grid-content ep-bg-purple" />
          <span>邮箱：136****2354@163.com</span>
        </el-col>
      </el-row>
      <el-row :gutter="2">
        <el-col>
          <div class="grid-content ep-bg-purple" />
          <span>政治面貌：群众</span>
        </el-col>
        <el-col>
          <div class="grid-content ep-bg-purple" />
          <span>班级：XXXX班</span>
        </el-col>
        <el-col>
          <div class="grid-content ep-bg-purple" />
          <span>地址：东21栋324室</span>
        </el-col>
        <el-col>
          <div class="grid-content ep-bg-purple" />
          <span> QQ：2315248541</span>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "BasicInformation",
};
</script>

<style scoped>
.el-row {
  margin-bottom: 0px;
  flex-wrap: inherit;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
span {
  font-size: 18px;
}
img {
  height: 200px;
  width: 180px;
  margin: 20px 0px 0px 40px;
}
</style>

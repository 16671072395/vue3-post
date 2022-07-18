<template>
  <el-row>
    <el-col :span="7"
      ><div class="grid-content ep-bg-purple">
        <img src="../../assets/headimage.jpg" />
      </div>
    </el-col>
    <el-col :span="8"
      ><div class="grid-content ep-bg-purple" />
      <el-row :gutter="2" align>
        <el-col>
          <span>姓名：{{ basicInformation.name }}</span>
        </el-col>
        <el-col
          ><span>学校：{{ basicInformation.school }}</span></el-col
        >
        <el-col
          ><span>导师：{{ basicInformation.mentor }}</span></el-col
        >
        <el-col
          ><span>学制：{{ basicInformation.length }}年</span></el-col
        >
      </el-row>
      <el-row :gutter="2">
        <el-col>
          <div class="grid-content ep-bg-purple" />
          <span>性别：{{ basicInformation.sex }}</span>
        </el-col>
        <el-col>
          <div class="grid-content ep-bg-purple" />
          <span>学院：{{ basicInformation.college }}</span>
        </el-col>
        <el-col>
          <div class="grid-content ep-bg-purple" />
          <span> 学号：{{ basicInformation.num }}</span>
        </el-col>
        <el-col>
          <div class="grid-content ep-bg-purple" />
          <span>电话：{{ basicInformation.TelNumber }} </span>
        </el-col>
      </el-row>
      <el-row :gutter="2">
        <el-col>
          <div class="grid-content ep-bg-purple" />
          <span>民族：{{ basicInformation.national }}</span>
        </el-col>
        <el-col>
          <div class="grid-content ep-bg-purple" />
          <!-- <span>地址：东21栋324室</span> -->
          <span>专业：{{ basicInformation.professional }}</span>
        </el-col>
        <el-col>
          <div class="grid-content ep-bg-purple" />
          <span>硕士类型：{{ basicInformation.class }}</span>
        </el-col>
        <el-col>
          <div class="grid-content ep-bg-purple" />
          <span>邮箱：{{ basicInformation.Email }}</span>
        </el-col>
      </el-row>
      <el-row :gutter="2">
        <el-col>
          <div class="grid-content ep-bg-purple" />
          <span>政治面貌：{{ basicInformation.politicalStatus }}</span>
        </el-col>
        <el-col>
          <div class="grid-content ep-bg-purple" />
          <span>年龄：{{ basicInformation.Age }}</span>
        </el-col>
        <el-col>
          <div class="grid-content ep-bg-purple" />
          <span>地址：{{ basicInformation.Address }}</span>
        </el-col>
        <el-col>
          <div class="grid-content ep-bg-purple" />
          <span> QQ：{{ basicInformation.qqTel }}</span>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "BasicInformation",
  mounted() {
    this.basicInformation = JSON.parse(this.$route.params.tableData_already);
    console.log(this.basicInformation);
  },
  data() {
    return {
      // basicInformation: {
      //   school: "广西大学",
      //   name: "",
      //   mentor: "XX教授",
      //   length: "三年",
      //   sex: "男",
      //   college: "计电学院",
      //   researchDirection: this.param.professional,
      //   tel: "136****2354",
      //   national: "汉族",
      //   major: "电子信息",
      //   masterType: "学术型",
      //   email: "136****2354@163.com",
      //   politicalStatus: "群众",
      //   age: "XXXX班",
      //   address: "东21栋324室",
      //   qqTel: "2315248541",
      // },
      basicInformation: {},
    };
  },
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

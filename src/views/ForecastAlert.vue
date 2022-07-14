<template>
  <div style="padding: 10px; background-color: aliceblue">
    <div style="text-align: center; color: red">
      <h2>已预警学生</h2>
    </div>
    <div>
      <!--  stripe -->
      <el-table
        :data="tableData_already"
        :cell-style="{ 'text-align': 'center' }"
        :header-cell-style="{ 'text-align': 'center' }"
        border
        style="width: 100%"
        :row-class-name="tableRowClassName"
        fit
      >
        <el-table-column prop="id" label="预警号" width="90%" />
        <el-table-column prop="name" label="姓名" width="90%" />
        <el-table-column prop="email" label="邮箱" width="200%" />
        <el-table-column prop="num" label="学号" width="100%" />
        <!--                硕士研究生/博士研究生-->
        <el-table-column prop="class" label="类别" width="90%" />
        <!--                黄色/橙色/红色-->
        <el-table-column prop="AlertCategory" label="预警类别" width="90%" />
        <el-table-column prop="reason" label="预警原因" />
        <!--                （一）黄色预警类别-->
        <!--                1、前一学年必修课程不及格门次达到3门；-->
        <!--                2、前一学年核心课程平均学分绩点不足2.0；-->
        <!--                3、前一学年因考试违纪等原因或其他事项。-->
        <!--                （二）橙色预警-->
        <!--                1、累计必修课程不及格门次达到6门；-->
        <!--                2、累计核心课程不及格科目学分达到15学分；-->
        <!--                3、累计核心课程平均学分绩点不足2.0；-->
        <!--                4、因考试违纪等原因或其他事项；-->
        <!--                如受橙色预警可根据实际情况建议学生降级。-->
        <!--                （三）红色预警-->
        <!--                1、达到留级条件；-->
        <!--                2、毕业班学生仍存在不及格课程，未达到毕业条件；-->
        <!--                3、接近学校规定的最长学习年限仍未完成学业；-->
        <!--                4、毕业班学生因处分、累计核心课程平均学分绩点不足2.0、未通过全国大学英语四级考试或其他原因未达到授学位条件。-->
        <!--                所有课程以最高成绩计，高级别覆盖低级别预警。-->
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "ForecastAlert",
  methods: {
    tableRowClassName({ row }) {
      if (row.AlertCategory === "红色") {
        return "red";
      } else if (row.AlertCategory === "橙色") {
        return "orange";
      }
      return "yellow";
    },
  },
  data() {
    return {
      tableData_already: [
        {
          id: "N.90352187",
          name: "赵三金",
          email: "zhaosanjin@163.com",
          num: "2213052319",
          class: "硕士研究生",
          AlertCategory: "红色",
          reason: "毕业班学生仍存在不及格课程，未达到毕业条件",
        },
        {
          id: "N.90352188",
          name: "柴浩",
          email: "chaihao@163.com",
          num: "2213052320",
          class: "硕士研究生",
          AlertCategory: "橙色",
          reason: "累计核心课程不及格科目学分达到15学分",
        },
        {
          id: "N.90352188",
          name: "柴浩",
          email: "chaihao@163.com",
          num: "2213052320",
          class: "硕士研究生",
          AlertCategory: "橙色",
          reason: "累计核心课程不及格科目学分达到15学分",
        },
        {
          id: "N.90352189",
          name: "刀哥",
          email: "dog@163.com",
          num: "2213052319",
          class: "博士研究生",
          AlertCategory: "黄色",
          reason: "前一学年核心课程平均学分绩点不足2.0",
        },
        {
          id: "N.90352189",
          name: "刀哥",
          email: "dog@163.com",
          num: "2213052319",
          class: "博士研究生",
          AlertCategory: "黄色",
          reason: "前一学年核心课程平均学分绩点不足2.0",
        },
      ],
    };
  },
};
</script>

<style>
.red {
  background: rgba(255, 0, 0, 0.2) !important;
}

.orange {
  /* background-color: rgba(255, 165, 0, 0.54) !important; */
  background-color: rgba(255, 0, 0, 0.54) !important;
}

.yellow {
  background: rgba(255, 255, 0, 0.46) !important;
}
</style>
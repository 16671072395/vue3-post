<template>
  <div>
    <!--        表头-->
    <div style="color: #fff; padding-left: 40px">
      <h2 style="text-align: center">研究生名单</h2>
    </div>
    <!--表格-->
    <div class="table">
      <el-table
        :data="tableData_already"
        :cell-style="{ 'text-align': 'center' }"
        :header-cell-style="{ 'text-align': 'center' }"
        border
        style="width: auto"
        :row-class-name="tableRowClassName"
        fit
        size="default"
        :cell-class-name="cellStyle"
      >
        <el-table-column prop="num" label="学号" width="120%" />
        <el-table-column prop="name" label="姓名" width="80%" />
        <el-table-column prop="sex" label="性别" width="70%" />
        <el-table-column prop="professional" label="专业名称" width="150%" />
        <el-table-column prop="class" label="类别" width="100%" />
        <el-table-column prop="Age" label="年龄" width="70%" />
        <el-table-column prop="AdmissionDate" label="入学日期" width="120%" />
        <el-table-column prop="IdNumber" label="证件号码" width="200%" />
        <el-table-column prop="TelNumber" label="电话" width="150%">
        </el-table-column>
        <el-table-column prop="Email" label="邮箱" width="200%" />
        <el-table-column
          prop="Address"
          label="通讯地址"
          width="150%"
        ></el-table-column>
        <el-table-column
          class="defaultcolor"
          fixed="right"
          label="操作"
          width="150%"
        >
          <template #default="scope">
            <el-button type="primary" @click="handleEdit(scope.row)">
              查看画像
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!--        功能-->
    <div class="funarea">
      <el-pagination
        v-model:currentPage="pageInfo.pageNum"
        :page-size="pageInfo.pageSize"
        :page-sizes="[10, 20, 50]"
        :total="total"
        small="small"
        layout="total, sizes, prev, pager, next, jumper"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
      <el-button type="primary" @click="createExcel">导出</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostName",
  methods: {
    createExcel() {
      console.log("导出被点击了");
    },
    tableRowClassName(row) {
      return "defaultcolor";
    },
    cellStyle() {
      return "defaultcolor";
    },
    handleSizeChange(newSize) {
      // 几条每页改变执行
      console.log("handleSizeChange called");
      this.pageInfo.pageSize = newSize;
      this.load();
    },
    handleCurrentChange(newPage) {
      //改变页码执行
      console.log("handleCurrentChange called");
      this.pageInfo.pageNum = newPage;
      this.load();
    },
    createExcel() {
      alert("前端干不了这个活儿");
    },
    handleEdit(tableData_already) {
      this.$router.push({
        name: "postportrait",
        params: { tableData_already: JSON.stringify(tableData_already) },
      });
    },
  },
  data() {
    return {
      // 这是分页要用到的参数
      pageInfo: {
        pageNum: 1,
        pageSize: 10,
      },
      search: "",
      form: {},
      dialogVisible: false,
      total: 6,
      tableData_already: [
        {
          num: "2213052319",
          name: "张小明",
          professional: "计算机科学与技术",
          class: "硕士研究生",
          Age: 22,
          AdmissionDate: "2022-09-08",
          IdNumber: "350781196403070104", //身份证号都为网络上生成
          TelNumber: "15799394443", //电话号都为网络上生成
          Email: "15799394443@163.com",
          Address: "东29栋301室",
          sex: "男",
          school: "广西大学",
          mentor: "张三",
          length: 3,
          college: "计电学院",
          national: "汉族",
          qqTel: "2579964030",
          politicalStatus: "群众",
        },
        {
          num: "2213052320",
          name: "李小明",
          professional: "计算机科学与技术",
          class: "博士研究生",
          Age: 25,
          AdmissionDate: "2022-09-08",
          IdNumber: "350781196403071449", //身份证号都为网络上生成
          TelNumber: "15570474442", //电话号都为网络上生成
          Email: "15570474442@163.com",
          Address: "东29栋302室",
          sex: "男",
          school: "广西大学",
          mentor: "李三",
          length: 3,
          college: "计电学院",
          national: "汉族",
          qqTel: "25715464030",
          politicalStatus: "预备党员",
        },
        {
          name: "王小明",
          num: "2213052322",
          professional: "计算机科学与技术",
          class: "硕士研究生",
          Age: 23,
          AdmissionDate: "2022-09-08",
          IdNumber: "	350781196403079221", //身份证号都为网络上生成
          TelNumber: "15671484443", //电话号都为网络上生成
          Email: "15671484443@163.com",
          Address: "东29栋303室",
          sex: "男",
          school: "广西大学",
          mentor: "李四",
          length: 3,
          college: "计电学院",
          national: "汉族",
          qqTel: "2452156403",
          politicalStatus: "预备党员",
        },
        {
          name: "王小华",
          num: "2213052328",
          professional: "计算机科学与技术",
          class: "硕士研究生",
          Age: 23,
          AdmissionDate: "2022-09-08",
          IdNumber: "350781196403073989", //身份证号都为网络上生成
          TelNumber: "18480760004", //电话号都为网络上生成
          Email: "18480760004@163.com",
          Address: "东29栋304室",
          sex: "男",
          school: "广西大学",
          mentor: "王五",
          length: 3,
          college: "计电学院",
          national: "壮族",
          qqTel: "2572376122",
          politicalStatus: "预备党员",
        },
        {
          name: "赵小华",
          num: "2213052335",
          professional: "计算机科学与技术",
          class: "博士研究生",
          Age: 23,
          AdmissionDate: "2022-09-08",
          IdNumber: "350781196403079184", //身份证号都为网络上生成
          TelNumber: "18480764441", //电话号都为网络上生成
          Email: "18480764441@163.com",
          Address: "东29栋305室",
          sex: "女",
          school: "广西大学",
          mentor: "赵六",
          length: 3,
          college: "计电学院",
          national: "壮族",
          qqTel: "2131285123",
          politicalStatus: "预备党员",
        },
        {
          name: "周小明",
          num: "2213052342",
          professional: "计算机科学与技术",
          class: "硕士研究生",
          Age: 27,
          AdmissionDate: "2022-09-08",
          IdNumber: "350781196403074543", //身份证号都为网络上生成
          TelNumber: "15671484445", //电话号都为网络上生成
          Email: "15671484445@163.com",
          Address: "东29栋306室",
          sex: "男",
          school: "广西大学",
          mentor: "王五",
          length: 3,
          college: "计电学院",
          national: "汉族",
          qqTel: "2572376122",
          politicalStatus: "预备党员",
        },
        {
          name: "黄小明",
          num: "2213052346",
          professional: "计算机科学与技术",
          class: "硕士研究生",
          Age: 24,
          AdmissionDate: "2022-09-08",
          IdNumber: "350781196403074965", //身份证号都为网络上生成
          TelNumber: "15971154442", //电话号都为网络上生成
          Email: "15971154442@163.com",
          Address: "东29栋307室",
          sex: "男",
          school: "广西大学",
          mentor: "王五",
          length: 3,
          college: "计电学院",
          national: "汉族",
          qqTel: "2572376122",
          politicalStatus: "预备党员",
        },
      ],
    };
  },
};
</script>

<style>
.defaultcolor {
  background: rgba(131, 153, 224, 0.4) !important;
}
.funarea {
  display: flex;
  justify-content: center;
  align-items: center;
}
.el-pagination__total {
  color: #040c1d;
}
.el-pagination__jump {
  color: #040c1d;
}
.table {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
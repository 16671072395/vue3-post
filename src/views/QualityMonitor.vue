<template>
  <div>
    <el-container>
      <el-aside class="aside">
        <!--竖向菜单 -->
        <el-menu
          active-text-color="#ffd04b"
          class="el-menu-vertical-demo"
          background-color="#008bc2"
          default-active="/teachername"
          text-color="#fff"
          @open="handleOpen"
          @close="handleClose"
          :router="true"
          :unique-opened="true"
        >
          <el-sub-menu index="/teachername">
            <template #title>师资力量</template>
            <el-menu-item
              style="padding: 22px; font-size: 12px"
              index="/teachernames"
            >
              教职工名录
            </el-menu-item>
            <el-menu-item
              style="padding: 22px; font-size: 12px"
              index="/researchsupervisors"
            >
              研究生导师
            </el-menu-item>
            <el-menu-item
              style="padding: 22px; font-size: 12px"
              index="professornames"
            >
              副教授.教授
            </el-menu-item>
          </el-sub-menu>
          <el-menu-item index="/collegenumber">
            <span>招生情况</span>
          </el-menu-item>
          <el-sub-menu index="/computerscitec" :font-size="8">
            <template #title>培养过程</template>
            <el-menu-item
              style="padding: 22px; font-size: 12px"
              index="/computerscitec"
            >
              计算机科学与技术
            </el-menu-item>
            <el-menu-item
              style="padding: 22px; font-size: 12px"
              index="/informationsecurity"
            >
              信息安全
            </el-menu-item>
            <el-menu-item
              style="padding: 22px; font-size: 12px"
              index="/electronicinformation"
            >
              电子信息工程
            </el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="/postacademicachievements" :font-size="8">
            <template #title>学术成果</template>
            <el-menu-item
              style="padding: 22px; font-size: 12px"
              index="/postacademicachievements"
            >
              研究生学术成果
            </el-menu-item>
            <el-menu-item
              style="padding: 22px; font-size: 12px"
              index="/outputvaluetransformation"
            >
              成果产值转化
            </el-menu-item>
            <el-menu-item
              style="padding: 22px; font-size: 12px"
              index="/tutoracademicachievements"
            >
              导师学术成果
            </el-menu-item>
          </el-sub-menu>
        </el-menu>
      </el-aside>
      <el-main class="allHeight">
        <router-view> </router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import VerticalMenu from "../components/VerticalMenu";
import CollegeNumber from "../views/QualityMonitorPage/CollegeNumber";
export default {
  name: "QualityMonitor",
  components: {
    VerticalMenu,
    CollegeNumber,
  },
};
</script>

<style scoped>
.el-menu-vertical-demo {
  height: 762px;
  width: 120px;
  background-color: #008bc2;
}
.aside {
  width: 120px;
}
.el-sub-menu .el-menu-item {
  min-width: 120px;
}
div {
  font: size 0.625rem;
}
.allHeight {
  padding: 0px 0px 0px 10px;
  overflow: hidden;
}
</style>
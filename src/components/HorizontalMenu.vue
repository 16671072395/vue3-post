<template>
  <el-row class="tac">
    <el-col>
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        @select="handleSelect"
        :router="true"
      >
        <!-- 开启路由模式，根据index进行转跳 -->
        <el-menu-item index="/homepage">首页</el-menu-item>
        <el-menu-item index="/postgraduateportrait">研究生画像</el-menu-item>
        <el-menu-item index="/mentorportrait">导师画像</el-menu-item>
        <el-menu-item index="/thematicanalysis">主题分析</el-menu-item>
        <el-menu-item index="/forecastalert">预测预警</el-menu-item>
        <el-menu-item index="/basicstatement">基础报表</el-menu-item>
        <el-avatar
          class="avatar"
          src="https://user-images.githubusercontent.com/499550/93624428-53932780-f9ae-11ea-8d16-af949e16a09f.png"
        ></el-avatar>
        <span class="msg">
            <el-dropdown>
                <span class="el-dropdown-link">
<!--                  双向数据绑定用户名，登陆后获取到-->
                    张三
                  <el-icon class="el-icon--right">
                    <arrow-down />
                  </el-icon>
                </span>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item>个人信息</el-dropdown-item>
                    <el-dropdown-item @click="exit">退出系统</el-dropdown-item>
                  </el-dropdown-menu>
                </template>
            </el-dropdown>
        </span>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
import { ref } from "vue";
import { ArrowDown } from '@element-plus/icons-vue'
export default {
    components:{
      'arrow-down':ArrowDown
    },
    name: "HorizontalMenu",
    setup() {
    const activeIndex2 = ref("1");
    const handleSelect = (key = "string", keyPath = "string[]") => {
      console.log(key, keyPath);
    };
    function handleOpen(key, keyPath) {
      console.log(key, keyPath);
    }
    function handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
    return {
      handleOpen,
      handleClose,
      activeIndex2,
      handleSelect,
    };
  },
    methods:{
        exit(){
            this.$message({
                type:'success',
                showClose:true,
                message:'欢迎您下次使用，再见！',
                duration:1000
            })
            let self = this
            localStorage.clear()
            setTimeout(function (){
                self.$router.push('/login')
                window.location.reload()
            },1000)
        }
    }
};
</script>

<style scoped>
.avatar {
  position: relative;
  left: 800px;
  top: 8px;
}
.msg {
  position: relative;
  left: 820px;
  top: 18px;
  color: #fff;
}
.el-dropdown-link {
    cursor: pointer;
    color: #66CCFF;
    display: flex;
    align-items: center;
}
</style>
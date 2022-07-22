<template id="details">
    <el-card class="box-card">
        <!--        人像-->
        <div style="float: left;width: 150px;margin: 30px auto auto 30px;">
            <el-image style="width: 100px;border-radius: 4px" :src="url"/>
        </div>
        <!--        基本内容-->
        <div style="float: left;width: 800px;margin-left: 10px">
            <!--            姓名和职务-->
            <div>
                <!--                姓名-->
                <span style="font-size: 24px;font-weight:bold;color: #218dee">张三</span>
                <!--                职务-->
                <span style="font-weight: bold;font-size: 16px;color: #fd604d;margin-left: 20px">博士研究生导师</span>
            </div>
            <!--            性别和所在单位-->
            <div style="float:left;font-size: 16px;margin-top: 20px">
                <!--                    性别|籍贯|政治面貌-->
                <span style="float:left;">男 | 北京东城 | 中共党员</span>
                <!--                    单位-->
                <el-icon style="margin-left: 20px">
                    <AddLocation/>
                </el-icon>
                <span>所在单位: </span>
                <span style="color: gray">计算机与电子信息学院</span>
            </div>
            <!--                分割线-->
            <div>
                <el-divider style="float: left;"/>
            </div>
            <!--                联系方式-->
            <div style="font-size: 14px;float: left">
                <!--                电话、QQ、邮编-->
                <div>
                    <span style="display: inline-block;width: 250px;">
                        <el-icon><Phone/></el-icon>
                        <span style="margin-left: 5px">电话: </span>
                        <span>13812345678</span>
                    </span>
                    <span style="display: inline-block;width: 250px;">
                        <el-icon><User/></el-icon>
                        <span style="margin-left: 5px">QQ: </span>
                        <span>1001010</span>
                    </span>
                    <span style="display: inline-block;width: 250px;">
                        <el-icon><MessageBox/></el-icon>
                        <span style="margin-left: 5px">邮政编码: </span>
                        <span>100000</span>
                    </span>
                </div>
                <!--                Email、微信、通讯地址-->
                <div style="margin-top: 30px">
                    <span style="display: inline-block;width: 250px;">
                        <el-icon><Message/></el-icon>
                        <span style="margin-left: 5px">Email: </span>
                        <span style="font-size: 12px">13812345678@gxu.edu.cn</span>
                    </span>
                    <span style="display: inline-block;width: 250px;">
                        <el-icon><Notification/></el-icon>
                        <span style="margin-left: 5px">微信: </span>
                        <span>13812345678</span>
                    </span>
                    <span style="display: inline-block;width: 250px;">
                        <el-icon><Location/></el-icon>
                        <span style="margin-left: 5px">通讯地址: </span>
                        <span>广西南宁市大学东路100号</span>
                    </span>
                </div>
            </div>
        </div>
    </el-card>
    <el-card class="card_2">
<!--        导航栏-->
        <el-menu
                :default-active="activeIndex"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
                style="margin: auto"
                fit
        >
            <el-menu-item index="1">个人简介</el-menu-item>
            <el-menu-item index="2">主讲课程</el-menu-item>
            <el-menu-item index="3">主持（参与）的主要科研项目</el-menu-item>
            <el-menu-item index="4">主要研究方向</el-menu-item>
            <el-menu-item index="5">取得的主要研究成果</el-menu-item>
            <el-menu-item index="6">荣誉与获奖</el-menu-item>
            <el-menu-item index="7">招生信息</el-menu-item>
            <el-menu-item index="8">学术兼职</el-menu-item>
        </el-menu>
<!--        具体内容显示区域-->
    </el-card>
</template>

<script>
    export default {
        name: "Details",
        data() {
            return {
                url: require('../assets/test.jpeg'),
                activeIndex: '1'
            }
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        },
        created() {
            console.log(this.$route)
        }

    }
</script>

<style>
    .box-card {
        background-color: darkgray;
        width: 1200px;
        height: 270px;
        margin: 20px auto 10px;
    }

    .card_2 {
        background-color: darkgray;
        width: 1200px;
        height: calc(100vh - 360px);
        margin: auto;
    }

</style>
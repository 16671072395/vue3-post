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
        <el-tabs v-model="activeName" @tab-click="handleClick" stretch="true">
            <el-tab-pane label="个人简介" name="first" class="pane">
                <span class="span">
                    1.2020-10 至今，广西大学，机械工程学院，预聘副教授 <br>
                    2.2017-12 至 2020-08，北京大学，工学院，博士后<br>
                    3.2013-09 至 2017-10，湖南大学，机械与运载工程学院，博士<br>
                    4.2011-09 至 2013-06，湖南大学，机械与运载工程学院，硕士<br>
                    5.2007-09 至 2011-06，湖南大学，机械与运载工程学院，学士
                </span>
            </el-tab-pane>
            <el-tab-pane label="主讲课程" name="second" class="pane">
                <span class="span">
                    《数据结构》
                </span>
            </el-tab-pane>
            <el-tab-pane label="主持（参与）的主要科研项目" name="third" class="pane">
                <span class="span">
                    暂无信息
                </span>
            </el-tab-pane>
            <el-tab-pane label="主要研究方向" name="fourth" class="pane">
                <span class="span">
                    暂无信息
                </span>
            </el-tab-pane>
            <el-tab-pane label="取得的主要研究成果" name="fifth" class="pane">
                <span class="span">
                    暂无信息
                </span>
            </el-tab-pane>
            <el-tab-pane label="荣誉与获奖" name="sixth" class="pane">
                <span class="span">
                    暂无信息
                </span>
            </el-tab-pane>
            <el-tab-pane label="招生信息" name="seventh" class="pane">
                <span class="span">
                    欢迎广大有志青年报考！
                </span>
            </el-tab-pane>
            <el-tab-pane label="学术兼职" name="eighth" class="pane">
                <span class="span">
                    暂无信息
                </span>
            </el-tab-pane>

        </el-tabs>
<!--        具体内容显示区域-->
    </el-card>
</template>

<script>
    export default {
        name: "Details",
        data() {
            return {
                //默认选中第一个个人简介
                activeName:'first',
                url: require('../assets/test.jpeg'),
            }
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClick(tab, event) {
                console.log(tab, event);
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


    .pane{
        margin-left: 20px;
        margin-right: 20px;
        margin-top: 5px;
    }

    .span{
        font-size: 16px;
    }
</style>
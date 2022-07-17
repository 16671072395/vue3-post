<template id="details">
    <el-card class="box-card">
        <!--        人像-->
        <div style="float: left;width: 200px;margin-left: 30px;margin-top: 40px;">
            <el-image style="width: 100px;" :src="url"/>
        </div>
        <el-card class="card_2">
            <!--        基本内容-->
            <div style="float: left">
                <div>
                    <!--            姓名-->
                    <div style="float:left;font-size: 24px;font-weight: bold;color: #218dee;margin-left: 20px">张三</div>
                    <!--            职务-->
                    <div style="float:left;margin-left: 10px;margin-top: 9px;font-weight: bold;font-size:16px;color: #fd604d">
                        博士研究生导师
                    </div>
                </div>
                <div style="float:left;font-size: 16px;margin-top: 20px">
                    <!--                    性别|籍贯|政治面貌-->
                    <div style="float:left;">男 | 北京东城 | 中共党员</div>
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
                <div style="float:left;font-size: 16px">
                    <span>
                       <el-icon><Phone/></el-icon>
                        <span>  联系电话:  </span>
                        <span>13812345678</span>
                    </span>
                    <span style="margin-left: 60px">
                        <el-icon><ChatDotRound /></el-icon>
                        <span>  QQ:  </span>
                        <span>100100101</span>
                    </span>
                    <span style="margin-left: 60px">
                        <el-icon><MessageBox /></el-icon>
                        <span>  邮政编码:  </span>
                        <span>010001</span>
                    </span>

                </div>
<!--                <div style="float:left;font-size: 16px;margin-top: 20px;">-->
<!--                    <span>-->
<!--                       <el-icon><Phone/></el-icon>-->
<!--                        <span>  email:  </span>-->
<!--                        <span>13812345678</span>-->
<!--                    </span>-->
<!--                    <span style="margin-left: 60px">-->
<!--                        <el-icon><ChatDotRound /></el-icon>-->
<!--                        <span>  微信:  </span>-->
<!--                        <span>100100101</span>-->
<!--                    </span>-->
<!--                    <span style="margin-left: 60px;margin-bottom: 50px;">-->
<!--                        <el-icon><MessageBox /></el-icon>-->
<!--                        <span>  通讯地址:  </span>-->
<!--                        <span>010001</span>-->
<!--                    </span>-->

<!--                </div>-->
            </div>
        </el-card>

    </el-card>
</template>

<script>
    export default {
        name: "Details",
        data() {
            return {
                url: require('../assets/test.jpeg')
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
        width: 1000px;
        height: 280px;
        margin: 20px auto 10px;
    }
    .card_2{
        height: 240px;
    }
</style>
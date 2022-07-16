<template>
    <el-card shadow="always" id="card">
        <!--        操作栏-->

        <div style="text-align: center;margin-left: -200px">
            <div style="display:inline;">
                <span>单位名称</span>
                <el-select size="default" v-model="CompanyName" placeholder="全部" style="margin-left: 10px">
                    <el-option
                            v-for="item in optionsForCompanyName"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
            </div>
            <div style="display:inline;">
                <span style="margin-left: 20px">导师类别</span>
                <el-select size="default" style="margin-left: 10px" v-model="MentorCategory" placeholder="请选择">
                    <el-option
                            v-for="item in optionsForMentorCategory"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
            </div>
            <div style="display:inline;">
                <span style="margin-left: 20px">姓名</span>
                <el-input size="default" style="position: absolute;margin-left: 10px;width: 200px" v-model="name"
                          placeholder="请输入姓名" class="input" clearable></el-input>
            </div>
        </div>
        <div style="margin-top: 20px;margin-left: 1000px;">
            <el-button size="default">重置</el-button>
            <el-button type="primary" size="default">搜索</el-button>
        </div>
    </el-card>
    <div>
        <div class="teacher">
            <div class="teacher_1" v-for="(item,id) in teacher" :key="id">
                <img src="{{item.src}}" class="img">
                <div class="teacher_2">
                    <text>{{ item.name }}</text>
                    <text>{{ item.company }}</text>
                </div>
            </div>
        </div>
    </div>


</template>


<script>
    export default {
        data() {
            return {
                name: '',
                optionsForCompanyName: [{
                    value: '选项1',
                    label: '计算机与电子信息学院'
                }],
                optionsForMentorCategory: [
                    {
                        value: '选项1',
                        label: '硕士研究生导师'
                    },
                    {
                        value: '选项2',
                        label: '博士研究生导师'
                    },
                    {
                        value: '选项3',
                        label: '博士后合作导师'
                    }
                ],
                CompanyName: '',
                MentorCategory: '',
                teacher: [
                    {
                        id: 1,
                        src: "../../assets/test.jpeg",
                        name: "测试",
                        company: "xxx学院"
                    },
                    {
                        id: 2,
                        src: "../../assets/test.jpeg",
                        name: "测试",
                        company: "xxx学院"
                    },
                    {
                        id: 3,
                        src: "../../assets/test.jpeg",
                        name: "测试",
                        company: "xxx学院"
                    }
                ],
            }
        }
    }
</script>

<style>
    .teacher {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        align-self: center;
        align-items: center;
        background-color: snow;
    }

    .teacher_1 {
        padding-left: 50px;
        width: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .teacher_2 {
        display: flex;
        flex-direction: row;
        height: 20px;
        border: 1px solid silver;
        width: 20%;
        background-color: rgb(245, 239, 239);
        border-radius: 50px;
        align-items: center;
        justify-content: space-between;
        padding-left: 50px;
        padding-right: 50px;
        margin-top: 10px;
        margin-bottom: 30px;
    }

    .img {
        width: 30px;
        height: 30px;
        border-radius: 20px;
    }

    #card {
        width: 80%;
        padding: 20px;
        background-color: rgba(255, 255, 255, .95);
        border-radius: 4px;
        display: flex;
        margin: 100px auto auto;;
    }

    #card_1 {
        width: 90%;
        margin: auto;
    }
</style>
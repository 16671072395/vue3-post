<template>
    <div style="padding: 10px;background-color: aliceblue">
        <!--      功能区域-->
        <div style="margin: 10px 0">
            <el-button type="primary" @click="add">新增</el-button>
            <el-button type="primary" @click="exportRecords">导出</el-button>
        </div>
        <!--      搜索区域-->
        <div style="margin: 10px 0">
            <el-input v-model="search" placeholder="键入关键字" style="width: 20%" clearable></el-input>
            <el-button type="primary" style="margin-left: 5px" @click="load">查询</el-button>

        </div>
        <!--        表格-->
        <el-table
                :data="tableData"
                :cell-style="{'text-align':'center'}"
                :header-cell-style="{'text-align':'center'}"
                stripe border
                style="width: 100%;"
                fit>
            <el-table-column prop="id" label="编号" sortable width="70%"/>
            <el-table-column prop="number" label="学号"/>
            <el-table-column prop="email" label="邮箱"/>
            <el-table-column prop="score_hs" label="高考成绩" sortable width="90%"/>
            <el-table-column prop="score_course" label="学期成绩" sortable width="90%"/>
            <el-table-column prop="address" label="地址"/>
            <el-table-column fixed="right" label="操作" width="150%">
                <template #default="scope">
                    <el-button type="primary" @click="handleEdit(scope.row)">
                        编辑
                    </el-button>
                    <el-popconfirm title="你确定这么做吗?此操作无法恢复!" @confirm="handleDelete(scope.row.id)">
                        <template #reference>
                            <el-button type="danger">删除</el-button>
                        </template>
                    </el-popconfirm>
                </template>
            </el-table-column>
        </el-table>
        <!--        分页-->
        <div style="margin: 10px 0">
            <el-pagination
                    v-model:currentPage="pageInfo.pageNum"
                    :page-size="pageInfo.pageSize"
                    :page-sizes="[10, 20, 50]"
                    :total="total"
                    :small="small"
                    :disabled="disabled"
                    :background="background"
                    layout="total, sizes, prev, pager, next, jumper"
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
            />
            <!--            弹窗-->
            <el-dialog v-model="dialogVisible" title="新增人员" width="30%" draggable>
                <el-form :model="form" label-width="120px">
                    <el-form-item label="学号">
                        <el-input v-model="form.number" style="width: 80%"></el-input>
                    </el-form-item>
                    <el-form-item label="邮箱">
                        <el-input v-model="form.email" style="width: 80%"></el-input>
                    </el-form-item>
                    <el-form-item label="高考成绩">
                        <el-input v-model="form.score_hs" style="width: 80%"></el-input>
                    </el-form-item>
                    <el-form-item label="学期成绩">
                        <el-input v-model="form.score_course" style="width: 80%"></el-input>
                    </el-form-item>
                    <el-form-item label="地址">
                        <el-input type="textarea" v-model="form.address" style="width: 80%"></el-input>
                    </el-form-item>
                </el-form>
                <template #footer>
                <span class="dialog-footer">
                <el-button type="danger" @click="dialogVisible = false">取消</el-button>
                <el-button type="primary" @click="save">确定</el-button>
      </span>
                </template>
            </el-dialog>
        </div>
    </div>
</template>

<script>
    import {ref} from 'vue'
    import axios from 'axios'

    const small = ref(true)
    const background = ref(true)
    const disabled = ref(true)
    // const url = "后端地址"
    export default {
        name: 'BasicStatement',
        methods: {
            exportRecords(){
                alert('前端干不了这个活儿')
            },
            load() {
                // axios.get(url + "/user", {
                //     params: {
                //         pageNum: this.pageInfo.pageNum,
                //         pageSize: this.pageInfo.pageSize,
                //         search: this.search
                //     }
                // }).then(res => {
                //     console.log(res)
                //     this.tableData = res.data.data.records
                //     this.total = res.data.data.total
                // })
            },
            save() {
                // //form有id为更新，否则为新增
                // if (this.form.id) {
                //     axios.put(url + "/user", this.form).then(res => {
                //         console.log(res)
                //         if (res.data.code === '0') {
                //             this.$message({
                //                 type: 'success',
                //                 message: '修改成功',
                //                 showClose: true
                //             })
                //             this.dialogVisible = false
                //             this.load()
                //         } else {
                //             this.$message({
                //                 type: "error",
                //                 message: '发生了未知错误：' + res.data.msg,
                //             })
                //         }
                //     })
                // } else {
                //     // 传数据到后台
                //     console.log(this.form)
                //     axios.post(url + "/user", this.form).then(res => {
                //         console.log(res)
                //         this.$message.success("添加成功")
                //         this.dialogVisible = false
                //         this.load()
                //     })
                // }
            },
            add() {
                console.log('新增被点击了')
                this.dialogVisible = true
                this.form = {}
            },
            handleDelete(id) {

                // axios.delete(url + "/user/" + id).then(res => {
                //     console.log(res)
                //     if (res.data.code === "0") {
                //         this.$message.success('删除成功')
                //         this.load()
                //     } else {
                //         this.$message.error('未知错误' + res.data.msg)
                //         this.load()
                //     }
                // })
            },
            handleEdit(row) {
                console.log('编辑被点击了')
                this.form = JSON.parse(JSON.stringify(row))
                this.dialogVisible = true
            },
            handleSizeChange(newSize) {
                // 几条每页改变执行
                console.log('handleSizeChange called')
                this.pageInfo.pageSize = newSize
                this.load()
            },
            handleCurrentChange(newPage) {
                //改变页码执行
                console.log('handleCurrentChange called')
                this.pageInfo.pageNum = newPage
                this.load()
            }
        },
        data() {
            return {
                // 这是分页要用到的参数
                pageInfo: {
                    pageNum: 1,
                    pageSize: 10
                },
                // 这是搜索的关键字
                search: '',
                form: {},
                dialogVisible: false,
                total: 6,
                tableData: [
                    {
                        'id': 1,
                        'number': '开局重伤倒地，激发队友潜力',
                        'name':'捍卫者',
                        'email': 'admin@gxu.edu.cn',
                        'score_hs': 591,
                        'score_course': 95,
                        'address': 'No. 189, Grove St, Los Angeles'
                    },
                    {
                        'id': 2,
                        'number': '理塘最強伝説と絕兇の猛虎！純真丁一郎です！',
                        'name':'张三',
                        'email': 'zhang_san@gxu.edu.cn',
                        'score_hs': 525,
                        'score_course': 99,
                        'address': 'No. 189, Grove St, Los Angeles'
                    },
                    {
                        'id': 3,
                        'number': '下北沢最強伝説！野獣化の先輩浩二です!',
                        'name':'李四',
                        'email': 'li_si@gxu.edu.cn',
                        'score_hs': 555,
                        'score_course': 88,
                        'address': 'No. 189, Grove St, Los Angeles'
                    },
                    {
                        'id': 4,
                        'number': '吉林最速伝説と卑鄙の猎豹！跑男趙三金です!',
                        'name':'王五',
                        'email': 'wang_wu@gxu.edu.cn',
                        'score_hs': 592,
                        'score_course': 99,
                        'address': 'No. 189, Grove St, Los Angeles'
                    },
                    {
                        'id': 5,
                        'number': '瀋陽最狠伝説と整活の猛虎！貴物虎太郎です!',
                        'name':'赵六',
                        'email': 'zhao_liu@gxu.edu.cn',
                        'score_hs': 610,
                        'score_course': 59,
                        'address': 'No. 189, Grove St, Los Angeles'
                    },
                    {
                        'id': 6,
                        'number': '瀋陽最速伝説と疾走の帝王！廃物刀一郎です!',
                        'name':'飞舞刀',
                        'email': 'dog@700+.com',
                        'score_hs': 150,
                        'score_course': 59,
                        'address': 'No. 189, Grove St, Los Angeles'
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>
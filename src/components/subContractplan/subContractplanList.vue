<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>分包策划管理</el-breadcrumb-item>
      <el-breadcrumb-item>分包策划列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!--搜索-->
    <el-form :inline="true" size="mini" class="searchData">
      <el-form-item label="策划名称:">
        <el-input v-model="searchData.skuName" placeholder="请输入策划名称"></el-input>
      </el-form-item>
      <el-form-item label="策划编号:">
        <el-input v-model="searchData.skuId" placeholder="请输入策划编号"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-search">查询</el-button>
        <el-button type="primary" icon="el-icon-refresh">重置</el-button>
      </el-form-item>
    </el-form>
    <el-button type="primary" size="mini" @click="add" >新增分包策划</el-button>
    <el-button type="danger" size="mini" @click="remove" >删除</el-button>
    <!--表格-->
    <el-table
      :data="tableList"
      stripe
      border
      :header-cell-style="{
        'background-color': '#fafafa',
        'color': 'rgb(103, 194, 58)',
        'border-bottom': '1px rgb(103, 194, 58) solid'}"
      style="width: 100%">
      <el-table-column
        type="index"
        prop="number"
        label="序号"
        width="60"
        align="center">
      </el-table-column>
      <el-table-column
        prop="objectId"
        label="策划编号"
        align="center"
        min-width="120"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        prop="objectName"
        align="center"
        min-width="150"
        show-overflow-tooltip
        label="项目名称">
      </el-table-column>
      <el-table-column
        prop="engineerType"
        align="center"
        min-width="150"
        show-overflow-tooltip
        label="工程类型">
      </el-table-column>
      <el-table-column
        align="center"
        label="合同额（万元）">
        <el-table-column
          prop="contractValue1"
          align="center"
          min-width="150"
          show-overflow-tooltip
          label="主合同额">
        </el-table-column>
        <el-table-column
          prop="contractValue2"
          align="center"
          min-width="150"
          show-overflow-tooltip
          label="拟合同额">
        </el-table-column>
      </el-table-column>
      <el-table-column
        prop="unit"
        align="center"
        min-width="100"
        show-overflow-tooltip
        label="编制单位">
      </el-table-column>
      <el-table-column
        prop="department"
        align="center"
        min-width="100"
        show-overflow-tooltip
        label="编制部门">
      </el-table-column>
      <el-table-column
        prop="createTime"
        align="center"
        min-width="160"
        label="编制时间">
      </el-table-column>
    </el-table>
    <div class="page fr" v-if="total">
      <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :page-size="pageSize"
        layout="total, prev, pager, next, jumper"
        :total="total">
      </el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      searchData: { // 搜索数据
        skuName: '', // 产品名称
        skuId: '' // 产品编号
      },
      pageSize: 10, // 每页条数
      pageNum: 1, // 当前第几页
      total: 2, // 总页数
      currentSize: 2, // 当前页数据条数
      tableList: [{objectId: '1', objectName: '雄安公路', engineerType: '公路', contractValue1: 66666.66, contractValue2: 99999.99, unit: '二公司', department: '合同部', createTime: '2019-05-01'}, {objectId: '2', objectName: '雄安铁路', engineerType: '铁路', contractValue1: 66666.66, contractValue2: 99999.99, unit: '二公司', department: '合同部', createTime: '2019-05-01'}] // 列表
    }
  },
  methods: {
    // 添加
    add () {
      // 到新增页面
      this.$router.push({path: '/subContractplanAdd'})
    },
    // 处理分页
    handleSizeChange (val) {
      this.pageSize = val
      this.initData()
    },
    handleCurrentChange (val) {
      this.pageNum = val
      this.initData()
    }
  }
}
</script>
<style scoped>
  .el-breadcrumb {
    background-color: #D3DCE6;
    height: 45px;
    font-size: 15px;
    padding-left: 10px;
    line-height: 45px;
  }
  .searchData {
    margin-top: 10px;
  }
</style>

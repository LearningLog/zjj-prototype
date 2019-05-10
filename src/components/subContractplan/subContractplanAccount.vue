<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>分包策划管理</el-breadcrumb-item>
      <el-breadcrumb-item>分包策划列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!--搜索-->
    <el-form :inline="true" size="mini" class="searchData">
      <el-form-item label="项目名称:">
        <el-input v-model="searchData.skuName" placeholder="请输入项目名称"></el-input>
      </el-form-item>
      <el-form-item label="策划编号:">
        <el-input v-model="searchData.skuId" placeholder="请输入策划编号"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-search">查询</el-button>
        <el-button type="primary" icon="el-icon-refresh">重置</el-button>
      </el-form-item>
    </el-form>
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
        label="序号"
        type="index"
        align="center"
        width="50">
      </el-table-column>
      <el-table-column
        prop="objectId"
        label="策划编号"
        align="center"
        min-width="100"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        prop="objectName"
        header-align="center"
        min-width="200"
        show-overflow-tooltip
        label="项目名称">
        <template slot-scope="scope">
          <el-link class="objectName" type="primary" @click="detail(1)">{{ scope.row.objectName }}</el-link>
        </template>
      </el-table-column>
      <el-table-column
        prop="engineerType"
        align="center"
        min-width="110"
        show-overflow-tooltip
        label="工程类型">
      </el-table-column>
      <el-table-column
        align="center"
        label="合同额（万元）">
        <el-table-column
          prop="contractValue1"
          header-align="center"
          align="right"
          min-width="150"
          show-overflow-tooltip
          label="主合同额">
        </el-table-column>
        <el-table-column
          prop="contractValue2"
          header-align="center"
          align="right"
          min-width="150"
          show-overflow-tooltip
          label="拟分包额">
        </el-table-column>
      </el-table-column>
      <el-table-column
        prop="unit"
        header-align="center"
        min-width="100"
        show-overflow-tooltip
        label="编制单位">
      </el-table-column>
      <el-table-column
        prop="department"
        header-align="center"
        min-width="100"
        show-overflow-tooltip
        label="编制部门">
      </el-table-column>
      <el-table-column
        prop="createTime"
        align="center"
        min-width="110"
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
      tableList: [{objectId: '1', objectName: '雄安公路', engineerType: '公路', contractValue1: '99,999.66', contractValue2: '66,666.99', unit: '二公司', department: '合同部', createTime: '2019-05-01'}, {objectId: '2', objectName: '雄安铁路', engineerType: '铁路', contractValue1: '99,998.66', contractValue2: '66,666.99', unit: '二公司', department: '合同部', createTime: '2019-05-01'}] // 列表
    }
  },
  methods: {
    // 查看详情
    detail (isApproval) {
      // 到详情页面
      this.$router.push({
        path: `/subContractplanDetail/${isApproval}`
      })
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
  .objectName {
    color: #3a8ee6;
    text-decoration-line: underline;
    cursor: pointer;
  }
</style>

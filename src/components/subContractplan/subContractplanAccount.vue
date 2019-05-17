<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>分包策划管理</el-breadcrumb-item>
      <el-breadcrumb-item>分包策划台账</el-breadcrumb-item>
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
      :span-method="arraySpanMethod"
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
        min-width="80"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        prop="objectName"
        header-align="center"
        min-width="200"
        show-overflow-tooltip
        label="项目名称">
        <template slot-scope="scope">
          <el-link class="objectName" type="primary" @click="detail">{{ scope.row.objectName }}</el-link>
        </template>
      </el-table-column>
      <el-table-column
        prop="PackageNo"
        label="包件编号"
        align="center"
        min-width="120"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        prop="subType"
        align="center"
        min-width="80"
        show-overflow-tooltip
        label="分包类型">
      </el-table-column>
      <el-table-column
        prop="packageType"
        align="center"
        min-width="80"
        show-overflow-tooltip
        label="包件类型">
      </el-table-column>
      <el-table-column
        prop="time1"
        align="center"
        min-width="110"
        show-overflow-tooltip
        label="拟招标日期">
      </el-table-column>
      <el-table-column
        align="center"
        label="金额">
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
          label="拟分包总额">
        </el-table-column>
        <el-table-column
          prop="contractValue3"
          header-align="center"
          align="right"
          min-width="150"
          show-overflow-tooltip
          label="拟分包额">
        </el-table-column>
        <el-table-column
          prop="contractValue4"
          header-align="center"
          align="right"
          min-width="150"
          show-overflow-tooltip
          label="中标额">
        </el-table-column>
      </el-table-column>
      <el-table-column
        prop="moneyType"
        align="center"
        min-width="100"
        show-overflow-tooltip
        label="币种">
      </el-table-column>
      <el-table-column
        prop="unit"
        header-align="center"
        min-width="100"
        show-overflow-tooltip
        label="需求单位">
      </el-table-column>
      <el-table-column
        prop="engineerType"
        align="center"
        min-width="80"
        show-overflow-tooltip
        label="工程类型">
      </el-table-column>
      <el-table-column
        align="center"
        label="执行进度">
        <el-table-column
          prop="progressLink"
          align="center"
          min-width="80"
          show-overflow-tooltip
          label="进展环节">
        </el-table-column>
        <el-table-column
          prop="progressStatus"
          align="center"
          min-width="80"
          show-overflow-tooltip
          label="进展状态">
        </el-table-column>
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
      total: 7, // 总条数
      currentSize: 7, // 当前页数据条数
      tableList: [{objectId: '1', objectName: '雄安公路', PackageNo: 'ABCDEFJ0001', subType: '专业分包', packageType: '临建', time1: '2019-05-01', contractValue1: '99,999.66', contractValue2: '99,999.66', contractValue3: '66,666.99', contractValue4: '', moneyType: '人民币', unit: '二航局', engineerType: '公路', progressLink: '分包策划', progressStatus: '准备中'}, {objectId: '2', objectName: '雄安公路', PackageNo: 'ABCDEFJ0001', subType: '专业分包', packageType: '临建', time1: '2019-05-01', contractValue1: '856,231.56', contractValue2: '856,231.56', contractValue3: '10,000.00', contractValue4: '80,000.00', moneyType: '人民币', unit: '二航局', engineerType: '公路', progressLink: '招标方案', progressStatus: '已定标'}, {objectId: '2', objectName: '雄安公路', PackageNo: 'ABCDEFJ0001', subType: '专业分包', packageType: '临建', time1: '2019-05-01', contractValue1: '856,231.56', contractValue2: '856,231.56', contractValue3: '75,000.00', contractValue4: '', moneyType: '人民币', unit: '二航局', engineerType: '公路', progressLink: '分包策划', progressStatus: '准备中'}, {objectId: '3', objectName: '雄安公路', PackageNo: 'ABCDEFJ0001', subType: '专业分包', packageType: '临建', time1: '2019-05-01', contractValue1: '985,462.23', contractValue2: '985,462.23', contractValue3: '150,00.00', contractValue4: '136,000.00', moneyType: '人民币', unit: '二航局', engineerType: '公路', progressLink: '招标方案', progressStatus: '已定标'}, {objectId: '3', objectName: '雄安公路', PackageNo: 'ABCDEFJ0001', subType: '专业分包', packageType: '临建', time1: '2019-05-01', contractValue1: '985,462.23', contractValue2: '985,462.23', contractValue3: '200,000.00', contractValue4: '', moneyType: '人民币', unit: '二航局', engineerType: '公路', progressLink: '分包策划', progressStatus: '准备中'}, {objectId: '3', objectName: '雄安公路', PackageNo: 'ABCDEFJ0001', subType: '专业分包', packageType: '临建', time1: '2019-05-01', contractValue1: '985,462.23', contractValue2: '985,462.23', contractValue3: '65,000.00', contractValue4: '', moneyType: '人民币', unit: '二航局', engineerType: '公路', progressLink: '分包策划', progressStatus: '准备中'}, {objectId: '3', objectName: '雄安公路', PackageNo: 'ABCDEFJ0001', subType: '专业分包', packageType: '临建', time1: '2019-05-01', contractValue1: '985,462.23', contractValue2: '985,462.23', contractValue3: '130,000.00', contractValue4: '', moneyType: '人民币', unit: '二航局', engineerType: '公路', progressLink: '分包策划', progressStatus: '准备中'}] // 列表
    }
  },
  methods: {
    arraySpanMethod ({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 1) {
        if (column.property === 'objectId' || column.property === 'objectName' || column.property === 'contractValue1' || column.property === 'contractValue2' || column.property === 'moneyType') {
          return [2, 1]
        }
      }
      if (rowIndex === 2) {
        if (column.property === 'objectId' || column.property === 'objectName' || column.property === 'contractValue1' || column.property === 'contractValue2' || column.property === 'moneyType') {
          return [0, 0]
        }
      }
      if (rowIndex === 3) {
        if (column.property === 'objectId' || column.property === 'objectName' || column.property === 'contractValue1' || column.property === 'contractValue2' || column.property === 'moneyType') {
          return [4, 1]
        }
      }
      if (rowIndex === 4 || rowIndex === 5 || rowIndex === 6 || rowIndex === 7) {
        if (column.property === 'objectId' || column.property === 'objectName' || column.property === 'contractValue1' || column.property === 'contractValue2' || column.property === 'moneyType') {
          return [0, 0]
        }
      }
    },
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

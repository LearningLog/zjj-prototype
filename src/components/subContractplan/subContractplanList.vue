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
      :data="productList"
      stripe
      border
      :header-cell-style="{
        'background-color': '#fafafa',
        'color': 'rgb(103, 194, 58)',
        'border-bottom': '1px rgb(103, 194, 58) solid'}"
      ref="checkedList"
      @selection-change="handleSelectionChange"
      style="width: 100%">
      <el-table-column
        fixed="left"
        type="selection"
        label="选择"
        align="center"
        width="40">
      </el-table-column>
      <el-table-column
        type="index"
        prop="number"
        label="序号"
        align="center">
      </el-table-column>
      <el-table-column
        prop="skuId"
        label="策划编号"
        align="center"
        min-width="120"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        prop="skuName"
        align="center"
        min-width="150"
        show-overflow-tooltip
        label="策划名称">
      </el-table-column>
      <el-table-column
        prop="brand"
        align="center"
        min-width="150"
        show-overflow-tooltip
        label="项目类型">
      </el-table-column>
      <el-table-column
        prop="saleProperty"
        align="center"
        min-width="100"
        show-overflow-tooltip
        label="工程类型">
      </el-table-column>
      <el-table-column
        prop="model"
        align="center"
        min-width="100"
        show-overflow-tooltip
        label="评标方式">
      </el-table-column>
      <el-table-column
        prop="manufacturerName"
        align="center"
        min-width="150"
        show-overflow-tooltip
        label="合同额">
      </el-table-column>
      <el-table-column
        prop="originalPrice"
        header-align="center"
        align="right"
        min-width="150"
        show-overflow-tooltip
        label="预计合同额（万元）">
      </el-table-column>
      <el-table-column
        prop="model"
        align="center"
        min-width="100"
        show-overflow-tooltip
        label="编制单位">
      </el-table-column>
      <el-table-column
        prop="createTime"
        align="center"
        min-width="160"
        label="编制时间">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        align="center"
        width="160">
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
      total: 0, // 总页数
      currentSize: 0, // 当前页数据条数
      productList: [], // 产品列表
      checkedList: [] // CheckBox选择的数据
    }
  },
  methods: {
    // 添加
    add () {
      // 到新增页面
      this.$router.push({path: '/subContractplanAdd'})
    },
    // 删除
    remove () {
      if (this.checkedList.length === 0) {
        this.$message({
          message: '请选择至少一项产品记录！',
          type: 'warning'
        })
        return false
      } else {
        this.$confirm('确认删除吗吗?', '删除提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => { // 点击确认执行 resolve 函数
          //  删除
        }).catch(() => {
          // 点击取消的处理
        })
      }
    },
    // 选中数据
    handleSelectionChange (row) {
      this.checkedList = row
    },
    // 修改
    handleEdit (index, row) {
      // 到编辑页面
      this.$router.push({path: '/commodityEdit', query: {skuId: row.skuId}})
    },
    // 单价、数量格式化
    priceFormatter (row, column, cellValue, index) {
      return this.$accounting.format((cellValue / 100), '2')
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

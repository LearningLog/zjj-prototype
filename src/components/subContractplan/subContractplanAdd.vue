<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>分包策划管理</el-breadcrumb-item>
      <el-breadcrumb-item>分包策划编制</el-breadcrumb-item>
    </el-breadcrumb>
    <el-tabs type="border-card">
      <el-tab-pane label="基本信息">
        <el-form inline ref="product" status-icon :model="product" label-width="154px" size="small" class="productForm">
          <el-row>
            <el-col :span="12">
              <el-form-item label="策划编号">
                <el-input v-model="product.aa" disabled></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="策划名称" prop="brand">
                <el-input v-model="product.bb"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="项目类型" prop="projectType">
                <el-select v-model="product.cc" placeholder="请选择项目类型" class="projectType" filterable>
                  <el-option v-for="item in projectTypeList" :label="item.name" :value="item.id" :key="item.id"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="工程类型" prop="manufacturerName">
                <el-select v-model="product.dd" placeholder="请选择工程类型" class="purchaseType" filterable>
                  <el-option v-for="item in engineerTypeList" :label="item.name" :value="item.id" :key="item.id"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="采购方式" prop="barCode">
                <el-select v-model="product.ee" placeholder="请选择采购方式" class="purchaseType" filterable>
                  <el-option v-for="item in purchaseTypeList" :label="item.name" :value="item.id" :key="item.id"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="评标方式" prop="model">
                <el-select v-model="product.ff" placeholder="请选择评标方式" class="purchaseType" filterable>
                  <el-option v-for="item in evalBidTypeList" :label="item.name" :value="item.id" :key="item.id"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="币种" prop="saleProperty">
                <el-select v-model="product.moneyType" placeholder="请选择币种" class="projectType" filterable>
                  <el-option v-for="item in moneyTypeList" :label="item.name" :value="item.id" :key="item.id"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="汇率" prop="salePrice">
                <el-input v-model="product.exchangeRate1" disabled v-if="product.moneyType===1"></el-input>
                <el-input v-model="product.exchangeRate2" v-else></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="合同额" prop="originalPrice">
                <el-input v-model="product.jj"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="有效合同额" prop="increaseNum">
                <el-input v-model="product.hh"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="所在地" prop="fraction">
                <el-select v-model="product.ii" placeholder="请选择所在地" class="purchaseType" filterable>
                  <el-option v-for="item in locationList" :label="item.name" :value="item.id" :key="item.id"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="有无有合作投标">
                <el-select v-model="product.gg" placeholder="请选择" class="purchaseType" filterable>
                  <el-option v-for="item in isCooperateBidList" :label="item.name" :value="item.id" :key="item.id"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="有无备案" prop="minPurchaseNum">
                <el-select v-model="product.kk" placeholder="请选择" class="purchaseType" filterable>
                  <el-option v-for="item in isRecordList" :label="item.name" :value="item.id" :key="item.id"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="主合同工程款支付条款">
                <el-input v-model="product.ll"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="有无有预付款" prop="fraction">
                <el-select v-model="product.advanceCharge" placeholder="请选择" class="purchaseType" filterable>
                  <el-option v-for="item in advanceChargeList" :label="item.name" :value="item.id" :key="item.id"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="预付款占合同额比" v-if="this.product.advanceCharge===1 || this.product.advanceCharge===null">
                <el-input v-model="product.mm"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="是否进行材料调差" prop="fraction">
                <el-select v-model="product.isAdjustment" placeholder="请选择" class="purchaseType" filterable>
                  <el-option v-for="item in isAdjustmentList" :label="item.name" :value="item.id" :key="item.id"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="调差材料范围"  v-if="this.product.isAdjustment===1||this.product.isAdjustment===null">
                <el-input v-model="product.oo"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="项目经理承担占比" v-if="this.product.isAdjustment===1||this.product.isAdjustment===null">
                <el-input v-model="product.qq"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="编制部门" prop="fraction">
                <el-select v-model="product.a" placeholder="请选择编制部门" class="purchaseType" filterable>
                  <el-option v-for="item in EstablishmentDepartmentList" :label="item.name" :value="item.id" :key="item.id"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="编制单位">
                <el-select v-model="product.b" placeholder="请选择编制单位" class="purchaseType" filterable>
                  <el-option v-for="item in establishUnitList" :label="item.name" :value="item.id" :key="item.id"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="采购组织单位" prop="fraction">
                <el-select v-model="product.c" placeholder="请选择采购组织单位" class="purchaseType" filterable>
                  <el-option v-for="item in unitList" :label="item.name" :value="item.id" :key="item.id"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="需求单位">
                <el-select v-model="product.d" placeholder="请选择需求单位" class="purchaseType" filterable>
                  <el-option v-for="item in demandUnitList" :label="item.name" :value="item.id" :key="item.id"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="任务划分" prop="fraction">
                <el-input v-model="product.e"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
            </el-col>
          </el-row>
          <el-row class="text">
            <el-col :span="24">
              <el-form-item label="项目概述">
                <el-input type="textarea" v-model="product.f"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row class="text">
            <el-col :span="24">
              <el-form-item label="各专业工程分包策划过程和结果简述">
                <el-input type="textarea" v-model="product.j"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row class="text">
            <el-col :span="24">
              <el-form-item label="段落划分总述">
                <el-input type="textarea" v-model="product.h"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row class="text">
            <el-col :span="24">
              <el-form-item label="招标时间和队伍进场策划">
                <el-input type="textarea" v-model="product.i"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row class="text">
            <el-col :span="24">
              <el-form-item label="备注">
                <el-input type="textarea" v-model="product.ggg"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="分包标段策划">
        <el-button type="primary" size="mini" @click="add" >添加标段</el-button>
        <el-table
          :data="planList"
          stripe
          border
          :header-cell-style="{
        'background-color': '#fafafa',
        'color': 'rgb(103, 194, 58)',
        'border-bottom': '1px rgb(103, 194, 58) solid'}"
          style="width: 100%"
          class="subpackagelist">
          <el-table-column
            type="index"
            prop="number"
            label="序号"
            align="center">
          </el-table-column>
          <el-table-column
            prop="subpackageType"
            label="分包类型"
            align="center"
            min-width="130">
            <template slot-scope="scope">
              <el-select v-model="scope.row.subpackageType" placeholder="请选择" class="subpackageType" filterable>
                <el-option v-for="item in subpackageTypeList" :label="item.name" :value="item.id" :key="item.id"></el-option>
              </el-select>
            </template>
          </el-table-column>
          <el-table-column
            prop="packageType"
            label="包件类型"
            align="center"
            min-width="110">
            <template slot-scope="scope">
              <el-select v-model="scope.row.packageType" placeholder="请选择" class="subpackageType" filterable>
                <el-option v-for="item in packageTypeList" :label="item.name" :value="item.id" :key="item.id"></el-option>
              </el-select>
            </template>
          </el-table-column>
          <el-table-column
            prop="subcontractParagraph"
            align="center"
            min-width="150"
            label="分包段落">
            <template slot-scope="scope">
              <el-input v-model="scope.row.subcontractParagraph" placeholder=""/>
            </template>
          </el-table-column>
          <el-table-column
            prop="amountMoney"
            header-align="center"
            align="right"
            min-width="150"
            label="预计合同额（万元）">
            <template slot-scope="scope">
              <el-input v-model="scope.row.amountMoney" placeholder=""/>
            </template>
          </el-table-column>
          <el-table-column
            prop="batch"
            align="center"
            min-width="100"
            label="招标批次">
            <template slot-scope="scope">
              <el-input v-model="scope.row.batch" placeholder=""/>
            </template>
          </el-table-column>
          <el-table-column
            prop="time1"
            align="center"
            min-width="160"
            label="预计招标时间">
            <template slot-scope="scope">
              <el-date-picker
                v-model="scope.row.time1"
                type="date"
                placeholder="请选择日期">
              </el-date-picker>
            </template>
          </el-table-column>
          <el-table-column
            prop="time2"
            align="center"
            min-width="160"
            label="预计进场时间">
            <template slot-scope="scope">
              <el-date-picker
                v-model="scope.row.time2"
                type="date"
                placeholder="请选择日期">
              </el-date-picker>
            </template>
          </el-table-column>
          <el-table-column
            prop="quantities"
            align="center"
            min-width="100"
            label="主要工程量">
            <template slot-scope="scope">
              <el-input v-model="scope.row.quantities" placeholder=""/>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="附件">
        <el-table
          :data="attachList"
          stripe
          border
          :header-cell-style="{
        'background-color': '#fafafa',
        'color': 'rgb(103, 194, 58)',
        'border-bottom': '1px rgb(103, 194, 58) solid'}"
          style="width: 100%">
          <el-table-column
            type="index"
            rop="skuId"
            label="序号"
            align="center">
          </el-table-column>
          <el-table-column
            prop="skuId"
            label="附件名称"
            align="center"
            min-width="120"
            show-overflow-tooltip>
          </el-table-column>
          <el-table-column
            prop="skuName"
            align="center"
            min-width="150"
            show-overflow-tooltip
            label="附件大小">
          </el-table-column>
          <el-table-column
            prop="brand"
            align="center"
            min-width="150"
            show-overflow-tooltip
            label="下载">
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
    <div class="operfixed">
      <el-button type="primary" size="small">保存</el-button>
      <el-button type="warning" size="small">提交</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      product: {
        moneyType: 1,
        exchangeRate1: '1.0000',
        advanceCharge: null,
        isAdjustment: null
      },
      planList: [{subpackageType: 1, packageType: 2, subcontractParagraph: '一标段', amountMoney: '666.00', batch: '第一批', time1: '2019-05-01', time2: '2019-10-01', quantities: '加油！！！'}, {subpackageType: 2, packageType: 2, subcontractParagraph: '二标段', amountMoney: '666.00', batch: '第一批', time1: '2019-05-01', time2: '2019-10-01', quantities: '加油！！！'}, {subpackageType: 1, packageType: 1, subcontractParagraph: '三标段', amountMoney: '666.00', batch: '第一批', time1: '2019-05-01', time2: '2019-10-01', quantities: '加油！！！'}],
      projectTypeList: [{name: '现汇', id: 1}, {name: 'PPP', id: 2}, {name: 'EPC', id: 3}],
      purchaseTypeList: [{name: '邀请招标', id: 1}, {name: '竞争谈判', id: 2}],
      moneyTypeList: [{name: '人民币', id: 1}, {name: '美元', id: 2}],
      locationList: [{name: '北京市', id: 1}, {name: '河北省', id: 2}, {name: '江苏省', id: 3}],
      isRecordList: [{name: '有', id: 1}, {name: '无', id: 2}],
      advanceChargeList: [{name: '有', id: 1}, {name: '无', id: 2}],
      isAdjustmentList: [{name: '是', id: 1}, {name: '否', id: 2}],
      EstablishmentDepartmentList: [{name: '合同部', id: 1}, {name: '法务部', id: 2}],
      unitList: [{name: '二航局', id: 1}, {name: '四航局', id: 2}],
      engineerTypeList: [{name: '公路', id: 1}, {name: '市政', id: 2}, {name: '铁路', id: 3}],
      evalBidTypeList: [{name: '最低价投标', id: 1}, {name: '综合评估法', id: 2}],
      isCooperateBidList: [{name: '有', id: 1}, {name: '无', id: 2}],
      establishUnitList: [{name: '二公司', id: 1}, {name: '三公司', id: 2}],
      demandUnitList: [{name: '一公司', id: 1}, {name: '二公司', id: 2}, {name: '三公司', id: 3}],
      productList: [],
      subpackageTypeList: [{name: '劳务分包', id: 1}, {name: '专业分包', id: 2}, {name: '总承包', id: 3}],
      packageTypeList: [{name: '桥梁', id: 1}, {name: '隧道', id: 2}, {name: '路基', id: 3}],
      attachList: []
    }
  },
  methods: {
    add () {
      this.planList.push({})
    }
  }
}
</script>
<style scoped>
  .productForm {
    margin-top: 10px;
  }
  .el-input, .el-select {
    width: 200px !important;
  }
  .subpackageType {
    width: 100%!important;
  }
  .subpackagelist .el-input {
    width: 100%!important;
  }
  .text .el-form-item {
    width: 100%;
  }
</style>

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
          <el-form-item label="项目信息" class="title2"></el-form-item>
          <el-row>
            <el-col :span="12">
              <el-form-item label="项目名称">
                <el-input v-model="product.aa"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="工程类型">
                <el-select v-model="product.bb" placeholder="请选择工程类型" class="purchaseType">
                  <el-option v-for="item in engineerTypeList" :label="item.name" :value="item.id" :key="item.id"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="项目所在地">
                <el-select v-model="product.cc" placeholder="请选择所在地" class="purchaseType">
                  <el-option v-for="item in locationList" :label="item.name" :value="item.id" :key="item.id"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="项目类型">
                <el-select v-model="product.dd" placeholder="请选择项目类型" class="projectType">
                  <el-option v-for="item in projectTypeList" :label="item.name" :value="item.id" :key="item.id"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row class="text">
            <el-col :span="24">
              <i class="el-icon-question summary" @click="summary"></i>
              <el-form-item label="项目概述">
                <el-input type="textarea" v-model="product.ee"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row class="text">
            <el-col :span="24">
              <i class="el-icon-question quantities" @click="quantities"></i>
              <el-form-item label="主要工程量">
                <el-input type="textarea" v-model="product.ff"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-form-item label="主合同信息" class="title2"></el-form-item>
          <el-row>
            <el-col :span="12">
              <el-form-item label="币种">
                <el-select v-model="product.moneyType" placeholder="请选择币种" class="projectType">
                  <el-option v-for="item in moneyTypeList" :label="item.name" :value="item.id" :key="item.id"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="汇率">
                <el-input v-model="product.exchangeRate1" disabled v-if="product.moneyType===1"></el-input>
                <el-input v-model="product.exchangeRate2" v-else></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="主合同额">
                <el-input v-model="product.eee"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="有效合同额">
                <el-input v-model="product.jj"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="有无有预付款">
                <el-select v-model="product.advanceCharge" placeholder="请选择" class="purchaseType">
                  <el-option v-for="item in advanceChargeList" :label="item.name" :value="item.id" :key="item.id"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="预付款占合同额比" v-if="this.product.advanceCharge===1 || this.product.advanceCharge===null">
                <el-input v-model="product.hh"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row class="text">
            <el-col :span="24">
              <el-form-item label="合同主要条款">
                <el-input type="textarea" v-model="product.ii"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-form-item label="策划信息" class="title2"></el-form-item>
          <el-row>
            <el-col :span="12">
              <el-form-item label="策划编码">
                <el-input v-model="product.gg" disabled></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="策划时间">
                <el-date-picker
                  v-model="product.time1"
                  type="date"
                  placeholder="请选择日期">
                </el-date-picker>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="编制部门">
                <el-select v-model="product.kk" placeholder="请选择编制部门" class="purchaseType">
                  <el-option v-for="item in EstablishmentDepartmentList" :label="item.name" :value="item.id" :key="item.id"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="编制单位">
                <el-select v-model="product.ll" placeholder="请选择编制单位" class="purchaseType">
                  <el-option v-for="item in establishUnitList" :label="item.name" :value="item.id" :key="item.id"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <!--<el-col :span="12">-->
              <!--<el-form-item label="采购组织单位">-->
                <!--<el-select v-model="product.c" placeholder="请选择采购组织单位" class="purchaseType">-->
                  <!--<el-option v-for="item in unitList" :label="item.name" :value="item.id" :key="item.id"></el-option>-->
                <!--</el-select>-->
              <!--</el-form-item>-->
            <!--</el-col>-->
            <el-col :span="12">
              <el-form-item label="需求部门">
                <el-select v-model="product.nn" placeholder="请选择需求单位" class="purchaseType">
                  <el-option v-for="item in departmentList" :label="item.name" :value="item.id" :key="item.id"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="需求单位">
                <el-select v-model="product.mm" placeholder="请选择需求单位" class="purchaseType">
                  <el-option v-for="item in demandUnitList" :label="item.name" :value="item.id" :key="item.id"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="编制人">
                <el-input v-model="product.oo"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="编制时间">
                <el-date-picker
                  v-model="product.time2"
                  type="date"
                  placeholder="请选择日期">
                </el-date-picker>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row class="text">
            <el-col :span="24">
              <el-form-item label="策划组织">
                <el-input type="textarea" v-model="product.pp"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row class="text">
            <el-col :span="24">
              <el-form-item label="策划结果说明">
                <el-input type="textarea" v-model="product.qq"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row class="text">
            <el-col :span="24">
              <el-form-item label="备注">
                <el-input type="textarea" v-model="product.rr"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <!--<el-row>-->
            <!--<el-col :span="12">-->
              <!--<el-form-item label="采购方式">-->
                <!--<el-select v-model="product.ee" placeholder="请选择采购方式" class="purchaseType">-->
                  <!--<el-option v-for="item in purchaseTypeList" :label="item.name" :value="item.id" :key="item.id"></el-option>-->
                <!--</el-select>-->
              <!--</el-form-item>-->
            <!--</el-col>-->
            <!--<el-col :span="12">-->
              <!--<el-form-item label="评标办法">-->
                <!--<el-select v-model="product.ff" placeholder="请选择评标办法" class="purchaseType">-->
                  <!--<el-option v-for="item in evalBidTypeList" :label="item.name" :value="item.id" :key="item.id"></el-option>-->
                <!--</el-select>-->
              <!--</el-form-item>-->
            <!--</el-col>-->
          <!--</el-row>-->
          <!--<el-row>-->
            <!--<el-col :span="12">-->
              <!--<el-form-item label="有无有合作投标">-->
                <!--<el-select v-model="product.gg" placeholder="请选择" class="purchaseType">-->
                  <!--<el-option v-for="item in isCooperateBidList" :label="item.name" :value="item.id" :key="item.id"></el-option>-->
                <!--</el-select>-->
              <!--</el-form-item>-->
            <!--</el-col>-->
          <!--</el-row>-->
          <!--<el-row>-->
            <!--<el-col :span="12">-->
              <!--<el-form-item label="有无备案">-->
                <!--<el-select v-model="product.kk" placeholder="请选择" class="purchaseType">-->
                  <!--<el-option v-for="item in isRecordList" :label="item.name" :value="item.id" :key="item.id"></el-option>-->
                <!--</el-select>-->
              <!--</el-form-item>-->
            <!--</el-col>-->
            <!--<el-col :span="12">-->
              <!--<el-form-item label="主合同工程款支付条款">-->
                <!--<el-input v-model="product.ll"></el-input>-->
              <!--</el-form-item>-->
            <!--</el-col>-->
          <!--</el-row>-->
          <!--<el-row>-->
            <!--<el-col :span="12">-->
              <!--<el-form-item label="是否进行材料调差">-->
                <!--<el-select v-model="product.isAdjustment" placeholder="请选择" class="purchaseType">-->
                  <!--<el-option v-for="item in isAdjustmentList" :label="item.name" :value="item.id" :key="item.id"></el-option>-->
                <!--</el-select>-->
              <!--</el-form-item>-->
            <!--</el-col>-->
            <!--<el-col :span="12">-->
              <!--<el-form-item label="调差材料范围"  v-if="this.product.isAdjustment===1||this.product.isAdjustment===null">-->
                <!--<el-input v-model="product.oo"></el-input>-->
              <!--</el-form-item>-->
            <!--</el-col>-->
          <!--</el-row>-->
          <!--<el-row>-->
            <!--<el-col :span="12">-->
              <!--<el-form-item label="项目经理承担占比" v-if="this.product.isAdjustment===1||this.product.isAdjustment===null">-->
                <!--<el-input v-model="product.qq"></el-input>-->
              <!--</el-form-item>-->
            <!--</el-col>-->
            <!--<el-col :span="12">-->
            <!--</el-col>-->
          <!--</el-row>-->
          <!--<el-row>-->
            <!--<el-col :span="12">-->
              <!--<el-form-item label="任务划分">-->
                <!--<el-input v-model="product.e"></el-input>-->
              <!--</el-form-item>-->
            <!--</el-col>-->
            <!--<el-col :span="12">-->
            <!--</el-col>-->
          <!--</el-row>-->
          <!--<el-row class="text">-->
            <!--<el-col :span="24">-->
              <!--<el-form-item label="各专业工程分包策划过程和结果简述">-->
                <!--<el-input type="textarea" v-model="product.j"></el-input>-->
              <!--</el-form-item>-->
            <!--</el-col>-->
          <!--</el-row>-->
          <!--<el-row class="text">-->
            <!--<el-col :span="24">-->
              <!--<el-form-item label="段落划分总述">-->
                <!--<el-input type="textarea" v-model="product.h"></el-input>-->
              <!--</el-form-item>-->
            <!--</el-col>-->
          <!--</el-row>-->
          <!--<el-row class="text">-->
            <!--<el-col :span="24">-->
              <!--<el-form-item label="招标时间和队伍进场策划">-->
                <!--<el-input type="textarea" v-model="product.i"></el-input>-->
              <!--</el-form-item>-->
            <!--</el-col>-->
          <!--</el-row>-->
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
            label="序号"
            type="index"
            align="center"
            width="50">
          </el-table-column>
          <el-table-column
            prop="packageName"
            align="center"
            min-width="150"
            label="包件名称">
            <template slot-scope="scope">
              <el-input v-model="scope.row.packageName" placeholder=""/>
            </template>
          </el-table-column>
          <el-table-column
            prop="subpackageType"
            label="分包类型"
            align="center"
            min-width="130">
            <template slot-scope="scope">
              <el-select v-model="scope.row.subpackageType" placeholder="请选择" class="subpackageType">
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
              <el-select v-model="scope.row.packageType" placeholder="请选择" class="subpackageType">
                <el-option v-for="item in packageTypeList" :label="item.name" :value="item.id" :key="item.id"></el-option>
              </el-select>
            </template>
          </el-table-column>
          <el-table-column
            prop="packageMoney"
            header-align="center"
            align="right"
            min-width="110"
            label="拟分包金额">
            <template slot-scope="scope">
              <el-input v-model="scope.row.packageMoney" placeholder=""/>
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
            prop="purchaseType"
            label="采购方式"
            align="center"
            min-width="130">
            <template slot-scope="scope">
              <el-select v-model="scope.row.purchaseType" placeholder="请选择" class="subpackageType">
                <el-option v-for="item in purchaseTypeList" :label="item.name" :value="item.id" :key="item.id"></el-option>
              </el-select>
            </template>
          </el-table-column>
          <el-table-column
            prop="evalBidType"
            label="评标办法"
            align="center"
            min-width="150">
            <template slot-scope="scope">
              <el-select v-model="scope.row.evalBidType" placeholder="请选择" class="subpackageType">
                <el-option v-for="item in evalBidTypeList" :label="item.name" :value="item.id" :key="item.id"></el-option>
              </el-select>
            </template>
          </el-table-column>
          <el-table-column
            prop="time1"
            align="center"
            min-width="160"
            label="拟招标时间">
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
            label="拟进场时间">
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
            min-width="200"
            label="主要工程量">
            <template slot-scope="scope">
              <el-input type="textarea" :rows="2" v-model="scope.row.quantities" placeholder=""/>
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
            label="序号"
            type="index"
            align="center"
            width="50">
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
      <el-button type="primary" size="small" @click="save">保存</el-button>
      <el-button type="warning" size="small" @click="submit">提交</el-button>
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
      planList: [{packageName: 'A包件', subpackageType: 1, packageType: 2, subcontractParagraph: '一标段', packageMoney: '888.88', amountMoney: '666.00', batch: '第一批', time1: '2019-05-01', time2: '2019-10-01', quantities: '加油！！！', purchaseType: 1, evalBidType: 2}, {packageName: 'B包件', subpackageType: 2, packageType: 2, subcontractParagraph: '二标段', packageMoney: '888.88', amountMoney: '666.00', batch: '第一批', time1: '2019-05-01', time2: '2019-10-01', quantities: '加油！！！', purchaseType: 2, evalBidType: 1}, {packageName: 'C包件', subpackageType: 1, packageType: 1, subcontractParagraph: '三标段', packageMoney: '888.88', amountMoney: '666.00', batch: '第一批', time1: '2019-05-01', time2: '2019-10-01', quantities: '加油！！！', purchaseType: 2, evalBidType: 2}],
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
      demandUnitList: [{name: '二航局', id: 1}, {name: '四航局', id: 2}],
      departmentList: [{name: '一公司', id: 1}, {name: '二公司', id: 2}, {name: '三公司', id: 3}],
      productList: [],
      subpackageTypeList: [{name: '劳务分包', id: 1}, {name: '专业分包', id: 2}, {name: '总承包', id: 3}],
      packageTypeList: [{name: '桥梁', id: 1}, {name: '隧道', id: 2}, {name: '路基', id: 3}],
      attachList: []
    }
  },
  methods: {
    save () {
      this.$message({
        message: '保存成功！',
        type: 'success'
      })
      this.$router.push({path: '/subContractplanList'})
    },
    submit () {
      this.$message({
        message: '提交成功！',
        type: 'success'
      })
      this.$router.push({path: '/subContractplanList'})
    },
    add () {
      this.planList.push({})
    },
    summary () {
      this.$alert('项目起止桩号为K101+514—K12+354（起点位于……，终点位于……，途径……），线路长 120    公里。发包方为   四公局十公司     ；工期以中标通知书发布日起计 2年，工程按**标准设计，双向**车道，设计时速230km/h。', '项目概述', {
        confirmButtonText: '确定'
      })
    },
    quantities () {
      this.$alert('路基挖方 10   万m3、路基填方 10   万m3，路面底基层  10  万m2、路面基层  10  万m2、水泥混凝土面层  10  万m2、沥青混凝土下面层  10  万m2、沥青混凝土中面层   10 万m2、沥青混凝土上面层  10  万m2，大桥  10  m/座、中桥  10  m/座、小桥  10  m/座、涵洞  10  m/座，隧道 10   m/座，……。', '主要工程量', {
        confirmButtonText: '确定'
      })
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
  .summary {
    position: absolute;
    top: 8px;
    left: 70px;
    color: #d93025;
    font-size: 14px;
  }
  .quantities {
    position: absolute;
    top: 8px;
    left: 56px;
    color: #d93025;
    font-size: 14px;
  }
</style>

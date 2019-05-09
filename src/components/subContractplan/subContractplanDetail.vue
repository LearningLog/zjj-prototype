<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>分包策划管理</el-breadcrumb-item>
      <el-breadcrumb-item>分包策划报告</el-breadcrumb-item>
    </el-breadcrumb>
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
    add () {
      this.planList.push({})
    }
  }
}
</script>
<style scoped>

</style>

<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>分包策划管理</el-breadcrumb-item>
      <el-breadcrumb-item>分包策划报告</el-breadcrumb-item>
    </el-breadcrumb>
    <el-tabs type="border-card">
      <el-tab-pane label="项目信息">
        <el-form inline status-icon :model="product" label-width="154px" size="small" class="productForm">
          <el-form-item label="项目信息" class="title2"></el-form-item>
          <el-row>
            <el-col :span="12">
              <el-form-item label="项目名称：">
                <span>雄安公路</span>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="工程类型：">
                <span>公路</span>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="项目所在地：">
                <span>北京市市辖区东城区</span>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="项目类型：">
                <span>现汇</span>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row class="text">
            <el-col :span="24">
              <el-form-item label="项目概述：">
                <span>雄安公路雄安公路雄安公路雄安公路雄安公路雄安公路</span>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row class="text">
            <el-col :span="24">
              <el-form-item label="主要工程量：">
                <span>主要工程量主要工程量主要工程量主要工程量主要工程量</span>
              </el-form-item>
            </el-col>
          </el-row>
          <el-form-item label="主合同信息" class="title2"></el-form-item>
          <el-row>
            <el-col :span="12">
              <el-form-item label="币种：">
                <span>人民币</span>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="汇率：">
                <span>1.0000</span>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="主合同额：">
                <span>99,999.99</span>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="有效合同额：">
                <span>89,999.99</span>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="有无有预付款：">
                <span>有</span>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="预付款占合同额比：">
                <span>0.3</span>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row class="text">
            <el-col :span="24">
              <el-form-item label="合同主要条款：">
                <span>合同主要条款合同主要条款合同主要条款合同主要条款合同主要条款</span>
              </el-form-item>
            </el-col>
          </el-row>
          <el-form-item label="策划信息" class="title2"></el-form-item>
          <el-row>
            <el-col :span="12">
              <el-form-item label="策划编码：">
                <span>ABCDEFJ0001</span>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="策划时间：">
                <span>2019-05-01</span>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="编制部门：">
                <span>法务部</span>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="编制单位：">
                <span>二航局</span>
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
              <el-form-item label="需求部门：">
                <span>一公司</span>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="需求单位：">
                <span>二航局</span>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="编制人：">
                <span>谢斌</span>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="编制时间：">
                <span>2019-05-01</span>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row class="text">
            <el-col :span="24">
              <el-form-item label="策划组织：">
                <span>策划组织策划组织策划组织策划组织策划组织</span>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row class="text">
            <el-col :span="24">
              <el-form-item label="策划结果说明：">
                <span>策划结果说明策划结果说明策划结果说明策划结果说明策划结果说明</span>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row class="text">
            <el-col :span="24">
              <el-form-item label="备注：">
                <span>备注备注备注备注备注备注备注备注备注备注备注备注备注</span>
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
      <el-tab-pane label="分包策划报告">
        <div class="content">
          <p>
            <span style="font-size: 16px;"></span>
          </p>
          <p style="text-indent: 166px; text-align: center;">
            <strong><span style="font-family: 宋体;color: rgb(255, 0, 0);font-size: 56px"><span style="font-family:宋体">新建沿江</span></span></strong><strong><span style="font-family: 宋体;font-size: 56px"><span style="font-family:宋体">项目</span></span></strong>
          </p>
          <p style="text-indent: 112px; line-height: 150%; text-align: center;">
            <strong><span style="font-family: 宋体;line-height: 150%;font-size: 56px"><span style="font-family:宋体">分包策划指导书</span></span></strong>
          </p>
          <p>
            <span style=";font-family:宋体;line-height:150%;font-size:19px"><br clear="all" style="page-break-before:always"/></span>
          </p>
          <p style="text-indent:37px;line-height:150%">
            <span style=";font-family:宋体;line-height:150%;font-size:19px">&nbsp;</span>
          </p>
          <h1>
            <strong><span style="font-family: 宋体;font-size: 29px"><span style="font-family:宋体">一、工程概况</span></span></strong>
          </h1>
          <p style="margin-left:61px;line-height:150%">
            <span style="font-family:宋体;font-weight:bold;font-size:19px">1.&nbsp;</span><strong><span style="font-family: 宋体;line-height: 150%;font-size: 19px"><span style="font-family:宋体">项目概述</span></span></strong>
          </p>
          <p style="text-indent:37px;line-height:150%">
            <span style=";font-family:宋体;line-height:150%;font-size:19px"><span style="font-family:宋体">本项目位于</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;font-size: 19px">&nbsp;</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;font-size: 19px">&nbsp;&nbsp;</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;color: rgb(255, 0, 0);font-size: 19px"><span style="font-family:宋体">河北</span></span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;font-size: 19px">&nbsp;&nbsp;&nbsp;<span style="font-family:宋体">省</span> </span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;font-size: 19px">&nbsp;&nbsp;</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;color: rgb(255, 0, 0);font-size: 19px"><span style="font-family:宋体">保定</span></span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;font-size: 19px">&nbsp;&nbsp;&nbsp;<span style="font-family:宋体">市</span> </span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;font-size: 19px">&nbsp;</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;color: rgb(255, 0, 0);font-size: 19px"><span style="font-family:宋体">满城</span></span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;font-size: 19px">&nbsp;&nbsp;&nbsp;</span></span><span style=";font-family:宋体;line-height:150%;font-size:19px"><span style="font-family:宋体">县，</span></span><span style="font-family: 宋体;line-height: 150%;font-size: 19px"><span style="font-family:宋体">工程类型为</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;font-size: 19px">&nbsp;</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;color: rgb(255, 0, 0);font-size: 19px"><span style="font-family:宋体">公路</span> </span></span><span style="font-family: 宋体;line-height: 150%;font-size: 19px"><span style="font-family:宋体">项目，</span></span><span style=";font-family:宋体;line-height:150%;color:rgb(255,0,0);font-size:19px"><span style="font-family:宋体">项目起止桩号为</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;color: rgb(255, 0, 0);font-size: 19px">K</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;color: rgb(255, 0, 0);font-size: 19px">101</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;color: rgb(255, 0, 0);font-size: 19px">+</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;color: rgb(255, 0, 0);font-size: 19px">514</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;color: rgb(255, 0, 0);font-size: 19px">—</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;color: rgb(255, 0, 0);font-size: 19px">K</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;color: rgb(255, 0, 0);font-size: 19px">12</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;color: rgb(255, 0, 0);font-size: 19px">+</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;color: rgb(255, 0, 0);font-size: 19px">354</span></span><span style=";font-family:宋体;line-height:150%;color:rgb(255,0,0);font-size:19px"><span style="font-family:宋体">（</span></span><span style=";font-family:宋体;line-height:150%;color:rgb(255,0,0);font-size:19px"><span style="font-family:宋体">起点位于</span></span><span style=";font-family:宋体;line-height:150%;color:rgb(255,0,0);font-size:19px">……</span><span style=";font-family:宋体;line-height:150%;color:rgb(255,0,0);font-size:19px"><span style="font-family:宋体">，终点位于</span></span><span style=";font-family:宋体;line-height:150%;color:rgb(255,0,0);font-size:19px">……</span><span style=";font-family:宋体;line-height:150%;color:rgb(255,0,0);font-size:19px"><span style="font-family:宋体">，途径</span></span><span style=";font-family:宋体;line-height:150%;color:rgb(255,0,0);font-size:19px">……</span><span style=";font-family:宋体;line-height:150%;color:rgb(255,0,0);font-size:19px"><span style="font-family:宋体">），线路长</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;color: rgb(255, 0, 0);font-size: 19px">&nbsp;</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;color: rgb(255, 0, 0);font-size: 19px">120</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;color: rgb(255, 0, 0);font-size: 19px">&nbsp;&nbsp;&nbsp;&nbsp;</span></span><span style=";font-family:宋体;line-height:150%;color:rgb(255,0,0);font-size:19px"><span style="font-family:宋体">公里。发包方为</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;color: rgb(255, 0, 0);font-size: 19px">&nbsp;&nbsp;&nbsp;</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;color: rgb(255, 0, 0);font-size: 19px"><span style="font-family:宋体">四公局十公司</span></span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;color: rgb(255, 0, 0);font-size: 19px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span><span style=";font-family:宋体;line-height:150%;color:rgb(255,0,0);font-size:19px"><span style="font-family:宋体">；工期以</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;color: rgb(255, 0, 0);font-size: 19px"><span style="font-family:宋体">中标通知书发布日</span></span></span><span style=";font-family:宋体;line-height:150%;color:rgb(255,0,0);font-size:19px"><span style="font-family:宋体">起计</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;color: rgb(255, 0, 0);font-size: 19px">&nbsp;</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;color: rgb(255, 0, 0);font-size: 19px">2</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;color: rgb(255, 0, 0);font-size: 19px"><span style="font-family:宋体">年</span></span></span><span style=";font-family:宋体;line-height:150%;color:rgb(255,0,0);font-size:19px"><span style="font-family:宋体">，工程按</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;color: rgb(255, 0, 0);font-size: 19px">**标准设计，双向**车道，设计时速</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;color: rgb(255, 0, 0);font-size: 19px">230</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;color: rgb(255, 0, 0);font-size: 19px">km/h </span></span><span style=";font-family:宋体;line-height:150%;color:rgb(255,0,0);font-size:19px"><span style="font-family:宋体">。</span></span>
          </p>
          <p style="margin-left:57px;line-height:150%">
            <span style="font-family:宋体;font-weight:bold;font-size:19px">2.&nbsp;</span><strong><span style="font-family: 宋体;line-height: 150%;font-size: 19px"><span style="font-family:宋体">主要工程量</span></span></strong>
          </p>
          <p style="text-indent:37px;line-height:150%">
            <span style=";font-family:宋体;line-height:150%;font-size:19px"><span style="font-family:宋体">路基挖方</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;font-size: 19px">&nbsp;</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;font-size: 19px">10</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;font-size: 19px">&nbsp;&nbsp;&nbsp;</span></span><span style=";font-family:宋体;line-height:150%;font-size:19px"><span style="font-family:宋体">万</span>m</span><sup><span style=";font-family:宋体;line-height:150%;font-size:19px;vertical-align:super">3</span></sup><span style=";font-family:宋体;line-height:150%;font-size:19px"><span style="font-family:宋体">、路基填方</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;font-size: 19px">&nbsp;</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;font-size: 19px">10</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;color: rgb(255, 0, 0);font-size: 19px">&nbsp;</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;font-size: 19px">&nbsp;&nbsp;</span></span><span style=";font-family:宋体;line-height:150%;font-size:19px"><span style="font-family:宋体">万</span>m</span><sup><span style=";font-family:宋体;line-height:150%;font-size:19px;vertical-align:super">3</span></sup><span style=";font-family:宋体;line-height:150%;font-size:19px"><span style="font-family:宋体">，路面底基层</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;font-size: 19px">&nbsp;&nbsp;</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;font-size: 19px">10</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;font-size: 19px">&nbsp;&nbsp;</span></span><span style=";font-family:宋体;line-height:150%;font-size:19px"><span style="font-family:宋体">万</span>m</span><sup><span style=";font-family:宋体;line-height:150%;font-size:19px;vertical-align:super">2</span></sup><span style=";font-family:宋体;line-height:150%;font-size:19px"><span style="font-family:宋体">、路面基层</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;font-size: 19px">&nbsp;&nbsp;</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;font-size: 19px">10</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;font-size: 19px">&nbsp;</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;font-size: 19px">&nbsp;</span></span><span style=";font-family:宋体;line-height:150%;font-size:19px"><span style="font-family:宋体">万</span>m</span><sup><span style=";font-family:宋体;line-height:150%;font-size:19px;vertical-align:super">2</span></sup><span style=";font-family:宋体;line-height:150%;font-size:19px"><span style="font-family:宋体">、水泥混凝土面层</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;font-size: 19px">&nbsp;&nbsp;</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;font-size: 19px">10</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;font-size: 19px">&nbsp;</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;font-size: 19px">&nbsp;</span></span><span style=";font-family:宋体;line-height:150%;font-size:19px"><span style="font-family:宋体">万</span>m</span><sup><span style=";font-family:宋体;line-height:150%;font-size:19px;vertical-align:super">2</span></sup><span style=";font-family:宋体;line-height:150%;font-size:19px"><span style="font-family:宋体">、沥青混凝土下面层</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;font-size: 19px">&nbsp;&nbsp;</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;font-size: 19px">10</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;font-size: 19px">&nbsp;&nbsp;</span></span><span style=";font-family:宋体;line-height:150%;font-size:19px"><span style="font-family:宋体">万</span>m</span><sup><span style=";font-family:宋体;line-height:150%;font-size:19px;vertical-align:super">2</span></sup><span style=";font-family:宋体;line-height:150%;font-size:19px"><span style="font-family:宋体">、沥青混凝土中面层</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;font-size: 19px">&nbsp;&nbsp;&nbsp;</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;font-size: 19px">10</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;font-size: 19px">&nbsp;</span></span><span style=";font-family:宋体;line-height:150%;font-size:19px"><span style="font-family:宋体">万</span>m</span><sup><span style=";font-family:宋体;line-height:150%;font-size:19px;vertical-align:super">2</span></sup><span style=";font-family:宋体;line-height:150%;font-size:19px"><span style="font-family:宋体">、沥青混凝土上面层</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;font-size: 19px">&nbsp;&nbsp;</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;font-size: 19px">10</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;font-size: 19px">&nbsp;&nbsp;</span></span><span style=";font-family:宋体;line-height:150%;font-size:19px"><span style="font-family:宋体">万</span>m</span><sup><span style=";font-family:宋体;line-height:150%;font-size:19px;vertical-align:super">2</span></sup><span style=";font-family:宋体;line-height:150%;font-size:19px"><span style="font-family:宋体">，大桥</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;font-size: 19px">&nbsp;&nbsp;</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;font-size: 19px">10</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;font-size: 19px">&nbsp;&nbsp;</span></span><span style=";font-family:宋体;line-height:150%;font-size:19px">m/座、中桥</span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;font-size: 19px">&nbsp;&nbsp;</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;font-size: 19px">10</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;font-size: 19px">&nbsp;&nbsp;</span></span><span style=";font-family:宋体;line-height:150%;font-size:19px">m/座、小桥</span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;font-size: 19px">&nbsp;&nbsp;</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;font-size: 19px">10</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;font-size: 19px">&nbsp;</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;font-size: 19px">&nbsp;</span></span><span style=";font-family:宋体;line-height:150%;font-size:19px">m/座、涵洞</span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;font-size: 19px">&nbsp;&nbsp;</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;font-size: 19px">10</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;font-size: 19px">&nbsp;&nbsp;</span></span><span style=";font-family:宋体;line-height:150%;font-size:19px">m/座，隧道</span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;font-size: 19px">&nbsp;</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;font-size: 19px">10</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;font-size: 19px">&nbsp;&nbsp;&nbsp;</span></span><span style=";font-family:宋体;line-height:150%;font-size:19px">m/座，</span><span style=";font-family:宋体;line-height:150%;font-size:19px">……</span><span style=";font-family:宋体;line-height:150%;font-size:19px"><span style="font-family:宋体">。</span></span>
          </p>
          <h1>
            <strong><span style="font-family: 宋体;font-size: 29px"><span style="font-family:宋体">二、主合同信息</span></span></strong>
          </h1>
          <p style="text-indent:37px;line-height:150%">
            <span style=";font-family:宋体;line-height:150%;font-size:19px">1.合同额：</span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;font-size: 19px">&nbsp;&nbsp;&nbsp;&nbsp;</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;color: rgb(255, 0, 0);font-size: 19px">2412</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;font-size: 19px">&nbsp;&nbsp;&nbsp;</span></span><span style=";font-family:宋体;line-height:150%;color:rgb(255,0,0);font-size:19px"><span style="font-family:宋体">万元</span></span><span style=";font-family:宋体;line-height:150%;font-size:19px"><span style="font-family:宋体">，有效合同额：</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;font-size: 19px">&nbsp;</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;color: rgb(255, 0, 0);font-size: 19px">2100</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;font-size: 19px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span><span style=";font-family:宋体;line-height:150%;color:rgb(255,0,0);font-size:19px"><span style="font-family:宋体">万元</span></span><span style=";font-family:宋体;line-height:150%;font-size:19px"><span style="font-family:宋体">；</span></span>
          </p>
          <p style="text-indent:37px;line-height:150%">
            <span style=";font-family:宋体;line-height:150%;font-size:19px">2.项目类型：</span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;color: rgb(255, 0, 0);font-size: 19px">PPP</span></span><span style=";font-family:宋体;line-height:150%;font-size:19px">&nbsp;<span style="font-family:宋体">；</span></span>
          </p>
          <p style="text-indent:37px;line-height:150%">
            <span style=";font-family:宋体;line-height:150%;font-size:19px">3.</span><span style=";font-family:宋体;line-height:150%;font-size:19px"><span style="font-family:宋体">预付款：</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;font-size: 19px">&nbsp;</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;color: rgb(255, 0, 0);font-size: 19px"><span style="font-family:宋体">有</span></span></span><span style=";font-family:宋体;line-height:150%;font-size:19px"><span style="font-family:宋体">预付款；预付款占合同额比为</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;font-size: 19px">&nbsp;</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;color: rgb(255, 0, 0);font-size: 19px">13</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;font-size: 19px">&nbsp;&nbsp;&nbsp;</span></span><span style=";font-family:宋体;line-height:150%;font-size:19px">%；</span>
          </p>
          <p style=";line-height:150%">
            <span style=";font-family:宋体;line-height:150%;font-size:19px">&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=";font-family:宋体;line-height:150%;color:rgb(255,0,0);font-size:19px">4</span><span style=";font-family:宋体;line-height:150%;color:rgb(255,0,0);font-size:19px">.</span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;color: rgb(255, 0, 0);font-size: 19px">&nbsp;<span style="font-family:宋体">有</span></span></span><span style=";font-family:宋体;line-height:150%;color:rgb(255,0,0);font-size:19px"><span style="font-family:宋体">合作投标，标前立项</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;color: rgb(255, 0, 0);font-size: 19px"><span style="font-family:宋体">已</span></span></span><span style=";font-family:宋体;line-height:150%;color:rgb(255,0,0);font-size:19px"><span style="font-family:宋体">向局市场开发部门备案，任务划分</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;color: rgb(255, 0, 0);font-size: 19px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;color: rgb(255, 0, 0);font-size: 19px"><span style="font-family:宋体">任务</span></span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;color: rgb(255, 0, 0);font-size: 19px">1标段，任务2标段</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;color: rgb(255, 0, 0);font-size: 19px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span><span style=";font-family:宋体;line-height:150%;color:rgb(255,0,0);font-size:19px"><span style="font-family:宋体">；</span></span>
          </p>
          <p style="text-indent: 38px;line-height: 150%">
            <span style=";font-family:宋体;line-height:150%;color:rgb(255,0,0);font-size:19px">5.主合同工程款支付款：</span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;color: rgb(255, 0, 0);font-size: 19px">&nbsp;</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;color: rgb(255, 0, 0);font-size: 19px"><span style="font-family:宋体">条款一，条款二，条款三，条款四，条款五，条款六</span></span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;color: rgb(255, 0, 0);font-size: 19px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span><span style=";font-family:宋体;line-height:150%;color:rgb(255,0,0);font-size:19px"><span style="font-family:宋体">；</span></span>
          </p>
          <p style="text-indent: 38px;line-height: 150%">
            <span style=";font-family:宋体;line-height:150%;color:rgb(255,0,0);font-size:19px">6.材料调差：</span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;color: rgb(255, 0, 0);font-size: 19px">&nbsp;<span style="font-family:宋体">是</span></span></span><span style=";font-family:宋体;line-height:150%;color:rgb(255,0,0);font-size:19px"><span style="font-family:宋体">进行材料调差；调差材料范围包括：</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;color: rgb(255, 0, 0);font-size: 19px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;color: rgb(255, 0, 0);font-size: 14px"><span style="font-family:宋体">钢筋、钢绞线、沥青</span></span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;color: rgb(255, 0, 0);font-size: 14px">……</span></span><span style=";font-family:宋体;line-height:150%;color:rgb(255,0,0);font-size:19px"><span style="font-family:宋体">，且</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;color: rgb(255, 0, 0);font-size: 19px">± </span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;color: rgb(255, 0, 0);font-size: 19px">5</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;color: rgb(255, 0, 0);font-size: 19px">&nbsp;&nbsp;</span></span><span style=";font-family:宋体;line-height:150%;color:rgb(255,0,0);font-size:19px">%以内由项目经理部承担</span><span style=";font-family:宋体;line-height:150%;font-size:19px"><span style="font-family:宋体">；</span></span>
          </p>
          <p>
            <span style=";font-family:宋体;font-size:19px">7.备注：</span><span style="text-decoration:underline;"><span style="font-family: 宋体;font-size: 19px">&nbsp;&nbsp;</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;color: rgb(255, 0, 0);font-size: 19px">&nbsp;</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;color: rgb(255, 0, 0);font-size: 19px"><span style="font-family:宋体">合同信息备注详情</span></span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;color: rgb(255, 0, 0);font-size: 19px">&nbsp;&nbsp;</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;font-size: 19px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;font-size: 19px"><span style="font-family:宋体">；</span></span></span>
          </p>
          <h1>
            <strong><span style="font-family: 宋体;font-size: 29px"><span style="font-family:宋体">三、组织机构</span></span></strong>
          </h1>
          <p style="text-indent:37px;line-height:150%">
            <span style=";font-family:宋体;line-height:150%;color:rgb(255,0,0);font-size:19px"><span style="font-family:宋体">成立以项目经理为组长，项目</span></span><span style=";font-family:宋体;line-height:150%;color:rgb(255,0,0);font-size:19px"><span style="font-family:宋体">测试副组长</span></span><span style=";font-family:宋体;line-height:150%;color:rgb(255,0,0);font-size:19px">1</span><span style=";font-family:宋体;line-height:150%;color:rgb(255,0,0);font-size:19px"><span style="font-family:宋体">、</span></span><span style=";font-family:宋体;line-height:150%;color:rgb(255,0,0);font-size:19px"><span style="font-family:宋体">测试副组长</span></span><span style=";font-family:宋体;line-height:150%;color:rgb(255,0,0);font-size:19px">2</span><span style=";font-family:宋体;line-height:150%;color:rgb(255,0,0);font-size:19px"><span style="font-family:宋体">为副组长，其他领导和部门人员为组员的分包管理领导小组。项目经理为项目分包管理工作第一责任人，项目日常分包管理工作由项目经营部门负责。</span></span>
          </p>
          <p style="text-indent:38px;line-height:150%">
            <span style=";font-family:宋体;line-height:150%;color:rgb(255,0,0);font-size:19px"><span style="font-family:宋体">组</span> &nbsp;<span style="font-family:宋体">长：</span></span><span style=";font-family:宋体;line-height:150%;color:rgb(255,0,0);font-size:19px"><span style="font-family:宋体">测试组长</span></span>
          </p>
          <p style="text-indent:38px;line-height:150%">
            <span style=";font-family:宋体;line-height:150%;color:rgb(255,0,0);font-size:19px"><span style="font-family:宋体">副组长：</span></span><span style=";font-family:宋体;line-height:150%;color:rgb(255,0,0);font-size:19px"><span style="font-family:宋体">测试副组长</span></span><span style=";font-family:宋体;line-height:150%;color:rgb(255,0,0);font-size:19px">1</span><span style=";font-family:宋体;line-height:150%;color:rgb(255,0,0);font-size:19px">&nbsp;&nbsp;</span><span style=";font-family:宋体;line-height:150%;color:rgb(255,0,0);font-size:19px"><span style="font-family:宋体">测试副组长</span></span><span style=";font-family:宋体;line-height:150%;color:rgb(255,0,0);font-size:19px">2</span><span style=";font-family:宋体;line-height:150%;color:rgb(255,0,0);font-size:19px">&nbsp;&nbsp;</span>
          </p>
          <p>
            <span style=";font-family:宋体;color:rgb(255,0,0);font-size:19px"><span style="font-family:宋体">组</span> &nbsp;<span style="font-family:宋体">员：</span></span><span style=";font-family:宋体;color:rgb(255,0,0);font-size:19px"><span style="font-family:宋体">测试组员</span></span><span style=";font-family:宋体;color:rgb(255,0,0);font-size:19px">1</span><span style=";font-family:宋体;color:rgb(255,0,0);font-size:19px">&nbsp;</span><span style=";font-family:宋体;color:rgb(255,0,0);font-size:19px"><span style="font-family:宋体">测试组员</span></span><span style=";font-family:宋体;color:rgb(255,0,0);font-size:19px">2</span><span style=";font-family:宋体;color:rgb(255,0,0);font-size:19px">&nbsp;</span><span style=";font-family:宋体;color:rgb(255,0,0);font-size:19px"><span style="font-family:宋体">测试组员</span></span><span style=";font-family:宋体;color:rgb(255,0,0);font-size:19px">3</span><span style=";font-family:宋体;color:rgb(255,0,0);font-size:19px">&nbsp;</span><span style=";font-family:宋体;color:rgb(255,0,0);font-size:19px"><span style="font-family:宋体">测试组员</span></span><span style=";font-family:宋体;color:rgb(255,0,0);font-size:19px">4</span>
          </p>
          <h1>
            <strong><span style="font-family: 宋体;font-size: 29px"><span style="font-family:宋体">四、</span><span style="font-family:宋体">经营模式：</span></span></strong>
          </h1>
          <p style=";text-indent:28px">
            <span style=";font-family:宋体;font-size:19px"><span style="font-family:宋体">本项目执行</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;color: rgb(255, 0, 0);font-size: 19px"><span style="font-family:宋体">扩大劳务分包模式</span></span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;font-size: 19px"><span style="font-family:宋体">模式</span></span></span><span style=";font-family:宋体;font-size:19px"><span style="font-family:宋体">，采用固定单价分包，其中</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;font-size: 19px">&nbsp;</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;color: rgb(255, 0, 0);font-size: 19px"><span style="font-family:宋体">路基</span>/路面/桥涵/隧道</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;color: rgb(255, 0, 0);font-size: 19px">……</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;font-size: 19px"><span style="font-family:宋体">等</span></span></span><span style=";font-family:宋体;font-size:19px"><span style="font-family:宋体">工程采用扩大劳务分包模式，</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;color: rgb(255, 0, 0);font-size: 19px"><span style="font-family:宋体">钢结构工程</span>/绿化工程/交安工程/机电安装工程/消防工程</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;color: rgb(255, 0, 0);font-size: 19px">……</span></span><span style=";font-family:宋体;font-size:19px"><span style="font-family:宋体">等专业工程采用专业分包模式。</span></span>
          </p>
          <p style=";text-indent:28px">
            <span style=";font-family:宋体;font-size:19px"><span style="font-family:宋体">注：市政工程应参考公路项目实行综合单价法进行分包，不单列规费、措施费、设备进出场费等</span></span>
          </p>
          <h1>
            <strong><span style="font-family: 宋体;font-size: 29px"><span style="font-family:宋体">五、分包标段划分和招标策划</span></span></strong>
          </h1>
          <p style="text-indent:38px;line-height:150%">
            <span style=";font-family:宋体;line-height:150%;font-size:19px"><span style="font-family:宋体">（一）段落划分总述</span></span>
          </p>
          <p style="text-indent:38px;line-height:150%">
            <span style=";font-family:宋体;line-height:150%;font-size:19px"><span style="font-family:宋体">拟计划共选择</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;font-size: 19px">&nbsp;&nbsp;</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;color: rgb(255, 0, 0);font-size: 19px">6</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;font-size: 19px">&nbsp;</span></span><span style=";font-family:宋体;line-height:150%;font-size:19px"><span style="font-family:宋体">家劳务队伍，其中路基工程</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;font-size: 19px">&nbsp;&nbsp;</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;color: rgb(255, 0, 0);font-size: 19px">1</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;font-size: 19px">&nbsp;</span></span><span style=";font-family:宋体;line-height:150%;font-size:19px"><span style="font-family:宋体">家；路面工程</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;font-size: 19px">&nbsp;</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;font-size: 19px">&nbsp;</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;color: rgb(255, 0, 0);font-size: 19px">1</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;font-size: 19px">&nbsp;</span></span><span style=";font-family:宋体;line-height:150%;font-size:19px"><span style="font-family:宋体">家；桥梁工程家；隧道工程</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;font-size: 19px">&nbsp;&nbsp;</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;color: rgb(255, 0, 0);font-size: 19px">1</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;font-size: 19px">&nbsp;</span></span><span style=";font-family:宋体;line-height:150%;font-size:19px"><span style="font-family:宋体">家；混凝土拌合运输工程</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;font-size: 19px">&nbsp;</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;font-size: 19px">&nbsp;</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;color: rgb(255, 0, 0);font-size: 19px">1</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;font-size: 19px">&nbsp;&nbsp;</span></span><span style=";font-family:宋体;line-height:150%;font-size:19px"><span style="font-family:宋体">家；临时设施工程</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;font-size: 19px">&nbsp;&nbsp;&nbsp;&nbsp;</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;color: rgb(255, 0, 0);font-size: 19px">1</span></span><span style=";font-family:宋体;line-height:150%;font-size:19px"><span style="font-family:宋体">家，</span></span><span style=";font-family:宋体;line-height:150%;font-size:19px">……</span><span style=";font-family:宋体;line-height:150%;font-size:19px"><span style="font-family:宋体">。</span></span>
          </p>
          <p style="margin-left:62px;line-height:150%">
            <span style="font-family:宋体;font-size:19px">1.&nbsp;</span><span style=";font-family:宋体;line-height:150%;font-size:19px"><span style="font-family:宋体">路基工程：</span></span>
          </p>
          <p style="text-indent:57px;line-height:150%">
            <span style=";font-family:宋体;line-height:150%;color:rgb(255,0,0);font-size:19px"><span style="font-family:宋体">路基</span>**队</span><span style=";font-family:宋体;line-height:150%;font-size:19px"><span style="font-family:宋体">：起止桩号为</span></span><span style="font-family: 宋体;line-height: 150%;font-size: 19px">K</span><span style="font-family: 宋体;line-height: 150%;font-size: 19px">#+###~</span><span style="font-family: 宋体;line-height: 150%;font-size: 19px">&nbsp;K</span><span style="font-family: 宋体;line-height: 150%;font-size: 19px">#+###</span><span style=";font-family:宋体;line-height:150%;font-size:19px"><span style="font-family:宋体">，全长</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;font-size: 19px">&nbsp;</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;font-size: 19px">100</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;font-size: 19px">&nbsp;</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;font-size: 19px">&nbsp;</span></span><span style=";font-family:宋体;line-height:150%;font-size:19px">km，主要工程量</span><span style=";font-family:宋体;line-height:150%;color:rgb(255,0,0);font-size:19px">******************</span><span style=";font-family:宋体;line-height:150%;color:rgb(255,0,0);font-size:19px"><span style="font-family:宋体">。</span></span>
          </p>
          <p style="text-indent:57px;line-height:150%">
            <span style=";font-family:宋体;line-height:150%;font-size:19px">………</span>
          </p>
          <p style="margin-left:62px;line-height:150%">
            <span style="font-family:宋体;font-size:19px">2.&nbsp;</span><span style=";font-family:宋体;line-height:150%;font-size:19px"><span style="font-family:宋体">路面工程：</span></span>
          </p>
          <p style="text-indent:57px;line-height:150%">
            <span style=";font-family:宋体;line-height:150%;color:rgb(255,0,0);font-size:19px"><span style="font-family:宋体">路面</span>**队</span><span style=";font-family:宋体;line-height:150%;font-size:19px"><span style="font-family:宋体">：起止桩号为</span></span><span style="font-family: 宋体;line-height: 150%;font-size: 19px">K</span><span style="font-family: 宋体;line-height: 150%;font-size: 19px">#+###~</span><span style="font-family: 宋体;line-height: 150%;font-size: 19px">&nbsp;K</span><span style="font-family: 宋体;line-height: 150%;font-size: 19px">#+###</span><span style=";font-family:宋体;line-height:150%;font-size:19px"><span style="font-family:宋体">，全长</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;font-size: 19px">&nbsp;</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;font-size: 19px">500</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;font-size: 19px">&nbsp;</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;font-size: 19px">&nbsp;</span></span><span style=";font-family:宋体;line-height:150%;font-size:19px">km，包括</span><span style=";font-family:宋体;line-height:150%;color:rgb(255,0,0);font-size:19px">***工程</span><span style=";font-family:宋体;line-height:150%;font-size:19px"><span style="font-family:宋体">，主要工程量</span></span><span style=";font-family:宋体;line-height:150%;color:rgb(255,0,0);font-size:19px">************</span><span style=";font-family:宋体;line-height:150%;color:rgb(255,0,0);font-size:19px"><span style="font-family:宋体">。</span></span>
          </p>
          <p style="margin-left:62px;line-height:150%">
            <span style=";font-family:宋体;line-height:150%;font-size:19px">………</span>
          </p>
          <p style="margin-left:62px;line-height:150%">
            <span style="font-family:宋体;font-size:19px">3.&nbsp;</span><span style=";font-family:宋体;line-height:150%;font-size:19px"><span style="font-family:宋体">桥涵工程</span></span>
          </p>
          <p style="text-indent:57px;line-height:150%">
            <span style=";font-family:宋体;line-height:150%;color:rgb(255,0,0);font-size:19px"><span style="font-family:宋体">桥涵</span>**队</span><span style=";font-family:宋体;line-height:150%;font-size:19px"><span style="font-family:宋体">：包括</span>***桥、***桥？座桥梁，的</span><span style=";font-family:宋体;line-height:150%;color:rgb(255,0,0);font-size:19px">***工程</span><span style=";font-family:宋体;line-height:150%;font-size:19px"><span style="font-family:宋体">，主要工程量</span></span><span style=";font-family:宋体;line-height:150%;color:rgb(255,0,0);font-size:19px">……</span><span style=";font-family:宋体;line-height:150%;color:rgb(255,0,0);font-size:19px"><span style="font-family:宋体">。</span></span>
          </p>
          <p style="text-indent:38px;line-height:150%">
            <span style=";font-family:宋体;line-height:150%;color:rgb(255,0,0);font-size:19px">………</span>
          </p>
          <p style="text-indent:38px;line-height:150%">
            <span style=";font-family:宋体;line-height:150%;font-size:19px">4</span><span style=";font-family:宋体;line-height:150%;font-size:19px">.</span><span style=";font-family:宋体;line-height:150%;font-size:19px"><span style="font-family:宋体">隧道工程：</span></span>
          </p>
          <p style="text-indent:38px;line-height:150%">
            <span style=";font-family:宋体;line-height:150%;font-size:19px">&nbsp;</span><span style=";font-family:宋体;line-height:150%;font-size:19px">&nbsp;</span><span style=";font-family:宋体;line-height:150%;color:rgb(255,0,0);font-size:19px"><span style="font-family:宋体">隧道</span>**队</span><span style=";font-family:宋体;line-height:150%;font-size:19px"><span style="font-family:宋体">：包含</span>***隧道，单洞长</span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;font-size: 19px">&nbsp;</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;font-size: 19px">&nbsp;&nbsp;</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;font-size: 19px">5000</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;font-size: 19px">&nbsp;&nbsp;</span></span><span style=";font-family:宋体;line-height:150%;font-size:19px">m,</span><span style=";font-family:宋体;line-height:150%;font-size:19px"><span style="font-family:宋体">主要工程量</span></span><span style=";font-family:宋体;line-height:150%;color:rgb(255,0,0);font-size:19px">……</span><span style=";font-family:宋体;line-height:150%;font-size:19px"><span style="font-family:宋体">。</span></span>
          </p>
          <p style="text-indent:38px;line-height:150%">
            <span style=";font-family:宋体;line-height:150%;font-size:19px">&nbsp;</span><span style=";font-family:宋体;line-height:150%;font-size:19px">&nbsp;……</span>
          </p>
          <p style="text-indent:37px;line-height:150%">
            <span style=";font-family:宋体;line-height:150%;font-size:19px">5.</span><span style=";font-family:宋体;line-height:150%;font-size:19px"><span style="font-family:宋体">混凝土拌和运输：</span></span>
          </p>
          <p style="text-indent:38px;line-height:150%">
            <span style=";font-family:宋体;line-height:150%;font-size:19px">&nbsp;&nbsp;</span><span style=";font-family:宋体;line-height:150%;color:rgb(255,0,0);font-size:19px"><span style="font-family:宋体">拌和</span>*</span><span style=";font-family:宋体;line-height:150%;color:rgb(255,0,0);font-size:19px">*</span><span style=";font-family:宋体;line-height:150%;color:rgb(255,0,0);font-size:19px"><span style="font-family:宋体">队</span></span><span style=";font-family:宋体;line-height:150%;font-size:19px"><span style="font-family:宋体">：主要负责</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;font-size: 19px">&nbsp;</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;font-size: 19px">&nbsp;&nbsp;</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;font-size: 19px">100km</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;font-size: 19px">&nbsp;</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;font-size: 19px">&nbsp;</span></span><span style=";font-family:宋体;line-height:150%;font-size:19px"><span style="font-family:宋体">范围内混凝土拌和运输，共</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;font-size: 19px">&nbsp;</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;font-size: 19px">&nbsp;</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;font-size: 19px">&nbsp;</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;font-size: 19px">100</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;font-size: 19px">&nbsp;</span></span><span style=";font-family:宋体;line-height:150%;font-size:19px"><span style="font-family:宋体">万立方</span></span><span style=";font-family:宋体;line-height:150%;font-size:19px">,</span><span style=";font-family:宋体;line-height:150%;font-size:19px"><span style="font-family:宋体">综合运距为</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;font-size: 19px">&nbsp;</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;font-size: 19px">200</span></span><span style="text-decoration:underline;"><span style="font-family: 宋体;line-height: 150%;font-size: 19px">&nbsp;&nbsp;&nbsp;&nbsp;</span></span><span style=";font-family:宋体;line-height:150%;font-size:19px">km</span><span style=";font-family:宋体;line-height:150%;font-size:19px"><span style="font-family:宋体">。</span></span>
          </p>
          <p style="text-indent:38px;line-height:150%">
            <span style=";font-family:宋体;line-height:150%;font-size:19px">6</span><span style=";font-family:宋体;line-height:150%;font-size:19px">.</span><span style=";font-family:宋体;line-height:150%;font-size:19px"><span style="font-family:宋体">临时设施工程</span>(如有)：</span>
          </p>
          <p style=";line-height:150%">
            <span style=";font-family:宋体;line-height:150%;font-size:19px">&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=";font-family:宋体;line-height:150%;font-size:19px">&nbsp;&nbsp;</span><span style=";font-family:宋体;line-height:150%;color:rgb(255,0,0);font-size:19px">***</span><span style=";font-family:宋体;line-height:150%;color:rgb(255,0,0);font-size:19px"><span style="font-family:宋体">工程</span></span><span style=";font-family:宋体;line-height:150%;font-size:19px"><span style="font-family:宋体">：工作内容为</span></span><span style=";font-family:宋体;line-height:150%;font-size:19px">……</span><span style=";font-family:宋体;line-height:150%;font-size:19px"><span style="font-family:宋体">。</span></span>
          </p>
          <p style="text-indent:38px;line-height:150%">
            <span style=";font-family:宋体;line-height:150%;font-size:19px">7</span><span style=";font-family:宋体;line-height:150%;font-size:19px"><span style="font-family:宋体">．其它工程：</span></span>
          </p>
          <p style="text-indent:38px;line-height:150%">
            <span style=";font-family:宋体;line-height:150%;font-size:19px">&nbsp;</span><span style=";font-family:宋体;line-height:150%;font-size:19px">&nbsp;…………</span>
          </p>
          <p style="text-indent:37px;line-height:150%">
            <span style=";font-family:宋体;line-height:150%;font-size:19px"><span style="font-family:宋体">（二）各专业工程分包策划过程和结果简述</span></span>
          </p>
          <p style="text-indent:37px;line-height:150%">
            <span style=";font-family:宋体;line-height:150%;color:rgb(255,0,0);font-size:19px"><span style="font-family:宋体">该部分内容主要为体现分包策划最终结果形成的过程，目的让所有参与者与执行者都能清晰掌握策划的总体思路，便于策划的落实与执行。</span></span>
          </p>
          <p style="text-indent:37px;line-height:150%">
            <span style=";font-family:宋体;line-height:150%;color:rgb(255,0,0);font-size:19px"><span style="font-family:宋体">注：未按《分包段落划分指导原则和标准》执行部分应说明原因。</span></span>
          </p>
          <p style="text-indent:37px;line-height:150%">
            <span style=";font-family:宋体;line-height:150%;color:rgb(255,0,0);font-size:19px">1.路基工程：</span>
          </p>
          <p style="text-indent:37px;line-height:150%">
            <span style=";font-family:宋体;line-height:150%;color:rgb(255,0,0);font-size:19px">1.1分包标段划分说明（是否按桩号整体分包，包含哪些附属工程）；</span>
          </p>
          <p style="text-indent:37px;line-height:150%">
            <span style=";font-family:宋体;line-height:150%;color:rgb(255,0,0);font-size:19px">1.2土石方调配情况（项目总体土石方平衡情况；分包段落间土方调配情况）；</span>
          </p>
          <p style="margin-left:0;text-indent:38px;line-height:150%">
            <span style=";font-family:宋体;line-height:150%;color:rgb(255,0,0);font-size:19px">1.</span><span style=";font-family:宋体;line-height:150%;color:rgb(255,0,0);font-size:19px">3</span><span style=";font-family:宋体;line-height:150%;color:rgb(255,0,0);font-size:19px"><span style="font-family:宋体">施工便道：包括纵向</span>/横向便道修筑、维护由谁负责，是否纳入到路基工程范围；便道修筑和维护费用包含路基土石方细目单价中，还是独立设定细目；便道计价方式（总额包干/按工程量计价）。</span>
          </p>
          <p style="text-indent:37px;line-height:150%">
            <span style=";font-family:宋体;line-height:150%;color:rgb(255,0,0);font-size:19px">2.路面工程：</span>
          </p>
          <p style="text-indent:37px;line-height:150%">
            <span style=";font-family:宋体;line-height:150%;color:rgb(255,0,0);font-size:19px">2.1</span><span style=";font-family:宋体;line-height:150%;color:rgb(255,0,0);font-size:19px"><span style="font-family:宋体">混合料材料来源（自建站还是采购成品料）；</span></span>
          </p>
          <p style="text-indent:37px;line-height:150%">
            <span style=";font-family:宋体;line-height:150%;color:rgb(255,0,0);font-size:19px">2.2</span><span style=";font-family:宋体;line-height:150%;color:rgb(255,0,0);font-size:19px"><span style="font-family:宋体">基层</span>/面层施工（是否分开选择队伍）；</span>
          </p>
          <p style="text-indent:37px;line-height:150%">
            <span style=";font-family:宋体;line-height:150%;color:rgb(255,0,0);font-size:19px">2.3</span><span style=";font-family:宋体;line-height:150%;color:rgb(255,0,0);font-size:19px"><span style="font-family:宋体">拌和运输</span>/摊铺碾压（是否分开选择队伍）；</span>
          </p>
          <p style="text-indent:37px;line-height:150%">
            <span style=";font-family:宋体;line-height:150%;color:rgb(255,0,0);font-size:19px">3.桥涵工程</span>
          </p>
          <p style="text-indent:37px;line-height:150%">
            <span style=";font-family:宋体;line-height:150%;color:rgb(255,0,0);font-size:19px">3.1分包方式（整体分包或按专业分解分包）；</span>
          </p>
          <p style="text-indent:37px;line-height:150%">
            <span style=";font-family:宋体;line-height:150%;color:rgb(255,0,0);font-size:19px">3.2桩基工程成孔方案的选择；</span>
          </p>
          <p style="text-indent:37px;line-height:150%">
            <span style=";font-family:宋体;line-height:150%;color:rgb(255,0,0);font-size:19px">3.3各队伍分包规模；</span>
          </p>
          <p style="text-indent:37px;line-height:150%">
            <span style=";font-family:宋体;line-height:150%;color:rgb(255,0,0);font-size:19px">3.4</span><span style=";font-family:宋体;line-height:150%;color:rgb(255,0,0);font-size:19px">&nbsp;</span><span style=";font-family:宋体;line-height:150%;color:rgb(255,0,0);font-size:19px"><span style="font-family:宋体">桥梁范围便道分包策划；</span></span>
          </p>
          <p style="text-indent:37px;line-height:150%">
            <span style=";font-family:宋体;line-height:150%;color:rgb(255,0,0);font-size:19px">3</span><span style=";font-family:宋体;line-height:150%;color:rgb(255,0,0);font-size:19px">.5</span><span style=";font-family:宋体;line-height:150%;color:rgb(255,0,0);font-size:19px"><span style="font-family:宋体">钢筋集中加工、梁板预制工程是否纳入桥梁专业工程范围等。</span></span>
          </p>
          <p style="text-indent:37px;line-height:150%">
            <span style=";font-family:宋体;line-height:150%;color:rgb(255,0,0);font-size:19px">4.隧道工程：</span><span style=";font-family:宋体;line-height:150%;color:rgb(255,0,0);font-size:19px">&nbsp;</span>
          </p>
          <p style="text-indent:37px;line-height:150%">
            <span style=";font-family:宋体;line-height:150%;color:rgb(255,0,0);font-size:19px">4.1各隧道进洞方式（单端或双端）；</span>
          </p>
          <p style="text-indent:37px;line-height:150%">
            <span style=";font-family:宋体;line-height:150%;color:rgb(255,0,0);font-size:19px">4</span><span style=";font-family:宋体;line-height:150%;color:rgb(255,0,0);font-size:19px">.2</span><span style=";font-family:宋体;line-height:150%;color:rgb(255,0,0);font-size:19px"><span style="font-family:宋体">各队伍承建规模；</span></span>
          </p>
          <p style="text-indent:37px;line-height:150%">
            <span style=";font-family:宋体;line-height:150%;color:rgb(255,0,0);font-size:19px">5.临时设施工程：</span>
          </p>
          <p style="text-indent:37px;line-height:150%">
            <span style=";font-family:宋体;line-height:150%;color:rgb(255,0,0);font-size:19px">5.1</span><span style=";font-family:宋体;line-height:150%;color:rgb(255,0,0);font-size:19px"><span style="font-family:宋体">临时设施是否纳入到主体工程范围；</span> </span>
          </p>
          <p style="text-indent:37px;line-height:150%">
            <span style=";font-family:宋体;line-height:150%;color:rgb(255,0,0);font-size:19px">5.2</span><span style=";font-family:宋体;line-height:150%;color:rgb(255,0,0);font-size:19px"><span style="font-family:宋体">计价方式（总额包干</span>/按工程量计价）；</span>
          </p>
          <p style="text-indent:38px;line-height:150%">
            <span style=";font-family:宋体;line-height:150%;color:rgb(255,0,0);font-size:19px">6</span><span style=";font-family:宋体;line-height:150%;color:rgb(255,0,0);font-size:19px">.</span><span style=";font-family:宋体;line-height:150%;color:rgb(255,0,0);font-size:19px"><span style="font-family:宋体">其他</span></span>
          </p>
          <p style="text-indent:38px;line-height:150%">
            <span style=";font-family:宋体;line-height:150%;color:rgb(255,0,0);font-size:19px">…………</span>
          </p>
          <p style="text-indent:37px;line-height:150%">
            <span style=";font-family:宋体;line-height:150%;color:rgb(255,0,0);font-size:19px"><span style="font-family:宋体">（三）招标时间和队伍进场策划</span></span>
          </p>
          <p style="text-indent:37px;line-height:150%">
            <span style=";font-family:宋体;line-height:150%;color:rgb(255,0,0);font-size:19px">1.招标策划</span>
          </p>
          <p style="text-indent:37px;line-height:150%">
            <span style=";font-family:宋体;line-height:150%;color:rgb(255,0,0);font-size:19px"><span style="font-family:宋体">集中招标次数，每次招标那些分包标段，招标时间计划，对进度影响分析</span></span>
          </p>
          <p style="margin-left:61px;line-height:150%">
            <span style="font-family:宋体;color:rgb(255,0,0);font-size:19px">3.&nbsp;</span><span style=";font-family:宋体;line-height:150%;color:rgb(255,0,0);font-size:19px"><span style="font-family:宋体">进场策划</span></span>
          </p>
          <p style="margin-left:37px;line-height:150%">
            <span style=";font-family:宋体;line-height:150%;color:rgb(255,0,0);font-size:19px"><span style="font-family:宋体">每个队伍计划进场时间，对进度影响分析</span></span>
          </p>
          <p style=";text-indent:28px">
            <span style=";font-family:宋体;font-size:19px">&nbsp;</span>
          </p>
          <p style=";text-indent:28px">
            <span style=";font-family:宋体;font-size:19px">&nbsp;</span>
          </p>
          <p style="text-indent:343px;line-height:150%">
            <span style=";font-family:宋体;line-height:150%;font-size:19px"><span style="font-family:宋体">中交第四公路工程局有限公司</span></span>
          </p>
          <p style="text-indent:37px;line-height:150%">
            <span style=";font-family:宋体;line-height:150%;font-size:19px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=";font-family:宋体;line-height:150%;color:rgb(255,0,0);font-size:19px"><span style="font-family:宋体">新建沿江</span></span><span style=";font-family:宋体;line-height:150%;font-size:19px"><span style="font-family:宋体">项目经理部</span></span>
          </p>
          <p style="text-indent:37px;line-height:150%">
            <span style=";font-family:宋体;line-height:150%;font-size:19px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=";font-family:宋体;line-height:150%;color:rgb(255,0,0);font-size:19px">2019</span><span style=";font-family:宋体;line-height:150%;font-size:19px"><span style="font-family:宋体">年</span></span><span style=";font-family:宋体;line-height:150%;color:rgb(255,0,0);font-size:19px">5</span><span style=";font-family:宋体;line-height:150%;font-size:19px"><span style="font-family:宋体">月</span></span><span style=";font-family:宋体;line-height:150%;color:rgb(255,0,0);font-size:19px">9</span><span style=";font-family:宋体;line-height:150%;font-size:19px"><span style="font-family:宋体">日</span></span>
          </p>
          <p>
            <span style=";font-family:宋体;line-height:150%;font-size:19px"><br clear="all" style="page-break-before:always"/></span>
          </p>
          <p style="margin-left:196px;text-indent:28px">
            <br/>
          </p>
          <p style="text-indent: 166px; text-align: center;">
            <br/>
          </p>
        </div>
      </el-tab-pane>
    </el-tabs>
    <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="审批意见" :label-width="formLabelWidth">
          <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisibleFun">确 定</el-button>
      </div>
    </el-dialog>

    <div class="operfixed" v-if="isApproval">
      <el-button type="primary" size="mini"  @click="dialogFormVisible = true">同意</el-button>
      <el-button type="primary" size="mini"  @click="dialogFormVisible = true">退回</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      dialogFormVisible: false,
      form: {
        desc: ''
      },
      formLabelWidth: '120px',
      isApproval: false,
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
  created () {
    this.getParams()
  },
  methods: {
    add () {
      this.planList.push({})
    },
    getParams () {
      this.isApproval = this.$router.currentRoute.params.isApproval =='1'? true : false
    },
    goBack () {
      history.go(-1)
    },
    dialogFormVisibleFun () {
      this.$router.push({path: '/subContractplanApproval'})
    }
  }
}
</script>
<style scoped>
.content {
  background-color: #fff;
  padding: 0 100px;
}
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

<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  html,body {
    margin: 0;
    padding: 0;
    height: 100%;
  }
  #app {
    height: 100%;
  }
  .el-table td {
    /*这里是一个坑-必须在父容器中设置样式，否则无法处理行高*/
    padding: 6px 0px !important;
  }
  .el-breadcrumb {
    background-color: #D3DCE6;
    height: 45px;
    font-size: 15px;
    padding-left: 10px;
    line-height: 45px;
  }
  .fl {
    float: left;
  }
  .fr {
    float: right;
  }
  /*顶部固定按钮*/
  .operfixed {
    position: fixed;
    bottom: 10px;
    left: 0px;
    right: 0px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }.text .el-form-item .el-form-item__content {
     width: 68.6%;
   }
  .title2 {
    width: 100%;
    background-color: #E9EEF3;
  }
  .title2 .el-form-item__label {
    font-size: 16px!important;
    font-weight: bold;
  }
</style>

<template>
  <el-container>
    <el-header>
      <div>
        <i @click="toggleFlag" class="isClose el-icon-s-fold"></i>
        <div class="title">交建云商</div>
      </div>
    </el-header>
    <el-container>
      <el-aside class="aside" :style='{width:"auto"}'>
        <el-menu
          router
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          :collapse="isCollapse"
          :default-active="defaultActive"
          :default-openeds="currentMenu"
          active-text-color="#ffd04b" background-color="#545c64" text-color="#fff" >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>分包策划管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/subContractplanList">分包策划编制</el-menu-item>
              <el-menu-item index="/subContractplanApproval">分包策划审批</el-menu-item>
              <el-menu-item index="/subContractplanQueryList">分包策划查询</el-menu-item>
              <el-menu-item index="/subContractplanAccount">分包策划台账</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data () {
    return {
      currentMenu: [], // 当前打开的 sub-menu 的 index 的数组
      defaultActive: '', // 当前激活菜单的 index
      isCollapse: false // 是否关闭菜单
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      // console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      // console.log(key, keyPath)
    },
    toggleFlag () {
      this.isCollapse = !this.isCollapse
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-container{
    height: 100%;
  }
  .el-aside {
    background-color: #545c64;
    height: 100%;
    text-align: left;
    display: block;
    overflow-x: hidden;
    overflow-y: hidden;
    z-index: 1;
  }
  .el-header {
    background-color: #545c64;
    color: #333;
    line-height: 60px;
    z-index: 3;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: left;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .isClose {
    font-size: 26px;
    color: silver;
    float: left;
    line-height: 60px;
  }
  .title {
    font-size: 28px;
    text-align: center;
    color: #fff;
  }
</style>

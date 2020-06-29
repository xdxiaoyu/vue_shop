<!--
 * @Descripttion: 
 * @version: 
 * @Author: dxiaoxing
 * @Date: 2020-06-10 08:44:01
 * @LastEditors: dxiaoxing
 * @LastEditTime: 2020-06-10 09:11:39
--> 
<template>
  <el-container class="home_container">
    <!-- 头部区域 -->
    <el-header>
      <div>
        <img src="../assets/logo.png" alt />
        <span>电商后台管理系统</span>
      </div>
      <el-button type="info" @click="logout">退出</el-button>
    </el-header>
    <!-- 页面主题曲 -->
    <el-container>
      <!-- 测边栏 -->
      <el-aside width="200px">
        <!-- 侧边栏菜单区 -->
        <el-menu background-color="#333744" text-color="#fff" active-text-color="#409EFF ">
          <!-- 一级菜单 -->
          <el-submenu :index="item.id + ''" v-for="item in menulist" :key="item.id">
            <!-- 一级菜单模板区域 -->
            <template slot="title">
              <!-- 图标 -->
              <i class="el-icon-location"></i>
              <span>{{item.authName}}</span>
            </template>
            <!-- 二级菜单 -->
            <el-menu-item
              :index="suubItem.id + ''"
              v-for="suubItem in item.children"
              :key="suubItem.id"
            >
              <template slot="title">
                <!-- 图标 -->
                <i class="el-icon-location"></i>
                <span>{{suubItem.authName}}</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 右侧内容主体 -->
      <el-main>github使用ssh</el-main>
    </el-container>
  </el-container>
</template>

<script>
import { menus } from '../api/login_api'
export default {
  data () {
    return {
      menulist: [] // 左侧菜单数据
    }
  },
  created () {
    // 检查提交记录
    this.getMenuList()
  },
  methods: {
    logout () {
      window.sessionStorage.clear()
      this.$router.push('/login')
    },
    // 获取所有菜单
    async getMenuList () {
      const { data: res } = await menus()
      this.menulist = res.data
    }
  }
}
</script>

<style lang="less" scoped>
.home_container {
  height: 100%;
}

.el-header {
  background-color: #373d41;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  font-size: 20px;
  img {
    width: 18%;
    border-radius: 50%;
    border: 1px solid #ffffff;
    background-color: white;
    transform: rotate(180deg);
  }
  div {
    display: flex;
    align-items: center;
    span {
      margin-left: 15px;
    }
  }
}

.el-aside {
  background-color: #333744;
}

.el-main {
  background-color: #eaedf1;
}
</style>

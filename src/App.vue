<template>
  <v-app>
    <el-row>
      <el-col :span="2">
        <span>
          left
        </span>
      </el-col>
      <el-col :span="20" id="main">
        <el-container>
          <el-header style="border: 1px solid black; height: 52px">
            <main-tab-bar/>
          </el-header>
          <el-main>
            <router-view/>
          </el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-col>
      <el-col :span="2" > </el-col>
    </el-row>

  </v-app>
</template>
<script>
  import MainTabBar from "components/content/mainTabBar/MainTabBar";

  export default {
    name: 'App',
    components: {
      MainTabBar
    }
  }
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

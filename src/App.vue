<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import lib from './lib/flexible'
  export default {
    name: 'app'
  }
</script>

<style>

html,body {
  height: 100%;
}

body {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  user-select: none;
}

a {
  text-decoration: none;
}

#app {
  position: relative;
  min-width: 300px;
  max-width: 640px;
  margin: 0 auto;
  height: 100%;
}


</style>

<template>
  <div class="container">
    <router-link class="logo" :to="{ name: 'Home'}">
      <img src="../assets/logo.png" alt="logo" />
    </router-link>
    <div class="main">
      <div class="error">
        <img src="../assets/500.png" alt="500" />
        <div class="big">咦，要访问的页面乘火箭离开了~！</div>
      </div>
      <div class="link">
        <router-link class="button" :to="{ name: 'Home'}">返回首页</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'error',
  data() {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
}
 
.logo {
  position: absolute;
  top: 0;
  left: 0;
  padding:0.5rem 10px;
}

.logo img {
  width: 120px;
  height: 50px;
}

.main {
  width: 100%;
  text-align: center;
}

.error {
  width: 50%;
  margin: 0 auto;
}

.error img {
  width: 100%;
}


.big {
  font-size: .5rem;
  line-height: 1.067rem;
}

.link {
  margin-top: .625rem;
}

.button {
  display: inline-block;
  width: 2rem;
  height: .625rem;
  margin-right: .534rem;
  line-height: .625rem;
  background-color: #e62129;
  border-radius: 5px;
  color: white;
}
</style>

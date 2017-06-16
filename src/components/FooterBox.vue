<template>
  <footer class="nav-bar">
    <router-link class="active" :to="{}">
      <i class="bbc-icon bbc-icon-home"></i>
      <span class="atips">首页</span>
    </router-link>
    <router-link :to="{name:'Error'}">
      <i class="bbc-icon bbc-icon-category"></i>
      <span class="atips">分类</span>
    </router-link>
    <router-link :to="{name:'Error'}">
      <i class="bbc-icon bbc-icon-cart"></i>
      <span class="atips">购物车</span>
    </router-link>
    <router-link :to="{name:'Error'}">
      <i class="bbc-icon bbc-icon-store"></i>
      <span class="atips">店铺</span>
    </router-link>
    <router-link :to="{name:'Member'}">
      <i class="bbc-icon bbc-icon-user"></i>
      <span class="atips">会员</span>
    </router-link>
  </footer>
</template>

<script>
export default {
  name: 'footer-box',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 @font-face {
  font-family: 'iconfonts';
  src: url("../assets/fonts/iconfonts.eot?ventwz");
  src: url("../assets/fonts/iconfonts.eot?ventwz#iefix") format("embedded-opentype"), 
  url("../assets/fonts/iconfonts.ttf?ventwz") format("truetype"), 
  url("../assets/fonts/iconfonts.woff?ventwz") format("woff"), 
  url("../assets/fonts/iconfonts.svg?ventwz#iconfonts") format("svg");
  font-weight: normal;
  font-style: normal;
}
.bbc-icon {
  /* use !important to prevent issues with browser extensions that change fonts */
  font-family: 'iconfonts' !important;
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  vertical-align: middle;
  font-size: .675rem;
  line-height: 1;
}
.nav-bar {
  display: flex;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 640px;
  height: 1.53753rem;
  z-index: 10;
  background-color: #fff;
  border-top: 1px solid #dcdcdc;
  overflow: hidden;
}
.nav-bar a {
  display: block;
  text-align: center;
  flex-grow:1;
  color: #7e7676;
}
 
.nav-bar a.active {
  color: #ea2329;
}

.nav-bar .atips {
  display: block;
  font-size: 0.4rem;
}

.nav-bar a.active .bbc-icon-category:before {
  content: "\e934";
}

.bbc-icon-category:before {
  content: "\e937";
}


.nav-bar a.active .bbc-icon-home:before {
  content: "\e927";
}

.bbc-icon-home:before {
  content: "\e90a";
}

.nav-bar a.active .bbc-icon-cart:before {
  content: "\e929";
}

.bbc-icon-cart:before {
  content: "\e901";
}

.bbc-icon-store:before {
  content: "\e91b";
}

.nav-bar a.active .bbc-icon-store:before {
  content: "\e91c";
}

.bbc-icon-user:before {
  content: "\e91e";
}

.nav-bar a.active .bbc-icon-user:before {
  content: "\e928";
}
</style>

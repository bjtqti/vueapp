<template>
  <header class="header">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(item,index) in items" :key="index">
          <img :src="item.src" alt="">
      </swiper-slide>
    </swiper>
    <div class="search-box">
      <button type="button"></button>
      <input type="text" value=""  placeholder="请输入搜索商品">
    </div>
  </header>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'header-box',
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
        swiperOption:{
          name:'swiper',
          autoplay: 3000,
          loop:true,
          pagination : '.swiper-pagination'
        }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  position: relative;
  background-color: #f1edec;
}
.swiper-slide img {
  width: 100%;
}
.search-box {
  position: absolute;
  width: 100%;
  padding: 0.3125rem;
  top: 0;
  z-index: 9;
}
.search-box button {
  position: absolute;
  height: 0.5625rem;
  width: 0.5625rem;
  display: inline-block;
  left: 6%;
  bottom: 32%;
  border: none;
  background: url("../assets/022.png") no-repeat 0 0;
  background-size: 100% 100%;
}
.search-box input {
  width: 100%;
  height: 0.82rem;
  padding-left: 0.8rem;
  font-size: 0.375rem;
  border: none;
  color: #000;
  text-indent: 0.4rem;
  background-color: rgba(255,255,255,0.8);
  border-radius: 0.8rem;
  outline: none;
}
</style>

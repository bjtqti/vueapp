<template>
  <div class="container">
    <header-box :items="bannerList"></header-box>
    <nav-menu></nav-menu>
    <recommond :items="recommondList"></recommond>
    <home-title title="爆抢专区"></home-title>
    <goods-list :items="hotGoodsList"></goods-list>
    <home-title title="今日必抢"></home-title>
    <goods-list :items="hotGoodsList"></goods-list>
    <loading></loading>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
import HeaderBox from '@/components/HeaderBox'
import NavMenu from '@/components/NavMenuBox'
import Recommond from '@/components/HomeRecomBox'
import HomeTitle from '@/components/HomeTitleBox'
import GoodsList from '@/components/GoodsListBox'
import FooterBar from '@/components/FooterBox'
import Loading from '@/components/LoadingBox'
import { mapState } from 'vuex'
export default {
  name: 'weidian',
  components: { 
    HeaderBox,NavMenu,Recommond,HomeTitle,GoodsList,FooterBar,Loading
  },
  data () {
    return {}
  },
  computed: {
    // Getting Vuex State from store/modules/book
    ...mapState({
      hotGoodsList: state => state.goods.hotGoodsList,
      recommondList:state=>state.goods.recommondList,
      bannerList:state=>state.goods.bannerList
    })
  },
  methods: {
    getGoodsList() {
      this.$store.dispatch('getGoodsList')
    },
    getRecommondList() {
      this.$store.dispatch('getRecommondList')
    },
    getBannerList(){
      this.$store.dispatch('getBannerList')
    }
  },
  created () {
    // Getting books data on created
    this.getGoodsList();
    this.getRecommondList();
    this.getBannerList();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  width: 100%;
  height: 100%;
  position: relative;
  padding-bottom: 1.35rem;
  overflow-x: hidden;
  background-color: #f1edec;
}
</style>

<template>
  <div class="container">
    <header-box :items="banners"></header-box>
    <nav-menu></nav-menu>
    <recommond :items="recommond"></recommond>
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
  name: 'home',
  components: { 
    HeaderBox,NavMenu,Recommond,HomeTitle,GoodsList,FooterBar,Loading
  },
  data () {
    return {
      banners:[{
        src:'http://youam.yunyiwd.com/upload/image/gh_8ac59f118265/20161129/20161129091654_972.jpg'
      }],
      recommond:[{
        id:'1',
        src:'http://youam.yunyiwd.com/upload/image/gh_8ac59f118265/20161129/20161129182521_887.png',
        href:'recommond.html'
      },
      {
        id:'2',
        src:'http://youam.yunyiwd.com/upload/image/gh_8ac59f118265/20161122/20161122100453_727.png',
        href:'recommond.html'
      }]
    }
  },
  computed: {
    // Getting Vuex State from store/modules/book
    ...mapState({
      hotGoodsList: state => state.goods.hotGoodsList
    })
  },
  methods: {
    getGoodsList() {
      this.$store.dispatch('getGoodsList')
    }
  },
  created () {
    // Getting books data on created
    this.getGoodsList()
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

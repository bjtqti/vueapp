<template>
  <div class="nav-box">
    <nav class="menu">
      <swiper :options="swiperOption" ref="menuSwiper">
        <swiper-slide v-for="item in menuItems" :key="item.id">
            <span :class="{ active: item.isActive }">{{item.name}}</span>
        </swiper-slide>
      </swiper>
      <div class="arrow" :class="{ active:isExpand }" @click="handleClickArrow">
        <Icon type="ios-arrow-down"></Icon>
      </div>
    </nav>
    <transition name="fade">
      <ul class="guid-box" v-show="isExpand">
        <li class="guid-item" v-for="(item,index) in menuItems" :key="item.id">
          <span :class="{ active: item.isActive }" 
          @click.stop="handleClickItem(index)">{{item.name}}</span>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'menu',
  components: {
    swiper,
    swiperSlide
  },
  data () {
    let vm = this;
    return {
        isExpand:false,
        swiperOption:{
          name:'swiper',
          slidesPerView: 4,
          onClick (swiper){
            let i = swiper.clickedIndex;
            vm.handleClickItem(i);
          }
        },
        menuItems:[
          {id:0,name:'精选',isActive:true},
          {id:1,name:'国酒茅台',isActive:false},
          {id:2,name:'友阿果园',isActive:false},
          {id:3,name:'美容护肤',isActive:false},
          {id:4,name:'粮油食材',isActive:false},
          {id:5,name:'家居必备',isActive:false},
          {id:6,name:'时尚裤袜',isActive:false},
          {id:7,name:'生活家电',isActive:false},
          {id:8,name:'大闸蟹',isActive:false},
          {id:9,name:'床上用品',isActive:false},
          {id:10,name:'母婴专区',isActive:false},
          {id:11,name:'健康养生',isActive:false}
        ]
    }
  },
  methods:{
    /*展开或折叠下拉菜单*/
    handleClickArrow(){
      this.isExpand = !this.isExpand;
    },
    handleClickItem(index){
      let activeItem = this.filterActiveItem();
      let item = this.menuItems[index];
      activeItem.isActive = false;
      item.isActive = !item.isActive
      this.swiper.slideTo(index)
    },
    filterActiveItem(){
      for(let i = 0;i<this.menuItems.length;i++){
        if(this.menuItems[i].isActive){
          return this.menuItems[i];
        }
      }
    }
  },
  computed: {
    swiper() {
      return this.$refs.menuSwiper.swiper
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav-box {
  position: relative;
}
.menu {
  position: relative;
  display: flex;
  width: 100%;
  height: 1.171875rem;
  background-color: white;
  border-bottom: .5px solid #f1edec;
}
.swiper-container {
  position: relative;
  width: 8.75rem;
  background-color: #fff;
  overflow: hidden;
}
.swiper-slide {
  display: inline-block;
  min-width: 1.75rem;
  line-height: 1.171875rem;
  text-align: center;
}
.swiper-slide span {
  color: #929697;
  font-size: 0.34375rem;
  pointer-events: none;
}
.swiper-slide .active {
  color: #e21742;
  padding: 0.15rem;
  border-bottom: 2px solid #e21742;
}
.arrow {
  display: block;
  width: 1.25rem;
  line-height: 1.2rem;
  text-align: center;
  background: #fff;
  border-left: 2px solid #eee;
  font-size: .6rem;
}

.arrow i {
  transform:rotate(0deg);
  transition: transform .3s;
}
.arrow.active i {
  transform:rotate(-180deg);
}
.guid-box {
  position: absolute;
  z-index: 2;
  width: 100%;
  overflow: hidden;
  background-color: #fbfbfb;
}
.guid-item {
  float: left;
  display: block;
  width: 2.5rem;
  line-height: 0.78125rem;
  color: #000;
  font-size: 0.375rem;
  text-align: center;
  border-right: .5px solid #f1edec;
  border-bottom: .5px solid #f1edec;
  padding: 0.3125rem 0;
}

.guid-item .active {
  color: #e21742;
}
 
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}

 
</style>

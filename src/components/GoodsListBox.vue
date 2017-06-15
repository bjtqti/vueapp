<template>
  <ul class="goods-list">
    <li v-for="(item,index) in items" :key="index">
      <router-link class="logo" :to="{ name: 'Home',params: { id: item.id }}">
        <span><img :src="item.src" alt=""></span>
        <p>{{item.title}}</p>
        <b>￥{{item.salePrice}}</b>
        <em>￥{{item.marketPrice}}</em>
        <i>马上抢</i>
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'goods-list',
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  data () {
    return {}
  },
  created(){
    //console.log(this.items)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.goods-list {
  width: 100%;
  overflow: hidden;
}
.goods-list li {
  position: relative;
  float: left;
  width: 4.921rem;
  margin-bottom: 0.15rem;
  padding-bottom: 0.3rem;
  background-color: #fff;
  overflow: hidden;
}
.goods-list li a {
  display: block;
  width: 100%;
  color: #4d4c4c;
  overflow: hidden;
}
.goods-list li a span {
  display: inline-block;
  width: 100%;
  height: 4.03125rem;
}
.goods-list li a b {
  display: inline-block;
  font-size: 0.375rem;
  color: #f66;
  font-weight: normal;
  font-style: normal;
  padding: 0 0.1rem;
  padding-right: 0.2rem;
}
.goods-list li a em {
  display: inline-block;
  font-size: 0.3125rem;
  color: #929697;
  font-style: normal;
  text-decoration: line-through;
}
.goods-list li a i {
  float: right;
  width: 1.09375rem;
  height: 0.4rem;
  line-height: 0.4rem;
  margin: 0.1rem 0.1rem 0 auto;
  background-color: #ef3353;
  border-radius: 0.09375rem;
  color: #fff;
  text-align: center;
  font-size: 0.25rem;
  font-style: normal;
}
.goods-list li:nth-of-type(2n+1) {
  margin-right: 0.15rem;
}
.goods-list li p {
  color: #1f282e;
  padding: 0 0.1rem;
  font-size: 0.375rem;
  overflow: hidden;
  height: 1rem;
  line-height: 0.5rem;
  margin-bottom: 0.25rem;
}

.goods-list img {
  width: 100%;
}
</style>

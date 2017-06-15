<template>
  <ul class="recommend-list">
    <li v-for="(item,index) in items" :key="index">
      <a :href="item.href">
        <img :src="item.src" alt="">
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'recommend',
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.recommend-list {
  width: 100%;
  margin-top: .2rem;
  background-color: white;
  overflow: hidden;
}

.recommend-list li {
  margin: .1rem;
  overflow: hidden;
}

.recommend-list li img{
  width: 100%;
}
</style>

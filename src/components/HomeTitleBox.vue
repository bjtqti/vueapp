<template>
  <div class="active-box">
    <p>——<span>{{title}}</span>——</p>
  </div>
</template>

<script>
export default {
  name: 'title-name',
  props: {
    title: {
      type: String,
      required: false,
      default:''
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
.active-box {
    margin-top: 0.2rem;
    margin-bottom: 0.15rem;
    height: 1.6rem;
    line-height: 1.6rem;
    font-size: 0.5rem;
    text-align: center;
    color: #ef3353;
    background-color: #fff;
    word-break: break-all;
}
.active-box span {
    padding: 0 0.5rem;
}
</style>

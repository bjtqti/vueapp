<template>
    <Spin class="load">
        <div>{{message}}</div>
        <Icon type="load-c" size="20" class="demo-spin-icon-load"></Icon>
    </Spin>
</template>
<script>
  export default {
    name : 'loading',
    props: {
      message: {
        type: String,
        required: false,
        default:'加载中...'
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.load {
  font-size: .35rem;
  height: 1.5rem;
}
 .demo-spin-icon-load{
      animation: ani-demo-spin 1s linear infinite;
  }
  @keyframes ani-demo-spin {
      from { transform: rotate(0deg);}
      50%  { transform: rotate(180deg);}
      to   { transform: rotate(360deg);}
  }
</style>

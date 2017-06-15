<template>
  <div class="container">
    <router-link class="logo" :to="{ name: 'Home'}">
      <img src="../assets/logo.png" alt="logo">
    </router-link>
    <div class="main">
      <div class="error"><img src="../assets/404.png" alt="404"></div>
      <div class="big">很抱歉，您访问的页面不在地球上...</div>
      <div class="small">
        <Spin>
            <Icon type="load-c" size="18" class="demo-spin-icon-load"></Icon>
            <a @click.prevent="back">{{second}}秒后跳转到上一页,如果没有跳转请点击此链接</a>
        </Spin>
      </div>
      <div class="link">
        <router-link :to="{ name: 'Home'}" class="button">返回首页</router-link>
        <a @click.prevent="back" class="button">返回上一页</a> 
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'not-found',
  data() {
    return {
      second: 3
    }
  },
  methods:{
    back(){
      history.back();
    }
  },
  mounted () {
    let a = (time)=>{
      if(time>0){
        time--;
        setTimeout(()=>{
          this.second = time;
          a(time);
        },1000);
      }else{
        this.back();
      }
    }
    a(this.second);
  }
}
</script>

<style>
  .demo-spin-icon-load{
    animation: ani-demo-spin 1s linear infinite;
  }
  @keyframes ani-demo-spin {
    from { transform: rotate(0deg);}
    50%  { transform: rotate(180deg);}
    to   { transform: rotate(360deg);}
  }
</style>
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

.small {
  font-size: .32rem;
  line-height: .64rem;
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

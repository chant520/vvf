<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div class="button-group">
      <van-button type="default">默认按钮</van-button>
      <van-button type="primary">主要按钮</van-button>
      <van-button type="info">信息按钮</van-button>
      <van-button type="warning">警告按钮</van-button>
      <van-button type="danger">危险按钮</van-button>
      <van-button type="primary" size="large">大号按钮</van-button>
      <van-button type="primary" size="normal">普通按钮</van-button>
      <van-button type="primary" size="small">小型按钮</van-button>
      <van-button type="primary" size="mini">迷你按钮</van-button>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import { Button } from 'vant';
import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'Home',
  components: {
    HelloWorld,
    [Button.name] : Button
  },
  created() {

  }
  
}
</script>
<style lang="scss" scoped>
.button-group{
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  & > .van-button{
    margin: 20px;
  }
}
</style>

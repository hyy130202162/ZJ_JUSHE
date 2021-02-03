<template>
  <div>
    <div class="head">
      <div class="left">
        <div class="title">中国检验认证集团</div>
      </div>
      <div class="right">
        <router-link to="/">首页</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Head",
  setup(props) {
    console.log("ppp[", props);
  }
};
</script>

<style>
.head {
  width: 100%;
  height: 60px;
  /* background-color: pink; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  box-sizing: border-box;
}
</style>

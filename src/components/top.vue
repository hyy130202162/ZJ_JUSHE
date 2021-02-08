<template>
  <div>
    <div class="head">
      <div class="left">
        <div class="image">
          <img src="../assets/ZJlogo.png" alt="中检logo" />
        </div>
        <div class="title">
          中国检验认证集团（江苏）奢侈品鉴定中心
          <div class="tip">CHINA CERTIFICATION&INSPCTION GROUP（JIANGSU）LUXURY IDENTIFICATION CENTER</div>
        </div>
      </div>
      <div class="right">
        <router-link to="/">首页</router-link>
        <router-link to="/about_us">关于我们</router-link>
        <router-link to="/new_center">新闻中心</router-link>
        <router-link to="/appraisal">鉴定</router-link>
        <router-link to="/train">培训</router-link>
        <router-link to="/certificate_query">证书查询</router-link>
        <router-link to="/contain_us">联系我们</router-link>
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

<style lang="scss">
.head {
  width: 100%;
  height: 80px;
  /* background-color: pink; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  box-sizing: border-box;
  .left {
    padding-left: 40px;
    display: flex;
    align-items: center;
    img {
      width: 35px;
      height: 35px;
    }
    .title {
      text-align: left;
      margin-left: 8px;
      font-size: 20px;

      color: #808284;
      font-weight: 500;
      .tip {
        color: #808284;
        font-size: 6px;
      }
    }
  }
  .right {
    display: flex;
    align-items: center;
    a {
      margin: 0 10px;
      color: #808284;
    }

  }
}
</style>

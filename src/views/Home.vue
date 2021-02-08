<template>
  <div class="home">
    <div class="videoBox">
      <Carousel />
    </div>
    <div class="newbox">
      <div class="topNew">行业资讯</div>
      <div class="btngo">
        <div class="btn px">
          <div class="name">培训</div>
          <div class="tip">TRAIN</div>
        </div>
        <div class="btn jd">
          <div class="name">鉴定</div>
          <div class="tip">APPRAISAL</div>
        </div>
      </div>
    </div>
    <div class="search">
      <div class="sea left">
        <Certificate title="查询" />
      </div>
      <div class="sea right">
        <Certificate title="报名通道" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
// src\components\Carousel.vue
import Carousel from "@/components/Carousel.vue";
import Certificate from "@/components/Certificate.vue";
export default {
  name: "Home",
  components: {
    // HelloWorld
    Carousel,
    Certificate
  }
};
</script>

<style lang="scss">
.newbox {
  display: flex;
  item-align: center;
  background-color: #f4f4f4;
  padding: 20px 0 0 0;
  div {
    width: 50%;
    // height: 39px;
    // background-color: black;
  }
  .topNew {
  }
  .btngo {
    display: flex;
    .btn {
      border-top: 3px solid #003d81;
      width: 32%;
      font-size: 20px;
      background-color: #fff;
      padding: 50px 0 30px 35px;
      margin: 0 10px 20px 10px;
      box-sizing: border-box;
      line-height: 45px;
      text-align: left;
      cursor: pointer;
      .name {
        color: #8d8e8f;
      }
      .tip {
        color: #dedddf;
      }
    }
    .jd {
      border-top: 3px solid #e77600;
    }
  }
}
.search {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .sea {
    width: 50%;
  }
  .left {
    margin-right: 10px;
  }
  .right {
    margin-left: 10px;
  }
}
</style>

<template>
  <div class="about">
    <div class="videoBox">
      <Carousel />
    </div>
    <div class="newShow">
      <div class="top">
        <div class="En">NEWS INFORMATION</div>
        <div class="fg"></div>
        <div class="Zh">新闻动态</div>
      </div>
      <div class="content_new">
        <div class="left">
          这里写新闻
          


        </div>
        <div class="right"></div>
       
      </div>
      
    </div>
  </div>
</template>


<script>
import { ref } from "vue";
import Carousel from "../components/Carousel";
export default {
  name: "NewsCenter",
  components: {
    Carousel
  },
  setup(props) {
    // <div class="top"></div>
    console.log(props, "pp[[");
    const activeName = ref("second");

    const handleClick = op => {
      console.log(op, "[[]");
    };

    return {
      activeName,
      handleClick
    };
  }
};
</script>

<style lang="scss">
.newShow {
  width: 85%;
  margin: 0 auto;
  // padding: 0 100px;
  box-sizing: border-box;
  // line-height: 60px;
  .top {
  
    margin: 50px auto;
    .En {
      font-size: 22px;
      color: #8d8e8f;
    }
    .fg {
      width: 80px;
      height: 4px;
      background-color: #003d81;
    }
    .Zh {
      font-size: 22px;
      color: #8d8e8f;
    }
  }
  .content_new {
    display: flex;
    justify-content: space-between;
    .left {
      width: 57%;
      background-color: #555555;
    }
    .right {
      width: 35%;
    }

  }
}
</style>

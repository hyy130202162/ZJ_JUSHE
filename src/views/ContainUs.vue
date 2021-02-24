<template>
  <div class="about">
    <div class="videoBox">
      <Carousel />
    </div>
    <div class="contactShow">
      <div class="contactShowCon">
        <div class="top">
          <div class="En">CONTACT US</div>
          <div class="fg"></div>
          <div class="Zh">联系我们</div>
        </div>

        <div class="threeDiv">
          <div class="left">
            <div class="tit">中国检验认证集团（江苏）奢侈品鉴定中心</div>

            <div class="addcontent">
              <div class="qq">全国资讯电话：123-456-7890（24小时服务热线）</div>
              <div class="qq">试听课预约：123-456-7890（活动期间免费）</div>
              <div class="qq">地址：XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</div>
            </div>
          </div>
          <div class="fg"></div>
          <div class="center">
            <div class="Email">邮箱</div>
            <div class="qq">123456789@qq.com</div>
          </div>
          <div class="fg"></div>
          <div class="right">
            <div class="tit">关注官方微信</div>
            <img src="../assets/wxqr.png" />
          </div>
        </div>
      </div>
      <div class="map_box">
        <Maps />
      </div>
    </div>
  </div>
</template>


<script>
import { ref } from "vue";
import Carousel from "../components/Carousel";
import Maps from "@/components/maps.vue";
export default {
  name: "ContainUs",
  components: {
    Carousel,
    Maps
  },
  setup(props) {
    // <div class="introduce"></div>
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
.contactShow {
  width: 100%;
  .map_box {
    margin-bottom: 40px;
  }
  .contactShowCon {
    width: 70%;
    margin: 0 auto;
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

    .threeDiv {
      width: 100%;
      margin: 40px 0;
      display: flex;
      justify-content: center;
      .fg {
        width: 1px;
        height: 150px;
        background-color: #8d8e8f;
      }
      .left,
      .center,
      .right {
        width: 33%;
        box-sizing: border-box;
      }
      .left {
        padding-left: 15px;
        .tit {
          font-size: 18px;
          margin: 25px 0;
        }
        .addcontent {
          font-size: 14px;
          line-height: 20px;
        }
      }
      .center {
        padding: 50px 0 0 80px;
        .Email {
          font-size: 14px;
        }
      }
      .right {
        padding: 0 0 0 80px;
        .tit {
          font-size: 14px;
          line-height: 25px;
        }
        img {
          width: 120px;
        }
      }
    }
  }
}
</style>

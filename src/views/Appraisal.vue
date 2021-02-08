<template>
  <div class="about">
    <div class="videoBox">
      <Carousel />
    </div>
    <div class="appraisalShow">
      <Division enTit="IDENTIFICATION CATEGORY" title="鉴定品类" />
      <div class="type_box">
        <div class="tip">中检集团（江苏）奢侈品鉴定中心可服务的品牌涵盖全球一线及二三线品牌百余种</div>
        <div class="type_pic">
          <img src="../assets/appraisal/one.png" alt="one" />
          <img src="../assets/appraisal/two.png" alt="two" />
          <img src="../assets/appraisal/three.png" alt="three" />
          <img src="../assets/appraisal/four.png" alt="four" />
          <img src="../assets/appraisal/five.png" alt="five" />
        </div>
      </div>

      <Division enTit="APPRAISER TEAM" title="鉴定师队伍" />

      <div class="team">
        <!-- <img src="../assets/team/caoshuncang.png" alt="曹舜昌" /> -->
        <Mantle />
        <Mantle />
        <Mantle />
        <Mantle />
        <Mantle />
        <Mantle />
        <!-- <img src="../assets/team/caoshuncang.png" alt="曹舜昌" />
        <img src="../assets/team/caoshuncang.png" alt="曹舜昌" />
        <img src="../assets/team/caoshuncang.png" alt="曹舜昌" />
        <img src="../assets/team/caoshuncang.png" alt="曹舜昌" /> -->
      </div>

      <Division enTit="FILL IN IDENTIFICATION INFORMATION" title="鉴定信息填写" />
      <div class="infor_box">
        <div class="oo">联系电话：023-52343300-6218（周一~周五9:00-12:00，13:00-17:00）</div>
        <div class="oo">邮箱： ccicjstesting@qq.com</div>
        <div class="oo">联系人： 贺老师</div>
      </div>
    </div>
  </div>
</template>


<script>
import { ref } from "vue";
import Carousel from "../components/Carousel";
import Division from "../components/Division";
import Mantle from "../components/Mantle";
export default {
  name: "Appraisal",
  components: {
    Carousel,
    Division,
    Mantle
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
.appraisalShow {
  .type_box {
    text-align: center;
    .tip {
    }
    .type_pic {
      margin: 30px 0 20px;
      img {
      }
    }
  }
  .team {
    text-align: center;
    margin: 50px 0;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    .box_mantle {
      width: 26%;
      height: 380px;
    }
  }
  .infor_box {
    padding: 30px 20px 50px 29%;
    line-height: 50px;
    font-size: 24px;
  }
}
</style>

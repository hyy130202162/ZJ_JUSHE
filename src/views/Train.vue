<template>
  <div class="about">
    <div class="videoBox">
      <Carousel />
    </div>
    <div class="trainShow">
      <Division
        enTit="CCIC JIANGSU LUXURY APPRAISAL CENTER·LUXURY APPRAISAL ABILITY TRAINING COURSE"
        title="中检江苏奢侈品鉴定中心·奢侈品鉴定能力培训班"
      />
      <div class="zj_box">
        <div class="left">
          <div class="title">中检江苏奢侈品中心</div>
          <div class="explain">
            中检江苏奢侈品中心奢侈品鉴定能力培训班是由中国检验认证集团江苏有限公司联合业界资深奢侈品鉴定师团队量身
            为奢侈品爱好者和奢侈品行业从业者打造的精品培训课程。真正的“国字头”培训班，集权威性与专业性于一身。
            培训后考核成绩合格的学员将获得由中检集团江苏公司颁发的培训证书和能力认可证书。
          </div>
        </div>
        <div class="right">
          <img src="../assets/train/introduce.png" alt="one" />
        </div>
      </div>

      <Division enTit="EXCELLENT COURSE" title="精品课程" />
      <div class="kc_box">
        <div class="left">
          <div class="oo">
            <img src="../assets/train/icons/pag.png" alt="one" />
            <span>名包鉴定培训</span>
          </div>
          <div class="oo">
            <img src="../assets/train/icons/pag.png" alt="one" />
            <span>名表鉴定培训</span>
          </div>
        </div>
        <div class="right">
          <img src="../assets/train/introduce.png" alt="one" />
          <div class="tip">奢侈品箱包行业介绍；奢侈品包包基础知识简介；奢侈品包包通用鉴定法则；14大包包品牌故事、经典案例、见顶元素讲解</div>
        </div>
      </div>

      <Division enTit="ELITE INSTRUCTOR" title="精英讲师" />

      <div class="team">
        <Mantle />
        <Mantle />
        <Mantle />
        <Mantle />
        <Mantle />
        <Mantle />
      </div>
      <Division enTit="CERTIFICATE PRESENTATION" title="证书展示" />
      <Division enTit="ON SITE TRAINING" title="培训现场" />
    </div>
  </div>
</template>


<script>
import { ref } from "vue";
import Carousel from "../components/Carousel";
import Division from "../components/Division";
import Mantle from "../components/Mantle";
export default {
  name: "Train",
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
.trainShow {
  // padding: 0 100px;
  box-sizing: border-box;
  // line-height: 60px;
  .zj_box {
    width: 65%;
    margin: 50px auto;
    display: flex;
    .left {
      width: 50%;
      padding: 10px 30px;
      box-sizing: border-box;
      .title {
        color: #003d81;
        font-size: 20px;
        text-align: center;
        line-height: 80px;
      }
      .explain {
        color: #a1a1a1;
        padding-left: 20px;
        font-size: 16px;
        line-height: 30px;
        text-indent: 2em;
      }
    }
    .right {
      width: 50%;
      padding: 0 30px;
      box-sizing: border-box;
      img {
        width: 100%;
      }
      .tip {
        color: #a1a1a1;
        font-size: 18px;
      }
    }
  }

  .kc_box {
    width: 65%;
    margin: 50px auto;
    display: flex;
    .left {
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .oo {
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 60px;
          height: 60px;
          border: 3px solid #003d81;
          padding: 30px;
          border-radius: 50%;
        }
      }
    }
    .right {
      width: 50%;
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
}
</style>

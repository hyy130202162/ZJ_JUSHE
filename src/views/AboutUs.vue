<template>
  <div class="about">
    <div class="videoBox">
      <Carousel />
    </div>
    <div class="tabShow">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="中国检验认证集团" name="first">
          <div class="introduce">
            <div class="En">CHINA CERTIFICATION&INSPECTION GROUP（CCIC）</div>
            <div class="fg"></div>
            <div class="Zh">中国检验认证集团</div>
            <div class="detailed">
              <!-- <div class="detailedTitle">中国检/验认证集团</div> -->
              <div class="detailedContent">
                中国检验认证集团（简称中检集团，英文缩写CCIC）是经国务院批准设立、国务院国资委管理的中央企业，
                是以“检验、鉴定、认证、测试”为主业的综合性质量服务机构，创建于1980年。
              </div>
              <div class="detailedContent">
                经过40年的发展，中检集团已经成为“中国第一，世界知名”的国际化检验检测认证企业集团。
                中检集团拥有CCIC和CQC两大品牌，设有检验公司、中国质量认证中心（CQC）、测试公司三大业务平台，
                国内机构网络完备，在30多个国家（地区）的主要口岸和货物集散地设有机构，近2万名员工和数百家实验室。
              </div>
              <div class="detailedContent">
                中检集团以“创造更值得信赖的世界”为使命，以“全球质量服务的引领者”为愿景，
                始终坚持“笃诚、守正、业精、鼎新”的核心价值观和“客户是中心、质量是生命”的经营理念，
                始终发扬“同心同力、创业创新、敢闯敢干、善作善成”的企业精神，立足中国，服务全球，
                努力将中检集团建设成为最具公信力的世界一流检验检测认证集团。
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="中国检验认证集团江苏公司" name="second">
          <div class="introduce">
            <div class="En">CCIC JIANGSU</div>
            <div class="fg"></div>
            <div class="Zh">中国检验认证集团江苏公司</div>
            <div class="detailed">
              <!-- <div class="detailedTitle">中国检验认证集团江苏公司</div> -->
              <div class="detailedContent">
                作为中检集团九大核心公司之一，中国检验认证集团江苏有限公司是目前江苏地区以
                “检验、鉴定、认证、测试、培训”为主业的综合性权威检验认证机构，设有20家分子公司，
                运营网络遍及江苏全省各地，检验认证客户达7000余家。公司拥有管理体系审核员300多名，
                涵盖了多项管理体系认证资格；拥有专业检验员100多名，从事各类检验鉴定业务；
                在运行自营实验室的同时还与多家知名检测机构合作，充分满足客户各类测试服务需求；
                公司还可根据客户需求提供各种通用和专项的培训增值服务。
              </div>
              <div class="detailedContent">
                中国检验认证集团江苏有限公司将以客户需求为中心，
                积极整合各项资源，充分发挥CCIC和CQC品牌公信力，
                始终如一地竭诚为客户提供公正、快捷、可靠、一致的本地化服务。
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="中国检验认证集团（江苏）奢侈品鉴定中心" name="third">
          <div class="introduce">
            <div class="En">CHINA CERTIFICATION&INSPETION GROUP（JIANGSU）LUXURY IDENTIFICATION CENTER</div>
            <div class="fg"></div>
            <div class="Zh">中国检验认证集团（江苏）奢侈品鉴定中心</div>
            <div class="detailed">
              <!-- <div class="detailedTitle">中国检验认证集团</div> -->
              <div class="detailedContent">
                中国检验认证集团（江苏）奢侈品鉴定中心是由中检集团江苏公司设立的专门提供奢侈品鉴定和培训的“国”字头第三方奢侈品鉴定中心。
                我们致力于独立买卖各方，为社会各界提供公正诚信的第三方奢侈品鉴定与培训服务，有效遏制售假，
                净化购物环境，维护消费者权益，促进我国奢侈品市场的健康发展。
              </div>
              <div class="detailedContent">
                中国检验认证集团（江苏）奢侈品鉴定中心拥有业界知名的奢侈品鉴定专家团队，鉴定经验丰富，在业界具有极高的权威性。
                我们准备了众多的实物素材，多样的课程设置，生动的课堂内容，带领学员全方位地了解和学习奢侈品知识。
              </div>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import Carousel from "../components/Carousel";
export default {
  name: "AboutUs",
  components: {
    Carousel
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
.tabShow {
  width: 70%;
  margin: 0 auto;
  // padding: 0 100px;
  box-sizing: border-box;
  .el-tabs__nav-scroll {
    line-height: 60px;
  }

  .introduce {
    height: 500px;
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
    .detailed {
      margin-top: 60px;

      font-size: 14px;
      color: #8d8e8f;

      .detailedTitle {
        font-size: 20px;
      }
      .detailedContent {
        text-indent: 2em;
        line-height: 36px;
        margin: 30px 0 30px;
      }
    }
  }
}
</style>

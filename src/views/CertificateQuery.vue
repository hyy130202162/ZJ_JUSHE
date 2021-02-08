<template>
  <div class="about">
    <div class="videoBox">
      <Carousel />
    </div>
    <div class="tabShow">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="中检集团" name="first">
          <div class="introduce">
            <div class="En">CHINA CERTIFICATION&INSPECTION GROUP（CCIC）</div>
            <div class="Zh">中检集团</div>
            <div class="detailed">
              中国检验认证集团（简称中检集团，英文缩写CCIC）是经国务院批准设立、国务院国资委管理的中央企业，是以“检验、鉴定、认证、测试”为主业的综合性质量服务机构，创建于1980年。
              经过40年的发展，中检集团已经成为“中国第一，世界知名”的国际化检验检测认证企业集团。中检集团拥有CCIC和CQC两大品牌，设有检验公司、中国质量认证中心（CQC）、测试公司三大业务平台，国内机构网络完备，在30多个国家（地区）的主要口岸和货物集散地设有机构，近2万名员工和数百家实验室。
              中检集团以“创造更值得信赖的世界”为使命，以“全球质量服务的引领者”为愿景，始终坚持“笃诚、守正、业精、鼎新”的核心价值观和“客户是中心、质量是生命”的经营理念，始终发扬“同心同力、创业创新、敢闯敢干、善作善成”的企业精神，立足中国，服务全球，努力将中检集团建设成为最具公信力的世界一流检验检测认证集团。
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="中检集团江苏分公司" name="second">中检集团江苏分公司</el-tab-pane>
        <el-tab-pane label="培训鉴定中心" name="third">培训鉴定中心</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>


<script>
import { ref } from "vue";
import Carousel from "../components/Carousel";
export default {
  name: "CertificateQuery",
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
  // line-height: 60px;
  .introduce {
    // width: 80%;
    // margin: 0 auto;
  }
}
</style>

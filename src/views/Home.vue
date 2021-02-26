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
        <el-card class="box-card" shadow="never">
          <template #header>
            <div class="clearfix">
              <span>查询</span>
            </div>
          </template>
          <div class="left width-80 height inputBox">
            <el-input placeholder="请输入证书编号" v-model="input4" class="input-with-select">
              <template #prepend>
                <el-select
                  v-model="type"
                  placeholder="请选择"
                  style="width: 150px; margin-right: 10px"
                >
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </template>
              <template #append>
                <el-button class="btn" @click="searchUp">查询</el-button>
              </template>
            </el-input>
            <div class="tip">
              <div>输入说明</div>
              <div class="rule">1、培训查询输入证书右上角15位数字编码</div>
              <div class="pic">
                证书编码图片示例
                <!-- <img src="" alt=""> -->
              </div>
            </div>
          </div>
        </el-card>
      </div>
      <div class="sea right">
        <!-- <Certificate title="报名通道" /> -->
        <el-card class="box-card margin-l10" shadow="never">
          <template #header>
            <div class="clearfix">
              <span>报名通道</span>
            </div>
          </template>
          <div class="right_box">
            <ApplicationForm />
          </div>
        </el-card>
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
import ApplicationForm from "@/components/ApplicationForm.vue";
export default {
  name: "Home",
  components: {
    // HelloWorld
    Carousel,
    Certificate,
    ApplicationForm
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
  .inputBox {
    width: 100%;
    padding: 80px;
    box-sizing: border-box;
    .input-with-select {
      .el-input--suffix {
        width: 150px;
      }
      .btn {
        color: #fff;
        background-color: #e77600;
      }
    }
    .tip {
      margin: 51px 0 0 0;
      font-size: 9px;
      color: #a1a1a1;
      line-height: 20px;
      .rule {
        padding-left: 20px;
      }
      .pic {
        width: 60%;
        height: 80px;
        background-color: #a1a1a1;
        margin: 14px;
      }
    }
  }
}
</style>

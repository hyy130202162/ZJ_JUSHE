<template>
  <div>
    <div class="box">
      <div class="title">{{ title }}</div>
      <div class="inputBox">
        <el-input placeholder="请输入证书编号" v-model="state.input" class="input-with-select">
          <template #prepend>
            <el-select v-model="state.select" placeholder="请选择">
              <el-option label="奢侈品培训证书" value="1"></el-option>
              <el-option label="奢侈品鉴定标签" value="2"></el-option>
              <el-option label="奢侈品鉴定证书" value="3"></el-option>
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
    </div>

    <!-- <el-carousel indicator-position="none" height="400px" :autoplay="false">
      <el-carousel-item v-for="(url, index) in pictureList" :key="index">
        <el-image style="width: 30%" :src="url" :fit="fit" />
      </el-carousel-item>
    </el-carousel>-->
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "Carousel",
  props: {
    title: {
      type: String,
      default: "查询"
    }
  },
  setup(props) {
    console.log(props);
    const state = reactive({
      input: "",
      select: "1"
    });
    const searchUp = nn => {
      console.log(nn, state, "pppppoo");
    };

    const pictureList = [
      "https://images.jushewang.com/e9518a92-1f7e-48dd-8069-04f7017f5858?imageMogr2/auto-orient/format/png|watermark/2/text/RzAwMDQwNjIwNg==/font/6buR5L2T/fontsize/224/fill/IzAwMA==/gravity/SouthEast/dx/20/dy/20",
      "https://images.jushewang.com/4e107a41-2044-4205-8822-13abbe039af3?imageMogr2/auto-orient/format/png|watermark/2/text/RzAwMDQwNjIwNg==/font/6buR5L2T/fontsize/134/fill/IzAwMA==/gravity/SouthEast/dx/20/dy/20",
      "https://images.jushewang.com/0f4daf19-1bbd-4859-8f40-c0011c30f3ef?imageMogr2/auto-orient/format/png|watermark/2/text/RzAwMDQwNjIwNg==/font/6buR5L2T/fontsize/119/fill/IzAwMA==/gravity/SouthEast/dx/20/dy/20",
      "https://images.jushewang.com/2c7a2aaf-3697-4009-b9ef-bd3d9b9d56dc?imageMogr2/auto-orient/format/png|watermark/2/text/RzAwMDQwNjIwNg==/font/6buR5L2T/fontsize/899/fill/IzAwMA==/gravity/SouthEast/dx/20/dy/20"
    ];
    return {
      state,
      pictureList,
      searchUp
    };
  }
};
</script>

<style lang="scss">
.box {
  width: 100%;
  background-color: #fff;
  border: 1px solid #a1a1a1;
  box-sizing: border-box;
  .title {
    background-color: #003d81;
    color: #fff;
    line-height: 40px;
    padding-left: 52px;
  }
  .inputBox {
    width: 100%;
    padding: 80px;
    box-sizing: border-box;
    .input-with-select {
      .el-input--suffix {
        width: 150px;
      }
      // width: 520px;
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

.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>

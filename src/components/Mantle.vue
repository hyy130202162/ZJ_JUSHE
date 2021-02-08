<template>
  <div class="box_mantle" v-on:mouseenter="showDialog" v-on:mouseleave="hideDialog">
    <img src="../assets/appraisal/five.png" alt="five" />
    <div class="mantle" v-if="state.show">
      <div class="name">
        <div class="zh">草孙仓</div>
        <div class="en">cao sun cang</div>
      </div>
      <div class="btn">查看详情 +</div>
    </div>
  </div>
</template>

<script>
// 蒙层
import { reactive } from "vue";
export default {
  name: "Mantle",
  props: {
    title: {
      type: String,
      default: "鉴定品类"
    },
    enTit: {
      type: String,
      default: "IDENTIFICATION CATEGORY"
    }
  },
  setup(props) {
    console.log(props, "pp[[");
    const state = reactive({
      show: false
    });
    const showDialog = () => {
      console.log("show");
      state.show = true;
    };
    const hideDialog = () => {
      console.log("close");
      state.show = false;
    };

    return {
      state,
      showDialog,
      hideDialog
    };
  }
};
</script>

<style lang="scss">
.box_mantle {
  position: relative;
  background-color: rgba(0, 0, 0, 0.3);
  img {
    width: 100%;
    height: 100%;
  }
  .mantle {
    width: 100%;
    height: 100%;
    background: #003d81;
    opacity: 0.85;
    position: absolute;
    top: 0;
    left: 0;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .name {
      width: 240px;
      margin: 0 auto;
      border-bottom: 3px solid #fff;
      border-top: 3px solid #fff;
      .zh {
        font-size: 40px;
        line-height: 60px;
      }
      .en {
        font-size: 16px;
        line-height: 25px;
      }
    }
    .btn {
      width: 120px;
      border: 1px solid #fff;
      margin: 0 auto;
    }
  }
}
</style>

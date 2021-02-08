<template>
  <div class="box_division">
    <div class="en_tit">{{ title }}</div>
    <div class="fg"></div>
    <div class="zh_tit">{{ enTit }}</div>
  </div>
</template>

<script>
export default {
  name: "Division",
  props: {
    title: {
      type: String,
      default: "鉴定品类"
    },
    enTit: {
      type: String,
      default: "IDENTIFICATION CATEGORY"
    }
  }
};
</script>

<style lang="scss">
.box_division {
  text-align: center;
  width: 100%;
  margin: 50px 0;
  color: #8d8e8f;
  line-height: 36px;
  .en_tit {
    border-bottom: 1px solid #8d8e8f;

    line-height: 46px;
    font-size: 26px;
  }
  .fg {
    width: 100px;
    height: 4px;
    margin: 0 auto;
    position: relative;
    top: -2px;
    background-color: #003d81;
  }
  .zh_tit {
    font-size: 18px;
  }
}
</style>

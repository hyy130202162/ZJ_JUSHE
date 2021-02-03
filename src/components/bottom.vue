<template>
  <div>
    <div class="bottom">
      <div class="left">我是头部</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Bottom",
  setup(props) {
    console.log("ppp[", props);
  }
};
</script>

<style>
.bottom {
  width: 100%;
  height: 200px;
  background-color: #e3e3e3;
}
</style>

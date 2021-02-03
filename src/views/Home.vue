<template>
  <div class="home">
    <div class="videoBox">
      <Carousel />
    </div>
    <div class="newbox">
      <div class="topNew"></div>
      <div class="btngo"></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
// src\components\Carousel.vue
import Carousel from "@/components/Carousel.vue";

export default {
  name: "Home",
  components: {
    // HelloWorld
    Carousel
  }
};
</script>

<style >
.home {
  /* height: calc(100% - 360px); */
  /* background-color: green; */
}
.newbox {
  display: flex;
  div {
    width: 50%;
  }
}
</style>

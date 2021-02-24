
<template>
  <div class="map" id="container"></div>
</template>

<script>
/* eslint-disable */
import { ref, onMounted } from "vue";
export default {
  name: "mapShow",
  components: {},
  setup(props) {
    console.log(props, "[[[[");
    const showMap = () => {
      const map = new BMap.Map("container"); // 创建地图实例
      const point = new BMap.Point(118.894437, 32.091887); // 创建点坐标
      let icon = new BMap.Icon(
        "@/assets/images/logo.png",
        new BMap.Size(30, 30),
        {
          anchor: new BMap.Size(10, 30),
          infoWindowAnchor: new BMap.Size(10, 0)
        }
      );
      const marker = new BMap.Marker(point, {
        icon: icon
      }); // 创建标注

      map.centerAndZoom(point, 19); // 初始化地图，设置中心点坐标和地图级别
      map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
      map.addOverlay(marker); // 将标注添加到地图中
    };
    onMounted(() => {
      showMap();
    });

    return {};
  }
};
</script>
 
<style lang="css" scoped>
.map {
  width: 100%;
  height: 420px;
}
</style>
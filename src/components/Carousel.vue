<template>
  <div>
    <el-carousel indicator-position="none" height="600px" :autoplay="false">
      <el-carousel-item v-for="(url, index) in pictureList" :key="index">
        <el-image style="width: 100%; height: 100%" :src="url" :fit="fit" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  setup(props) {
    console.log(props);

    const pictureList = [
      "https://images.jushewang.com/e9518a92-1f7e-48dd-8069-04f7017f5858?imageMogr2/auto-orient/format/png|watermark/2/text/RzAwMDQwNjIwNg==/font/6buR5L2T/fontsize/224/fill/IzAwMA==/gravity/SouthEast/dx/20/dy/20",
      "https://images.jushewang.com/4e107a41-2044-4205-8822-13abbe039af3?imageMogr2/auto-orient/format/png|watermark/2/text/RzAwMDQwNjIwNg==/font/6buR5L2T/fontsize/134/fill/IzAwMA==/gravity/SouthEast/dx/20/dy/20",
      "https://images.jushewang.com/0f4daf19-1bbd-4859-8f40-c0011c30f3ef?imageMogr2/auto-orient/format/png|watermark/2/text/RzAwMDQwNjIwNg==/font/6buR5L2T/fontsize/119/fill/IzAwMA==/gravity/SouthEast/dx/20/dy/20",
      "https://images.jushewang.com/2c7a2aaf-3697-4009-b9ef-bd3d9b9d56dc?imageMogr2/auto-orient/format/png|watermark/2/text/RzAwMDQwNjIwNg==/font/6buR5L2T/fontsize/899/fill/IzAwMA==/gravity/SouthEast/dx/20/dy/20"
    ];
    return {
      pictureList
    };
  }
};
</script>

<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 500px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>

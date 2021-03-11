<template>
  <div class="about">
    <div class="videoBox">
      <Carousel />
    </div>
    <div class="newShow">
      <div class="top">
        <div class="En">NEWS INFORMATION</div>
        <div class="fg"></div>
        <div class="Zh">新闻中心</div>
      </div>
      <div class="content_new">
        <div class="box" v-if="newsList && newsList.length > 0">
          <div
            v-for="(o, index) in newsList"
            :key="index"
            class="NewItem cursor-pointer"
            @click="showNews(o)"
          >
            <div class="img">
              <img :src="o.firstPicture" alt="four" />
            </div>
            <div class="txt">{{o.title}}</div>
          </div>
        </div>
        <Pagination
          ref="paginationRef"
          :total="count"
          @onPageChange="onPageChange"
          :pageSize="9"
          :pageNum="0"
        />
      </div>
    </div>
  </div>
</template>


<script>
import { ref } from "vue";
import Carousel from "../components/Carousel";
export default {
  name: "NewsCenter",
  components: {
    Carousel
  },
  setup(props) {
    // <div class="top"></div>
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
.newShow {
  width: 70%;
  margin: 0 auto;
  box-sizing: border-box;
  .top {
    margin: 50px auto;
    .En {
      font-size: 22px;
      color: #8d8e8f;
    }
    .fg {
      width: 80px;
      height: 4px;
      background-color: #003d81;
      margin: 5px 0;
    }
    .Zh {
      font-size: 22px;
      color: #8d8e8f;
    }
  }
  .content_new {
    margin-bottom: 40px;
    .box {
      display: flex;
      flex-wrap: wrap;
      // justify-content: space-around;
      .NewItem {
        width: 30%;
        margin-bottom: 40px;
        margin-right: 3.3%;
        .img {
          height: 280px;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        .txt {
          margin-top: 10px;
          color: #a1a1a1;
          word-wrap: break-word;
        }
      }
    }
  }
}
</style>

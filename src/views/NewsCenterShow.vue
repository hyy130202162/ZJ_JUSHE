<template>
  <div class="about">
    <Page>
      <template #content>
        <div class="banner">
          <Swiper :bannerShow="bannerShow" />
        </div>
        <div class="newShow">
          <div class="top">
            <div class="En">NEWS INFORMATION</div>
            <div class="fg"></div>
            <div class="Zh">新闻动态</div>
          </div>
          <div class="content_new_show">
            <div class="left">
              <div class="title">{{newDetailShow.title}}</div>

              <div class="new_show">
                <img class="titlePic" :src="newDetailShow.firstPicture" alt="four" />
                <div class="cont" v-html="newDetailShow.content"></div>
              </div>
            </div>
            <div class="right">
              <img src="../assets/images/new.png" alt="four" />
              <div class="conBox">
                <div class="tit">培训资讯</div>
                <div
                  class="cursor-pointer"
                  v-for="(o, index) in newShowOne"
                  :key="index"
                  @click="goDetail(o.id)"
                >{{o.title}}</div>
              </div>
              <div class="conBox">
                <div class="tit">行业动态</div>
                <div
                  class="cursor-pointer"
                  v-for="(o, index) in newShowTwo"
                  :key="index"
                  @click="goDetail(o.id)"
                >{{o.title}}</div>
              </div>
              <div class="conBox">
                <div class="tit">最新公告</div>
                <div
                  class="cursor-pointer"
                  v-for="(o, index) in newShowThree"
                  :key="index"
                  @click="goDetail(o.id)"
                >{{o.title}}</div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </Page>
  </div>
</template>


<script>
import { ref, onMounted, reactive, toRefs } from "vue";
import Page from "@/components/Page/index.vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
import Swiper from "@/components/Swiper/index.vue";
export default {
  name: "NewsCenterShow",
  components: {
    Page,
    Swiper
  },
  setup(props) {
    const store = useStore();
    const route = useRoute();
    const router = useRouter();

    const state = reactive({
      newDetailShow: {},
      bannerShow: [
        {
          picture: require("@/assets/banner/5.jpg")
        },
        {
          picture: require("@/assets/banner/6.jpg")
        }
      ],
      newShowOne: [],
      newShowTwo: [],
      newShowThree: []
    });

    const getDetail = async id => {
      const detail = await store.dispatch("signForm/newDetail", id);
      state.newDetailShow = detail.data;
    };

    // 获得新闻列表
    const getNews = async () => {
      const dataOne = await store.dispatch("signForm/newList", { type: 1 });
      const dataTwo = await store.dispatch("signForm/newList", { type: 2 });
      const dataThree = await store.dispatch("signForm/newList", { type: 3 });
      state.newShowOne = dataOne.data.items.slice(0, 3);
      state.newShowTwo = dataTwo.data.items.slice(0, 3);
      state.newShowThree = dataThree.data.items.slice(0, 3);
    };

    const goDetail = id => {
      getDetail(id);
    };

    onMounted(() => {
      getNews();
      getDetail(route.query.id);
    });

    return {
      ...toRefs(state),
      goDetail
    };
  }
};
</script>

<style lang="scss">
.newShow {
  width: 70%;
  margin: 0 auto;
  // padding: 0 100px;
  box-sizing: border-box;
  // line-height: 60px;
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
  .content_new_show {
    display: flex;
    justify-content: space-between;
    .left {
      width: 57%;
      .title {
        font-size: 24px;
        color: #003d81;
        text-align: center;
        word-wrap: break-word;
      }
      .new_show {
        width: 100%;
        padding: 15px 0;
        .titlePic {
          width: 100%;
          height: 360px;
          object-fit: cover;
        }
        .min_tit {
          color: #003d81;
          font-size: 20px;
          line-height: 50px;
        }
        .cont {
          // line-height: 20px;
        }
      }
    }
    .right {
      width: 35%;
      img {
        width: 100%;
        // height: 180px;
        object-fit: cover;
      }
      .conBox {
        background: #f4f4f4;
        padding: 30px 20px;
        margin-bottom: 30px;
        div {
          margin-bottom: 15px;
          text-emphasis: warp;
          word-wrap: break-word;
        }
        .tit {
          font-size: 20px;
          color: #807f7f;
        }
      }
    }
  }
}
</style>

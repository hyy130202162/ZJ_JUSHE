<template>
  <div>
    <div class="bottom">
      <div class="left">
        <div class="tit">联系我们</div>
        <div class="column">
          <span>全国咨询电话：025-52343300-6208（周一~周五9:00-12:00，13:00-17:00）</span>
          <span>联系人：陈老师</span>
          <span>邮箱：bobby.chen@ccicjs.com</span>
          <span>地址：江苏省南京市建邺区创智路39号卫检大厦主楼1001室</span>
        </div>
      </div>
      <div class="center">
        <div class="tit">在线留言</div>
        <div class="formBox">
          <!-- <el-form :inline="true" :model="formInline" class="demo-form-inline"> -->
          <div class="oneline">
            <input class="trans one" type="text" placeholder="您的姓名" name id />
            <input class="trans two" type="text" placeholder="您的姓名" name id />
          </div>
          <div class="oneline">
            <textarea class="trans three" placeholder="资讯内容" name id cols="30" rows="4"></textarea>
          </div>

          <div class="oneline">
            <button @click="onSubmit" class="up">
              立即提交
              <i class="el-icon-arrow-right" />
            </button>
          </div>
        </div>
        <!-- </el-form> -->
      </div>
      <div class="right">
        <div class="tit">关注官方微博</div>
        <div class="pic">
          <img src="../assets/ZJlogo.png" alt />
        </div>
      </div>
    </div>
    <div class="recordNum">
      <span>中国检验认证集团江苏有限公司 版权所有</span>
      <span>备案号:XXXXXXXXXXXXXXX</span>
      <span>技术支持：XXXX</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Bottom",
  setup(props) {
    console.log("ppp[", props);
    const formInline = {
      user: "",
      region: ""
    };
    const onSubmit = () => {
      console.log("我点击提交");
    };

    return {
      formInline,
      onSubmit
    };
  }
};
</script>

<style lang="scss">
.column {
  display: flex;
  flex-direction: column;
  align-content: space-around;
}
.bottom {
  width: 100%;
  height: 240px;
  background-color: #003d81;
  display: flex;
  justify-content: center;
  padding-top: 30px;

  color: #f4f4f4;
  .tit {
    line-height: 30px;
    font-size: 16px;
    margin-bottom: 10px;
  }
  .left {
    display: flex;
    flex-direction: column;
    align-content: space-around;
    span {
      line-height: 25px;
    }
  }
  .center {
    align-content: space-around;
    margin: 0 25px;
    .formBox {
      input:focus {
        border: none;
      }
      .oneline {
        margin: 15px 0;
        .trans {
          color: #fff;
          background: none;
          outline: none;
          border: 1px solid #ccc;
          line-height: 20px;
        }
        .one {
          width: 150px;
          margin-right: 20px;
        }
        .two {
          width: 150px;
        }
        .three {
          width: 320px;
        }
        .up {
          width: 150px;
          line-height: 22px;
          background: #e77600;
          color: #fff;
          border: none;
          margin-left: 150px;
        }
      }
    }
  }
  .right {
    width: 200px;
    display: flex;
    flex-direction: column;
    .pic {
      width: 100px;
      background-color: #fff;
    }
    img {
      width: 100px;
      height: 100px;
    }
  }
}
.recordNum {
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 6px;
  padding: 15px 0 50px 0;
}
</style>

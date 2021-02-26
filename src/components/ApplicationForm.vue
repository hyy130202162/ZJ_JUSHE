<template>
  <div class="box_form">
    <div class="showNum">
      <div>
        访客： 您是第
        <span>888888</span> 位访客
      </div>
      <div>
        今天： 已有
        <span>88</span>人申请成功，还剩
        <span>12</span>人
      </div>
    </div>
    <el-form ref="formRef" :model="form" :rules="rules" label-width="100px" :size="medium">
      <el-form-item label="课程选择" prop="curriculum">
        <el-select v-model="form.curriculum" placeholder="请选择您的课程" class="selec">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="姓名" prop="name">
        <el-input placeholder="请填写姓名" v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="地址" prop="areaCode">
        <el-cascader
          placeholder="请选择所在地区"
          class="selec"
          v-model="form.areaCode"
          :options="options"
          :props="{ expandTrigger: 'hover' }"
          @change="handleChange"
        ></el-cascader>
      </el-form-item>
      <el-form-item label="电话" prop="phone">
        <el-input v-model="form.phone"></el-input>
      </el-form-item>
      <el-form-item label="手机验证码" prop="yzm" class="yzm">
        <el-input v-model="form.yzm"></el-input>
        <el-button>发送验证码</el-button>
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="form.email"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit('formRef')" class="btn">立即提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { ref, reactive, toRefs } from "vue";
import { CHINA_REGION } from "@/utils/region";
import { signUp } from "../api/form.js";
import axios from "axios";
import { ElMessage } from "element-plus";
export default {
  name: "ApplicationForm",
  props: {},
  setup(props) {
    const formRef = ref(null);
    const state = reactive({
      options: CHINA_REGION,
      form: {
        name: "",
        areaCode: "",
        phone: "",
        yzm: "",
        email: "",
        curriculum: ""
      },
      rules: {
        name: [{ required: true, message: "请输入姓名", trigger: "change" }],
        curriculum: [
          { required: true, message: "请选择课程", trigger: "change" }
        ],
        phone: [
          { required: true, message: "请输入手机号", trigger: "change" },
          {
            pattern: /^1[0-9]{10,10}$/,
            message: "请输入正确的手机号",
            trigger: "change"
          }
        ],
        areaCode: [
          { required: true, message: "请选择所在地区", trigger: "change" }
        ]
      }
    });

    const onSubmit = formName => {
      console.log("pp", formName);
      formRef.value.validate(valid => {
        if (valid) {
          console.log(valid, "-----", state.form);

          // signUp(state.form).then(response => {
          //   console.log(response.data);
          // });

          axios({
            method: "post",
            url:
              "http://ccic.cd63fb222a3be44a89df72686b34330f0.cn-hangzhou.alicontainer.com/train/apply",
            data: state.form
          })
            .then(function(response) {
              console.log(response);
              if (response.data.retCode) {
                ElMessage.success("报名信息提交成功");
                formRef.value.resetFields();
              }
            })
            .catch(function(error) {
              console.log(error);
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    };

    return {
      ...toRefs(state),
      formRef,
      onSubmit
    };
  }
};
</script>

<style lang="scss">
.box_form {
  width: 100%;
  color: #8d8e8f;
  line-height: 40px;
  .showNum {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
    span {
      color: #003d81;
      font-size: 16px;
      font-weight: bold;
    }
  }

  .yzm {
    .el-input {
      width: 65%;
      margin-right: 6%;
    }
  }
  .selec {
    width: 100%;
  }
  .btn {
    width: 100%;
  }
}
</style>

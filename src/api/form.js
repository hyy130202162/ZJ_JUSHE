import request from "@/utils/request";

export function signUp(param) {
  return request({
    url: "/train/apply",
    method: "post",
    data: param
  });
}

// export function getInfo(token) {
//   return request({
//     url: process.env.VUE_APP_ADMIN_API + "/auth/info",
//     method: "get",
//     params: { token }
//   });
// }

import { axios } from "../utils/axios";

export function posts(data){
  return axios({
    url: "/post.do",
    method: "post",
    data,
  });
}
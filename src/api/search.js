import { axios } from "../utils/axios";

export function search(data){
  return axios({
    url:"/search.do",
    method:"post",
    data
  })
}
import axios from "axios";
import { apiGetLayBaiViet, apiLogin, apiQuanTriBaiViet } from "./api";

// axios.defaults.headers.common["Access-Control-Allow-Origin"] = import.meta.env.API_ORIGIN;
// axios.defaults.headers.common["Access-Control-Allow-Methods"] = import.meta.env.API_METHODS;
// axios.defaults.headers.common["Access-Control-Allow-Headers"] = import.meta.env.API_HEADERS;
// axios.defaults.headers.common["Access-Control-Allow-Credentials"] = import.meta.env.API_CREDENTIALS;
// axios.defaults.headers.common["Access-Control-Max-Age"] = import.meta.env.API_MAX_AGE;
// axios.defaults.headers.common["Access-Control-Expose-Headers"] = import.meta.env.API_EXPOSE_HEADERS;
export const header = {
  "Access-Control-Allow-Origin": "https://sonvnnike.com.vn/",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers":
    "DNT,X-Mx-ReqToken,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range",
  "Access-Control-Allow-Credentials": "true",
  "Access-Control-Max-Age": 3600,
  "Access-Control-Expose-Headers": "Content-Length",
};
export const postLogin = (user, pass) => {
  return axios.post(apiLogin, { user, pass }).then((res) => {
    return res.data;
  });
};

export const getBaiViet = () => {
  return axios.get(apiGetLayBaiViet,{
    headers: header,
  }).then((res) => {
    return res.data;
  });
};

export const postUpdateBaiViet = (funcId, user, title, shortContent, content, urlImgBaiViet, shortUrl, id) =>{
  
  return axios.post(apiQuanTriBaiViet,{
    funcId, user, title, shortContent, content, urlImgBaiViet, shortUrl, id
  },{
    headers: header,
  }).then((res)=>{
    return res
  });

}
export const getChiTietBaiViet = (funcId , shortUrl)=>{
  return axios.post(apiQuanTriBaiViet,{
    funcId, shortUrl
  },{
    headers: header,
  }).then((res)=>{
    return res.data
  });
       
}

export const deleBaiViet = (funcId , id)=>{
  return axios.post(apiQuanTriBaiViet,{
    funcId, id
  },{
    headers: header,
  }).then((res)=>{
    return res
  });
}
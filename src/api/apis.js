import qs from "qs"
import axios from "axios"
// 设置默认地址
axios.defaults.baseURL="http://129.211.169.131:33833/"
//登录请求
export const loginAxios =(acc,pwd)=>axios.post("login.php", qs.stringify({ acc: acc, pwd: pwd }))
//注册请求
export const registerAxios=(acc,pwd)=>axios.post("reg.php",qs.stringify({acc:acc,pwd:pwd}))
//验证码
export const validateAxios=()=>axios.get("valitecode.php")
// 房产部分
export const gethouselist=()=>axios.get("gethouselist.php")
    

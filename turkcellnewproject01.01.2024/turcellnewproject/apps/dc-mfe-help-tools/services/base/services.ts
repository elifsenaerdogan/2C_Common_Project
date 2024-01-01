import axios from "axios";



const captchaService=axios.create({
    baseURL:"/api/gateway/captcha"
})


const bySimNumberService =axios.create({
    baseURL:"/api/puk/by-sim-number"
})

const byTCNumberService =axios.create({
    baseURL:"/api/puk/by-tckn"
})
const byPageManagerService = axios.create({
  baseURL: "/api/content-service/v1/pagemanager/dc-help-service-puk-query-pagemanager"
})


export {captchaService,bySimNumberService,byTCNumberService, byPageManagerService}

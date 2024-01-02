import axios from "axios";



const captchaService=axios.create({
    baseURL:"/api/gateway/captcha"
})


const byPukService =axios.create({
  baseURL: "/api/puk"
})

const byPageManagerService = axios.create({
  baseURL: "/api/content-service/v1/pagemanager/dc-help-service-puk-query-pagemanager"
})


export {captchaService,byPukService, byPageManagerService}

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


export {captchaService,bySimNumberService,byTCNumberService}

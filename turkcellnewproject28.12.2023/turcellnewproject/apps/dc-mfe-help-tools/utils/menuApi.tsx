import axios from 'axios';


const instance = axios.create({
  baseURL: 'http://dc-content-service-develop-digitalchannels.apps.tocpt2.tcs.turkcell.tgc/v1/pagemanager/dc-help-service-sol-menu-pagemanager', // API'nin temel URL'si
});



export default instance;

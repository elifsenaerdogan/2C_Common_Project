let globalRestrictedPages:Array<string>=null;


export function setRestrictedPages(data:Array<string>) {
    globalRestrictedPages=data;
}

export function getRestrictedPages(){
    return globalRestrictedPages;
}


export function getUserSession  () {
    return {
      redisSessionId: '',
      msisdn: '',
      fullname: 'Can',
      mail: 'can@mail.com',
      isLoggedIn: false,
      lastInvoices: null,
    };
  };

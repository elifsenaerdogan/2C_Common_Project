export const login = (isMobile: boolean) => {
  if (isMobile) {
    window.open('https://fastlogin.com.tr/fastlogin_web_app/webLogin');
    return;
  }
  const h = 600;
  const w = 500;
  const sw = window.innerWidth;
  const sh = window.innerHeight;
  const left = (sw - w) / 2;
  const top = (sh - h) / 1.5;

  const loginWindow = window.open(
    'https://fastlogin.com.tr/fastlogin_web_app/webLogin',
    '_blank',
    'width=' + w + ',height=' + h + ',left=' + left + ',top=' + top
  );

  if (loginWindow) {
    // TODO post message
  }
};

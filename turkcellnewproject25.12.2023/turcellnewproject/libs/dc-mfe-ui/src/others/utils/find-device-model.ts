import { useEffect, useState } from 'react';
export default function deviceSysytemFunc() {
  const [os, setOS] = useState<string>('');
  const userAgent = window.navigator.userAgent;
  const isHuawei = /Huawei/.test(userAgent);
  const isAppleDevice = /iPhone|iPad|iPod|Macintosh|Mac OS X/.test(userAgent);
  const isAndroid = /Android/.test(userAgent);

  useEffect(() => {
    switch (true) {
      case isAppleDevice:
        setOS('Apple');
        break;
      case isHuawei:
        setOS('Huawei');
        break;
      case isAndroid:
        setOS('Android');
        break;
      default:
        setOS('Other Devices');
    }
  }, []);

  return os;
}

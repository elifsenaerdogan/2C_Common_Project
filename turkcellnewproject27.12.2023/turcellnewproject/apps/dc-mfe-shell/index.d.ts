/* eslint-disable @typescript-eslint/no-explicit-any */
export {};
declare module '*.svg' {
  const content: any;
  export const ReactComponent: any;
  export default content;
}

interface shConfigType {
  redirectUrlAfterLogin: string;
  loginSuccessCallback: any;
}

declare global {
  interface Window {
    SpeechRecognition: typeof SpeechRecognition;
    webkitSpeechRecognition: typeof SpeechRecognition;
    shConfig: shConfigType;
    gtag: any;
  }
}

export {};

interface shConfigType {
  redirectUrlAfterLogin: string;
  loginSuccessCallback: any;
}

declare global {
  interface Window {
    SpeechRecognition: typeof SpeechRecognition;
    webkitSpeechRecognition: typeof SpeechRecognition;
    shConfig: shConfigType;
  }
}

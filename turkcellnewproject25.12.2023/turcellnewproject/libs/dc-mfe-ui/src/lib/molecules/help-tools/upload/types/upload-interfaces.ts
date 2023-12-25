import {UploadProps} from "antd";


export interface MyUpload extends UploadProps {
  disabled?: boolean;
  customRequest?: (options: any) => void;
  showUploadList?: boolean;
  beforeUpload?: (file: any, fileList: any[]) => boolean | Promise<boolean>;
  value?:string;
  label?:string;
  labelStatement?:string;

}

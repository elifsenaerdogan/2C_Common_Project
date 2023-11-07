import {SwitchProps} from "antd";


export interface MySwitch extends SwitchProps {
  defaultChecked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
  label:string;

}

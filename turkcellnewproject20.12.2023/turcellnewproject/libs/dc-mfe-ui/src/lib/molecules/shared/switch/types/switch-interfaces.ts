import {SwitchProps} from "antd";


export interface MoleculeSwitchTypes extends SwitchProps {
  defaultChecked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
  label:string;

}

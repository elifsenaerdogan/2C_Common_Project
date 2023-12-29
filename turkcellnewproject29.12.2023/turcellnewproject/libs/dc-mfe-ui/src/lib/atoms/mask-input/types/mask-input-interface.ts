import { InputProps } from "../../input/types/input-interfaces";
import { MaskTypeEnums } from "./mask-input-enums";

export interface IProps extends InputProps {
    maskType: MaskTypeEnums;
  }
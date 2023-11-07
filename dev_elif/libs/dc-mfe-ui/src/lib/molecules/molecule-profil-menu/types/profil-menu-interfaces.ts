import { MouseEventHandler } from "react";

export interface  MoleculeProfilMenuProps {
    className?: string,
    name: string,
    settingBtnOnclick : MouseEventHandler<HTMLButtonElement>,
    actionBtnOnclick : MouseEventHandler<HTMLButtonElement>,
    show: boolean,
    number?: number
  }
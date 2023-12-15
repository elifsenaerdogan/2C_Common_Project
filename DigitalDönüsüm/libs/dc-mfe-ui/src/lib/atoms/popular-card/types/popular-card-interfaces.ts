import Base from "@others/interfaces/base-props";
import React from "react";
import {popularCardTypes} from "./popular-card-types";

export interface PopularCardProps extends Omit<Base, 'children'> {
  url: string
  text: string
  icon: React.ReactNode
  variant?: popularCardTypes

}

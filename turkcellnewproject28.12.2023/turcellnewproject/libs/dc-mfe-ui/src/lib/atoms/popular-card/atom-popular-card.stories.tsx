import type {Meta} from '@storybook/react';
import {AtomPopularCard} from './atom-popular-card';
import React from "react";
import AtomIcon from "../icon/atom-icon";
import IconsTl from "@others/icons/IconsTl";

const Story: Meta<typeof AtomPopularCard> = {
  component: AtomPopularCard,
  title: 'Atoms/PopularCard',
};
export default Story;

export const Default = () => {
  return (<AtomPopularCard icon={<AtomIcon icon={<AtomIcon icon={<IconsTl width={24} height={22}/>}/>}/>} url="" text="TL Öde"
                           variant="gradientOrange"/>)
}

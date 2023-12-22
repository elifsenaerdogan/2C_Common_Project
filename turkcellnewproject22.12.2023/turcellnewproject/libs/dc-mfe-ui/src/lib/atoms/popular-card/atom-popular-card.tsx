import styles from './atom-popular-card.module.scss';
import Link from "next/link";
import Base from "@others/interfaces/base-props";
import classnames from "classnames";
import {popularCardTypes} from "./types/popular-card-types";
import React from "react";
import {useMobile} from "@others/hooks";
import {PopularCardProps} from "./types/popular-card-interfaces";



export function AtomPopularCard({url, text, icon, variant = "gradientOrange", ...rest}: PopularCardProps) {

  const popularCard = classnames(styles["a-trkclAppPopularCard"], {[styles[`a-trkclAppPopularCard--${variant}`]]: variant});
  const contentWrapper = classnames(styles["a-trkclAppPopularCard__content"])
  const textWrapper = classnames(styles["a-trkclAppPopularCard__text"])
  const iconWrapper = classnames(styles["a-trkclAppPopularCard__icon"])
  return (
    <div className={popularCard}>
      <Link className={contentWrapper} href={url} {...rest}>
          <span className={iconWrapper}>{icon ? icon : <></>}</span>
          <span className={textWrapper}>{text}</span>
      </Link>
    </div>
  );
}

export default AtomPopularCard;

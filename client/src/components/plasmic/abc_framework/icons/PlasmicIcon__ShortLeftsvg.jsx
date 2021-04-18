// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function ShortLeftsvgIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",
        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M7.83 11l3.58-3.59L10 6l-6 6 6 6 1.41-1.41L7.83 13H20v-2H7.83z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ShortLeftsvgIcon;
/* prettier-ignore-end */

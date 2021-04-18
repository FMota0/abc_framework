// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function LogosvgIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 1024 1024"}
      fillRule={"evenodd"}
      clipRule={"evenodd"}
      strokeLinecap={"round"}
      strokeLinejoin={"round"}
      strokeMiterlimit={"1.5"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M722 305c0-50.224-43.016-91-96-91H338c-52.984 0-96 40.776-96 91v273c0 50.224 43.016 91 96 91h288c52.984 0 96-40.776 96-91V305z"
        }
        fill={"#efe9dd"}
        stroke={"#262c35"}
        strokeWidth={"1.63"}
        transform={"matrix(2.08333 0 0 2.1978 -492.167 -458.33)"}
      ></path>

      <text
        x={"123"}
        y={"631"}
        fontFamily={"'Athelas-Bold','Athelas'"}
        fontWeight={"700"}
        fontSize={"551"}
        fill={"#262c35"}
        transform={"rotate(-26.687 65.157 1449.977) scale(1.68165)"}
      >
        A
      </text>

      <text
        x={"507.424"}
        y={"715.881"}
        fontFamily={"'Athelas-Regular','Athelas'"}
        fontSize={"551"}
        fill={"#262c35"}
        transform={"rotate(29.47 1788.66 -541.522) scale(1.606)"}
      >
        B
      </text>

      <text
        x={"776.951"}
        y={"340.284"}
        fontFamily={"'Athelas-Regular','Athelas'"}
        fontSize={"551"}
        fill={"#262c35"}
        transform={"translate(-618.52 473.876) scale(1.44699)"}
      >
        C
      </text>
    </svg>
  );
}

export default LogosvgIcon;
/* prettier-ignore-end */

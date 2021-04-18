// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Icon2Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 512 512"}
      className={classNames(
        "plasmic-default__svg",
        className,
        "mr3 outline pa1 pointer bg-light-blue"
      )}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",
        ...(style || {}),
      }}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M70.812 423.827a15 15 0 0017.362 17.361l113.519-19.881L90.681 310.294zM312.325 99.675c-5.857-5.858-15.355-5.858-21.213 0L106.8 283.987l50 50 194.919-194.919zm99.986 99.986l-39.379-39.38L178.013 355.2 228 405.186l184.312-184.312c5.857-5.858 5.857-15.355-.001-21.213z"
        }
      ></path>

      <path
        d={
          "M437.02 74.98C388.668 26.629 324.38 0 256 0S123.332 26.629 74.98 74.98C26.629 123.332 0 187.62 0 256c0 52.252 15.565 102.104 44.475 144.293l8.012-45.783C37.779 324.188 30 290.694 30 256 30 131.383 131.383 30 256 30s226 101.383 226 226-101.383 226-226 226c-8.284 0-15 6.716-15 15s6.716 15 15 15c68.38 0 132.668-26.629 181.02-74.98C485.371 388.668 512 324.38 512 256s-26.629-132.668-74.98-181.02z"
        }
      ></path>
    </svg>
  );
}

export default Icon2Icon;
/* prettier-ignore-end */

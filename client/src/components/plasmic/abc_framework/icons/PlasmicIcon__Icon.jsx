// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function IconIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 512 512"}
      className={classNames(
        "plasmic-default__svg",
        className,
        "outline pa1 pointer"
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
          "M92.205 150l26.568 320.735C120.678 493.865 140.38 512 163.598 512h184.805c23.218 0 42.92-18.135 44.824-41.265L419.795 150H92.205zM211 437c0 8.291-6.709 15-15 15s-15-6.709-15-15V195c0-8.291 6.709-15 15-15s15 6.709 15 15v242zm60 0c0 8.291-6.709 15-15 15s-15-6.709-15-15V195c0-8.291 6.709-15 15-15s15 6.709 15 15v242zm60 0c0 8.291-6.709 15-15 15s-15-6.709-15-15V195c0-8.291 6.709-15 15-15s15 6.709 15 15v242zm75-377h-75V45c0-24.814-20.186-45-45-45h-60c-24.814 0-45 20.186-45 45v15h-75c-24.853 0-45 20.147-45 45 0 8.284 6.716 15 15 15h360c8.284 0 15-6.716 15-15 0-24.853-20.147-45-45-45zm-105 0h-90V45c0-8.276 6.724-15 15-15h60c8.276 0 15 6.724 15 15v15z"
        }
      ></path>
    </svg>
  );
}

export default IconIcon;
/* prettier-ignore-end */

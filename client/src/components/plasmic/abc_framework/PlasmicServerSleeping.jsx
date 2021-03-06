// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: vpcYHrXbsH6LUnbKFzgKAs
// Component: PCrhC-FAHV
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_abc_framework.module.css"; // plasmic-import: vpcYHrXbsH6LUnbKFzgKAs/projectcss
import * as sty from "./PlasmicServerSleeping.module.css"; // plasmic-import: PCrhC-FAHV/css
import LogosvgIcon from "./icons/PlasmicIcon__Logosvg"; // plasmic-import: 67BwsWVLcL/icon
import RestsvgIcon from "./icons/PlasmicIcon__Restsvg"; // plasmic-import: JuwcPNA-Iu/icon

export const PlasmicServerSleeping__VariantProps = new Array();

export const PlasmicServerSleeping__ArgProps = new Array("countdown");

function PlasmicServerSleeping__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <React.Fragment>
      <div
        data-plasmic-name={"root"}
        data-plasmic-override={overrides.root}
        data-plasmic-root={true}
        data-plasmic-for-node={forNode}
        className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
      >
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(defaultcss.all, sty.box__dBtGh)}
        >
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(defaultcss.all, sty.box__iK01Q)}
          >
            <LogosvgIcon
              className={classNames(defaultcss.all, sty.svg__bf24)}
              role={"img"}
            />

            <RestsvgIcon
              className={classNames(defaultcss.all, sty.svg__cAlxk)}
              role={"img"}
            />
          </p.Stack>

          <div className={classNames(defaultcss.all, sty.box__gJZmK)}>
            <div className={classNames(defaultcss.all, sty.box__x7Mrc)}>
              <p.PlasmicSlot
                defaultContents={"zzz... zzz... zzz... 20"}
                value={args.countdown}
                className={classNames(sty.slotCountdown)}
              />
            </div>
          </div>

          <div className={classNames(defaultcss.all, sty.box__sEJt)}>
            <div
              data-plasmic-name={"message"}
              data-plasmic-override={overrides.message}
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.message
              )}
            >
              {
                "O servidor ABC se encontra dormindo no momento, espere alguns instantes e volte depois, enquanto isso  acordaremos ele e o sistema ficar?? dispon??vel para o uso."
              }
            </div>
          </div>
        </p.Stack>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: ["root", "message"],
  message: ["message"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicServerSleeping__ArgProps,
      internalVariantPropNames: PlasmicServerSleeping__VariantProps
    });

    return PlasmicServerSleeping__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicServerSleeping";
  } else {
    func.displayName = `PlasmicServerSleeping.${nodeName}`;
  }
  return func;
}

export const PlasmicServerSleeping = Object.assign(
  // Top-level PlasmicServerSleeping renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    message: makeNodeComponent("message"),
    // Metadata about props expected for PlasmicServerSleeping
    internalVariantProps: PlasmicServerSleeping__VariantProps,
    internalArgProps: PlasmicServerSleeping__ArgProps
  }
);

export default PlasmicServerSleeping;
/* prettier-ignore-end */

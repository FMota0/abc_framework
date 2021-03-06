// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: vpcYHrXbsH6LUnbKFzgKAs
// Component: S1N8wpFX1SrO
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import ActionIcon from "../../ActionIcon"; // plasmic-import: 7MQ1w3J5JA/component
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_abc_framework.module.css"; // plasmic-import: vpcYHrXbsH6LUnbKFzgKAs/projectcss
import * as sty from "./PlasmicHomepage.module.css"; // plasmic-import: S1N8wpFX1SrO/css
import LogosvgIcon from "./icons/PlasmicIcon__Logosvg"; // plasmic-import: 67BwsWVLcL/icon

export const PlasmicHomepage__VariantProps = new Array();

export const PlasmicHomepage__ArgProps = new Array(
  "message",
  "loginOptions",
  "footerRightIcon"
);

function PlasmicHomepage__RenderFunc(props) {
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
        <div className={classNames(defaultcss.all, sty.box__fg68N)}>
          <div className={classNames(defaultcss.all, sty.box__lqJak)}>
            <ActionIcon
              data-plasmic-name={"mainIcon"}
              data-plasmic-override={overrides.mainIcon}
              className={classNames("__wab_instance", sty.mainIcon)}
              extraLarge={"extraLarge"}
            >
              <LogosvgIcon
                className={classNames(defaultcss.all, sty.svg__w4RAl)}
                role={"img"}
              />
            </ActionIcon>

            <div className={classNames(defaultcss.all, sty.box__tfcMd)}>
              <p.PlasmicSlot
                defaultContents={
                  "Bem vindo, escolha uma forma de login para continuar."
                }
                value={args.message}
                className={classNames(sty.slotMessage)}
              />
            </div>

            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(defaultcss.all, sty.box__dFgSa)}
            >
              <p.PlasmicSlot
                defaultContents={
                  <React.Fragment>
                    <div
                      className={classNames(defaultcss.all, sty.box__kTzvj)}
                    />

                    <div
                      className={classNames(defaultcss.all, sty.box__xdeZx)}
                    />
                  </React.Fragment>
                }
                value={args.loginOptions}
              />
            </p.Stack>
          </div>
        </div>

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(defaultcss.all, sty.box__si4Y)}
        >
          <ActionIcon
            data-plasmic-name={"footerLieftIcon"}
            data-plasmic-override={overrides.footerLieftIcon}
            className={classNames("__wab_instance", sty.footerLieftIcon)}
            large={"large"}
          >
            <LogosvgIcon
              className={classNames(defaultcss.all, sty.svg__eplbV)}
              role={"img"}
            />
          </ActionIcon>

          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.box__oy5Ch
            )}
          >
            {"ABC framework"}
          </div>

          <div className={classNames(defaultcss.all, sty.box__hJzWx)} />

          <p.PlasmicSlot
            defaultContents={
              <ActionIcon
                className={classNames("__wab_instance", sty.actionIcon__iZpGx)}
                large={"large"}
              >
                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.box__waX6N
                  )}
                >
                  {"?"}
                </div>
              </ActionIcon>
            }
            value={args.footerRightIcon}
          />
        </p.Stack>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: ["root", "mainIcon", "footerLieftIcon"],
  mainIcon: ["mainIcon"],
  footerLieftIcon: ["footerLieftIcon"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicHomepage__ArgProps,
      internalVariantPropNames: PlasmicHomepage__VariantProps
    });

    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    mainIcon: makeNodeComponent("mainIcon"),
    footerLieftIcon: makeNodeComponent("footerLieftIcon"),
    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */

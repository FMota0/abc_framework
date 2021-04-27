// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: vpcYHrXbsH6LUnbKFzgKAs
// Component: VmjFCzlhl8
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import ColumnSpacer from "../../ColumnSpacer"; // plasmic-import: 08Del2QF4A/component
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_abc_framework.module.css"; // plasmic-import: vpcYHrXbsH6LUnbKFzgKAs/projectcss
import * as sty from "./PlasmicResearchProgramCard.module.css"; // plasmic-import: VmjFCzlhl8/css

export const PlasmicResearchProgramCard__VariantProps = new Array();

export const PlasmicResearchProgramCard__ArgProps = new Array(
  "title",
  "description",
  "registered"
);

function PlasmicResearchProgramCard__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <div className={classNames(defaultcss.all, sty.box__jhTdF)}>
        <p.PlasmicSlot
          defaultContents={"Study program"}
          value={args.title}
          className={classNames(sty.slotTitle)}
        />
      </div>

      <div className={classNames(defaultcss.all, sty.box__ve44F)}>
        <p.PlasmicSlot
          defaultContents={
            "A study program about how study methodology impacts students results"
          }
          value={args.description}
          className={classNames(sty.slotDescription)}
        />
      </div>

      <ColumnSpacer
        data-plasmic-name={"columnSpacer"}
        data-plasmic-override={overrides.columnSpacer}
        className={classNames("__wab_instance", sty.columnSpacer)}
      />

      <p.PlasmicSlot
        defaultContents={"Registered studies: 0/10"}
        value={args.registered}
        className={classNames(sty.slotRegistered)}
      />
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: ["root", "columnSpacer"],
  columnSpacer: ["columnSpacer"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicResearchProgramCard__ArgProps,
      internalVariantPropNames: PlasmicResearchProgramCard__VariantProps
    });

    return PlasmicResearchProgramCard__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicResearchProgramCard";
  } else {
    func.displayName = `PlasmicResearchProgramCard.${nodeName}`;
  }
  return func;
}

export const PlasmicResearchProgramCard = Object.assign(
  // Top-level PlasmicResearchProgramCard renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    columnSpacer: makeNodeComponent("columnSpacer"),
    // Metadata about props expected for PlasmicResearchProgramCard
    internalVariantProps: PlasmicResearchProgramCard__VariantProps,
    internalArgProps: PlasmicResearchProgramCard__ArgProps
  }
);

export default PlasmicResearchProgramCard;
/* prettier-ignore-end */

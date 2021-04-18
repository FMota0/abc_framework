// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: vpcYHrXbsH6LUnbKFzgKAs
// Component: UwWUDm9S7t
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import Header from "../../Header"; // plasmic-import: b995Ls5eZP/component
import ActionIcon from "../../ActionIcon"; // plasmic-import: 7MQ1w3J5JA/component
import ModalWrapper from "../../ModalWrapper"; // plasmic-import: MWE-QmNJhs/component
import ProgramsList from "../../ProgramsList"; // plasmic-import: MYCwyjoLXCa/component
import StudyProgramCard from "../../StudyProgramCard"; // plasmic-import: VmjFCzlhl8/component
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_abc_framework.module.css"; // plasmic-import: vpcYHrXbsH6LUnbKFzgKAs/projectcss
import * as sty from "./PlasmicDashboard.module.css"; // plasmic-import: UwWUDm9S7t/css
import PlusCircleOutlinesvgIcon from "./icons/PlasmicIcon__PlusCircleOutlinesvg"; // plasmic-import: 7Ds520VAXj/icon

export const PlasmicDashboard__VariantProps = new Array(
  "empty",
  "withAddStudy"
);

export const PlasmicDashboard__ArgProps = new Array("programs");

function PlasmicDashboard__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <React.Fragment>
      <div
        data-plasmic-name={"root"}
        data-plasmic-override={overrides.root}
        data-plasmic-root={true}
        data-plasmic-for-node={forNode}
        className={classNames(defaultcss.all, projectcss.root_reset, sty.root, {
          [sty.root__empty]: hasVariant(variants, "empty", "empty"),
          [sty.root__withAddStudy]: hasVariant(
            variants,
            "withAddStudy",
            "withAddStudy"
          )
        })}
      >
        <Header
          data-plasmic-name={"header"}
          data-plasmic-override={overrides.header}
          className={classNames("__wab_instance", sty.header, {
            [sty.header__withAddStudy]: hasVariant(
              variants,
              "withAddStudy",
              "withAddStudy"
            )
          })}
        />

        {(
          hasVariant(variants, "withAddStudy", "withAddStudy") ? true : false
        ) ? (
          <ModalWrapper
            data-plasmic-name={"modalWrapper"}
            data-plasmic-override={overrides.modalWrapper}
            className={classNames("__wab_instance", sty.modalWrapper, {
              [sty.modalWrapper__withAddStudy]: hasVariant(
                variants,
                "withAddStudy",
                "withAddStudy"
              )
            })}
            withAddStudy={
              hasVariant(variants, "withAddStudy", "withAddStudy")
                ? "withAddStudy"
                : undefined
            }
          />
        ) : null}

        <ProgramsList
          data-plasmic-name={"programsList"}
          data-plasmic-override={overrides.programsList}
          className={classNames("__wab_instance", sty.programsList, {
            [sty.programsList__empty]: hasVariant(variants, "empty", "empty"),
            [sty.programsList__withAddStudy]: hasVariant(
              variants,
              "withAddStudy",
              "withAddStudy"
            )
          })}
          empty={hasVariant(variants, "empty", "empty") ? "empty" : undefined}
        >
          <p.PlasmicSlot
            defaultContents={
              <React.Fragment>
                <StudyProgramCard
                  className={classNames(
                    "__wab_instance",
                    sty.studyProgramCard__ds9Hs
                  )}
                />

                <StudyProgramCard
                  className={classNames(
                    "__wab_instance",
                    sty.studyProgramCard__bvWc2
                  )}
                  description={"Scalable applications and its demands"}
                  registered={"Registered studies: 2/10"}
                  title={"Scalable applications"}
                />

                <StudyProgramCard
                  className={classNames(
                    "__wab_instance",
                    sty.studyProgramCard__bqQx
                  )}
                />

                <StudyProgramCard
                  className={classNames(
                    "__wab_instance",
                    sty.studyProgramCard__z0Azf
                  )}
                  description={
                    "A study program about how study methodology impacts students results A study program about how study methodology impacts students results"
                  }
                />

                <StudyProgramCard
                  className={classNames(
                    "__wab_instance",
                    sty.studyProgramCard__f0Ut
                  )}
                  description={
                    "A study program about how study methodology impacts students results A study program about how study methodology impacts students results"
                  }
                />
              </React.Fragment>
            }
            value={args.programs}
          />
        </ProgramsList>

        <ActionIcon
          data-plasmic-name={"actionIcon"}
          data-plasmic-override={overrides.actionIcon}
          className={classNames("__wab_instance", sty.actionIcon)}
        >
          <div
            data-plasmic-name={"box"}
            data-plasmic-override={overrides.box}
            className={classNames(defaultcss.all, sty.box, {
              [sty.box__empty]: hasVariant(variants, "empty", "empty")
            })}
          >
            <PlusCircleOutlinesvgIcon
              data-plasmic-name={"svg"}
              data-plasmic-override={overrides.svg}
              className={classNames(defaultcss.all, sty.svg)}
              role={"img"}
            />
          </div>
        </ActionIcon>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "header",
    "modalWrapper",
    "programsList",
    "actionIcon",
    "box",
    "svg"
  ],

  header: ["header"],
  modalWrapper: ["modalWrapper"],
  programsList: ["programsList"],
  actionIcon: ["actionIcon", "box", "svg"],
  box: ["box", "svg"],
  svg: ["svg"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicDashboard__ArgProps,
      internalVariantPropNames: PlasmicDashboard__VariantProps
    });

    return PlasmicDashboard__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicDashboard";
  } else {
    func.displayName = `PlasmicDashboard.${nodeName}`;
  }
  return func;
}

export const PlasmicDashboard = Object.assign(
  // Top-level PlasmicDashboard renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    modalWrapper: makeNodeComponent("modalWrapper"),
    programsList: makeNodeComponent("programsList"),
    actionIcon: makeNodeComponent("actionIcon"),
    box: makeNodeComponent("box"),
    svg: makeNodeComponent("svg"),
    // Metadata about props expected for PlasmicDashboard
    internalVariantProps: PlasmicDashboard__VariantProps,
    internalArgProps: PlasmicDashboard__ArgProps
  }
);

export default PlasmicDashboard;
/* prettier-ignore-end */

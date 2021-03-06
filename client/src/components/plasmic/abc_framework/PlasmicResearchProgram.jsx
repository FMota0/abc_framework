// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: vpcYHrXbsH6LUnbKFzgKAs
// Component: GYWi95vLfh
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Header from "../../Header"; // plasmic-import: b995Ls5eZP/component
import ActionIcon from "../../ActionIcon"; // plasmic-import: 7MQ1w3J5JA/component
import SelectedResearch from "../../SelectedResearch"; // plasmic-import: gK4A7lO4Rf/component
import SelectedStrategy from "../../SelectedStrategy"; // plasmic-import: p3zItY3nmn/component
import ResearchCard from "../../ResearchCard"; // plasmic-import: wpvaXd42G3/component
import Modal from "../../Modal"; // plasmic-import: DJ5ohi16iS/component
import Input from "../../Input"; // plasmic-import: mqLBwPJ93g/component
import Button from "../../Button"; // plasmic-import: ryMEoCge3-/component
import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: Ua1ivJLBAEJb/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_abc_framework.module.css"; // plasmic-import: vpcYHrXbsH6LUnbKFzgKAs/projectcss
import * as sty from "./PlasmicResearchProgram.module.css"; // plasmic-import: GYWi95vLfh/css
import ShortLeftsvgIcon from "./icons/PlasmicIcon__ShortLeftsvg"; // plasmic-import: -0ehSsBe3P/icon
import LogosvgIcon from "./icons/PlasmicIcon__Logosvg"; // plasmic-import: 67BwsWVLcL/icon
import AddsvgIcon from "./icons/PlasmicIcon__Addsvg"; // plasmic-import: 3E6AOpLOlA/icon

export const PlasmicResearchProgram__VariantProps = new Array(
  "withAddResearch",
  "withDeleteProgram"
);

export const PlasmicResearchProgram__ArgProps = new Array(
  "programStudyVisualizer"
);

function PlasmicResearchProgram__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants()
  });

  return (
    <React.Fragment>
      <div
        data-plasmic-name={"root"}
        data-plasmic-override={overrides.root}
        data-plasmic-root={true}
        data-plasmic-for-node={forNode}
        className={classNames(defaultcss.all, projectcss.root_reset, sty.root, {
          [sty.root__withAddResearch]: hasVariant(
            variants,
            "withAddResearch",
            "withAddResearch"
          ),

          [sty.root__withDeleteProgram]: hasVariant(
            variants,
            "withDeleteProgram",
            "withDeleteProgram"
          )
        })}
      >
        <Header
          data-plasmic-name={"header"}
          data-plasmic-override={overrides.header}
          className={classNames("__wab_instance", sty.header)}
          left={
            <React.Fragment>
              <ActionIcon
                data-plasmic-name={"actionIcon"}
                data-plasmic-override={overrides.actionIcon}
                className={classNames("__wab_instance", sty.actionIcon)}
                large={"large"}
              >
                {(
                  hasVariant(globalVariants, "screen", "mobileOnly")
                    ? true
                    : false
                ) ? (
                  <ShortLeftsvgIcon
                    className={classNames(defaultcss.all, sty.svg__nq7E)}
                    role={"img"}
                  />
                ) : null}
                {(
                  hasVariant(globalVariants, "screen", "mobileOnly")
                    ? false
                    : true
                ) ? (
                  <p.PlasmicIcon
                    PlasmicIconType={
                      hasVariant(globalVariants, "screen", "mobileOnly")
                        ? ShortLeftsvgIcon
                        : LogosvgIcon
                    }
                    className={classNames(defaultcss.all, sty.svg__o3D)}
                    role={"img"}
                  />
                ) : null}
              </ActionIcon>

              {(
                hasVariant(globalVariants, "screen", "mobileOnly")
                  ? false
                  : true
              ) ? (
                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.box__fjwXm
                  )}
                >
                  {"ABC Framework"}
                </div>
              ) : null}
            </React.Fragment>
          }
        />

        <p.Stack
          as={"div"}
          data-plasmic-name={"view"}
          data-plasmic-override={overrides.view}
          hasGap={true}
          className={classNames(defaultcss.all, sty.view)}
        >
          <div className={classNames(defaultcss.all, sty.box__kgQf)}>
            <p.PlasmicSlot
              defaultContents={
                <div className={classNames(defaultcss.all, sty.box__q1I87)} />
              }
              value={args.programStudyVisualizer}
            />
          </div>

          <p.Stack
            as={"div"}
            data-plasmic-name={"studyInfo"}
            data-plasmic-override={overrides.studyInfo}
            hasGap={true}
            className={classNames(defaultcss.all, sty.studyInfo)}
          >
            <SelectedResearch
              data-plasmic-name={"selectedResearch"}
              data-plasmic-override={overrides.selectedResearch}
              className={classNames("__wab_instance", sty.selectedResearch)}
            />

            <SelectedStrategy
              data-plasmic-name={"selectedStrategy"}
              data-plasmic-override={overrides.selectedStrategy}
              className={classNames("__wab_instance", sty.selectedStrategy)}
              researches={
                <React.Fragment>
                  <ResearchCard
                    className={classNames(
                      "__wab_instance",
                      sty.researchCard__tqHDx
                    )}
                  />

                  <ResearchCard
                    className={classNames(
                      "__wab_instance",
                      sty.researchCard__ypUs5
                    )}
                  />

                  <ResearchCard
                    className={classNames(
                      "__wab_instance",
                      sty.researchCard__pbTqm
                    )}
                  />

                  <ResearchCard
                    className={classNames(
                      "__wab_instance",
                      sty.researchCard__zl262
                    )}
                  />
                </React.Fragment>
              }
            />
          </p.Stack>
        </p.Stack>

        <ActionIcon
          data-plasmic-name={"openModalButton"}
          data-plasmic-override={overrides.openModalButton}
          className={classNames("__wab_instance", sty.openModalButton)}
        >
          <div className={classNames(defaultcss.all, sty.box__pLomL)}>
            <AddsvgIcon
              className={classNames(defaultcss.all, sty.svg__seNzx)}
              role={"img"}
            />
          </div>
        </ActionIcon>

        {(
          hasVariant(variants, "withAddResearch", "withAddResearch")
            ? true
            : false
        ) ? (
          <Modal
            data-plasmic-name={"withAddResearchModal"}
            data-plasmic-override={overrides.withAddResearchModal}
            className={classNames("__wab_instance", sty.withAddResearchModal, {
              [sty.withAddResearchModal__withAddResearch]: hasVariant(
                variants,
                "withAddResearch",
                "withAddResearch"
              )
            })}
            content={
              <React.Fragment>
                {(
                  hasVariant(variants, "withAddResearch", "withAddResearch")
                    ? true
                    : false
                ) ? (
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.box__ycfPd,
                      {
                        [sty.box__withAddResearch__ycfPdGcXLs]: hasVariant(
                          variants,
                          "withAddResearch",
                          "withAddResearch"
                        )
                      }
                    )}
                  >
                    {hasVariant(variants, "withAddResearch", "withAddResearch")
                      ? "Adicione uma nova pesquisa"
                      : "Enter some text"}
                  </div>
                ) : null}

                <Input
                  data-plasmic-name={"title"}
                  data-plasmic-override={overrides.title}
                  className={classNames("__wab_instance", sty.title)}
                  label={
                    <div
                      className={classNames(
                        defaultcss.all,
                        defaultcss.__wab_text,
                        sty.box__kIPb
                      )}
                    >
                      {"T??tulo"}
                    </div>
                  }
                />

                <Input
                  data-plasmic-name={"description"}
                  data-plasmic-override={overrides.description}
                  className={classNames("__wab_instance", sty.description)}
                  label={"Descri????o"}
                  multiline={"multiline"}
                />

                <Input
                  data-plasmic-name={"link"}
                  data-plasmic-override={overrides.link}
                  className={classNames("__wab_instance", sty.link)}
                  label={"Link"}
                />

                <Input
                  data-plasmic-name={"strategy"}
                  data-plasmic-override={overrides.strategy}
                  className={classNames("__wab_instance", sty.strategy)}
                  label={"Estrat??gia"}
                />

                <Input
                  data-plasmic-name={"method"}
                  data-plasmic-override={overrides.method}
                  className={classNames("__wab_instance", sty.method)}
                  label={"M??todo"}
                />

                <div className={classNames(defaultcss.all, sty.box__lSk92)}>
                  {(
                    hasVariant(variants, "withAddResearch", "withAddResearch")
                      ? true
                      : false
                  ) ? (
                    <Button
                      data-plasmic-name={"addResearch"}
                      data-plasmic-override={overrides.addResearch}
                    >
                      {hasVariant(
                        variants,
                        "withAddResearch",
                        "withAddResearch"
                      )
                        ? "Adicionar"
                        : "Click me"}
                    </Button>
                  ) : null}
                </div>
              </React.Fragment>
            }
          />
        ) : null}
        {(
          hasVariant(variants, "withDeleteProgram", "withDeleteProgram")
            ? true
            : false
        ) ? (
          <Modal
            data-plasmic-name={"withDeleteProgramModal"}
            data-plasmic-override={overrides.withDeleteProgramModal}
            className={classNames(
              "__wab_instance",
              sty.withDeleteProgramModal,
              {
                [sty.withDeleteProgramModal__withDeleteProgram]: hasVariant(
                  variants,
                  "withDeleteProgram",
                  "withDeleteProgram"
                )
              }
            )}
            content={
              <React.Fragment>
                <div
                  data-plasmic-name={"message"}
                  data-plasmic-override={overrides.message}
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.message,
                    {
                      [sty.message__withDeleteProgram]: hasVariant(
                        variants,
                        "withDeleteProgram",
                        "withDeleteProgram"
                      )
                    }
                  )}
                >
                  {hasVariant(
                    variants,
                    "withDeleteProgram",
                    "withDeleteProgram"
                  )
                    ? "Voc?? tem certeza que deseja deletar o programa de pesquisa X?"
                    : "Adicione seu programa de pesquisa"}
                </div>

                {(
                  hasVariant(variants, "withDeleteProgram", "withDeleteProgram")
                    ? true
                    : false
                ) ? (
                  <p.Stack
                    as={"div"}
                    hasGap={
                      hasVariant(
                        variants,
                        "withDeleteProgram",
                        "withDeleteProgram"
                      )
                        ? true
                        : false
                    }
                    className={classNames(defaultcss.all, sty.box__n8Hr7, {
                      [sty.box__withDeleteProgram__n8Hr7EeJt]: hasVariant(
                        variants,
                        "withDeleteProgram",
                        "withDeleteProgram"
                      )
                    })}
                  >
                    <Button
                      data-plasmic-name={"yes"}
                      data-plasmic-override={overrides.yes}
                      className={classNames("__wab_instance", sty.yes, {
                        [sty.yes__withDeleteProgram]: hasVariant(
                          variants,
                          "withDeleteProgram",
                          "withDeleteProgram"
                        )
                      })}
                      size={
                        hasVariant(
                          variants,
                          "withDeleteProgram",
                          "withDeleteProgram"
                        )
                          ? "large"
                          : undefined
                      }
                      type={
                        hasVariant(
                          variants,
                          "withDeleteProgram",
                          "withDeleteProgram"
                        )
                          ? ["eee90"]
                          : undefined
                      }
                    >
                      {hasVariant(
                        variants,
                        "withDeleteProgram",
                        "withDeleteProgram"
                      )
                        ? "Sim"
                        : "Adicionar"}
                    </Button>

                    {(
                      hasVariant(
                        variants,
                        "withDeleteProgram",
                        "withDeleteProgram"
                      )
                        ? true
                        : false
                    ) ? (
                      <Button
                        data-plasmic-name={"no"}
                        data-plasmic-override={overrides.no}
                        className={classNames("__wab_instance", sty.no, {
                          [sty.no__withDeleteProgram]: hasVariant(
                            variants,
                            "withDeleteProgram",
                            "withDeleteProgram"
                          )
                        })}
                        size={
                          hasVariant(
                            variants,
                            "withDeleteProgram",
                            "withDeleteProgram"
                          )
                            ? "large"
                            : undefined
                        }
                      >
                        {hasVariant(
                          variants,
                          "withDeleteProgram",
                          "withDeleteProgram"
                        )
                          ? "N??o"
                          : "Click me"}
                      </Button>
                    ) : null}
                  </p.Stack>
                ) : null}
              </React.Fragment>
            }
          />
        ) : null}
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "header",
    "actionIcon",
    "view",
    "studyInfo",
    "selectedResearch",
    "selectedStrategy",
    "openModalButton",
    "withAddResearchModal",
    "title",
    "description",
    "link",
    "strategy",
    "method",
    "addResearch",
    "withDeleteProgramModal",
    "message",
    "yes",
    "no"
  ],

  header: ["header", "actionIcon"],
  actionIcon: ["actionIcon"],
  view: ["view", "studyInfo", "selectedResearch", "selectedStrategy"],
  studyInfo: ["studyInfo", "selectedResearch", "selectedStrategy"],
  selectedResearch: ["selectedResearch"],
  selectedStrategy: ["selectedStrategy"],
  openModalButton: ["openModalButton"],
  withAddResearchModal: [
    "withAddResearchModal",
    "title",
    "description",
    "link",
    "strategy",
    "method",
    "addResearch"
  ],

  title: ["title"],
  description: ["description"],
  link: ["link"],
  strategy: ["strategy"],
  method: ["method"],
  addResearch: ["addResearch"],
  withDeleteProgramModal: ["withDeleteProgramModal", "message", "yes", "no"],
  message: ["message"],
  yes: ["yes"],
  no: ["no"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicResearchProgram__ArgProps,
      internalVariantPropNames: PlasmicResearchProgram__VariantProps
    });

    return PlasmicResearchProgram__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicResearchProgram";
  } else {
    func.displayName = `PlasmicResearchProgram.${nodeName}`;
  }
  return func;
}

export const PlasmicResearchProgram = Object.assign(
  // Top-level PlasmicResearchProgram renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    actionIcon: makeNodeComponent("actionIcon"),
    view: makeNodeComponent("view"),
    studyInfo: makeNodeComponent("studyInfo"),
    selectedResearch: makeNodeComponent("selectedResearch"),
    selectedStrategy: makeNodeComponent("selectedStrategy"),
    openModalButton: makeNodeComponent("openModalButton"),
    withAddResearchModal: makeNodeComponent("withAddResearchModal"),
    title: makeNodeComponent("title"),
    description: makeNodeComponent("description"),
    link: makeNodeComponent("link"),
    strategy: makeNodeComponent("strategy"),
    method: makeNodeComponent("method"),
    addResearch: makeNodeComponent("addResearch"),
    withDeleteProgramModal: makeNodeComponent("withDeleteProgramModal"),
    message: makeNodeComponent("message"),
    yes: makeNodeComponent("yes"),
    no: makeNodeComponent("no"),
    // Metadata about props expected for PlasmicResearchProgram
    internalVariantProps: PlasmicResearchProgram__VariantProps,
    internalArgProps: PlasmicResearchProgram__ArgProps
  }
);

export default PlasmicResearchProgram;
/* prettier-ignore-end */

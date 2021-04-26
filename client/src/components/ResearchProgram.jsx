// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import StrategySelector from "./StrategySelector/StrategySelector";
import { PlasmicResearchProgram } from "./plasmic/abc_framework/PlasmicResearchProgram";
import { deleteResearchProgram, fetchResearchProgram } from "../store/programs/actions";
import { setStrategy } from "../store/selectedStrategy/slice";
import ABCApiService from "../services/abcApi";
import { getResearchProgram } from "../store/programs/selectors";
import Input from "./Input";
import Select from "./Select/Select";
import { selectedStrategyTitle, STRATEGIES } from "../constants";
import Button from "./Button";

function ResearchProgram() {

  const dispatch = useDispatch();
  const { id } = useParams();
  
  useEffect(() => {
    dispatch(fetchResearchProgram(id));
    dispatch(setStrategy(null));
  }, [dispatch, id]);

  const [withAddResearch, setWithAddResearch] = useState(false);
  const emptyResearch = {
    title: "",
    description: "",
    link: "",
    strategy: STRATEGIES[0],
    method: STRATEGIES[0],
  };
  const [newResearch, setNewResearch] = useState(emptyResearch);

  const [withDeleteProgram, setWithDeleteProgram] = useState(false);

  const program = useSelector(getResearchProgram(id));

  return (
    <PlasmicResearchProgram
      programStudyVisualizer={<StrategySelector/>}
      withAddResearch={withAddResearch}
      openModalButton={{
        props: {
          onClick: () => {
            setWithAddResearch(true);
          },
        }
      }}
      withAddResearchModal={{
        onClick: () => {
          setWithAddResearch(false);
          setNewResearch(emptyResearch);
        },
        modal: {
          onClick: (e) => e.stopPropagation(),
        },
        closeModal: {
          onClick: () => setWithAddResearch(false),
        },
        content: [
          <p 
            key="research-program-add-h"
            style={{ color: 'white' }}
          >
            Adicione seu programa de pesquisa
          </p>,
          <Input
            key="research-program-add-title"
            label="Título"
            textbox={{
              value: newResearch.title,
              onChange: (e) => setNewResearch(r => ({
                ...r,
                title: e.target.value,
              })),
            }}
          />,
          <Input
            key="research-program-add-description"
            label="Descrição"
            multiline
            textarea={{
              value: newResearch.description,
              onChange: (e) => setNewResearch(r => ({
                ...r,
                description: e.target.value,
              })),
            }}
          />,
          <Input
            key="research-program-add-link"
            label="Link"
            textbox={{
              value: newResearch.link,
              onChange: (e) => setNewResearch(r => ({
                ...r,
                link: e.target.value,
              }))
            }}
          />,
          <Select
            key="research-program-add-strategy"
            label="Estratégia"
            options={STRATEGIES.map((str) => ({
              value: str,
              label: selectedStrategyTitle[str],
            }))}
            onChange={(selected) => setNewResearch(r => ({
              ...r,
              strategy: selected,
            }))}
          />,
          <Select
            key="research-program-add-method"
            label="Método"
            options={STRATEGIES.map((str) => ({
              value: str,
              label: selectedStrategyTitle[str],
            }))}
            onChange={(selected) => setNewResearch(r => ({
              ...r,
              method: selected,
            }))}
          />,
          <Button
            key="research-program-add-btn"
            button={{
              onClick: async () => {
                await ABCApiService.addResearch(id, newResearch);
                setWithAddResearch(false);
                setNewResearch(emptyResearch);
                dispatch(fetchResearchProgram(id));
                dispatch(setStrategy(null));
              }
            }}
          >
            Adicionar
          </Button>
        ]
      }}
      withDeleteProgram={withDeleteProgram}
      selectedResearch={{
        _delete: {
          onClick: () => setWithDeleteProgram(true),
        }
      }}
      withDeleteProgramModal={{
        onClick: () => setWithDeleteProgram(false),
        modal: {
          onClick: (e) => e.stopPropagation(),
        },
        closeModal: {
          onClick: () => setWithDeleteProgram(false),
        }
      }}
      message={`Você tem certeza que deseja excluir o programa de pesquisa "${program.title}"?`}
      yes={{
        onClick: () => {
          dispatch(deleteResearchProgram(id))
        },
      }}
      no={{
        onClick: () => setWithDeleteProgram(false),
      }}
    />
  );
}

export default ResearchProgram;

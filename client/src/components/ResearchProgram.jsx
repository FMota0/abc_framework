// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import React, { useEffect, useState } from "react";
import { fromPairs, keys } from "ramda";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import StrategySelector from "./StrategySelector/StrategySelector";
import { PlasmicResearchProgram } from "./plasmic/abc_framework/PlasmicResearchProgram";
import { deleteResearchProgram, fetchResearchProgram } from "../store/programs/actions";
import { setStrategy } from "../store/selectedStrategy/slice";
import ABCApiService from "../services/abcApi";
import { getResearchProgram } from "../store/programs/selectors";

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
    strategy: "",
    method: "",
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
      }}
      {...fromPairs(keys(newResearch).map(k => [k, {
        value: newResearch[k],
        onChange: (e) => setNewResearch(r => ({
          ...r,
          [k]: e.target.value,
        })),
      }]))}
      addResearch={{
        onClick: async () => {
          await ABCApiService.addResearch(id, newResearch);
          setWithAddResearch(false);
          setNewResearch(emptyResearch);
          dispatch(fetchResearchProgram(id));
          dispatch(setStrategy(null));
        }
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

// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import React, { useState, useEffect } from "react";

import { PlasmicDashboard } from "./plasmic/abc_framework/PlasmicDashboard";

import { useSelector, useDispatch } from "react-redux";
import { getResearchPrograms } from "../store/programs/selectors";
import ResearchProgramCard from "./ResearchProgramCard";
import { fetchResearchPrograms } from "../store/programs/actions";
import ABCApiService from "../services/abcApi";
import useHistory from "../useHistory";
import Input from "./Input";
import Button from "./Button";

function Dashboard() {

  const dispatch = useDispatch();
  const history = useHistory();
  
  useEffect(() => {
    dispatch(fetchResearchPrograms())
  }, [dispatch]);

  const [withAddStudy, setWithAddStudy] = useState(false)
  const [newStudy, setNewStudy] = useState({
    title: "",
    description: "",
  });

  const programs = useSelector(getResearchPrograms);
  const Programs = programs.map(({ _id: id, title, description, researches }) => {
    const registered = researches.length;
    return (
      <ResearchProgramCard
        key={id}
        onClick={() => {
          history.push(`/research/${id}`);
        }}
        title={title}
        description={description}
        registered={`Estudos registrados: ${registered}`}
      />
    )
  });

  return (
    <PlasmicDashboard
      programs={Programs}
      empty={programs.length === 0}
      withAddStudy={withAddStudy}
      withAddStudyModal={{
        onClick: () => {
          setWithAddStudy(false);
          setNewStudy({ title: "", description: "" })
        },
        modal: {
          onClick: (e) => e.stopPropagation(),
        },
        content: [
          <p
            key="dashboard-add-h"
            style={{ color: "white" }}
          >
            Adicione seu programa de pesquisa
          </p>,
          <Input
            key="dashboard-add-title"
            label={"Título"}
            textbox={{
              value: newStudy.title,
              onChange: (e) => setNewStudy(r => ({
                ...r,
                title: e.target.value,
              })),
            }}
          />,
          <Input
            key="dashboard-add-description"
            label={"Descrição"}
            multiline
            textarea={{
              value: newStudy.description,
              onChange: (e) => setNewStudy(r => ({
                ...r,
                description: e.target.value,
              })),
            }}
          />,
          <Button
            key="dashboard-add-btn"
            button={{
              onClick: async () => {
                await ABCApiService.addResearchProgram(newStudy);
                setWithAddStudy(false);
                setNewStudy({ title: "", description: "" });
                dispatch(fetchResearchPrograms())
              }
            }}
          >
            Adicionar
          </Button>
        ],
        closeModal: {
          onClick: () => {
            setWithAddStudy(false);
            setNewStudy({ title: "", description: "" });
          }
        },
      }}
      addProgram={
        {
          props: {
            onClick: () => setWithAddStudy(true),
          }
        }
      }
      />
  );
}

export default Dashboard;

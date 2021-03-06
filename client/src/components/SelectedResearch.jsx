// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { PlasmicSelectedResearch } from "./plasmic/abc_framework/PlasmicSelectedResearch";
import { getResearchProgram } from "../store/programs/selectors";
import { editResearchProgram } from "../store/programs/actions";
import { RESEARCH_PROGRAM_DESCRIPTION_ERROR, RESEARCH_PROGRAM_DESCRIPTION_OPTIONS, RESEARCH_PROGRAM_TITLE_ERROR, RESEARCH_PROGRAM_TITLE_OPTIONS } from "../constants/form";

function SelectedResearch(props) {
  const dispatch = useDispatch();

  const { id } = useParams();
  const program = useSelector(getResearchProgram(id));

  const { register, handleSubmit, formState: { errors } } = useForm();

  const [isEditing, setIsEditing] = useState(false);
  const [editProgram, setEditProgram] = useState(program);

  const isLoading = !program;
  return (
    <PlasmicSelectedResearch
      title={isLoading ? "Carregando" : program.title}
      description={isLoading ? "Carregando" : program.description}
      withEdit={isEditing}
      edit={{
        onClick: () => setIsEditing(true),
      }}
      titleInput={{
        textbox: {
          ...register("title", RESEARCH_PROGRAM_TITLE_OPTIONS),
          value: editProgram.title,
          onChange: (e) => setEditProgram(r => ({ ...r, title: e.target.value })),
        },
        invalid: !!errors.title,
        error: RESEARCH_PROGRAM_TITLE_ERROR,
      }}
      descriptionInput={{
        textarea: {
          ...register("description", RESEARCH_PROGRAM_DESCRIPTION_OPTIONS),
          value: editProgram.description,
          onChange: (e) => setEditProgram(r => ({ ...r, description: e.target.value }))
        },
        invalid: !!errors.description,
        error: RESEARCH_PROGRAM_DESCRIPTION_ERROR,
      }}
      saveBtn={{
        button: {
          onClick: handleSubmit(() => {
            dispatch(editResearchProgram(id, editProgram));
            setIsEditing(false);
          }),
        },
      }}
      cancelBtn={{
        button: {
          onClick: () => {
            setIsEditing(false);
          },
        },
      }}
      {...props}
    />
  );
}

export default SelectedResearch;

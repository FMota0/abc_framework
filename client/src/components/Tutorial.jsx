// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { PlasmicTutorial } from "./plasmic/abc_framework/PlasmicTutorial";
import { getTutorialInfos } from "../store/tutorial/selectors";
import { fetchTutorialInfos } from "../store/tutorial/actions";
import Question from "./Question";

function Tutorial(props) {
  const dispatch = useDispatch();
  const infos = useSelector(getTutorialInfos);
  useEffect(() => {
    dispatch(fetchTutorialInfos());
  }, [dispatch])
  return (
    <PlasmicTutorial
      questions={
        infos.map((info) => (
          <Question
            key={`tutorial-question-${info._id}`}
            title={info.title}
            answer={info.description}
          />
        ))
      }
      {...props}
    />
  );
}

export default Tutorial;

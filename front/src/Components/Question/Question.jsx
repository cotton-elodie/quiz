import React, { useEffect, useState } from "react";
import {
  DefaultButton,
  Spinner,
  IChoiceGroupOption,
  ChoiceGroup,
} from "@fluentui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import '../Question/question.sass'


const Question = ({questionsId, index}) => {
  const [question, setQuestion] = useState([]);
  const [options, setOptions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(index);
  const [isLoading, setIsloading] = useState(true);
  const [score, setScore] = useState(0);
  const [userResponse, setUserResponse] = useState(null);
  const [isCorrected, setIsCorrected] = useState(false);

  let navigate=useNavigate();

  useEffect(() => {
    async function fetchData() {
      setIsloading(true);
      const response = await axios.get(
        `http://localhost:3000/question/${questionsId[currentIndex].id}`
      );

      const options: IChoiceGroupOption[] = response.data.answers.map(
        (answer) => {
          return { key: answer.id, text: answer.name };
        }
      );
      setOptions(options);
      setQuestion(response.data);
      setIsloading(false);
    }
    fetchData();
  }, [currentIndex]);

  const onClick = () => {
     if (currentIndex === questionsId.length - 1) {
      // on arrive sur la page résultat
      navigate("/score", {state : {score:score, maxScore:questionsId.length}});
     
    } else {
      setIsCorrected(false);
      setUserResponse(null);
      setCurrentIndex(currentIndex + 1);

    }
  };

  const onChange = (event, option) => {
    setUserResponse(option);
  };

  const onCorrectionRequest = () => {
    setIsCorrected(true);
   if (userResponse.key === question.question.goodResponseId){
     setScore(score+1);
   }
    const options: IChoiceGroupOption[] = question.answers.map((answer) => {
      return {
        key: answer.id,
        text: answer.name,
        styles:
          answer.id === question.question.goodResponseId
            ? { root: { color: "#2e7e32", fontWeight:"bold" } }
            : null,
      };
    });
    setOptions(options);
  };


  return (
    <div className="question">
      {isLoading && <Spinner />}
      {!isLoading && (
        <div className="question-loading">
          <h3 className="question-title">Question {question.question.id}</h3>

          <p className="question-question" >{question.question.description}</p>
          <span className="question-consigne">Une seule réponse possible</span>
          <ChoiceGroup className="question-choice" options={options} onChange={onChange} />

          {!isCorrected && userResponse !== null &&(
            <>
              <DefaultButton className="question-button" text="Correction" onClick={onCorrectionRequest} />
            </>
          )}

          {isCorrected && (
            <>
              <DefaultButton className="question-button" text="Suivant" onClick={onClick} />
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Question;

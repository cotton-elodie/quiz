import React, { useEffect, useState } from "react";
import {
  Checkbox,
  DefaultButton,
  Spinner,
  IChoiceGroupOption,
  ChoiceGroup,
} from "@fluentui/react";
import axios from "axios";
import Result from "../Result/Result";

const Question = ({ questionsId, index }) => {
  const [question, setQuestion] = useState([]);
  const [options, setOptions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(index);
  const [isLoading, setIsloading] = useState(true);
  const [score, setScore] = useState(0);
  const [userResponse, setUserResponse] = useState();
  const [isCorrected, setIsCorrected] = useState(false);

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
    if (currentIndex === questionsId.lenght - 1) {
      // on arrive sur la page résultat
    } else {
      setCurrentIndex(currentIndex + 1);
      setIsCorrected(false);
    }
  };

  const onChange = (event, option) => {
    setUserResponse(option);
  };

  const onCorrectionRequest = () => {
    setIsCorrected(true);
    const options: IChoiceGroupOption[] = question.answers.map((answer) => {
      return {
        key: answer.id,
        text: answer.name,
        styles:
          answer.id === question.question.goodResponseId
            ? { root: { border: "1px solid green" } }
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
          <h3>Question {question.question.id}</h3>

          <p>{question.question.description}</p>
          <ChoiceGroup options={options} onChange={onChange} />

          {!isCorrected && (
            <>
              <DefaultButton text="Correction" onClick={onCorrectionRequest} />
            </>
          )}

          {isCorrected && (
            <>
              <DefaultButton text="Next" onClick={onClick} />
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Question;

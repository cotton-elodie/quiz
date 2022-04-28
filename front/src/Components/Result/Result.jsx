import { DefaultButton } from "@fluentui/react";
import {Link, useLocation} from 'react-router-dom';
import React from "react";
import '../Result/result.scss'

const Result = () => {
  const location=useLocation();
  const {score, maxScore}=location.state;
  return (
    <div className="result">
      <p className="result-result">Votre Score est de {score} sur {maxScore} </p>
      <Link to="/">
        <DefaultButton className="result-button" text="Revenir à l'accueil"/>
      </Link>
    </div>
  );
};

export default Result;

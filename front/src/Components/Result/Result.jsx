import { DefaultButton } from "@fluentui/react";
import {Link, useLocation} from 'react-router-dom';
import React from "react";

const Result = () => {
  const location=useLocation();
  const {score, maxScore}=location.state;
  return (
    <div>
      <p>Votre Score est de {score} sur {maxScore} </p>
      <Link to="/">
        <DefaultButton text="Revenir à l'accueil"/>
      </Link>
    </div>
  );
};

export default Result;

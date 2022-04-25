import React from "react";
import { DefaultButton } from "@fluentui/react/lib/Button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Bienvenue sur votre quiz</h1>
      <Link to={`/questions`}>
        <DefaultButton text="Start" />
      </Link>
    </div>
  );
};

export default Home;

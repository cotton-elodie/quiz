import React from "react";
import { DefaultButton } from "@fluentui/react/lib/Button";
import { Link } from "react-router-dom";
import '../Home/home.sass';

const Home = () => {
  return (
    <div className="home">
      <h1 className="home-title">Bienvenue sur votre quiz</h1>
      <p className="home-consigne">Initiez-vous aux bases de l'informatique</p>
      <Link to={`/questions`}>
        <DefaultButton className="title-button" text="Start" />
      </Link>
    </div>
  );
};

export default Home;

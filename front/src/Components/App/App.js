import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import Question from "../Question/Question";
import { useState, useEffect } from "react";
import axios from "axios";
import Result from "../Result/Result";


import "../../styles/reset.css";
import "../App/App.css";
import { initializeIcons } from "@fluentui/font-icons-mdl2";
import { Spinner } from "@fluentui/react";

initializeIcons();

function App() {
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`http://localhost:3000/questions`);

      setQuestions(response.data);
      setIsloading(false);
    }
    fetchData();
  });

  return (
    <>
      {isLoading && <Spinner />}
      {!isLoading && (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/questions" element={<Question questionsId={questions} index={0} />} />
          <Route path="/score" element={<Result/>}/>
        </Routes>
      )}
    </>
  );
}

export default App;

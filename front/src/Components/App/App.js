import { Routes, Route } from 'react-router-dom';
import '../App/App.css';
import Home from '../Home/Home';
import Question from '../Question/Question'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/question/:id' element={<Question/>}/>
    </Routes>
   
  );
}

export default App;

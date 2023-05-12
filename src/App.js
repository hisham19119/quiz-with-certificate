import { BrowserRouter, Routes, Route } from "react-router-dom";
import Quizz from "./Pages/Quiz";
import Certificate from "./Pages/Certificate";
import LoginPage from "./Pages/LoginPage";
// import Login from "./Components/Login";


function App() {

  
  return (

    <div className="App">

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage/>} />
            <Route path="/quiz" element={<Quizz/>} />
            <Route path="/certificate" element={<Certificate/>} />
          </Routes>
        </BrowserRouter>
        {/* <Login/> */}

    </div>

  );
}

export default App;

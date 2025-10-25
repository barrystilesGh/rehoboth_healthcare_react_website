import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import MissingPage from "./MissingPage";
import "../src/General.css";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='*' element={<MissingPage />} />
      </Routes>
    </>
  );
}

export default App;

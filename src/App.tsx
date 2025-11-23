import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import ContactUs from "./pages/ContactUs";
import MissingPage from "./MissingPage";
import "../src/General.css";
import type { JSX } from "react";

const App = (): JSX.Element => {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/contactus' element={<ContactUs />} />
        <Route path='*' element={<MissingPage />} />
      </Routes>
    </>
  );
};

export default App;

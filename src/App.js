import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
import "./App.css";
import { RdaAuthentication } from "./rdaAuthentication";
import RegisterAcoount from "./RegisterAcoount";
import StepperForm from "./StepperForm";

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route index path="/stepper" element={<StepperForm />}></Route>
        <Route index path="/" element={<RdaAuthentication />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

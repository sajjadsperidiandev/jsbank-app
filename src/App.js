import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import RegisterAcoount from "./RegisterAcoount";
import StepperForm from "./StepperForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RegisterAcoount />} />
        <Route index path="stepper" element={<StepperForm />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

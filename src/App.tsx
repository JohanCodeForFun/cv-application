import "./styles.css";

// components
import LandingPage from "./components/LandingPage";
import TemplateForms from "./components/TemplateForms";
import { useState } from "react";

function App() {
  const [showLandingPage, setShowLandingPage] = useState<boolean>(true);

  function handleState() {
    setShowLandingPage(!showLandingPage)
  }

  return (
    <>
      <button onClick={() => handleState()}>set state</button>
      {showLandingPage ? <LandingPage change={handleState}/> : <TemplateForms />}
    </>
  );
}

export default App;

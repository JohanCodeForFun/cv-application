import "./styles.css";

// components
import LandingPage from "./components/LandingPage";
import TemplateForms from "./components/TemplateForms";

function App() {
  const landingPage = true;

  return (
    <>
      {landingPage ? <LandingPage /> : <TemplateForms />}
    </>
  );
}

export default App;

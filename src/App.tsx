// import { useState } from "react";
import "./styles.css";

import PersonalInput from "./components/PersonalInput";
// import ProfileForm from "./components/ProfileForm";

function App() {
  return (
    <>
      <div className="app-container">
        <div className="form-input">
          <h1 className="text-center">CV Application</h1>
          {/* <ProfileForm /> */}
          <PersonalInput />
          <p>cv details below:</p>
          <p>...</p>
        </div>
      </div>
    </>
  );
}

export default App;

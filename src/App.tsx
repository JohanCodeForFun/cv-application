// import { useState } from "react";
// import { Button } from "./components/ui/button";
// import { Input } from "./components/ui/input";
import "./styles.css";
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form"

import PersonalInput from "./components/PersonalInput";
// import ProfileForm from "./components/ProfileForm";

function App() {
  // const [input, setInput] = useState("");
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

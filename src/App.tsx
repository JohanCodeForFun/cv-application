import { useState } from "react";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
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

// import PersonalInput from "./components/PersonalInput";
import ProfileForm from "./components/ProfileForm";

function App() {
  const [input, setInput] = useState("");
  return (
    <>
      <div className="app-container">
        <div className="form-input">
          <h1>CV Application</h1>
          <ProfileForm />
        </div>
      </div>
    </>
  );
}

export default App;

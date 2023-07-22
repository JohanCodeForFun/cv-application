import { useState } from "react";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import './styles.css'
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
  const [input, setInput] = useState("");
  return (
    <>
    <div className="app-container">
      {/* <ProfileForm /> */}
      {/* <PersonalInput /> */}

      <form className="form-input">
      <h1>CV Application</h1>
        <label>hello</label>
        <Input
          value={input}
          onChange={(event) => {
            setInput(event.target.value);
          }}
        />
        <Button onClick={() => console.log(input)}>Click me!</Button>
      </form>
      </div>
    </>
  );
}

export default App;

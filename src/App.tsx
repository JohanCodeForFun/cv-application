import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import PersonalInput from "./components/PersonalInput";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  return (
    <>
      <h1>CV Application</h1>
      <PersonalInput />
      <Input
        value={input}
        onChange={(event) => {
          setInput(event.target.value);
        }}
      />
      <Button onClick={() => console.log(input)}>Click me!</Button>
    </>
  );
}

export default App;

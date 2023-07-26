import "./styles.css";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z, ZodType } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { DevTool } from "@hookform/devtools";

// components
import PersonalInput from "./components/PersonalInput";
import TemplateCV from "./components/TemplateCV";
import { ExampleValues } from "./components/ExampleValues";
import { Skill } from "./components/Skill";
import { Preview } from "./components/Preview";

// types
import FormData from "./types/formData";
import SkillData from "./types/typeSkill";

const schema: ZodType<FormData> = z.object({
  firstName: z.string().min(2).max(21).nonempty("First name is required"),
  lastName: z.string().min(2).max(21).nonempty("Last name is required"),
  email: z.string().min(8).max(34).nonempty("Email is required").email(),
  phoneNumber: z.number(),
});
let nextTechId: 0;

function App() {
  const [formData, setFormData] = useState({});
  const [techInput, setTechInput] = useState('')
  const [softSkills, setSoftSkills] = useState([
    { name: "Public Speaking" },
    { name: "Time Management" },
    { name: "Leadership" },
  ]);
  const [technicalSkills, setTechnicalSkills] = useState<SkillData[]>([]);

  const technicalSkillsList = technicalSkills.map(({ id, name }) => (
    <li key={id}>
      <Skill
        allSkills={technicalSkills}
        removeSkill={setTechnicalSkills}
        id={id}
        name={name}
      />
    </li>
  ));

  const {
    register,
    control,
    reset,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const submitData = (data: FormData) => {
    setFormData(data);
    console.log("submitted data:", data);
  };

  return (
    <>
      <div className="app-container">
        <div className="form-input">
          <h1 className="text-center">CV Application</h1>
          <ExampleValues
          setValue={setValue}
          setTechnicalSkills={setTechnicalSkills}
          reset={reset}
          />
          <PersonalInput
            register={register}
            handleSubmit={handleSubmit}
            submitData={submitData}
            errors={errors}
          />
          <div>
            <h2>Add skill</h2>
            <input
            value={techInput}
            onChange={(e) => {setTechInput(e.target.value)}}
            placeholder="add skill..."/>
            <button onClick={() => {
              setTechnicalSkills([
              ...technicalSkills,
              {id: nextTechId++, name: techInput}
            ])
            setTechInput('')
            }}>add skill</button>
            <p>id for skill, [ {nextTechId} ] (TESTING)</p>
            <ul className="List">{technicalSkillsList}</ul>
          </div>
          <Preview formData={formData} />
          <TemplateCV />
        </div>
      </div>
      <DevTool control={control} />
    </>
  );
}

export default App;

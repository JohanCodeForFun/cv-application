// import { useState } from "react";
import "./styles.css";

import PersonalInput from "./components/PersonalInput";
import TemplateCV from "./components/TemplateCV";
import { ExampleValues } from "./components/ExampleValues";
import { Skill } from "./components/Skill";
// import { Skills2 } from "./components/Skills2";
// import ProfileForm from "./components/ProfileForm";

import { useForm } from "react-hook-form";
import { z, ZodType } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { DevTool } from "@hookform/devtools";
import { useState } from "react";
import { Preview } from "./components/Preview";
import FormData from "./types/formData";
import { Skills } from "./components/Skills";

const schema: ZodType<FormData> = z.object({
  firstName: z.string().min(2).max(21).nonempty("First name is required"),
  lastName: z.string().min(2).max(21).nonempty("Last name is required"),
  email: z.string().min(8).max(34).nonempty("Email is required").email(),
  phoneNumber: z.number(),
});

function App() {
  const [formData, setFormData1] = useState({});
  const [techInput, setTechInput] = useState('')
  const [softSkills, setSoftSkills] = useState([
    { name: "Public Speaking" },
    { name: "Time Management" },
    { name: "Leadership" },
  ]);
  const [technicalSkills, setTechnicalSkills] = useState([
    { id: 0, name: "React" },
    { id: 1, name: "TypeScript" },
    { id: 2, name: "Git" },
  ]);

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
  // const softSkillsList = softSkills.map(({ nex, name }) => (
  //   <li key={id.replace(" ", "").toLowerCase()}>
  //     <Skill allSkills={softSkills} removeSkill={setSoftSkills} name={name} />
  //   </li>
  // ));

  const {
    register,
    control,
    reset,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const submitData = (data: FormData) => {
    setFormData1(data);
    console.log("submitted data:", data);
  };

  const handleTechSkillsInput = (input) => {
    setTechnicalSkills([...technicalSkills, input]);
  };
  const handleSoftSkillsInput = (input) => {
    setSoftSkills(input);
  };

  let nextTechId: 5

  return (
    <>
      <div className="app-container">
        <div className="form-input">
          <h1 className="text-center">CV Application</h1>
          <ExampleValues setValue={setValue} reset={reset} />
          {/* <ProfileForm /> */}
          <PersonalInput
            register={register}
            handleSubmit={handleSubmit}
            submitData={submitData}
            errors={errors}
          />
          <div>
          <h2>Number of skills: {technicalSkills.length}</h2>
          <ul className="List">{technicalSkillsList}</ul>
          <p>Add skill</p>
          <input
          value={techInput}
          onChange={(e) => {setTechInput(e.target.value)}}
          placeholder="add skill..."/>
          <button onClick={() => {setTechnicalSkills([
            ...technicalSkills,
            {id: nextTechId++, name: techInput}
          ])}}>add skill</button>
          </div>

          <div>
          {/* <h2>Number of skills: {softSkills.length}</h2>
          <ul className="List">{softSkillsList}</ul> */}
          </div>
          {/* <Skills2 title="Skills 2" technicalSkills={technicalSkills}/>
          {technicalSkills.map(skill => <span key={skill}>{skill}</span>)} */}
          {/* <Skills
          title="technical"
          {...technicalSkills}
          register={register}
          handleSubmit={handleSubmit}
          submitData={submitData}
          errors={errors}
          update={handleTechSkillsInput}/>
          {technicalSkills}, FROM APP COMP. */}
          {/* <Skills
            title="soft"
            {...softSkills}
            register={register}
            handleSubmit={handleSubmit}
            submitData={submitData}
            errors={errors}
            change={handleSoftSkillsInput}
          /> */}
          <Preview formData={formData} />
          <TemplateCV />
        </div>
      </div>
      <DevTool control={control} />
    </>
  );
}

export default App;

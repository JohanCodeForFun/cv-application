// import { useState } from "react";
import "./styles.css";

import PersonalInput from "./components/PersonalInput";
import TemplateCV from "./components/TemplateCV";
import { ExampleValues } from "./components/ExampleValues";
// import ProfileForm from "./components/ProfileForm";

import { useForm } from 'react-hook-form';
import { z, ZodType} from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { DevTool } from '@hookform/devtools'
import { useState } from "react";
import { Preview } from "./components/Preview";
import FormData from "./types/formData";

const schema: ZodType<FormData> = z.object({
  firstName: z.string().min(2).max(21).nonempty('First name is required'),
  lastName: z.string().min(2).max(21).nonempty('Last name is required'),
  email: z.string().min(8).max(34).nonempty('Email is required').email(),
  phoneNumber: z.number(),
})

function App() {
  const [formData, setFormData1] = useState({})

  const {
    register,
    control,
    reset,
    setValue,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({ resolver: zodResolver(schema)})

  const submitData = (data: FormData) => {
    setFormData1(data);
    console.log('submitted data:', data)
  }

  return (
    <>
      <div className="app-container">
        <div className="form-input">
          <h1 className="text-center">CV Application</h1>
          <ExampleValues
            setValue={setValue}
            reset={reset}/>
          {/* <ProfileForm /> */}
          <PersonalInput 
          register={register}
          handleSubmit={handleSubmit}
          submitData={submitData}
          errors={errors}
          />
          <Preview formData={formData} />
          <DevTool control={control} />
          <TemplateCV />;
        </div>
      </div>
    </>
  );
}

export default App;

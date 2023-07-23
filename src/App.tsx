// import { useState } from "react";
import "./styles.css";

import PersonalInput from "./components/PersonalInput";
import TemplateCV from "./components/TemplateCV";
// import ProfileForm from "./components/ProfileForm";

import { useForm } from 'react-hook-form';
import { z, ZodType} from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { DevTool } from '@hookform/devtools'
import { useState } from "react";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: number;
}
const schema: ZodType<FormData> = z.object({
  firstName: z.string().min(2).max(21).nonempty('First name is required'),
  lastName: z.string().min(2).max(21).nonempty('Last name is required'),
  email: z.string().min(8).max(34).nonempty('Email is required').email(),
  phoneNumber: z.number(),
})

function App() {
  const [formData1, setFormData1] = useState({})

  const {
    register,
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({ resolver: zodResolver(schema)})

  const submitData = (data: FormData) => {
    setFormData1(data);
    console.log('IT WORKED', formData1)
  }

  return (
    <>
      <div className="app-container">
        <div className="form-input">
          <h1 className="text-center">CV Application</h1>
          {/* <ProfileForm /> */}
          <PersonalInput 
          register={register}
          handleSubmit={handleSubmit}
          submitData={submitData}
          errors={errors}
          />
          <DevTool control={control} />
          <p>cv details below:</p>
          <p>{}</p>
          <TemplateCV />;
        </div>
      </div>
    </>
  );
}

export default App;

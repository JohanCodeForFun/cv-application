// import { useState } from "react";
import "./styles.css";

import PersonalInput from "./components/PersonalInput";
// import ProfileForm from "./components/ProfileForm";

import { useForm } from 'react-hook-form';
import { z, ZodType} from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: number;
}
const schema: ZodType<FormData> = z.object({
  firstName: z.string().min(2).max(21),
  lastName: z.string().min(2).max(21),
  email: z.string().min(8).max(34).email(),
  phoneNumber: z.number(),
})

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({ resolver: zodResolver(schema)})

  const submitData = (data: FormData) => {
    console.log('IT WORKED', data)
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
          <p>cv details below:</p>
          <p>{}</p>
        </div>
      </div>
    </>
  );
}

export default App;

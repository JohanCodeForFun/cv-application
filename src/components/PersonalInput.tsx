import { useForm } from 'react-hook-form';
import {z, ZodType} from 'zod';
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

export default function PersonalInput() {

  const { register, handleSubmit } = useForm<FormData>({ resolver: zodResolver(schema)})

  const submitData = (data: FormData) => {
    console.log('IT WORKED', data)
  }

  return (
    <form onSubmit={handleSubmit(submitData)}>
      <div className="form-fill">
      <label>First Name:</label>
      <input type="text" {...register('firstName')}/>
      </div>
      <div className="form-fill">
      <label>Last Name:</label>
      <input type="text" {...register('lastName')}/>
      </div>
      <div className="form-fill">
      <label>Email:</label>
      <input type="text" {...register('email')}/>
      </div>
      <div className="form-fill">
      <label>Phone Number:</label>
      <input type="number" {...register('phoneNumber', { valueAsNumber: true})}/>
      </div>
      <div>
        <input type="submit" />
      </div>
    </form>
  )
}
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

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({ resolver: zodResolver(schema)})

  const submitData = (data: FormData) => {
    console.log('IT WORKED', data)
  }

  return (
    <form onSubmit={handleSubmit(submitData)}>
      <div className="form-fill">
      <label>First Name:</label>
      <input type="text" {...register('firstName')}/>
      {errors.firstName && <div className="form-message"><p>{errors.firstName.message}</p></div>}
      </div>
      <div className="form-fill">
      <label>Last Name:</label>
      <input type="text" {...register('lastName')}/>
      {errors.firstName && <div className="form-message">{errors.lastName?.message}</div>}
      </div>
      <div className="form-fill">
      <label>Email:</label>
      <input type="text" {...register('email')}/>
      {errors.firstName && <div className="form-message">{errors.email?.message}</div>}
      </div>
      <div className="form-fill">
      <label>Phone Number:</label>
      <input type="number" {...register('phoneNumber', { valueAsNumber: true})}/>
      {errors.firstName && <div className="form-message">{errors.phoneNumber?.message}</div>}
      </div>
      <div>
        <input type="submit" />
      </div>
    </form>
  )
}
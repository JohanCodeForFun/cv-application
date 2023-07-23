export default function PersonalInput({register, handleSubmit, submitData, errors}) {
  return (
    <form onSubmit={handleSubmit(submitData)}>
      <div className="form-fill">
      <label htmlFor="first-name">First Name:</label>
      <input type="text" id="first-name" {...register('firstName')}/>
      {errors.firstName && <div className="form-message"><p>{errors.firstName.message}</p></div>}
      </div>
      <div className="form-fill">
      <label htmlFor="last-name">Last Name:</label>
      <input type="text" id="last-name" {...register('lastName')}/>
      {errors.firstName && <div className="form-message">{errors.lastName?.message}</div>}
      </div>
      <div className="form-fill">
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" {...register('email')}/>
      {errors.firstName && <div className="form-message">{errors.email?.message}</div>}
      </div>
      <div className="form-fill">
      <label htmlFor="phone-number">Phone Number:</label>
      <input type="number" id="phone-number" {...register('phoneNumber', { valueAsNumber: true})}/>
      {errors.firstName && <div className="form-message">{errors.phoneNumber?.message}</div>}
      </div>
      <div>
        <input type="submit" />
      </div>
    </form>
  )
}
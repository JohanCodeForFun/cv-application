import { Input } from './ui/input'
import { Button } from './ui/button'
import { useState } from 'react'

export const Skills = ({ title, props, update, register, handleSubmit, submitData, errors }) => {
  const [input, setInput] = useState('');
  const handleChange = (e) => {
    setInput(e.target.value)
  }

  return (
    <div className='input-container'>
      <p className='input-title'>Add your {title}-skills:</p>
      {/* <div>{props.map(skill => <span key={skill}>{skill}</span>)}</div> */}
      <Input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
      {...register(`${title}Skills`)}
      onChange={handleChange}/>
      <Button onClick={update}>Add skill.</Button>
      <p>Listed skills: {props}</p>
    </div>
  )
}

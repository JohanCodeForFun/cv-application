import { Input } from './ui/input'
import { Button } from './ui/button'

export const Skills = ({ title, props }) => {
  return (
    <>
      <p className='font-bold'>Add your {title}, {props} skills</p>
      {/* <div>{props.map(skill => <span key={skill}>{skill}</span>)}</div> */}
      <Input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'/>
      <Button>Add skill.</Button>
    </>
  )
}

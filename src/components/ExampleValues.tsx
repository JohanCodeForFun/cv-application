import { Button } from './ui/button'
import exampleData from '../../data/exampleData'

export const ExampleValues = ({ setValue, setTechnicalSkills, reset }) => {
  return (
    <div>
      <Button type="button" onClick={() => {
          Object.entries(exampleData).forEach(
            ([key, value]) => setValue(key, value)
          )
          setTechnicalSkills([
            { id: 0, name: "React" },
            { id: 1, name: "TypeScript" },
            { id: 2, name: "Git" },
          ])
      }}>Load example</Button>
      <Button onClick={() => {
        reset()
        setTechnicalSkills([])
      }}>clear values</Button>
    </div>
  )
}

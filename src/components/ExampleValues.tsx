import { Button } from './ui/button'
import exampleData from '../../data/exampleData'

export const ExampleValues = ({ setValue, reset }) => {
  return (
    <div>
      <Button type="button" onClick={() => {
          Object.entries(exampleData).forEach(
            ([key, value]) => setValue(key, value)
          )
      }}>Load example</Button>
      <Button onClick={() => reset()}>clear values</Button>
    </div>
  )
}

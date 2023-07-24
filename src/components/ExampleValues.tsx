import { Button } from './ui/button'

export const ExampleValues = ({ reset }) => {
  return (
    <div>
      <Button>Load example</Button>
      <Button onClick={() => reset()}>clear values</Button>
    </div>
  )
}

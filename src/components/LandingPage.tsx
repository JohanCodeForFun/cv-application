import { useState } from 'react'
import style from './landingpage.module.css'
import CardTemplate from './CardTemplate';

type HandleState = {
  handleState: () => void
}

function LandingPage({ handleState }: HandleState) {
  const [fullName, setFullName] = useState('Your Name')

  function handleInput(e) {
    setFullName(e.target.value)
  }

  function resetInput() {
    setFullName('');

  }

  return (
    <div className={style.container}>
      <div className={style.hero}>
        <h1>Hero title</h1>
        <div>
          <CardTemplate templateType="classic" fullName={fullName}/>
          <CardTemplate templateType="contemporary" fullName={fullName}/>
          <CardTemplate templateType="bold" fullName={fullName}/>
        </div>
      </div>
      <div className={style.info}>
        <div className="input">
          <h2>hello</h2>
          <label>Full Name:</label>
          <input
          value={fullName}
          placeholder='Full name here...'
          onFocus={() => resetInput()}
          onChange={handleInput}/>
          <button onClick={() => handleState()}>Create CV!</button>
        </div>
      </div>
    </div>
  )
}

export default LandingPage;
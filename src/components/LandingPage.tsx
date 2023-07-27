import React, { useState } from 'react'
import style from './landingpage.module.css'

function LandingPage() {
  const [fullName, setFullName] = useState('Your Name')

  function handleInput(e) {
    setFullName(e.target.value)
  }

  return (
    <div className={style.container}>
      <div className={style.hero}>
        <h1>Hero title</h1>
        <div className={style.template}>{fullName}</div>
        <div className={style.template}>{fullName}</div>
        <div className={style.template}>{fullName}</div>
      </div>
      <div className={style.info}>
        <div className="input">
        <h2>hello</h2>
        <label>Full Name:</label>
        <input
        value={fullName}
        placeholder='Full name here...'
        onFocus={(e) => e.target.value = ''}
        onChange={handleInput}/>
        </div>
      </div>
    </div>
  )
}

export default LandingPage;
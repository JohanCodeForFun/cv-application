import React from 'react'
import style from './landingpage.module.css'

function LandingPage() {
  return (
    <div className={style.container}>
      <div className={style.hero}>
        <h2>Hero title</h2>
        <img className={style.img} src="./vite.svg" alt="hero image" width={200} height={200}/>
      </div>
      <div className={style.info}>
        <p>hello</p>
      </div>
    </div>
  )
}

export default LandingPage;
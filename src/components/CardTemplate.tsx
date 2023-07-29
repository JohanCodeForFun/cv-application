import React from 'react'
import style from './landingpage.module.css'

function CardTemplate({ fullName, templateType }) {
  return (
    <div className={style.template}>
      <h3>{fullName}</h3>
      <p className={style[templateType]}>type, {templateType}</p>
      </div>
  )
}

export default CardTemplate
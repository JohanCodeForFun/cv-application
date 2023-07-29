import style from './landingpage.module.css'

type Props = {
  fullName: string,
  templateType: string
}

function CardTemplate({ fullName, templateType }: Props) {
  return (
    <div className={style.template}>
      <h3>{fullName}</h3>
      <p className={style[templateType]}>type, {templateType}</p>
      </div>
  )
}

export default CardTemplate
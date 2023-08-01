import style from './landingpage.module.css'

type Props = {
  fullName: string,
  templateType: string
}

function CardTemplate({ fullName, templateType }: Props) {
  return (
    <div className={style.template}>
      <div className={style[templateType]}>
        <h3>{fullName}</h3>
        <p>type, {templateType}</p>
      </div>
    </div>
  )
}

export default CardTemplate
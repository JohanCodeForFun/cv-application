import templates from "../../data/templateData"
import style from './templateCV.module.css'

const TemplateCV = () => {
  return (
    <div className={style.templateContainer}>
      <p>Choose type of CV:</p>
      {templates.map((template) => {
        return (
          <div className={style.template} key={template.id}>
            <button>{template.name}</button>
            <img src={template.src} alt={template.name}/>
          </div>
        )
      })};
    </div>
  );
};

export default TemplateCV

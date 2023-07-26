import templates from "../../data/templateData"

const TemplateCV = () => {
  return (
    <div className="template-container">
      <p>Choose type of CV:</p>
      {templates.map((template) => {
        return (
          <div className="template" key={template.id}>
            <button>{template.name}</button>
            <img src={template.src} alt={template.name}/>
          </div>
        )
      })};
    </div>
  );
};

export default TemplateCV

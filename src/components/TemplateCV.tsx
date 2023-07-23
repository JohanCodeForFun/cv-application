import React from "react";
import templates from "../../data/templateData"

const TemplateCV = () => {
  return (
    <div className="template-container">
      {templates.map((template) => {
        return (
          <div className="template" key={template.id}>
            <button>{template.name}</button>
            <img src={template.src} alt={template.name}/>
          </div>
        );
      })}
    </div>
  );
};

export default TemplateCV

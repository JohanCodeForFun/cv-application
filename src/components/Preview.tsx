import React from "react";
import FormData from "@/types/formData";

export const Preview = ({ formData }) => {
  return (
    <div>
      <p>cv details below:</p>
      <div>
        {Object.keys(formData).length > 0
          ? Object.keys(formData).map((key) => (
              <p key={key}>
                {key}: {formData[key]}
              </p>
            ))
          : null}
      </div>
    </div>
  );
};

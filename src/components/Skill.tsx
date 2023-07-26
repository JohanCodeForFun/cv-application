import React from "react";
import SkillData from "../types/typeSkill";

type Props = {
  allSkills: SkillData[];
  name: SkillData;
  // removeSkill:
};

export const Skill = ({ allSkills, name, removeSkill }: Props) => {
  const handleRemove = () => {
    const filteredSkills = allSkills.filter((skill: SkillData) => {
      if (skill.name === "") {
        removeSkill(filteredSkills);
      }
    });
  };

  return (
    <span>
      {name} <button onClick={handleRemove}>Remove</button>
    </span>
  );
};

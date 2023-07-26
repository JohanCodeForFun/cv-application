import React from 'react'

export const Skill = ({ allSkills, name, removeSkill }) => {
  const handleRemove = () => {
    const filteredSkills = allSkills.filter(((skill) => skill.name !== name))
    removeSkill(filteredSkills);
  }

  return (
    <span>
      {name} <button onClick={handleRemove}>Remove</button>
    </span>
  )
}

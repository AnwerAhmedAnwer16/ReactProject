import React from 'react';
import Skill from './skill';

function Skills() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Skills</h2>

      <Skill name="Python" level="90%" />
      <Skill name="Django" level="10%" />
      <Skill name="HTML & CSS" level="70%" />
      <Skill name="JavaScript" level="60%" />
    </div>
  );
}

export default Skills;

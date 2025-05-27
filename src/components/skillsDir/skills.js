import React from 'react';
import Skill from './skill';

function Skills() {
  return (
    <div className="container my-5 py-4">
      <h2 className="text-center mb-5 fw-bold">My Skills</h2>
      
      <div className="row g-4">
        <div className="col-12 col-md-6 col-lg-3">
          <Skill name="Python" level={90} color="success" />
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <Skill name="Django" level={10} color="danger" />
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <Skill name="HTML & CSS" level={70} color="warning" />
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <Skill name="JavaScript" level={60} color="warning" />
        </div>
      </div>
    </div>
  );
}
export default Skills;
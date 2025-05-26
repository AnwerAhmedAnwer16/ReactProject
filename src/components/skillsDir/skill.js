import React from 'react';

function Skill({ name, level }) {
  return (
    <div className="mb-3 text-start">
      <label>{name}</label>
      <div className="progress">
        <div className="progress-bar" style={{ width: level }}>
          {level}
        </div>
      </div>
    </div>
  );
}

export default Skill;
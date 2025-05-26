import React from 'react';

function Project({ title }) {
  return (
    <div className="col-md-4 mb-4 ">
      <div className="bg-dark text-white card text-center p-3 shadow-sm">
        <h5>{title}</h5>
      </div>
    </div>
  );
}

export default Project;

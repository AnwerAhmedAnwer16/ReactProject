import React from 'react';
import Project from './project';

function Portfolio() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Portfolio</h2>
      <div className="row">
        <Project title="Crowd Funding website" />
        <Project title="Odoo ERP" />
        <Project title="Elctronic store" />
      </div>
    </div>
  );
}

export default Portfolio;

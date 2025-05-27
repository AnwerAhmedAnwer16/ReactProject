function Skill({ name, level, color = "primary" }) {
  return (
    <div className="card shadow-sm h-100">
      <div className="card-body">
<h5 className="card-title mb-3">{name}</h5>
        <div className="progress" style={{ height: "10px" }}>
        <div 
            className={`progress-bar bg-${color}`} 
            role="progressbar" 
                    style={{ width: `${level}%` }}
          aria-valuenow={level} 
          aria-valuemin="0" 
            aria-valuemax="100"
          ></div>
</div>
        <div className="d-flex justify-content-between mt-2">
        </div>
        <div className="text-center mt-3">
          <span className="badge bg-light text-dark fs-6">{level}%</span>
        </div>
    </div>
                </div>
  );
}
export default Skill;
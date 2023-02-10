import "./Spinner.css";

const spinner = (props) => (
  <div className="spinner-container">
    <div className="lds-ripple">
      <div style={{ borderColor: `${props.color}` }}></div>
      <div style={{ borderColor: `${props.color}` }}></div>
    </div>
    <p className="spinner-text" style={{ color: `${props.color}` }}>
      {props.children}
    </p>
  </div>
);

export default spinner;

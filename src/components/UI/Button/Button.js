import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      disabled={!props.disabled}
      className={`${classes.btn} ${classes[props.btnType]} ${
        classes[props.round]
      }`}
    >
      {props.children}
    </button>
  );
};

export default Button;

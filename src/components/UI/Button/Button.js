import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      disabled={props.disabled ? true : false}
      className={`${classes.btn} ${classes[props.btnType]} ${
        classes[props.round]
      }`}
    >
      {props.children}
    </button>
  );
};

export default Button;

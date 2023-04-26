import classes from "./ErrorContent.module.css";

const ErrorContent = (props) => {
  return (
    <div className={classes.content}>
      <h1>{props.title}</h1>
      {props.children}
    </div>
  );
};

export default ErrorContent;

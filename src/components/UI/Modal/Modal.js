import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";
import { uiActions } from "../../../store/ui-slice";

import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClick} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes[props.modal]}>
      <div>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  const dispatch = useDispatch();

  const closeCartHandler = () => {
    dispatch(uiActions.hideCart());
  };

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={closeCartHandler} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay modal={props.modal}>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;

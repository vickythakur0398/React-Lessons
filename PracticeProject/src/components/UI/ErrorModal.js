import Button from "./Button";
import Card from "./Card";
import styles from "./ErrorModal.module.css";
import React, { Fragment } from "react";

const ErrorModal = (props) => {
  return (
    <Fragment>
      <div className={styles.backdrop} onClick={props.onConfirm}>
        <Card className={styles.modal}>
          <header className={styles.header}>
            <h2>{props.title}</h2>
          </header>
          <div className={styles.content}>
            <p>{props.message}</p>
          </div>

          <footer className={styles.actions}>
            <Button onClick={props.onConfirm}>Okay</Button>
          </footer>
        </Card>
      </div>
    </Fragment>
  );
};

export default ErrorModal;

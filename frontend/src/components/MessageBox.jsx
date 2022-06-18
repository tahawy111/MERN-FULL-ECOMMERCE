import React from "react";
import Alert from "react-bootstrap/Alert";

const MessageBox = (props) => {
  return (
    <Alert className="w-100" variant={props.variant || "info"}>
      {props.children}
    </Alert>
  );
};

export default MessageBox;

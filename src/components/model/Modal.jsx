import React from "react";
import "./modal.css";

const Modal = ({ close, children, width=500}) => {
  return (
    <>
      <div onClick={()=> close(false)} className="overlay"></div>
      <div style={{width}} className="model">
        {children}
      </div>
    </>
  );
};

export default Modal;

import React, { useState } from "react";
import Modal from "../Modal/Modal";
import "./Home.css";

function Home() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={open ? "modal-open" : "modal-close"}>
      <h1>User Details Modal</h1>
      <button onClick={handleOpen}>Open Form</button>
      <Modal isOpen={open} onClose={handleClose} />
    </div>
  );
}

export default Home;

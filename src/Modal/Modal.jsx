import React, { useState } from "react";
import "./Modal.css";

function Modal({ isOpen, onClose }) {
  let emailRegex = /^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/g;

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    dob: "",
  });

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.phone.length < 10) {
      alert("Invalid phone number. Please enter a 10-digit phone number");
    }
    if (new Date(formData.dob) > new Date()) {
      alert("invalid date of birth. Date of birth cannot be in future");
    }
    if (!emailRegex.test(formData.email)) {
      alert("Invalid email. Please check your email address.");
    }
    onClose();
  };

  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      {isOpen ? (
        <div className="modal" onClick={onClose}>
          <div className="modal-content" onClick={handleModalClick}>
            <form onSubmit={handleSubmit}>
              <label htmlFor="username">Username:</label>
              <input
                id="username"
                type="text"
                name="username"
                required
                onChange={handleChange}
              />
              ,<label htmlFor="email">Email Address:</label>
              <input
                id="email"
                type="email"
                name="email"
                onChange={handleChange}
                required
              />
              <label htmlFor="phone">Phone Number:</label>
              <input
                type="number"
                id="phone"
                onChange={handleChange}
                name="phone"
                required
              />
              <label htmlFor="dob">Email Address:</label>
              <input
                id="dob"
                type="date"
                name="dob"
                onChange={handleChange}
                required
              />
              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Modal;

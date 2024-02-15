"use client"
import React from "react";
import LinkedIn from "../assets/svg/LinkedIn";
import Facebook from "../assets/svg/Facebook";
import Instagram from "../assets/svg/Instagram";
import Twitter from "../assets/svg/Twitter";

const ContactMe = () => {
    const submitForm = (e) =>{
        e.preventDefault();
    }
  return (
    <div>
      <h1>Contact Me</h1>
      <section className="name-para-wrapper">
        <form className="contact-form" onSubmit={submitForm}>
        <div className="contact-icon-wrapper">
          <LinkedIn/>
          <Facebook/>
          <Instagram/>
          <Twitter/>
        </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              First Name
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Last Name
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Message
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </section>
    </div>
  );
};

export default ContactMe;

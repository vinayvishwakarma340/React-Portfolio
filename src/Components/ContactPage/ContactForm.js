import React from "react";

const ContactForm = () => {
  return (
    <div className="contact-form col-lg-8 col-md-12 col-sm-12">
      <form action="">
        <div className="row">
          <div className="input-group">
            <input
              type="text"
              placeholder="Name"
              className="input-control"
              required
            />
          </div>
          <div className="input-group">
            <input
              type="text"
              placeholder="Email"
              className="input-control"
              required
            />
          </div>
          <div className="input-group">
            <input
              type="text"
              placeholder="Subject"
              className="input-control"
              required
            />
          </div>
          <div className="input-group">
            <textarea
              placeholder="Message"
              className="input-control"
              id=""
              cols="30"
              rows="10"
              required
            ></textarea>
          </div>
          <div className="submit-btn">
            <button
              type="submit"
              className="btn "
              style={{ marginBottom: "20px" }}
            >
              Send Message
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

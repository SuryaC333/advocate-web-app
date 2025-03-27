import { Typography, TextField, Button } from "@mui/material";
import React, { useState } from "react";
import AppConstants from "../AdvConstants/AppConstants";
import SendIcon from '@mui/icons-material/Send';
import styles from "./Contact.module.css";

function Contact() {
  const [isError, setError] = useState(false);
  return (
    <div
      className={`d-flex justify-content-between align-items-center ${styles.advFooter}`}
    >
      <div
        className={`d-flex justify-content-between container gap-2 py-5`}
      >
        <div className="col-md-5 col-12 my-auto bg-info rounded-pill p-5">
          <div className="col-md-12 col-12 mb-2">
            <Typography variant="h4">Contact us</Typography>
          </div>
          <div className="col-md-12 col-12">
            <Typography>{AppConstants.ContactText}</Typography>
          </div>
        </div>
        <div
          className="col-md-5 col-12 d-flex flex-column gap-3"
        >
          <div className="col-md-12 col-12 d-flex gap-3 justify-content-between">
            <TextField
              name="firstName"
              className={styles.advTextBox}
              required={true}
              error={isError}
              helperText={isError ? "Firstname is required" : ""}
              label="First name"
              variant="outlined"
              fullWidth
            />
            <TextField
              name="lastName"
              className={styles.advTextBox}
              required={true}
              error={isError}
              helperText={isError ? "Lastname is required" : ""}
              label="Last name"
              variant="outlined"
              fullWidth
            />
          </div>
          <div className="col-md-12 col-12">
            <TextField
              name="email"
              className={styles.advTextBox}
              required={true}
              error={isError}
              helperText={isError ? "Your Email is required" : ""}
              label="Your Email"
              variant="outlined"
              fullWidth
            />
          </div>
          <div className="col-md-12 col-12">
            <TextField
              name="subject"
              className={styles.advTextBox}
              required={true}
              error={isError}
              helperText={isError ? "Subject is required" : ""}
              label="Subject"
              variant="outlined"
              fullWidth
            />
          </div>
          <div className="col-md-12 col-12">
          <TextField
              name="message"
              className={styles.advTextBox}
              required={true}
              error={isError}
              helperText={isError ? "Message is required" : ""}
              label="Your message"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
            />
          </div>
          <div className="col-md-12 col-12 d-flex justify-content-end">
            <Button variant="contained" endIcon={<SendIcon />}>Submit query</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

import React from "react";
import { Typography } from "@mui/material";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import CallRoundedIcon from "@mui/icons-material/CallRounded";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailTwoToneIcon from "@mui/icons-material/EmailTwoTone";
import AppConstants from "../AdvConstants/AppConstants";
import { NavLink } from "react-router-dom";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={`${styles.mt80}`}>
      <footer className={`${styles.footer}`}>
        <div>
          <div className={`${styles.wave} ${styles.wave1} mt-1`}></div>
          <div className={`${styles.wave} ${styles.wave2} mt-1`}></div>
          <div className={`${styles.wave} ${styles.wave3} mt-1`}></div>
          <div className={`${styles.wave} ${styles.wave4} mt-1`}></div>
        </div>
        <div className="col-md-4 col-sm-6 col-12 d-flex align-items-center">
          <RoomOutlinedIcon fontSize="large" />
          <Typography className="ms-1">{AppConstants.Address}</Typography>
        </div>
        <div className="col-md-4 col-sm-6 col-12 d-flex align-items-center justify-content-center flex-column row-gap-3">
          <div className="d-flex flex-row">
            <CallRoundedIcon fontSize="medium" />
            <Typography className="ms-1">{AppConstants.Phone}</Typography>
          </div>
          <div className="d-flex flex-row">
            <WhatsAppIcon fontSize="medium" />
            <Typography className="ms-1">{AppConstants.Whatsapp}</Typography>
          </div>
          <div className="d-flex flex-row">
            <EmailTwoToneIcon fontSize="medium" />
            <Typography className="ms-1">{AppConstants.Email}</Typography>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 col-12 d-flex align-items-center justify-content-center flex-column">
          <div className="p-2 mb-3 bg-opacity-10 border-info border-bottom border-5 rounded">
            Quick Links
          </div>
          <div className="d-flex flex-column gap-2">
            <NavLink className={styles.footerLink} to={AppConstants.Home}>{AppConstants.HomeText}</NavLink>
            <NavLink className={styles.footerLink} to={AppConstants.About}>{AppConstants.AboutText}</NavLink>
            <NavLink className={styles.footerLink} to={AppConstants.AreaOfWork}>{AppConstants.AreaOfWorkText}</NavLink>
            <NavLink className={styles.footerLink} to={AppConstants.Feedback}>{AppConstants.FeedbackText}</NavLink>
            <NavLink className={styles.footerLink} to={AppConstants.ContactUs}>{AppConstants.ContactUsText}</NavLink>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

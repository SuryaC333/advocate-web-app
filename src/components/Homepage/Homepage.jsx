import React from "react";
import KPI from "./HomeKPI/KPI";
import AppConstants from "../AdvConstants/AppConstants";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import { Slide } from "react-awesome-reveal";
import ImageSlider from "./ImageSlider/ImageSlider";
import MissionAndVision from "./MissionAndVision/MissionAndVision";
import styles from "./Homepage.module.css";

const Homepage = () => {
  return (
    <>
      <div className="d-flex justify-content-between col-md-12 col-sm-12 col-12 row row-cols-auto">
        <div className="d-flex col-md-8 col-sm-12 col-12 justify-content-md-start">
          <Slide triggerOnce={true}>
            <KPI
              count={AppConstants.ClientList}
              description={AppConstants.ClientDescription}
              cardStyle="success"
            >
              <InsertEmoticonIcon />
            </KPI>
            <KPI
              count={AppConstants.People}
              description={AppConstants.PeopleSay}
              cardStyle="info"
            >
              <RecordVoiceOverIcon />
            </KPI>
            <KPI
              count={AppConstants.YOE}
              description={AppConstants.YOEs}
              cardStyle="primary"
            >
              <WorkHistoryIcon />
            </KPI>
          </Slide>
        </div>
        <div className="col-md-4 col-12 d-flex align-items-center">
          <p className={`fs-3 mx-auto ${styles.advName}`}>{AppConstants.AdvocateName}</p>
        </div>
      </div>
      <div className="my-3">
        {/* <ImageSlider /> */}
      </div>
      <div className="py-5">
        <MissionAndVision />
      </div>
    </>
  );
};

export default Homepage;

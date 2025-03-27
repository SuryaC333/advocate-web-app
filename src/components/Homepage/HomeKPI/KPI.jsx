import React from "react";
import CountUp from 'react-countup';
import styles from "../HomeKPI/KPI.module.css";

function KPI(props) {
  return (
    <div className={`card text-bg-${props.cardStyle} ${styles.advKpiCard} mx-2 my-4 opacity-75`}>
      <div className="card-header text-start">Total</div>
      <div className="card-body d-flex justify-content-between">
        <div className={`col-md-4 ${styles.advKpiIcon}`}>
          {props.children}
        </div>
        <div className="col-md-8">
          <h5 className={`card-title ${styles.advKpiCardTitle}`}>
            <CountUp end={props.count} duration={4}/>
          </h5>
          <p className={`card-text ${styles.advKpiCardText}`}>{props.description}</p>
        </div>
      </div>
    </div>
  );
}

export default KPI;

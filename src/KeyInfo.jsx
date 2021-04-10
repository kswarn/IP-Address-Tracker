import React from "react";
import KeyInfoCont from "./KeyInfoCont";

export default function KeyInfo({ ipAddress, location, timezone, isp }) {
  return (
    <div className="flex-container">
      <KeyInfoCont trackerKey={"IP ADDRESS"} trackerValue={ipAddress} />

      <KeyInfoCont trackerKey={"LOCATION"} trackerValue={location} />

      <KeyInfoCont trackerKey={"TIMEZONE"} trackerValue={timezone} />

      <KeyInfoCont trackerKey={"ISP"} trackerValue={isp} />
    </div>
  );
}

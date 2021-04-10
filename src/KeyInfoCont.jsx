import React from "react";

export default function KeyInfoCont({ trackerKey, trackerValue }) {
  return (
    <div className="flex-item">
      <p className="tracker-key">{trackerKey}</p>
      <p className="tracker-values" id="ip-add">
        {trackerValue}
      </p>
    </div>
  );
}

import React, { useState } from "react";
import KeyInfo from "./KeyInfo";
import axios from "axios";
import {
  IPIFY_GET_REQUEST_URL,
  IPIFY_API_KEY,
  POST_IP_DATA_URL,
} from "./config";
import { ReactComponent as IconArrow } from "./css/icon-arrow.svg";

export default function Header({ userID }) {
  const [ipAddressInput, setipAddressInput] = useState("");
  const [keyInfo, setkeyInfo] = useState({});
  const ipSearchHandler = () => {
    axios
      .get(IPIFY_GET_REQUEST_URL, {
        params: {
          apiKey: IPIFY_API_KEY,
          ipAddress: ipAddressInput,
        },
      })
      .then((res) => {
        let result = {
          userid: userID,
          ipAddress: ipAddressInput,
          location: res.data.location.city,
          timezone: res.data.location.timezone,
          isp: res.data.isp,
        };
        console.log("RESPONSE", result);
        setkeyInfo(result);
        axios
          .post(POST_IP_DATA_URL, result)
          .then((res) => console.log("Data send"))
          .catch((err) => console.log(err.data));
      })
      .catch((error) => {
        console.log("ERROR: ", error);
      });
  };
  return (
    <div className="header">
      <p>IP Address Tracker</p>
      <div className="form-container">
        <input
          type="text"
          placeholder="Search for any IP address or domain"
          id="search-text-input"
          value={ipAddressInput}
          onChange={(e) => setipAddressInput(e.target.value)}
        />
        <div id="icon-arrow">
          <button id="search-button" onClick={ipSearchHandler}>
            <IconArrow />
          </button>
        </div>
      </div>
      <KeyInfo
        ipAddress={keyInfo.ipAddress}
        location={keyInfo.location}
        timezone={keyInfo.timezone}
        isp={keyInfo.isp}
      />
    </div>
  );
}

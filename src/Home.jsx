import React, { useEffect } from "react";
import "./css/styles.css";
import Header from "./Header";
import GoogleMap from "./GoogleMap";

import axios from "axios";
import $ from "jquery";

export default function Home({ userID }) {
  // $(function () {
  //   $("#search-button").on("click", function () {
  //     const ipAddress = document.getElementById("search-text-input").value;
  //     const api_key = "at_pUXf6Ql8DnLzLObfv9RW1xMqIrLmA";

  //     const ipUrl =
  //       "https://geo.ipify.org/api/v1" +
  //       "api_key=" +
  //       api_key +
  //       "&ipAddress=" +
  //       ipAddress;

  //     axios
  //       .get(ipUrl)
  //       .then((res) => {
  //         document.getElementById("ip-add").innerHTML = res.ip;
  //         document.getElementById("location").innerHTML = res.location.city;
  //         document.getElementById("timezone").innerHTML = res.location.timezone;
  //         document.getElementById("isp").innerHTML = res.isp;
  //         const userData = {
  //           userid: userID,
  //           ipAddress: ipAddress,
  //           location: res.location.city,
  //           timezone: res.location.timezone,
  //           isp: res.isp,
  //         };
  //         const url = "http://localhost:4000/ipTrack";

  //         axios
  //           .post(url, userData)
  //           .then((res) => console.log("Data send"))
  //           .catch((err) => console.log(err.data));
  //       })
  //       .catch((err) => console.log(err));

  //   $.ajax({
  //     url: "https://geo.ipify.org/api/v1",
  //     data: { apiKey: api_key, ipAddress: ipAddress },
  //     success: function (data) {
  //       document.getElementById("ip-add").innerHTML = data.ip;
  //       document.getElementById("location").innerHTML = data.location.city;
  //       document.getElementById("timezone").innerHTML =
  //         data.location.timezone;
  //       document.getElementById("isp").innerHTML = data.isp;
  //       const userData = {
  //         userid: props.user_id,
  //         ipAddress: ipAddress,
  //         location: data.location.city,
  //         timezone: data.location.timezone,
  //         isp: data.isp,
  //       };
  //       const url = "http://localhost:4000/ipTrack";

  //       axios
  //         .post(url, userData)
  //         .then((res) => console.log("Data send"))
  //         .catch((err) => console.log(err.data));
  //     },
  //   });
  //   });
  // });

  return (
    <div>
      <Header userID={userID} />
      <GoogleMap />
    </div>
  );
}

import React, { useState } from "react";
import "./css/styles.css";
import Header from "./Header";
import GoogleMap from "./GoogleMap";

export default function Home() {
  const [latLong, setlatLong] = useState({});
  return (
    <div>
      <Header setlatLong={setlatLong} />
      <GoogleMap latLong={latLong} />
    </div>
  );
}

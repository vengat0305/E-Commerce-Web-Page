import React from "react";
import "./appDownload.css";
import { assets } from "../../assets/assets";
const AppDownload = () => {
  return (
    <div className="appDownload" id="appDownload">
      <p className="appPara">For Better Experience Download FoodSpot!</p>
      <div className="appDownloadPlatForm">
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
      </div>
    </div>
  );
};

export default AppDownload;

import React from "react";
import "./Animation.css";

export const Animation = () => {
  return (
    <div className="animation">
      <video src="/video/EDIT.mp4" loop autoPlay muted className="video">
      </video>
    </div>
  );
};

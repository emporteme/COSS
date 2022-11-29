import React from "react";
import VideoLooper from "react-video-looper";
import { Player } from "video-react";
import "./MainHome.css";

export const MainHome = () => {
  return (
    <div className="main">
      <h1>
        Цифровизация <br /> строительства Казахстана
      </h1>
      <div className="map video">
        {/*<img src="/images/Map.png" alt="map" className="map_main" />*/}
        <video src="/video/map.mp4" loop autoPlay muted className="video"></video>
        {/*} <Player
          src="/video/map.mp4"
          autoPlay={true}
          width={100}
          className="video"
          fluid
        />
         <Player>
      <source src="/video/map.mp4" />
  </Player>*/}
      </div>
      {/*<a href="">
        <div className="after">
          <p>Просмотр видео о платформе ЦОС</p>
          <img src="/images/play-cricle.png" alt="icon" className="map_icon" />
        </div>
      </a>*/}
    </div>
  );
};

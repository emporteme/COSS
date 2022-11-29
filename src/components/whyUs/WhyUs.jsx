import React from "react";
import "./WhyUs.css";

export const WhyUs = () => {
  return (
    <div className="whyUs">
      <h1>
        Почему строители <br /> выбирают ЦОС?{" "}
      </h1>
      <div className="after">
        <div className="left">
          <p>
            Контроль строительнового процесса в онлайн режиме, создает
            максимальное удобство в проверке объектов. <br />
            <br />{" "}
            <span>
              {" "}
              Цифровизация документов и проверка выполненных работ занимает
              меньше времени, тем самым увеличивая скорость и продуктивность
              сотрудников технического и экономического надзора
            </span>
          </p>
          <div className="bottom">
            <p>Просмотр моих объектов</p>
            <div className="line"></div>
          </div>
        </div>
        <div className="right">
          <video src="/video/s1.gif" loop autoPlay muted className="video"></video>
          {/*<VideoLooper source='{sampleVideo}' start={4.31} end={9.48} autoplay className="video"/>*/}
          {/*<img
            src="/images/output-onlinegiftools.png"
            alt="icon"
            className="second"
  />*/}
        </div>
      </div>
    </div>
  );
};

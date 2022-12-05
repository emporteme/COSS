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
            Строительный процесс в онлайн режиме, создает максимальное удобство
            в контроле объектов. <br />
            <br />{" "}
            <span>
              {" "}
              Цифровизация - это не только внедрение электронного
              документооборота, но и система контроля стадии строительства и
              возможность проверки каждого этапа работ, а также систематизация и
              протоколирования любых процессов.
            </span>
          </p>
          <div className="bottom">
            <a href="https://coos2.panda-in.kz/%D1%81%D1%82%D1%80-%D0%BB%D0%B8%D1%81%D1%82.html" target="_blank"><p>Просмотр моих объектов</p></a>
            <div className="line"></div>
          </div>
        </div>
        <div className="right">
          <video
            src="/video/s1.gif"
            loop
            autoPlay
            muted
            className="video"
          ></video>
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

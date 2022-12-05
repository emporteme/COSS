import React from "react";
//import background from "/images/kran.png";
import "./Rent.css";

export const Rent = () => {
  return (
    <div className="rent">
      <div className="background">
        <img src="/images/kran.png" alt="kran" className="background__kran" />
      </div>
      <div className="content">
        <h1>Аренда специализированной техники</h1>
        <p>
          Для выполнения конкретных задач и ускорение производства работ,
          следствием чего становиться увелечение эффективности и общее повышение
          КПД всего процесса производства.
        </p>
        <div className="bottom">
          <a href="https://coos2.panda-in.kz/%D1%81%D0%BF%D0%B5%D1%86.%D1%82%D0%B5%D1%85.%D1%81%D0%BF%D0%B8%D1%81%D0%BE%D0%BA.html" target="_blank"><p>Список спец. техники</p></a>
          {/*<div className="line"></div>*/}
        </div>
      </div>
    </div>
  );
};

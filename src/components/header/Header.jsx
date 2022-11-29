import React from "react";
import './Header.css'


export const Header = () => {
  return(
    <header>
        {/*<Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/about">About</Link>
  <Link to="/plan">Plan</Link>*/}
        <div className="nav__left">
          <a href=""><p className="logo">ЦОС</p></a>
          <a href="https://coos2.panda-in.kz/%D1%81%D0%BF%D0%B8%D1%81%D0%BE%D0%BA-%D0%B0%D0%BA%D1%82%D0%BE%D0%B2.html" className="flexa"><p>Журнал</p><img src="/images/Vector.png" alt="" /></a>
          <a href="https://coos2.panda-in.kz/%D0%B4%D0%BE%D0%B1%D0%B0%D0%B2%D0%B8%D1%82%D1%8C-%D0%B0%D0%BA%D1%82.html" className="flexa"><p>Акты</p><img src="/images/Vector.png" alt="" /></a>
          <a href="" className="flexa"><p>Школа</p><img src="/images/Vector.png" alt="" /></a>
          <a href=""><p>Контакты</p></a>
        </div>
        <div className="nav__right">
          <a href="https://coos2.panda-in.kz/%D1%81%D1%82%D1%80-%D0%BB%D0%B8%D1%81%D1%82.html"><p>Войти</p></a>
          <a href=""><div className="btn__blue">Зарегистрироваться</div></a>
        </div>
      </header>
  )
};

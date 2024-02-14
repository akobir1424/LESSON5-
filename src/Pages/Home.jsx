import React from "react";
import Picture from "../images/pictur.png";
import img1 from "../images/img1.svg";
import img3 from "../images/img3.png";
import img4 from "../images/img4.png";
import img5 from "../images/img5.png";
import img6 from "../images/img6.png";
import img7 from "../images/img7.png";
import img8 from "../images/img8.png";
import img9 from "../images/img9.png";
import Flowers from "../images/flowers.svg";
import pictur1 from "../images/pictur1.png";
import fasebook from "../images/fasebook.svg";
import ins from "../images/ins.svg";
import tws from "../images/tws.svg";
import map from "../images/map.png";

export default function Home() {
  return (
    <>
      <div className="flex">
        <div className="maroon">
          <div className="xod">
            <img src={Picture} alt="" />
          </div>
          <div className="yon">
            <h2 className="h2">Уход для лица</h2>
            <img className="img1" src={img1} alt="" />
          </div>
        </div>
        <div className="maroon">
          <div className="maroon_h1">
            <div className="for">
              <h1 className="h1">MAROON</h1>
              <p>
                Натуральная косметика <br /> для бережного ухода за кожей
              </p>
              <button>Подробнее</button>
            </div>
          </div>
        </div>
        <div className="maroon">
          <div className="xod">
            <img src={img3} alt="" />
          </div>
          <div className="yon">
            <h2 className="h2">Уход для лица</h2>
            <img className="img1" src={img1} alt="" />
          </div>
        </div>
      </div>

      <div className="rest">
        <div className="item1">
          <h2>Бестселлеры</h2>
          <p>
            Легендарные продукты, <br /> завоевавшие любовь <br /> наших
            клиентов
          </p>
          <button className="btn">Смотреть все</button>
        </div>
        <div className="rest__item">
          <h3 className="h3">High</h3>
          <p>крем для лица</p>
          <p>Подробнее </p>
        </div>
        <div className="rest__item">
          <h3 className="h3">Rest</h3>
          <p>минеральная пудра</p>
          <p>Подробнее </p>
        </div>
        <div className="rest__item">
          <h3 className="h3">Rose</h3>
          <p>крем для лица</p>
          <p>Подробнее </p>
        </div>
        <div className="rest__item">
          <h3 className="h3">Milk</h3>
          <p>масло для тела</p>
          <p>Подробнее </p>
        </div>
      </div>

      <div className="name">
        <div className="top">
          <h3>
            Встречайте весну <br /> вместе с нами
          </h3>
          <p>
            Попробуйте новую коллекцию <br /> ухаживающих средств для лица{" "}
            <br /> с SPF защитой
          </p>
          <button>Подробнее</button>
        </div>
      </div>

      <div className="anketa">
        <div className="uxod">
          <h2>Индивидуальный уход</h2>
          <p>
            Не всегда очевидно, какие элементы <br /> и минералы необходимы
            коже, <br /> а многочисленные эксперименты <br /> с разными
            средствами только <br /> ухудшают ее качество. <br /> <br />{" "}
            Заполните анкету, и мы подберем <br /> уход, подходящий именно вам,{" "}
            <br />
            учитывая ваш образ жизни, место <br /> жительства и другие факторы.{" "}
          </p>
          <button>Заполнить анкету</button>
        </div>

        <div className="faktor">
          <img src={img9} alt="" />
        </div>
      </div>

      <div className="flowers">
        <p className="flowers_p">
          “Мы стремимся сделать уход за кожей доступным <br />и приятным
          ритуалом для всех, кто хочет <br /> заботиться о себе и своем теле”{" "}
        </p>
      </div>

      <div className="adres">
        <div className="pictur">
          <img src={pictur1} alt="" />
        </div>
        <div className="adres_p">
          <h2>Присоединяйтесь к нам</h2>
          <p>
            Подпишитесь на наш аккаунт @marooncare <br />и узнавайте о новиках и
            акциях первыми
          </p>
          <button>Подписаться</button>
        </div>
      </div>

      <div className="anketa">
        <div className="uxod">
          <h2>Контакты</h2>
          <h3>Адрес</h3>
          <p>
            Санкт-Петербург,
            <br /> <br /> ул. Большая Конюшенная, 19
          </p>
          <h3>Телефон</h3>
          <p>+7 (923) 888-90-60</p>
          <h3>E-mail</h3>
          <p>info@maroon.ru</p>
          <img src={fasebook} alt="" />
          <img className="ins" src={ins} alt="" />
          <img className="tws" src={tws} alt="" />
        </div>
        <div className="faktor">
          <img src={map} alt="" />
        </div>
      </div>
    </>
  );
}

import React from 'react';
import './header.css';
import place from "../../assets/icons/place.png"
import phone from "../../assets/icons/phone.png"
import bag from "../../assets/icons/bag.png"
import tg from "../../assets/icons/tg.png"
import vk from "../../assets/icons/vk.png"
import ok from "../../assets/icons/ok.png"
import logo from "../../assets/icons/logo.png"
import Search from './Search';
const Header = () => {
  return (
    <div>
      <header>
        <div className="header">
          <div className="header_upper-wrapper">
            <div className="header_upper header_upper__container">
              <ul className="header_upper-menu">
                <li>Гарантия свежести</li>
                <li>Доставка и оплата</li>
                <li>Оптовые поставки</li>
                <li>Контакты</li>
              </ul>
              <ul className="header_upper-menu">
                <li className="header_select-item item_centered">
                  <img src={place} alt="Geolocation icon" />
                  <select className="location">
                    <option value="Санкт-Петербург">Санкт-Петербург</option>
                    <option value="Москва">Москва</option>
                    <option value="Тверь">Тверь</option>
                    <option value="Ярославь">Ярославь</option>
                  </select>
                  <i className="fa-solid fa-caret-down"></i>
                </li>
                <li className="item_centered">
                  <img src={phone} alt="Phone icon" />
                  <a href="tel:88123098288">8 812 309-82-88</a>
                </li>
                <li className="item_centered">
                  <img src={bag} alt="Cart icon" />
                  <a href="#">Корзина</a>
                </li>
                <li>
                  <div className="socials_item">
                    <img src={tg} alt="Telegram icon" />
                    <img src={vk}alt="VK icon" />
                    <img src={ok} alt="OK icon" />
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="header_main header_main__container">
            <ul className="header_main-menu">
              <li><a href="#">СЛАДКИЕ ДНИ</a></li>
              <li className="header_select-item">
                <select name="ПОДАРОЧНЫЕ НАБОРЫ">
                  <option value="ПОДАРОЧНЫЕ НАБОРЫ">ПОДАРОЧНЫЕ НАБОРЫ</option>
                </select>
              </li>
              <li><a href="#">СОБРАТЬ НАБОР</a></li>
            </ul>
            <a href="#"><img src={logo} alt="Logo" /></a>
            <ul className="header_main-menu">
              <li><a href="#">СОЗДАТЬ ДИЗАЙН</a></li>
              <li className="header_select-item">
                <select name="for-companies">
                  <option value="КОМПАНИЯМ">КОМПАНИЯМ</option>
                </select>
                <i className="fa-solid fa-caret-down"></i>
              </li>
              <li className="header_select-item">
                <select name="all-catalogue">
                  <option value="ВЕСЬ КАТАЛОГ">ВЕСЬ КАТАЛОГ</option>
                </select>
                <i className="fa-solid fa-caret-down"></i>
              </li>
            </ul>
          </div>
        </div>
      <Search/>
      </header>
    </div>
  );
};

export default Header;

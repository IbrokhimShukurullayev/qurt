import React from 'react';

import icon01 from "../../assets/footer-icons/icon.01.svg"
import icon02 from "../../assets/footer-icons/icon.02.svg"
import icon03 from "../../assets/footer-icons/icon.03.svg"
import bag from "../../assets/icons/bag.png"
import tg from "../../assets/icons/tg.png"
import vk from "../../assets/icons/vk.png"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__body">
                    <div className="footer__info">
                        <ul className="footer__list">
                            <li className="footer__item">
                                <div className="footer__image">
                                    <img src={icon01} alt="Icon" />
                                </div>
                                <div className="footer__text">
                                    <p>Handmade with love</p>
                                </div>
                            </li>
                            <li className="footer__item">
                                <div className="footer__image">
                                    <img src={icon02} alt="Icon" />
                                </div>
                                <div className="footer__text">
                                    <p>Delivery on the day of order</p>
                                </div>
                            </li>
                            <li className="footer__item">
                                <div className="footer__image">
                                    <img src={icon03} alt="Icon" />
                                </div>
                                <div className="footer__text">
                                    <p>100% almond flour and natural ingredients</p>
                                </div>
                            </li>
                        </ul>
                        <div className="footer__label">
                            <p>© 2024 Macaronshop</p>
                        </div>
                    </div>
                    <div className="footer__inner">
                        <div className="footer__content content-footer">
                            <button type="button" className="content-footer__button">
                                Information
                            </button>
                            <div className="content-footer__body">
                                <nav className="meny-footer">
                                    <ul className="meny-footer__list">
                                        <li className="meny-footer__item">
                                            <a href="#" className="meny-footer__link">About us</a>
                                        </li>
                                        <li className="meny-footer__item">
                                            <a href="#" className="meny-footer__link">Taste and freshness guarantees</a>
                                        </li>
                                        <li className="meny-footer__item">
                                            <a href="#" className="meny-footer__link">Delivery and payment</a>
                                        </li>
                                        <li className="meny-footer__item">
                                            <a href="#" className="meny-footer__link">Contacts</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="footer__content content-footer">
                            <button type="button" className="content-footer__button">
                                Catalog
                            </button>
                            <div className="content-footer__body">
                                <nav className="meny-footer">
                                    <ul className="meny-footer__list">
                                        <li className="meny-footer__item">
                                            <a href="#" className="meny-footer__link">Dessert Catalog</a>
                                        </li>
                                        <li className="meny-footer__item">
                                            <a href="#" className="meny-footer__link">Ready-made kits</a>
                                        </li>
                                        <li className="meny-footer__item">
                                            <a href="#" className="meny-footer__link">Build your own set</a>
                                        </li>
                                        <li className="meny-footer__item">
                                            <a href="#" className="meny-footer__link">Promotions</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="footer__content content-footer">
                            <button type="button" className="content-footer__button">
                                FOR BUSINESS
                            </button>
                            <div className="content-footer__body">
                                <nav className="meny-footer">
                                    <ul className="meny-footer__list">
                                        <li className="meny-footer__item">
                                            <a href="#" className="meny-footer__link">Corporate gifts</a>
                                        </li>
                                        <li className="meny-footer__item">
                                            <a href="#" className="meny-footer__link">For legal entities</a>
                                        </li>
                                        <li className="meny-footer__item">
                                            <a href="#" className="meny-footer__link">Wholesalers</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="footer__contacts contacts-footer">
                        <div className="contacts-footer__phone">
                            <a href="tel:+13334447777" className="contacts-footer__link">+1-333-444-7777</a>
                            <div className="contacts-footer__text">
                                <p>24 hours a day</p>
                            </div>
                        </div>
                        <div className="contacts-footer__networks">
                            <ul className="contacts-footer__list">
                                <li className="contacts-footer__item">
                                    <a href="#" className="contacts-footer__icon">
                                        <img src={tg} alt="Telegram" />
                                    </a>
                                </li>
                                <li className="contacts-footer__item">
                                    <a href="#" className="contacts-footer__icon">
                                        <img src={vk} alt="Facebook" />
                                    </a>
                                </li>
                                <li className="contacts-footer__item">
                                    <div  className="contacts-footer__icon">
                                        <img src={bag} alt="Instagram" />
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

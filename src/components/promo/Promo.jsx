import React from 'react';
import mainpic from "../../assets/images/main-pic.png"


const Promo = () => {
  return (
    <div>
      <section className="promo_wrapper">
        <div className="promo promo__container">
          <img src={mainpic} alt="Main Pic" />
          <div className="promo_titles">
            <div className="promo_titles-upper">
              <h1>Macaronshop</h1>
              <p>since 2013</p>
            </div>
            <div className="promo_titles-sub">
              <h2>Настоящая любовь</h2>
              <p>Пирожные макарон и другие десерты из натуральных ингредиентов, приготовленные с любовью</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Promo;

import React from 'react';
import news from "../../assets/images/news/1.png"
import news1 from "../../assets/images/news/2.png"
import news2 from "../../assets/images/news/3.png"

const News = () => {
  return (
    <div>
      <section className="news news__container">
        <h2 className="section-title">Новости</h2>
        <div className="news-tabs">
          <div className="news-tab">
            <img src={news} alt="News 1" />
            <p className="news-tab_date">25.02.2023</p>
            <h3 className="tab-title">Скоро главный праздник весны!</h3>
            <p className="tab-descr">
              Девушки любят, когда вкусно, красиво и натурально. Смотрите больше
              наборов с десертами ручной работы
            </p>
          </div>
          <div className="news-tab">
            <img src={news1} alt="News 2" />
            <p className="news-tab_date">17.02.2023</p>
            <h3 className="tab-title">Конкурс на 23 февраля!</h3>
            <p className="tab-descr">
              День Защитника Отечества уже совсем скоро! Порадуйте своего
              сладкоежку с помощью аппетитных наборов от МакаронШоп
            </p>
          </div>
          <div className="news-tab">
            <img src={news2} alt="News 3" />
            <p className="news-tab_date">11.02.2023</p>
            <h3 className="tab-title">
              Экспресс-конкурс ко дню <br /> Святого Валентина
            </h3>
            <p className="tab-descr">
              Подарок уже через 2 дняДень всех влюблённых не за горами.
              Расскажи о своих чувствах с помощью сладкой валентинки от МакаронШоп
            </p>
          </div>
        </div>
        <a className="more-btn" href="#">Все новости</a>
      </section>
    </div>
  );
}

export default News;

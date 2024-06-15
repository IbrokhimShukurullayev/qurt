import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Modal from "../model/Modal";
import bag from "../../assets/icons/bag.png";
import Loading from "../loading/Loading";
const API_URL = "https://dummyjson.com";

const Products = () => {
  const [data, setData] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [detailData, setDetailData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  document.body.style.overflow = detailData ? "hidden" : "auto";

  useEffect(() => {
    let id = searchParams.get("detail");
    if (id) {
      setIsLoading(true); 
      axios
        .get(`${API_URL}/products/${id}`)
        .then((res) => {
          setDetailData(res.data);
          setIsLoading(false);
        })
      
    }
  }, [searchParams]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${API_URL}/products`, { params: { limit: 3 } })
      .then((res) => {
        setData(res.data.products);
        setIsLoading(false); 
      })
      
     
  }, []);

  const closeDetailModal = () => {
    setDetailData(null);
    setSearchParams({});
  };

  let productItem = data?.map((product) => (
    <div key={product.id} className="popular-tab">
      <img
        onClick={() => setSearchParams({ detail: product.id })}
        src={product.images[0]}
        alt="Popular item 1"
      />
      <h3 className="tab-title">{product.title}</h3>
      <p className="tab-descr">
        24 штуки в коробке в виде сердца. Ассорти из 6 вкусов
      </p>
      <div className="btns">
        <p className="popular-tab_price">{product.price} руб</p>
        <div className="popular-tab_cart item_centered">
          <img src={bag} alt="Cart icon" />
          В корзину
        </div>
      </div>
    </div>
  ));

  return (
    <div>
      <section className="popular popular__container">
        <h2 className="section-title">Готовые наборы</h2>
        <div className="popular-tabs">
          {isLoading ? (
            <Loading />
          ) : (
            productItem
          )}
        </div>
        <div className="more-btn">Все праздничные наборы</div>
      </section>

      {detailData && (
        <Modal close={closeDetailModal}>
          <div className="popular-tabs">
            <div key={detailData.id} className="popular-tab">
              <img
                onClick={() => setSearchParams({ detail: detailData.id })}
                src={detailData.images[0]}
                alt="Popular item 1"
              />
              <h3 className="tab-title">{detailData.title}</h3>
              <p className="tab-descr">
                24 штуки в коробке в виде сердца. Ассорти из 6 вкусов
              </p>
              <div className="btns">
                <p className="popular-tab_price">{detailData.price} руб</p>
                <div className="popular-tab_cart item_centered">
                  <img src={bag} alt="Cart icon" />
                  В корзину
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Products;

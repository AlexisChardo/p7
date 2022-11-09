import React from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Slide from "../components/Slide";
import products from "../data.json";
import Rating from "../components/Rating";
import Tags from "../components/Tags";
import Hostinfo from "../components/Hostinfo";
import Collapse from "../components/Collapse";

const Product = () => {
  const { productId } = useParams();
  const product = products.find((product) => product.id === productId);
  const { title, pictures, description, host, rating, location, equipments } =
    product;

  return (
    <div>
      <main>
        <div className="singleproducts">
          <Slide slides={pictures} />
          <div className="singleproduct__box">
            <div className="singleproduct__info">
              <h1 className="singleproduct__title">{title}</h1>
              <p className="singleproduct__location">{location}</p>
              <div className="singleproduct__tags">
                {product.tags.map((tag, index) => (
                  <Tags key={index} getTag={tag} />
                ))}
              </div>
            </div>
            <div className="singleproduct__note">
              <Rating rating={rating} />
              <Hostinfo host={host} />
            </div>
          </div>
          <div className="singleproduct__collapse">
            <Collapse title="Description" content={description} />
            <Collapse title="Equipement" content={equipments} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Product;

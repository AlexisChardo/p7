import React from "react";
import { Link } from "react-router-dom";

import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Header from "../components/Header";
import Subtitle from "../components/Subtitle";

import products from "../data.json";
const Home = () => {
  return (
    <div>
      <main>
        <Subtitle />
        <section className="home__products">
          {products.map((product) => {
            return (
              <article key={product.id}>
                <Link to={`/products/${product.id}`}>
                  <Gallery image={product.cover} title={product.title} />
                </Link>
              </article>
            );
          })}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;

import React from "react";
import Footer from "../../Shared Components/Footer/Footer";
import Header from "../../Shared Components/Header/Header";
import Promotion from "../Promotion/Promotion";
import Phones from "../Phones/Phones";

const Home = () => {
  return (
    <section>
      <Header />
      <div className="container">
        <Promotion />
        <h3 className="text-secondary mt-5 pt-5">Popular Shop</h3>
        <div className="row">
          <div className="col-md-3">
            <Phones />
          </div>
          <div className="col-md-3">
            <Phones />
          </div>
          <div className="col-md-3">
            <Phones />
          </div>
          <div className="col-md-3">
            <Phones />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Home;

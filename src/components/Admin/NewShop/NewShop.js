import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../../Shared Components/Header/Header";

const newShop = () => {
  // const form = document.getElementById("newRestaurant");
  // form.addEventListener("submit", newRestaurant);

  async function newShop(event) {
    event.preventDefault();
    const shopName = document.getElementById("shopName").value;
    const shopAddress =
      document.getElementById("shopAddress").value;
    const operatingHours = document.getElementById("operatingHours").value;
    const priceLevel = document.getElementById("priceLevel").value;
    const shopType = document.getElementById("shopType").value;

    // console.log(
    //   restaurantName,
    //   restaurantAddress,
    //   operatingHours,
    //   priceLevel,
    //   restaurantType
    // );

    const result = await fetch("http://localhost:3030/addShop", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        shopName,
        shopAddress,
        operatingHours,
        priceLevel,
        shopType,
      }),
    }).then((res) => res.json());
    if (result.status === "Successfull") {
      alert("New Restaurant Added Successfully");
      window.location.href = "/";
    }
  }

  return (
    <>
      <div className="container-fluid">
        <Header />
        <div className="row mt-5">
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-6 mx-5">
            <h1 className="text-center mb-5">Add New Shop</h1>
            <form
              // id="newRestaurant"
              onSubmit={newShop}
              // enctype="multipart/form-data"
            >
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Shop Name
                </label>
                <input
                  type="text"
                  name="shopName"
                  id="shopName"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Shop Address
                </label>
                <input
                  type="text"
                  name="shopAddress"
                  className="form-control"
                  id="shopAddress"
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Operating Hours
                </label>
                <input
                  type="number"
                  name="operatingHours"
                  className="form-control"
                  id="operatingHours"
                />
              </div>
              <div className="mb-3">
                <label for="formFile" className="form-label">
                  Price Level
                </label>
                <select
                  className="form-select"
                  name="priceLevel"
                  id="priceLevel"
                  aria-label="Default select example"
                >
                  <option selected>€</option>
                  <option>€€</option>
                  <option>€€€</option>
                  <option>€€€€</option>
                </select>
              </div>
              <div className="mb-3">
                <label for="formFile" className="form-label">
                  Shop Type
                </label>
                <select
                  className="form-select"
                  name="shopType"
                  id="shopType"
                  aria-label="Default select example"
                >
                  <option selected>Apple</option>
                  <option>Samsung</option>
                  <option>Oppo</option>
                  <option>MI</option>
                  <option>Black Berry</option>
                </select>
              </div>
              {/* <div className="mb-3">
                <label for="formFile" className="form-label">
                  Restaurant Scenario
                </label>
                <input className="form-control" type="file" name="image" />
              </div> */}
              <button type="submit" className="btn btn-outline-dark">
                {" "}
                Store in Database and Display
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default newShop;

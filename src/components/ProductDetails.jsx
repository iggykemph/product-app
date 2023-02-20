import "../App";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../API";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

function ProductDetails() {
  const [productDetails, setProduct] = useState({});
  const [imagesDetails, setImageDetails] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API_URL}/${id}`)
      .then((res) => {
        setProduct(res.data);
        setImageDetails(res.data.images);
      })
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <div className="product-information">
      <h1 className="title-main">{productDetails.title}</h1>
      <div className="product-details">
        <div className="containter-left">
          <h4>Brand:</h4>
          <p>{productDetails.brand}</p>
          <h4>Description:</h4>
          <p>{productDetails.description}</p>
          <h4>Rating:</h4>
          <p>{productDetails.rating}</p>
          <h4>Category:</h4>
          <p>{productDetails.category}</p>
          <h4>Stock:</h4>
          <p>{productDetails.stock} pcs</p>
        </div>
        <div className="container-right">
          <div className="slide-container">
            <Fade>
              {imagesDetails.map((imgss, index) => (
                <Fade>
                  <div key={index} className="each-fade">
                    <div></div>
                    <img src={imgss} alt="#" />
                  </div>
                </Fade>
              ))}
            </Fade>
          </div>
        </div>
      </div>
      <button className="paginationBttns" onClick={() => navigate(`/`)}>
        back
      </button>
    </div>
  );
}

export default ProductDetails;

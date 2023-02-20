import "../App";
import React, { useState, useEffect } from "react";
import App from "../App";
import { API_URL } from "../API";
import axios from "axios";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";
import Categories from "./Categories";

function ProductList() {
  const [product, setProduct] = useState([]);
  const productsList = product;
  const [pageNumber, setPageNumber] = useState(0);

  const productPerPage = 10;
  const pagesVisited = pageNumber * productPerPage;
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        setProduct(res.data.products);
      })
      .catch((err) => console.log(err));
  });

  const displayProducts = productsList
    .slice(pagesVisited, pagesVisited + productPerPage)
    .map((productsList) => {
      return (
        <div key={productsList.id} className="cardbox">
          <div>
            <img
              src={productsList.thumbnail}
              onClick={() => navigate(`/products/${productsList.id}`)}
              alt="#"
            />
          </div>
          <div className="container">
            <div>
              <h4 onClick={() => navigate(`/products/${productsList.id}`)}>
                {productsList.brand}
                {productsList.title}
              </h4>
            </div>
            <p className="pricetag">${productsList.price}</p>
            <h4>{productsList.description}</h4>
          </div>
        </div>
      );
    });

  const pageCount = Math.ceil(productsList.length / productPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div>
      <div className="cards-section">{displayProducts}</div>
      <div className="paggination-container">
        <ReactPaginate
          previousLabel={"Prev"}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
      </div>
    </div>
  );
}

export default ProductList;

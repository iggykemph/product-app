import "../App";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL_CATEGORIES } from "../API";
import { useParams } from "react-router-dom";

function CategoriesDetails() {
  const [categoriesDetails, setCategoriesDetails] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    axios
      .get(`${API_URL_CATEGORIES}/${category}`)
      .then((res) => {
        setCategoriesDetails(res.data);
      })
      .catch((error) => console.log(error));
  }, [category]);
  return <div>{categoriesDetails}</div>;
}

export default CategoriesDetails;

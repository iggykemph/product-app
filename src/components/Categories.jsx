import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL_CATEGORIES } from "../API";
import { useNavigate } from "react-router-dom";
function Categories() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(API_URL_CATEGORIES)
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => console.log(err));
  });

  return (
    <div>
      {categories.map((categories) => (
        <div>
          <div
            key={categories}
            onClick={() => navigate(`/products/category/${categories}`)}
          >
            {categories}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Categories;

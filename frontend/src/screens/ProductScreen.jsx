import axios from "axios";
import React, { useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { loading: true };
    case "FETCH_SUCCES":
      return { product: action.payload, loading: false };
    case "FETCH_FAIL":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

const ProductScreen = () => {
  const params = useParams();
  const { slug } = params;
  const [{ loading, error, product }, dispatch] = useReducer(reducer, {
    products: [],
    loading: true,
    error: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(`/api/products/slug/${slug}`);
        dispatch({ type: "FETCH_SUCCES", payload: result.data });
      } catch (error) {
        dispatch({ loading: false, payload: error.message });
      }
      // setProducts(result.data);
    };
    fetchData();
  }, [slug]);
  return loading ? (
    <div>Loading...</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <div>{product.name}</div>
  );
};

export default ProductScreen;

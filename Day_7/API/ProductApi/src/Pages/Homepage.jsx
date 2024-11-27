import axios from "axios";
import React, { useEffect,useState } from "react";

const Homepage = () => {
  const [products, setProducts] = useState([]);
    useEffect(() => {
      axios
      .get('https://dummyjson.com/products')
      .then(res => setProducts(res.data.products))
    },[])
  return (
    <>

       {
        products.map((product)=> <div key={product.id}>{product.title}</div>)
       }
    </>
  );
};

export default Homepage;

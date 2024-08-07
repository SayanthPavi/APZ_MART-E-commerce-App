import React, { useEffect, useState } from "react";
import Loading from "../components/PrductsPage/Loading";
import '../Styles/Products.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const Products = () => {
  const [productData, setProductData] = useState([]);
  const [filter, setFilter] = useState(productData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  let componentsMounted = true;

  const [cart, setCart] = useState([]);


  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      let url = "https://fakestoreapi.com/products";
      try{
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);

        if (componentsMounted) {
          setProductData(data);
          setFilter(data);
          setLoading(false);
          console.log(filter);
        }
        return () => {
          componentsMounted = false;
        };
      }catch(error){
        console.error("An error occurred:", error.message);
        setError("An error occurred while fatching weather data.");
      }finally{
        setLoading(false)
      }
     
      
    };
    getProducts();
  }, []);



  // filter product 
  const filterProduct = (cates) => {
    const updateList = productData.filter((p) => p.category === cates);
    setFilter(updateList);
  }

  const addCart = () =>{}
    const removeCart = () =>{}


//  show product 
  const ShowProducts = () => {

    
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-4 pb-4">
          <button className="btn btn-outline-dark me-2 w-25 " onClick={() => setFilter(productData)}>All</button>
          <button className="btn btn-outline-dark me-2 w-25 " onClick={() => filterProduct("electronics")}>Electronices</button>
          <button className="btn btn-outline-dark me-2 w-25 " onClick={() => filterProduct("jewelery")}>Jewelery</button>
          <button className="btn btn-outline-dark me-2 w-25 " onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
          <button className="btn btn-outline-dark me-2 w-25 " onClick={() => filterProduct("women's clothing")}>Women's Clothing</button>
        </div>
        {filter.map((product) => {
        return (
          <>
            <div className="product-container col-md-3 ">
              <div className="card mb-3 me-2  text-center  " key={product.id}>
                <div className="product-img ">
                <NavLink to={`/products/${product.id}`}>
                <img src={product.image} className="card-img-top" alt={product.title} height={300} />
                  </NavLink>
                </div>
                <div className="card-body">
                
                  <h5 className="card-title mb-0">{product.title.substring(0,10)}..</h5>
                  <p className="card-text">
                     {product.description.length> 30 ? product.description.substring(0,80) : product.description}
                    <NavLink to={`/products/${product.id}`} className="fs-6 text-decoration-none fw-normal text-success">..more </NavLink>
                  </p>
                  <p className="card-text fw-normal">
                     {product.category}
                  </p>
                 
                  
                  <div className="rating ">
                    <p>
                      <FontAwesomeIcon
                        className="sa me-1"
                        icon={faStar}
                        style={{ color: "#ff9900" }}
                      />
                      <FontAwesomeIcon
                        className="me-1"
                        icon={faStar}
                        style={{ color: "#ff9900" }}
                      />
                      <FontAwesomeIcon
                        className="me-1"
                        icon={faStar}
                        style={{ color: "#ff9900" }}
                      />
                      <FontAwesomeIcon
                        className="me-1"
                        icon={faStar}
                        style={{ color: "#ff9900" }}
                      />
                      <FontAwesomeIcon
                        className="me-1"
                        icon={faStar}
                        style={{ color: "#ff9900" }}
                      />
                      <span>
                        {product.rating.rate}{" "}
                        <FontAwesomeIcon icon={faAngleDown} size="sm" />
                      </span>
                    </p>
                  </div>
                  <p className="card-text fw-bolder fs-3">
                     ${product.price}
                  </p>
                  <p className="card-text text-secondary">
                     {product.rating.count} + bought in past month
                  </p>
                  
                 
                  <div className="d-flex justify-content-center gap-3 ">
                <button to={"/ProductCart"} className="btn btn-outline-danger fw-medium w-75 ">
                    Add to Cart
                  </button>
                  <button to={`/products/${product.id}`} className="btn btn-outline-danger fw-medium  w-50 ">
                    BUY
                  </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
      </>
    );
  };
  // show product end 

  

  return (
    <>
      <div className="Product-Page-container px-5 my-2 py-5 ">
        <div className="row">
          <div className="col-12 mb-3">
            <h1 className="text-center fw-bold display-5">Latest Products</h1>
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
          {error && <div className="error-message">{}</div>}
        </div>
      </div>
     
    </>
  );
};

export default Products;

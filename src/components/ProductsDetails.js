import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import Loading from "./PrductsPage/Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faAngleDown,faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const ProductsDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      let url = `https://fakestoreapi.com/products/${id}`;
      const response = await fetch(url);
      const data = await response.json();
      setProduct(data);
      setLoading(false);
    };
    getProducts();
  }, []);

  const ShowProducts = () =>{
    
    return(
        <>
        <div className="col-md-6 text-center ">
            <img src={product.image} width={400} height={450} alt={product.title}/>
        </div>
        <div className="col-md-6 mt-5">
            <h4 className="text-uppercase text-black">{product.category}</h4>
            <h1 className="fs-1 mt-3">{product.title}</h1>
            <div className="rating mt-4 lead fw-medium">
                    <p>Rating :
                      <FontAwesomeIcon
                        className="sa me-1 ms-2"
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
                        className="me-2"
                        icon={faStar}
                        style={{ color: "#ff9900" }}
                      />
                      <span>
                       
                        <FontAwesomeIcon icon={faAngleDown} size="sm" />
                      </span>
                    </p>
                  </div>
                  <h3 className="display-5 fw-medium my-4"> ${product.price}</h3>
                  <p className="text-secondary">
                     {product.description}
                    
                  </p>
                  
                  <div className="mt-5">
                  
                    <NavLink to={`/Cart`} className="btn btn-outline-dark me-3 px-4 py-2" >
                        <FontAwesomeIcon icon={faCartPlus} size="lg" />
                    </NavLink>
                   
                    <button className="btn btn-outline-dark me-3 px-4 py-2 fw-medium" >Get no Cost EMI</button>
                    <button className="btn btn-warning me-2 border border-1 border-secondary px-4 py-2 fw-medium" >Buy now</button>
                  </div>
           
        </div>
        
        </>
    )

  }

  return (
    <>
      <div className="Product-Page-container px-5 my-2 py-5 ">
        <div className="row">
        {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </>
  );
};

export default ProductsDetails;

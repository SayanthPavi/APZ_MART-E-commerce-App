import React, { useContext } from "react";
import "../Styles/ProductCart.css";
import { CartContext } from "../context/CartContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus, faTrash} from '@fortawesome/free-solid-svg-icons';
import { assets } from '../assets/Assets'

const ProductCart = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

  const getTotalPrice = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const getTotalQuantity = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  };

  return (
    <div className="container mt-5 mb-5">
      <h2 className="text-center mb-4 fw-bold">Shopping Cart</h2>
      <div className="row">
        <div className="col-lg-8">
          {cart.length > 0 ? (
            <div className="card mb-4 shadow-sm">
              <div className="card-header bg-primary text-white pt-3 ps-4">
                <h4>Cart Items</h4>
              </div>
              <div className="card-body ">
                {cart.map((item) => (
                  <div className="row mb-3 border-bottom pb-4" key={item.id}>
                    <div className="col-md-4 d-flex justify-content-center">
                      <img
                        src={item.image} 
                        className="img-fluid rounded w-50"
                        alt={item.title}
                      />
                    </div>
                    <div className="col-md-8">
                      <h5>{item.title}</h5>
                      <p className="mb-1 lead fw-medium mt-4">Price: ${item.price}</p>
                      <div className="d-flex align-items-center mb-2 mt-3 cart-items">
                        <button
                          className="btn btn-outline-secondary btn-sm me-2 px-2 py-1"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          disabled={item.quantity <= 1}
                        >
                          <FontAwesomeIcon icon={faMinus} />
                        </button>
                        <input
                          type="number"
                          className="form-control text-center" 
                          style={{width: "50px"}} 
                          value={item.quantity}
                          min="1"
                          readOnly
                        />
                        <button
                          className="btn btn-outline-secondary btn-sm ms-2 px-2 py-1"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                        >
                          <FontAwesomeIcon icon={faPlus} />
                        </button>
                      </div>
                      <button
                        className="btn btn-danger btn-sm mt-2"
                        onClick={() => removeFromCart(item.id)}
                      ><FontAwesomeIcon icon={faTrash} className="me-2"/>
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="col-lg-8 text-center ps-5">
              <img src= {assets.emptycart} alt="img" width={350} height={250} className='' />
              <p className="fs-4 fw-bold text-center pt-3 text-capitalize ">Your cart is empty.</p>
            </div>
          )}
        </div>
        <div className="col-lg-4">
          <div className="card shadow-sm ">
            <div className="card-header  bg-success text-white pt-3 ps-4">
              <h4>Summary</h4>
            </div>
            <div className="card-body mt-3">
              <p className="d-flex justify-content-between lead fw-medium">
                Subtotal: ${getTotalPrice().toFixed(2)}
                </p >
              <p className="d-flex justify-content-between mt-4 lead fw-medium">
                Tax (10%): ${(getTotalPrice() * 0.1).toFixed(2)}
                </p>
              <p className="d-flex justify-content-between mt-4 lead fw-medium">
                Total Items: {getTotalQuantity()}
                </p>
              <h4 className="fw-bold d-flex justify-content-between mt-4">Total Amount: ${(getTotalPrice() * 1.1).toFixed(2)}</h4>
              <button className="btn btn-primary btn-block mt-3 me-3 fw-medium">
                Checkout
              </button>
              <button className="btn btn-warning btn-block mt-3 fw-medium border-secondary">
                Confirm Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;

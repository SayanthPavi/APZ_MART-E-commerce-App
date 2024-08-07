import React from "react";
import '../Styles/ProductCart.css'

const ProductCart = () => {
  
  return (
    <>


<div class="container mt-5">
    <h2 class="text-center mb-4">Shopping Cart</h2>
    <div class="row">
        <div class="col-lg-8">
            {/* <!-- Cart Items --> */}
            <div class="card mb-3">
                <div class="card-header">
                    <h4>Cart Items</h4>
                </div>
                <div class="card-body">

                    <div class="row mb-3">
                        <div class="col-md-4">
                            <img src="https://via.placeholder.com/150" class="img-fluid" alt="Product Image"/>
                        </div>
                        <div class="col-md-8">
                            <h5>Product Name</h5>
                            <p class="mb-1">Description of the product.</p>
                            <p class="mb-1">Price: $50</p>
                            <input type="number" class="form-control w-25" value="1" min="1"/>
                            <button class="btn btn-danger btn-sm mt-2">Remove</button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        <div class="col-lg-4">
            {/* <!-- Cart Summary --> */}
            <div class="card">
                <div class="card-header">
                    <h4>Summary</h4>
                </div>
                <div class="card-body">
                    <p>Subtotal: $80</p>
                    <p>Tax: $8</p>
                    <h4 className="fw-medium">Total: $88</h4>
                    <button class="btn btn-primary btn-block mt-3 me-3 fw-medium">Checkout</button>
                    <button class="btn btn-warning btn-block mt-3 fw-medium border-secondary">Confirm Order</button>
                </div>
            </div>
        </div>
    </div>
</div>

    </>
  );
};

export default ProductCart;

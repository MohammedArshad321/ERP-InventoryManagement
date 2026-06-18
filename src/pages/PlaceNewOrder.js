import React from "react";
import "./PlaceNewOrder.css";
import { Link } from "react-router-dom";
import LargeButton from "../components/LargeButton";
import { HiOutlineArrowLeft, HiOutlineTrash } from "react-icons/hi";
import {AiOutlineHeart, AiOutlinePlus, AiOutlineMinus} from "react-icons/ai";
import Shirt from "../media/Shirt.jpg";
import PlainShirt from "../media/plainShirt.jpg";
import DhlLogo from "../media/DHL_logo.png";
import FedxLogo from "../media/FedEx_logo.png";
import UpsLogo from "../media/UPS_logo.png";
import PaypalLogo from "../media/paypal.png";
import MastercardLogo from "../media/MastercardLogo.png";
import VisaLogo from "../media/visa.png";
import ManProfile from "../media/man.png";
export default function PlaceNewOrder() {
  return (
      <div className="placeNewOrder-main-container">
        <div className="shopping-cart-area-container">
          <div className="top-nav-container">
            <Link to="/sales-orders" className="arrow-left">
              <HiOutlineArrowLeft />
            </Link>
            <h2>Place Order</h2>
          </div>
          <div className="customer-multiple-taps">
            <div className="tap-item">Customer1</div>
            <div className="tap-item">Customer2</div>
            <div className="tap-item">Customer3</div>
            <div className="tap-item">Customer3</div>
            <div className="tap-item">Customer3</div>
            <div className="tap-item">Customer3</div>
          </div>
          <div className="shopping-cart-heading">
            <h3>Shopping Cart (5)</h3>
            <div>
              <input type="radio" placeholder=" Select all items" />
              <label>Select all items</label>
            </div>
          </div>
          <div className="product-card-container">
            <div className="product-headings">
              <div className="heading-item1">Product Details</div>
              <div className="heading-item2">Quantity</div>
              <div className="heading-item2">Item Price</div>
            </div>
            <div className="product-card-area">
              <div className="product-card">
                <div className="radio-btn">
                  <input type="radio" />
                </div>
                <div className="place-order-product-details">
                  <div className="product-img-area">
                    <img src={Shirt} alt="product-img" style={{width:"120px", height:"120px", borderRadius:"20px"}} />
                  </div>
                  <div className="product-content-area">
                    <div className="product-content-items">
                      <h4>Men's Classic-fit Pain Shirt</h4>
                      <p>sold by SleekLOOK Clothing</p>
                      <p>Color: Yellow Shirt Size: M</p>
                    </div>
                    <div className="product-icons"> 
                    <HiOutlineTrash /><label>Remove</label>
                    <AiOutlineHeart /><label>Like</label>                              
                    </div>
                  </div>
                </div>
                <div className="place-order-quantity-area">
                  <div className="place-order-quantity">
                  <div className="minus-icon"><AiOutlineMinus /></div>
                    <div className="number">2</div>
                    <div className="plus-icon"><AiOutlinePlus /></div>
                  </div>
                </div>
                <div className="place-order-item-price-area">
                  <div className="place-order-item-price">
                    <div className="product-price">
                      <label>₹ 12000</label>
                    </div>
                    <div className="product-order-total-item">
                      <label>₹ 12000 x 5 item</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-card">
                <div className="radio-btn">
                  <input type="radio" />
                </div>
                <div className="place-order-product-details">
                  <div className="product-img-area">
                    <img src={PlainShirt} alt="product-img" style={{width:"100px", height:"120px", borderRadius:"20px"}} />
                  </div>
                  <div className="product-content-area">
                    <div className="product-content-items">
                      <h4>Men's Classic-fit Pain Shirt</h4>
                      <p>sold by SleekLOOK Clothing</p>
                      <p>Color: Yellow Shirt Size: M</p>
                    </div>
                    <div className="product-icons">
                    <HiOutlineTrash /><label>Remove</label>
                    <AiOutlineHeart /><label>Like</label>  
                    </div>
                  </div>
                </div>
                <div className="place-order-quantity-area">
                  <div className="place-order-quantity">
                    <div className="minus-icon"><AiOutlineMinus /></div>
                    <div className="number">2</div>
                    <div className="plus-icon"><AiOutlinePlus /></div>
                  </div>
                </div>
                <div className="place-order-item-price-area">
                  <div className="place-order-item-price">
                    <div className="product-price">
                      <label>₹ 12000</label>
                    </div>
                    <div className="product-order-total-item">
                      <label>₹ 12000 x 5 item</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="checkout-and-cart-main-container">
          <div className="checkout-details-container">
            <div className="checkout-heading">
              <h3>Checkout Details</h3>
            </div>
            <div className="billing-address-area">
              <div className="billing-heading">
                <h4>Billing Address</h4>
              </div>
              <div className="billing-address-items">
                <div className="billing-customer-img">
                  <img src={ManProfile} alt="customer-img" />
                </div>

                <div className="customer-order-details">
                  <div className="customer-details-item">
                    <label className="customer-name-label">Eric Huffman</label>
                    <label>+1 208 55-0112</label>
                    <label>erichuffman@gmail.com</label>
                  </div>
                  <div className="customer-edit-btn">
                    <button>Edit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="payment-and-shipping-container">
            <div className="shipping-container">
              <div className="shipping-heading">
                <h4>Shipping</h4>
              </div>
              <div className="shipping-content-area">
                <div className="shipping-content-card">
                  <div className="shipping-img">
                    <img src={DhlLogo} alt="img" />
                  </div>
                  <div className="shipping-details">
                    <label>Free</label>
                    <label>05-01-2023</label>
                  </div>
                </div>
                <div className="shipping-content-card">
                  <div className="shipping-img">
                    <img src={FedxLogo} alt="img" />
                  </div>
                  <div className="shipping-details">
                    <label>FedX</label>
                    <label>05-01-2023</label>
                  </div>
                </div>
                <div className="shipping-content-card">
                  <div className="shipping-img">
                    <img src={UpsLogo} alt="img" />
                  </div>
                  <div className="shipping-details">
                    <label>Ups Express</label>
                    <label>05-01-2023</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="payment-container">
              <div className="payment-heading">
                <h4>Payment</h4>
              </div>
              <div className="payment-content-area">
                <div className="payment-content-card">                
                  <div className="payment-img">
                    <img src={PaypalLogo} alt="paypal-logo" />
                  </div>
                  <div className="payment-details">
                    <label>Paypal</label>     
                  </div>          
                </div>
                <div className="payment-content-card">                
                  <div className="payment-img">
                    <img src={MastercardLogo} alt="master-card" />
                  </div>
                  <div className="payment-details">
                    <label>Master Card</label>     
                  </div>          
                </div>
                <div className="payment-content-card">                
                  <div className="payment-img">
                    <img src={VisaLogo} alt="Visa" />
                  </div>
                  <div className="payment-details">
                    <label>Visa</label>     
                  </div>          
                </div>
              </div>
            </div>
          </div>
          <div className="cart-summary-container">
            <div className="cart-summary-heading">
              <h4>Cart Summary</h4>
              <label>(15) Items</label>
            </div>
            <div className="cart-summary-content-area">
              <div className="cart-summary-details-key">
                <div className="cart-summary-details-key-item1">Delivery Chargers</div>
                <div className="cart-summary-details-key-item2">Subtotal</div>
                <div className="cart-summary-details-key-item3">Total</div>
              </div>
              <div className="cart-summary-details-value">
                <div className="cart-summary-details-value-item1">₹ 1100</div>
                <div className="cart-summary-details-value-item2">₹ 25600</div>
                <div className="cart-summary-details-value-item3">₹ 27700</div>
              </div>
            </div>
            <div className="cart-summary-btn">
              <LargeButton
              button_name="Place Order"    
              />
              <LargeButton 
              button_name="Continue Shopping"
              />
            </div>
          </div>
        </div>
      </div>
  );
}

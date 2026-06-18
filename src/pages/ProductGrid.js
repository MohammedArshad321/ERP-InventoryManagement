import React from "react";
import './ProductGrid.css';
import IphonePro from "../media/iphone-14pro.jpeg"
import {MdOutlineAddShoppingCart} from "react-icons/md";
import { Link } from "react-router-dom";
import ViewButtons from "../components/ViewButtons";
import SecondaryInputField from "../components/SecondaryInputField";
import SecondaryButton from "../components/MediumButton";

export default function ProductGrid() {
  return (
      <div className="ProductGrid-main-container">
        <div className="product-top-nav">
          <div className="product-heading">
            <h2>Product Grid</h2>
          </div>
          <div className="product-nav-items">
            <ViewButtons
              link_to_grid="/product-grid"
              link_to_list="/product-list"
            />
            <SecondaryInputField type="text" placeholder="Search" />
            <Link to="/add-product">
              <SecondaryButton button_name="Add Product" />
            </Link>
          </div>
        </div>
        <div className="product-grid-container">
          <div className="mul-product-grid-area">
            <div className="product-grid-card">
              <div className="product-grid-img">
                <img src={IphonePro} alt="product-img" />
              </div>
              <div className="product-grid-details">
                <div className="product-details-heading">
                  <label style={{fontSize:"1.2em"}}>Iphone 14 pro max</label>
                </div>
                <div className="price-tag-n-btn">
                  <p style={{fontWeight:"bold", fontSize:"1.2em"}}>₹ 1,50,000</p>
                  <button><MdOutlineAddShoppingCart /></button>
                </div>
              </div>
            </div>         
            <div className="product-grid-card">
              <div className="product-grid-img">
                <img src={IphonePro} alt="product-img" />
              </div>
              <div className="product-grid-details">
                <div className="product-details-heading">
                  <label style={{fontSize:"1.2em"}}>Iphone 14 pro max</label>
                </div>
                <div className="price-tag-n-btn">
                  <p style={{fontWeight:"bold", fontSize:"1.2em"}}>₹ 1,50,000</p>
                  <button><MdOutlineAddShoppingCart /></button>
                </div>
              </div>
            </div> 
          </div>
        </div>
      </div>
  );
}

import React from "react";
import "./AddCard.css";
import { Link } from "react-router-dom";
import SecondaryInputField from "../components/SecondaryInputField";
import MediumButton from "../components/MediumButton";
import { HiOutlineArrowLeft } from "react-icons/hi";
export default function AddCard() {
  return (
      <div className="AddCard-main-container">
        <div className="add-card-top-nav-container">
          <Link to="/billing" className="arrow-left">
            <HiOutlineArrowLeft />
          </Link>
          <h2>Add New Card</h2>
        </div>
        <div className="add-card-form-container">
          <div className="add-card-form-area">
            <div className="add-card-form-key">
              <label>Name on card</label>
              <label>Card Type</label>
              <label>Card Number</label>
              <label>CVV number</label>
              <label>Expiration</label>
            </div>
            <div className="add-card-form-value">
              <SecondaryInputField type="text" placeholder="name on card"/>
              <select className="card-options">
                <option value="Choose card type">Choose card type</option>
                <option value="Credit Card">Credit Card</option>
                <option value="Debit Card">Debit Card</option>
              </select>
              <SecondaryInputField type="number" placeholder="card number"/>
              <SecondaryInputField type="number" placeholder="cvv code"/>
              <SecondaryInputField type="date" placeholder="expiry date"/>         
            </div>
          </div>
          <div className="btn-add-card-area">
            <MediumButton button_name="Cancel"/>
            <MediumButton button_name="Save"/>
          </div>
        </div>
      </div>
  );
}

import React from "react";
import "./Billing.css";
import { Link } from "react-router-dom";
import MediumButton from "../components/MediumButton";
import CardChip from '../media/card-chip.png'
export default function Billing() {
  return (
      <div className="Billing-main-container">
        <div className="billing-top-nav-container">
          <div className="billing-heading">
            <h2>Billing</h2>
          </div>
          <div className="btn-add-new-card">
           <Link to="/add-card"> <MediumButton button_name="New Card" /></Link>
          </div>
        </div>
        <div className="billing-card-main-container">
          <div className="top-heading-card">
            <h2>Saved Cards</h2>
          </div>
          <div className="billing-card-container">
          <div className="billing-card">
            <div className="top-card">
              <div className="card-type">
                <h4>Credit Card</h4>
              </div>
              <div className="card-chip">
              <h2>VISA</h2>
              </div>
            </div>
            <div className="middle-card">
              <div className="card-chip">
                <img src={CardChip} alt="chip" />
              </div>
              <div className="card-number">
                <h2>1234 5678 9101 1121</h2>
              </div>
            </div>
            <div className="bottom-card">
              <div className="card-holder-name">
                <h4>John Doe</h4>
              </div>
              <div className="card-expiry-date">
                <h4>12/2025</h4>
              </div>
            </div>
          </div>
          <div className="billing-card">
            <div className="top-card">
              <div className="card-type">
                <h4>Credit Card</h4>
              </div>
              <div className="card-chip">
              <h2>VISA</h2>
              </div>
            </div>
            <div className="middle-card">
              <div className="card-chip">
                <img src={CardChip} alt="chip" />
              </div>
              <div className="card-number">
                <h2>1234 5678 9101 1121</h2>
              </div>
            </div>
            <div className="bottom-card">
              <div className="card-holder-name">
                <h4>John Doe</h4>
              </div>
              <div className="card-expiry-date">
                <h4>12/2025</h4>
              </div>
            </div>
          </div>
          <div className="billing-card">
            <div className="top-card">
              <div className="card-type">
                <h4>Credit Card</h4>
              </div>
              <div className="card-chip">
              <h2>VISA</h2>
              </div>
            </div>
            <div className="middle-card">
              <div className="card-chip">
                <img src={CardChip} alt="chip" />
              </div>
              <div className="card-number">
                <h2>1234 5678 9101 1121</h2>
              </div>
            </div>
            <div className="bottom-card">
              <div className="card-holder-name">
                <h4>John Doe</h4>
              </div>
              <div className="card-expiry-date">
                <h4>12/2025</h4>
              </div>
            </div>
          </div>
          </div>
          
        </div>
      </div>
  );
}

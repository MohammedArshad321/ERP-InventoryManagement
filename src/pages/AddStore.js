import React from 'react';
import './AddStore.css';
import { Link } from 'react-router-dom';
import MediumButton from '../components/MediumButton';
import SecondaryInputField from '../components/SecondaryInputField';
import { HiOutlineArrowLeft } from "react-icons/hi";

export default function AddStore() {
    return (
            <div className="AddStore-main-container">
                <div className="add-store-top-nav-container">
                    <Link to="/manage-stores" className="arrow-left"><HiOutlineArrowLeft /></Link>
                    <h2>Add New Store </h2>
                </div>
                <div className="add-store-form-container">
                    <div className="add-store-form-area">
                        <div className="add-store-key">
                        <label>Branch Name</label>
                        <label>Address</label>
                        <label>Apartment</label>
                        <label>City</label>
                        <label>State</label>
                        <label>Postal Code</label>
                        </div>
                        <div className="add-store-value">
                        <SecondaryInputField type="text" placeholder="branch name" />
                        <SecondaryInputField type="text" placeholder="address"/>
                        <SecondaryInputField type="text" placeholder="apartment"/>
                        <SecondaryInputField type="text" placeholder="city"/>
                        <SecondaryInputField type="text" placeholder="state"/>
                        <SecondaryInputField type="number" placeholder="postal code"/>
                        </div>
                    </div>
                    <div className="add-store-btn">
                        <MediumButton button_name="Cancel"/>
                        <MediumButton button_name="Save"/>
                    </div>
                </div>
            </div>
    )
}

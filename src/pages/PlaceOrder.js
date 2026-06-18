import React from 'react';
import './PlaceOrder.css';
import { Link } from 'react-router-dom';
import { HiOutlineArrowLeft } from 'react-icons/hi';
import SecondaryInputField from '../components/SecondaryInputField';
import MediumButton from '../components/MediumButton';

export default function PlaceOrder() {
    return (
            <div className="PlaceOrder-container">
                <div className="top-nav-container">
                    <Link to="/sales-orders" className="arrow-left"><HiOutlineArrowLeft /></Link>
                    <h2>Place Order</h2>
                </div>
                
                <div className="place-order-form-container">
                    <div className="place-order-form-area">
                        <div className="place-order-key">
                            <label>Sales Order Reference ID</label>
                            <label>Product Name</label>
                            <label>Customer ID</label>
                            <label>Sales Date</label>
                            <label>Quantity</label>
                            <label>Total Price</label>
                        </div>
                        <div className="place-order-value">

                            <div className="place-order-inner-items">
                                <SecondaryInputField
                                    type="number"
                                    placeholder="Order Id"
                                />
                            </div>
                            <div className="place-order-inner-items1">
                                <select >
                                    <option value="choose product">Choose Product</option>
                                    <option value="lenovo series">Lenovo Series 123</option>
                                    <option value="Apple series">Apple Macbook Pro</option>
                                    <option value="Dell">Dell Inspiron</option>
                                </select>
                            </div>
                            <div className="place-order-inner-items">
                                <SecondaryInputField
                                    type="number"
                                    placeholder="Customer Id"

                                />
                            </div>
                            <div className="place-order-inner-items">
                                <SecondaryInputField
                                    type="date"
                                    placeholder="Choose Date"
                                />
                            </div>
                            <div className="place-order-inner-items1">
                                <select>
                                    <option value="">Choose Quantity</option>
                                    <option value="">100</option>
                                    <option value="">200</option>
                                    <option value="">500</option>
                                </select>
                            </div>
                            <div className="place-order-inner-items">
                                <SecondaryInputField 
                                    type="number"
                                    placeholder="Total Price"
                                />
                            </div> 
                                           
                        </div>
                        
                    </div>
                    <div className="btn-place-order-area">
                                <MediumButton 
                                    button_name="Cancel"
                                />
                                <MediumButton 
                                    button_name="Save"
                                />
                            </div>    
                </div>
            </div>
    )
}

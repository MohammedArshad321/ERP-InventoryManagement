import React from 'react';
import './OrderDetails.css';
import profile from '../media/profile.jpg';
import { Link } from 'react-router-dom';
import { HiOutlineArrowLeft } from 'react-icons/hi';


export default function OrderDetails() {
    return (
            <div className="OrderDetails-container">
                <div className="top-nav-container1">
                    <div className="order-details-nav-item1">
                        <Link to="/sales-orders" className="arrow-left"><HiOutlineArrowLeft /></Link>
                        <h3>Back to Sales Orders</h3>
                    </div>
                </div>
                <div className="top-nav-container2">
                    <div className="order-details-nav-item2">
                        <h2 className="h2-order-details">Order Details(JBL 500 BT Bluetooth Headset)</h2>
                        <p className="p-order-details">Order ID : #012346</p>
                    </div>
                </div>
                <div className="order-details-container-area">
                    <div className="order-details-items-area">
                        <div className="Basic-details-area">
                            <div className="details-heading">
                                <h4 className="details-h4">Basic Details</h4>
                            </div>
                            <div className="details-items">
                                <div className="details-img">
                                <img src={profile} alt="profile" style={{width:"80px", height:"80px", borderRadius:"50%", margin:"5px"}}/>
                                </div>
                                <div className="details-info">
                                <div className="">Mohammed Arshad</div>
                                <div className="">mohdarshad102me@gmail.com</div>
                                <div className="">+91 9182631746</div>
                                <div className="">Synfusion Software Pvt, Ltd.</div>
                                </div>
                            </div>
                        </div>
                        <div className="shipping-info-area">
                        <div className="details-heading">
                                <h4 className="details-h4">Shipping Address</h4>
                            </div>
                            <div className="details-items">                                
                                <div className="details-info">
                                <div className="company-name">Syncfusion Software Pvt, Ltd.</div>
                                <div className="">Eymirad Complex, AJ 217, Shanthi Colony,</div>
                                <div className="">Telangana, India.</div>
                                <div className="contact-info">Phone: 04426210413</div>
                                </div>
                            </div>
                        </div>
                        <div className="Price-details-area">
                        <div className="details-heading">
                                <h4 className="details-h4">Price Details</h4>
                            </div>
                            <div className="details-items">
                                <div className="details-key">
                                <div className="">List Price</div>
                                <div className="">Selling Price</div>
                                <div className="">Extra Discount</div>
                                <div className="">Shipping Fees</div>
                                <div className="total-amount">Total Amount</div>
                                </div>
                                <div className="details-value">
                                <div className="">₹3,199</div>
                                <div className="">₹3,099</div>
                                <div className="">- ₹100</div>
                                <div className="">₹40</div>
                                <div className="total-amount">₹3039</div>
                                </div>
                            </div>
                        </div>
                        <div className="pickup-info-area">
                        <div className="details-heading">
                                <h4 className="details-h4">Pickup Address</h4>
                            </div>
                            <div className="details-items">
                            <div className="details-info">
                                <div className="company-name">Syncfusion Software Pvt, Ltd.</div>
                                <div className="">Eymirad Complex, AJ 217, Shanthi Colony,</div>
                                <div className="">Telangana, India.</div>
                                <div className="contact-info">Phone: 04426210413</div>
                                </div>
                            </div>
                        </div>

                    </div>
                    
                </div>
                <div className="order-details-map-container">
                    <div className="details-heading">
                                <h4 className="details-h4">Map View</h4>
                            </div>
                    </div>
            </div>
    )
}

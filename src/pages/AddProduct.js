import React from 'react';
import './AddProduct.css';
import {Link} from 'react-router-dom';
import productimg1 from '../media/iphone14pro.jpeg';
import productimg2 from '../media/iphone-14pro.jpeg';
import SecondaryInputField from '../components/SecondaryInputField';
import MediumSelect from '../components/MediumSelect';
import SecondaryButton from '../components/MediumButton';
import { BsPlusLg } from "react-icons/bs";
import { HiOutlineArrowLeft } from "react-icons/hi";
export default function AddProduct() {
    return (
            <div className="Add-product-container">
                <div className="top-nav">
                  <Link to="/products" className="arrow-left"><HiOutlineArrowLeft /></Link>
                    <h2>Add New Product</h2>

                </div>
                <div className="product-form-container">
                    <div className="product-input-form">
                        <div className="input-item1">
                            <label>Product Name</label>
                            <SecondaryInputField
                                type="text"
                                placeholder="product name"
                            />
                            <label>Category</label>
                            <MediumSelect
                                value="Categories"
                                label="Electronics"
                            />
                        </div>
                        <div className="input-item1">
                            <label>Product Code</label>
                            <SecondaryInputField
                                type="text"
                                placeholder="product code"
                            />
                            <label>Add Tags</label>
                            <SecondaryInputField />
                        </div>
                        <div className="input-item1">
                            <label>Description</label>
                            <textarea cols="30" rows="10" placeholder="description"></textarea>
                        </div>
                        <div className="input-item1">
                            <label className="price-label">Price</label>
                            <SecondaryInputField
                                type="text"
                                placeholder="price"
                            />
                            <label>Quantity</label>
                            <MediumSelect
                                value="Categories"
                                label="Electronics"
                            />
                        </div>
                        <div className="input-item1">
                            <label className="tax-rate-label">Tax Rate</label>
                            <SecondaryInputField
                                type="text"
                                placeholder="tax rate"
                            />
                            <label>Discount</label>
                            <SecondaryInputField
                                type="text"
                                placeholder="discount"
                            />
                        </div>
                        <div className="input-item2">
                            <label>Shipping Fees</label>
                            <SecondaryInputField
                                type="text"
                                placeholder="shipping fees"
                            />
                        </div>
                        <div className="input-item3">
                            <SecondaryButton
                                button_name="Cancel"
                            />
                            <SecondaryButton
                                button_name="Save"
                            />
                        </div>
                    </div>
                    <div className="product-add-gallery">
                        <div className="gallery-heading">
                            Product Images
                        </div>
                        <div className="gallery-items">
                            <div className="product-img">
                                <img src={productimg1} alt="" />
                            </div>
                            <div className="product-img">
                                <img src={productimg1} alt="" />
                            </div>
                            <div className="product-img">
                                <img src={productimg2} alt="" />
                            </div>
                            <div className="product-img">
                            <div className="icon-addproduct">
                           <BsPlusLg />
                            </div>
                               
                            </div>

                        </div>

                    </div>
                </div>
            </div>
    )
}

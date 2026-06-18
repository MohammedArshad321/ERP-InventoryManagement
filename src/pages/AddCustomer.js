import React, { useState } from "react";
import "./AddCustomer.css";
import api from "../services/api";
import { Link, useNavigate } from "react-router-dom";
import MediumButton from "../components/MediumButton";
import SecondaryInputField from "../components/SecondaryInputField";
import { HiOutlineArrowLeft } from "react-icons/hi";
export default function AddCustomer() {
    const history = useNavigate();
  const [inputValue, setInputValue] = useState({
    fname: "",
    lname: "",
    companyName: "",
    email: "",
    phoneNo: "",
    website: "",
    country: "",
    state: "",
    city: "",
    address1: "",
    address2: "",
    pinCode: "",
  });
  function handleChange(e) {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setInputValue((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }
  async function handleClick(e){
    e.preventDefault();
    try {
      await api.post('/Inventory_manager', {
        fname: inputValue.fname,
        lname: inputValue.lname,
        companyName: inputValue.companyName,
        email: inputValue.email,
        phoneNo: inputValue.phoneNo,
        website: inputValue.website,
        country: inputValue.country,
        state: inputValue.state,
        city: inputValue.city,
        address1: inputValue.address1,
        address2: inputValue.address2,
        pinCode: inputValue.pinCode,
      });
      history('/customer-list');
    } catch (error) {
      console.error('Failed to add customer:', error);
    }
  }

  return (
      <div className="AddCustomer-container">
        <div className="top-nav-customer">
          <Link to="/customer" className="arrow-left">
            <HiOutlineArrowLeft />
          </Link>
          <h2>Add New Customer</h2>
        </div>
        <div className="customer-form-container">
          <div className="customer-details-area">
            <div className="customer-details-key">
              <label>Customer Name</label>
              <label>Company Name</label>
              <label>Email</label>
              <label>Phone Number</label>
              <label>Website</label>
            </div>
            <div className="customer-details-value">
              <div className="customer-details-inner-items">
                <select>
                  <option value="Mr.">Mr.</option>
                  <option value="Mrs.">Mrs.</option>
                </select>
                <SecondaryInputField
                  type="text"
                  placeholder="first name"
                  name="fname"
                  onChange={handleChange}
                  value={inputValue.fname}
                />
                <SecondaryInputField
                  type="text"
                  placeholder="last name"
                  name="lname"
                  onChange={handleChange}
                  value={inputValue.lname}
                />
              </div>
              <div className="customer-details-inner-items">
                <SecondaryInputField
                  type="text"
                  placeholder="company name"
                  name="companyName"
                  onChange={handleChange}
                  value={inputValue.companyName}
                />
              </div>
              <div className="customer-details-inner-items">
                <SecondaryInputField
                  type="email"
                  placeholder="email"
                  name="email"
                  onChange={handleChange}
                  value={inputValue.email}
                />
              </div>

              <div className="customer-details-inner-items">
                <SecondaryInputField
                  type="number"
                  placeholder="phone number"
                  name="phoneNo"
                  onChange={handleChange}
                  value={inputValue.phoneNo}
                />
              </div>
              <div className="customer-details-inner-items">
                <SecondaryInputField
                  type="text"
                  placeholder="website"
                  name="website"
                  onChange={handleChange}
                  value={inputValue.website}
                />
              </div>
            </div>
          </div>
          <div className="customer-tap-area">
            <div className="tap-items">
              <li>Address</li>
            </div>
            <div className="tap-items">
              <li>Contact Person</li>
            </div>
            <div className="tap-items">
              <li>Remark</li>
            </div>
          </div>

          <div className="customer-address-area">
            <div className="customer-billing-address-area">
              <div className="address-heading">
                <div className="billing-heading">
                  <label>Billing Address</label>
                </div>
              </div>
              <div className="customer-billing-inner-area">
                <div className="customer-billing-key">
                  <label>Country</label>
                  <label>State</label>
                  <label>City</label>
                  <label>Address 1</label>
                  <label>Address 2</label>
                  <label>Postal Code</label>
                  <label>Phone Number</label>
                </div>
                <div className="customer-billing-value">
                  <div className="customer-billing-inner-items">
                    <select name ="country" value={inputValue.country} onChange={handleChange} >
                    <option value="select">List of countries</option>
                      <option value="India" >India</option>
                      <option value="USA" >USA</option>
                    </select>
                  </div>
                  <div className="customer-billing-inner-items">
                    <SecondaryInputField
                      type="text"
                      placeholder="state"
                      name="state"
                      onChange={handleChange}
                      value={inputValue.state}
                    />
                  </div>
                  <div className="customer-billing-inner-items">
                    <SecondaryInputField
                      type="text"
                      placeholder="city"
                      name="city"
                      onChange={handleChange}
                      value={inputValue.city}
                    />
                  </div>
                  <div className="customer-billing-inner-items">
                    <SecondaryInputField
                      type="text"
                      placeholder="address 1"
                      name="address1"
                      onChange={handleChange}
                      value={inputValue.address1}
                    />
                  </div>
                  <div className="customer-billing-inner-items">
                    <SecondaryInputField
                      type="text"
                      placeholder="address 2"
                      name="address2"
                      onChange={handleChange}
                      value={inputValue.address2}
                    />
                  </div>
                  <div className="customer-billing-inner-items">
                    <SecondaryInputField
                      type="text"
                      placeholder="postal code"
                      name="pinCode"
                      onChange={handleChange}
                      value={inputValue.pinCode}
                    />
                  </div>
                  <div className="customer-billing-inner-items">
                    <SecondaryInputField
                      type="number"
                      placeholder="phone number"
                      name="phoneNo"
                      onChange={handleChange}
                      value={inputValue.phoneNo}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="customer-shipping-address-area">
              <div className="address-heading">
                <div className="shipping-heading">
                  <label>Shipping Address</label>
                </div>
                <div className="shipping-inner-checkbox">
                  <input type="checkbox" />
                  copy same address
                </div>
              </div>
              <div className="customer-shipping-inner-area">
                <div className="customer-shipping-key">
                  <label>Country</label>
                  <label>State</label>
                  <label>City</label>
                  <label>Address 1</label>
                  <label>Address 2</label>
                  <label>Postal Code</label>
                  <label>Phone Number</label>
                </div>
                <div className="customer-shipping-value">
                  <div className="customer-shipping-inner-items">
                    <select >
                      <option value="select">Select Country</option>
                      <option value="India">India</option>
                      <option value="USA">USA</option>
                    </select>
                  </div>
                  <div className="customer-shipping-inner-items">
                    <SecondaryInputField type="text" placeholder="state" />
                  </div>
                  <div className="customer-shipping-inner-items">
                    <SecondaryInputField type="text" placeholder="city" />
                  </div>
                  <div className="customer-shipping-inner-items">
                    <SecondaryInputField type="text" placeholder="address 1" />
                  </div>
                  <div className="customer-shipping-inner-items">
                    <SecondaryInputField type="text" placeholder="address 2" />
                  </div>
                  <div className="customer-shipping-inner-items">
                    <SecondaryInputField
                      type="text"
                      placeholder="postal code"
                    />
                  </div>
                  <div className="customer-shipping-inner-items">
                    <SecondaryInputField
                      type="number"
                      placeholder="phone number"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="btn-shipping-area">
            <MediumButton button_name="Cancel" />
            <MediumButton button_name="Save"  onClick={handleClick}/>
          </div>
        </div>
      </div>
  );
}

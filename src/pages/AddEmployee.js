import React from 'react';
import './AddEmployee.css';
import { Link } from 'react-router-dom';
import SecondaryInputField from '../components/SecondaryInputField';
import MediumButton from '../components/MediumButton';
import { HiOutlineArrowLeft } from "react-icons/hi";

export default function AddEmployee() {
    return (
            <div className="AddEmployee-container">
                <div className="top-nav-employee">
                    <Link to="/employees" className="arrow-left"><HiOutlineArrowLeft /></Link>
                    <h2>Add New Employee</h2>
                </div>
                <div className="employee-form-container">
                    <div className="employee-details-area">
                        <div className="employee-details-key">
                            <label>Employee Name</label>
                            <label>Role</label>
                            <label>Department</label>
                            <label>Email Address</label>
                            <label>Phone Number</label>
                            <label>Date of Birth</label>
                            <label>Contact Created On</label>
                        </div>
                        <div className="employee-details-value">
                            <div className="employee-details-inner-items">
                                <select>
                                    <option value="Mr.">Mr.</option>
                                    <option value="Mrs.">Mrs.</option>
                                </select>
                                <SecondaryInputField
                                    type="text"
                                    placeholder="first name"
                                />
                                <SecondaryInputField
                                    type="text"
                                    placeholder="last name"
                                />

                            </div>
                            <div className="employee-details-inner-items">
                                <SecondaryInputField
                                    type="text"
                                    placeholder="role"
                                />
                            </div>
                            <div className="employee-details-inner-items">
                                <SecondaryInputField
                                    type="text"
                                    placeholder="department"
                                />
                            </div>
                            <div className="employee-details-inner-items">
                                <SecondaryInputField
                                    type="email"
                                    placeholder="email address"
                                />
                            </div>
                            <div className="employee-details-inner-items">
                                <SecondaryInputField
                                    type="number"
                                    placeholder="phone number"
                                />
                            </div>
                            <div className="employee-details-inner-items">
                                <SecondaryInputField
                                    type="date"
                                    placeholder="date of birth"
                                />
                            </div>
                            <div className="employee-details-inner-items">
                                <SecondaryInputField
                                    type="date"
                                    placeholder="contact created on"
                                />
                            </div>

                        </div>                
                    </div>
                  
                </div>
                <div className="btn-employee-area">
                            <MediumButton
                                button_name="Cancel"
                            />
                            <MediumButton
                                button_name="Save"
                            />
                        </div>

            </div>
    )
}

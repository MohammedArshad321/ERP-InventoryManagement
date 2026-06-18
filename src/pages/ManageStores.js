import React from 'react';
import './ManageStores.css';
import {Link} from 'react-router-dom';
import MediumButton from '../components/MediumButton';

export default function ManageStores() {
  return (
        <div className="ManageStores-main-container">
            <div className="top-nav-stores-container">
                <div className="nav-heading-store">
                    <h2>Manage Store</h2>
                </div>
               <Link to="/add-store"><MediumButton 
                    button_name="Add Store"
                /></Link>
            </div>
            <div className="multiple-store-details-container">
                <div className="multiple-store-card">
                    <div className="multiple-store-card-key">
                        Hyderabad Branch
                    </div>
                    <div className="multiple-store-card-value">
                      <div className="store-details">
                        <h3>Inventory Store</h3>
                        <p>1A/Banjara Hills, 3rd Street road no 10</p>
                        <p>Hyderabad, Telanaga, 50001.</p>
                        <p>044-563578</p>
                      </div>
                      <div className="store-btn">
                        <MediumButton 
                            button_name="Edit"
                        />
                      </div>
                    </div>
                </div>
                <div className="multiple-store-card">
                    <div className="multiple-store-card-key">
                        Hyderabad Branch
                    </div>
                    <div className="multiple-store-card-value">
                      <div className="store-details">
                        <h3>Inventory Store</h3>
                        <p>1A/Banjara Hills, 3rd Street road no 10</p>
                        <p>Hyderabad, Telanaga, 50001.</p>
                        <p>044-563578</p>
                      </div>
                      <div className="store-btn">
                        <MediumButton 
                            button_name="Edit"
                        />
                      </div>
                    </div>
                </div>
                <div className="multiple-store-card">
                    <div className="multiple-store-card-key">
                        Hyderabad Branch
                    </div>
                    <div className="multiple-store-card-value">
                      <div className="store-details">
                        <h3>Inventory Store</h3>
                        <p>1A/Banjara Hills, 3rd Street road no 10</p>
                        <p>Hyderabad, Telanaga, 50001.</p>
                        <p>044-563578</p>
                      </div>
                      <div className="store-btn">
                        <MediumButton 
                            button_name="Edit"
                        />
                      </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

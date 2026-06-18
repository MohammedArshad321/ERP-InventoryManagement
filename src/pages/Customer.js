import React from 'react';
import './CustomerGrid.css'
import CustomerCard from '../components/CustomerCard';
import CustomerDetails from './CustomerDetails';
import MediumButton from '../components/MediumButton';
import {HiSearch, HiOutlineUserAdd} from 'react-icons/hi'
import ViewButtons from '../components/ViewButtons';
import { Link } from 'react-router-dom';
export default function Customer() {
  return (
      <div className="Customer-container">
      <div className="customer-nav-top">
                    <div className="customerlist-heading">
                        <h2>Customers</h2>
                    </div>
                    <div className="nav-top-items">
                        <div className="customerlist-search-bar">
                            <input type="search" name="" id="" />
                            <i className="customer-search-icon"><HiSearch /></i>
                        </div>
                        <ViewButtons 
                        link_to_grid="/customer-grid"
                        link_to_list="/customer-list"
                        />                      
                        <div className="customerlist-btn">                   
                          <MediumButton 
                            button_name="Export"
                        />
                        <Link to="/add-customer">
                          <MediumButton 
                            button_name="Customer"
                            add_icon = <HiOutlineUserAdd/>
                        />
                        </Link>
                 
                        </div>
                    </div>
                </div>
                <div className="customer-area">
                    {CustomerDetails.map(CustomerDetails => <CustomerCard
                        key={CustomerDetails.id}
                        profile={CustomerDetails.profile}
                        customer_name={CustomerDetails.customer_name}
                        hashtag_icon={CustomerDetails.hashtag_icon}
                        customer_id={CustomerDetails.customer_id}
                        customer_mobile={CustomerDetails.customer_mobile}
                        mobile_icon={CustomerDetails.mobile_icon}
                        customer_email={CustomerDetails.customer_email}
                        email_icon={CustomerDetails.email_icon}
                        order_date={CustomerDetails.order_date}
                        status={CustomerDetails.status}
                        total_order={CustomerDetails.total_order}
                        order_title={CustomerDetails.order_title}
                    />)}

                </div>

            </div>

  )
}

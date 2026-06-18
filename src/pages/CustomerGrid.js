import React, { useEffect, useState } from 'react';
import './CustomerGrid.css';
import MediumButton from '../components/MediumButton';
import CustomerCard from '../components/CustomerCard';
import { HiSearch, HiOutlineUserAdd} from 'react-icons/hi';
import { Link } from 'react-router-dom';
import ViewButtons from '../components/ViewButtons';
import api from '../services/api';
export default function CustomerGrid() {
    const [data, setData] = useState([]);
    const getData = async () => {
        try {
            const res = await api.get('/Inventory_manager');
            setData(res.data);
        } catch (error) {
            console.error('Failed to load customer grid:', error);
        }
    }
    useEffect(()=>{
        getData();
    },[])
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
                            add_icon= <HiOutlineUserAdd/>
                        />
                        </Link>
                         
                        </div>
                    </div>
                </div>
                <div className="customer-area">
                    {data.map(data => <CustomerCard
                        key={data.id}
                        profile={data.profile}
                        customer_name={data.fname}
                        hashtag_icon={data.hashtag_icon}
                        customer_id={data.id}
                        customer_mobile={data.phoneNo}
                        mobile_icon={data.mobile_icon}
                        customer_email={data.email}
                        email_icon={data.email_icon}
                        order_date={data.order_date}
                        status={data.status}
                        total_order={data.total_order}
                        order_title={data.order_title}
                    />)}

                </div>

            </div>
    )
}

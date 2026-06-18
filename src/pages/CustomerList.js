import React, { useEffect, useState } from "react";
import api from "../services/api";
import "./CustomerList.css";
import MediumButton from "../components/MediumButton";
import { Link } from "react-router-dom";
import ViewButtons from "../components/ViewButtons";
import { HiSearch, HiOutlineUserAdd } from "react-icons/hi";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import Table from "../components/Table";
import { CustomerColumns } from "../components/TableData";
export default function CustomerList(id) {
  const [data, setData] = useState([]);
  // getting data from using API axios
  const getData = async () => {
    try {
      const res = await api.get('/Inventory_manager');
      setData(res.data);
    } catch (error) {
      console.error('Failed to load customer list:', error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  async function handleDelete(id) {
    try {
      await api.delete(`/Inventory_manager/${id}`);
      getData();
    } catch (error) {
      console.error('Failed to delete customer:', error);
    }
  }
  const renderCell = (data, columnField) => {
    const cellValue = data[columnField];
    switch (columnField) {
      case "name":
        return (
          <p>
            {data.fname} {data.lname}
          </p>
        );
      case "actions":
        return (
          <i>
            <FiEdit
              className="icon-actions"
              cursor="pointer"
              onClick={() => {
                alert("clicked");
              }}
            />
            <MdDelete
              className="icon-actions"
              cursor="pointer"
              onClick={() => handleDelete(data.id)}
            />
          </i>
        );
      default:
        return cellValue;
    }
  };
  return (
      <div className="CustomerList-container">
        <div className="customer-nav-top">
          <div className="customerlist-heading">
            <h2>Customers</h2>
          </div>
          <div className="nav-top-items">
            <div className="customerlist-search-bar">
              <input type="search" name="" id="" />
              <i className="customer-search-icon">
                <HiSearch />
              </i>
            </div>
            <ViewButtons
              link_to_grid="/customer-grid"
              link_to_list="/customer-list"
            />
            <div className="customerlist-btn">
              <MediumButton button_name="Export" />
              <Link to="/add-customer">
                <MediumButton
                  button_name="Customer"
                  add_icon=<HiOutlineUserAdd />
                />
              </Link>
            </div>
          </div>
        </div>
        <Table data={data} columns={CustomerColumns} renderCell={renderCell} />
      </div>
  );
}

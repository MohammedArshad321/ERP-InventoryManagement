import React from "react";
import "./SalesOrders.css";
import Table from "../components/Table";
import { OrderColumns, OrderData } from "../components/TableData";
import { Link } from "react-router-dom";
import SecondaryInputField from "../components/SecondaryInputField";
import MediumButton from "../components/MediumButton";
import { MdDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
export default function SalesOrders() {
  const renderCell = (data, columnField) => {
    const cellValue = data[columnField];
    switch (columnField) {
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
              onClick={() => {
                alert("deleted");
              }}
            />
          </i>
        );
      default:
        return cellValue;
    }
  };
  return (
      <div className="order-list-container">
        <div className="top-nav-order-list">
          <div className="order-list-heading">
            <h2>Sales Orders</h2>
          </div>
          <div className="order-list-nav-items">
            <SecondaryInputField type="text" placeholder="search" />
            <Link to="/place-new-order">
              <MediumButton button_name="Place order" />
            </Link>
          </div>
        </div>
        <div className="order-list-taps">
          <div className="taps-item">All Orders</div>
          <div className="taps-item">Processing</div>
          <div className="taps-item">Completed</div>
          <div className="taps-item">Cancelled</div>
        </div>
        <Table
          data={OrderData}
          columns={OrderColumns}
          renderCell={renderCell}
        />
      </div>
  );
}

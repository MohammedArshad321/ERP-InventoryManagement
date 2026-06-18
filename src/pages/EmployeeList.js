import React, { useEffect, useState } from "react";
import "./Employee.css";
import { Link } from "react-router-dom";
import { HiOutlineUserAdd } from "react-icons/hi";
import Table from "../components/Table";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { EmployeeColumns } from "../components/TableData";
import SecondaryInputField from "../components/SecondaryInputField";
import LargeButton from "../components/LargeButton";
import MediumButton from "../components/MediumButton";
import ViewButtons from "../components/ViewButtons";
import api from "../services/api";
export default function Employees() {
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const res = await api.get('/Inventory_manager');
      setData(res.data);
    } catch (error) {
      console.error('Failed to load employee list:', error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  const renderCell = (data, columnField) => {
    const cellValue = data[columnField];
    switch (columnField) {
      case "name":
        return (
          <p>
            {data.fname}
            {data.lname}
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
              onClick={() => {
                alert("clicked");
              }}
            />
          </i>
        );
      default:
        return cellValue;
    }
  };
  return (
      <div className="Employee-container">
        <div className="employee-top-nav">
          <div className="nav-items1">
            <h2>Employees</h2>
            <div className="employee-inner-items">
              <ViewButtons
                link_to_grid="/employee-grid"
                link_to_list="/employee-list"
              />
              <Link to="/add-employee">
                <MediumButton
                  add_icon=<HiOutlineUserAdd />
                  button_name="Employee"
                />
              </Link>
            </div>
          </div>
          <div className="nav-items2">
            <SecondaryInputField type="text" placeholder="Name" />
            <SecondaryInputField type="text" placeholder="Title" />
            <select placeholder="Address">
              <option value="Hyderabad">Hyderabad</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Delhi">Delhi</option>
            </select>

            <LargeButton button_name="Search" />
          </div>
        </div>
        <div className="employee-table-container">
          <Table
            data={data}
            columns={EmployeeColumns}
            renderCell={renderCell}
          />
        </div>
      </div>
  );
}

import React from "react";
import "./EmployeeGrid.css";
import SecondaryInputField from "../components/SecondaryInputField";
import LargeButton from "../components/LargeButton";
import { Link } from "react-router-dom";
import { HiOutlineUserAdd } from "react-icons/hi";
import MediumButton from "../components/MediumButton";
import ViewButtons from "../components/ViewButtons";
export default function EmployeeGrid() {
  return (
      <div className="EmployeeGrid-main-container">
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
        <div className="employee-grid-card-container">
          <div className="employee-grid-card">

          </div>
        </div>
      </div>
  );
}

import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";
import ViewButtons from "../components/ViewButtons";
import Table from "../components/Table";
import { ProductDetails } from "../pages/ProductDetails";
import { ProductColumns } from "../components/TableData";
import SecondaryInputField from "../components/SecondaryInputField";
import SecondaryButton from "../components/MediumButton";
// import axios from "axios";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
export default function Product() {
  // const [data, setData] = useState([]);
  // const getData = () => {
  //   axios
  //     .get("https://63d25ab54abff8883408a165.mockapi.io/Inventory_manager")
  //     .then((res) => {
  //       setData(res.data);
  //     });
  // };
  // useEffect(() => {
  //   getData();
  // }, []);
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
      <div className="product-list-container">
        <div className="product-top-nav">
          <div className="product-heading">
            <h2>Product List</h2>
          </div>
          <div className="product-nav-items">
            <ViewButtons
              link_to_grid="/product-grid"
              link_to_list="/product-list"
            />
            <SecondaryInputField type="text" placeholder="Search" />
            <Link to="/add-product">
              <SecondaryButton button_name="Add Product" />
            </Link>
          </div>
        </div>
        <div className="product-table-container">
          <Table
            data={ProductDetails}
            columns={ProductColumns}
            renderCell={renderCell}
          />
        </div>
      </div>
  );
}

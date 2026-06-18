import { Link } from "react-router-dom";
const OrderData = [
  {
    id: 1,
    name: "Mohammed",
    productName: "Iphone 14 pro max",
    date: "30/01/2023",
    status: "Processing",
    quantity: " 1000",
    price: " 1,29,999/-",
    invoice: <Link style={{textDecoration:"underline", color:"blue"}} to="/order-details">View Details</Link>,
  },
  {
    id: 2,
    name: "Arshad",
    productName: "Iphone 14",
    date: "30/01/2023",
    status: "Processing",
    quantity: " 1000",
    price: " 1,29,999/-",
    invoice: <Link style={{textDecoration:"underline", color:"blue"}} to="/order-details">View Details</Link>,
  },
];
const CustomerColumns = [
  { field: "id", title: "Id" },
  { field: "name", title: "Name", },
  { field: "phoneNo", title: "Phone Number" },
  { field: "email", title: "Email" },
  { field: "address1", title: "Address" },
  { field: "actions", title: "Actions" }
];
const EmployeeColumns = [ 
  { field: "name", title: "Name" },
  { field: "title", title: "Title" },
  { field: "email", title: "Email" },
  { field: "address1", title: "Address" },
  { field: "birth-date", title: "Date of Birth" },
  { field: "created", title: "Contact Created" },
  { field: "actions", title: "Actions" },
];
const ProductColumns = [
  { field: "productName", title: "Product Name" },
  { field: "productCode", title: "Product Code" },
  { field: "category", title: "Category" },
  { field: "price", title: "Price" },
  { field: "quantity", title: "Quantity" },
  { field: "stockStatus", title: "Status" },
  { field: "productImg", title: "Product Image" },
  { field: "actions", title: "Actions" },
];
const OrderColumns = [
  { field: "id", title: "Order Code" },
  { field: "name", title: "Customer Name" },
  { field: "productName", title: "Product Name" },
  { field: "date", title: "Date" },
  { field: "status", title: "Status" },
  { field: "quantity", title: "Quantity" },
  { field: "price", title: "Total Price" },
  { field: "invoice", title: "Invoice" },
  { field: "actions", title: "Actions" },
];
export {
  OrderData,
  CustomerColumns,
  EmployeeColumns,
  ProductColumns,
  OrderColumns,
};

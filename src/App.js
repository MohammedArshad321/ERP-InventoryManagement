import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Customer from './pages/Customer';
import AddCustomer from './pages/AddCustomer';
import CustomerGrid from './pages/CustomerGrid';
import CustomerList from './pages/CustomerList';
import Employees from './pages/Employees';
import EmployeeGrid from './pages/EmployeeGrid';
import EmployeeList from './pages/EmployeeList';
import AddEmployee from './pages/AddEmployee';
import Product from './pages/Product';
import ProductGrid from './pages/ProductGrid';
import AddProduct from './pages/AddProduct';
import SalesOrders from './pages/SalesOrders';
import PlaceNewOrder from './pages/PlaceNewOrder';
import OrderDetails from './pages/OrderDetails';
import ManageStores from './pages/ManageStores';
import AddStore from './pages/AddStore';
import Billing from './pages/Billing';
import ProfileOverview from './pages/ProfileOverview';
import ProfileTask from './pages/ProfileTask';
import ProfileAppointment from './pages/ProfileAppointment';
import ProfileBilling from './pages/ProfileBilling';
import ProfileNotes from './pages/ProfileNotes';
import ProfileDocuments from './pages/ProfileDocuments';
import AddCard from './pages/AddCard';
import ErrorPage from './pages/ErrorPage';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';
import ProductList from './pages/ProductList';

function MainLayout() {
  return (
    <div className="App-container">
      <Navbar />
      <div className="content-area">
        <Sidebar />
        <div className="page-wrapper">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<ProtectedRoute />}>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />}>
              <Route index element={<ProfileOverview />} />
              <Route path="task" element={<ProfileTask />} />
              <Route path="appointment" element={<ProfileAppointment />} />
              <Route path="billing" element={<ProfileBilling />} />
              <Route path="notes" element={<ProfileNotes />} />
              <Route path="documents" element={<ProfileDocuments />} />
            </Route>
            <Route path="/customer" element={<Customer />} />
            <Route path="/add-customer" element={<AddCustomer />} />
            <Route path="/customer-grid" element={<CustomerGrid />} />
            <Route path="/customer-list" element={<CustomerList />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="/employee-grid" element={<EmployeeGrid />} />
            <Route path="/employee-list" element={<EmployeeList />} />
            <Route path="/add-employee" element={<AddEmployee />} />
            <Route path="/products" element={<Product />} />
            <Route path="/product-list" element={<ProductList />} />
            <Route path="/product-grid" element={<ProductGrid />} />
            <Route path="/add-product" element={<AddProduct />} />
            <Route path="/sales-orders" element={<SalesOrders />} />
            <Route path="/place-new-order" element={<PlaceNewOrder />} />
            <Route path="/order-details" element={<OrderDetails />} />
            <Route path="/manage-stores" element={<ManageStores />} />
            <Route path="/add-store" element={<AddStore />} />
            <Route path="/billing" element={<Billing />} />
            <Route path="/add-card" element={<AddCard />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

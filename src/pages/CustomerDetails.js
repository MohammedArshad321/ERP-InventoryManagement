import { HiOutlineHashtag } from "react-icons/hi";
import { FiEdit } from "react-icons/fi";
import { MdCall, MdAlternateEmail,MdDelete } from 'react-icons/md';
const CustomerDetails = [
    {
        checkbox: <input type="checkbox" />,
        id: 1,
        profile: "static/media/profile.cfe9f79c746ba3002568.jpg",
        customer_name: "Mohammed Arshad",   
        hashtag_icon: <HiOutlineHashtag />,
        customer_id: 2345678,
        customer_mobile: "+91-9182631746",
        mobile_icon: <MdCall />,
        customer_email: "mohdarshad102me@gmail.com",
        email_icon: <MdAlternateEmail />,
        address: "Hyderabad, Telangana.",
        order_date: "Nov 24, 2022",
        status: "LAST ORDER",
        total_order: 15,
        order_title: "TOTAL ORDERS",
        edit: <button><FiEdit/></button>,
        delete: <button><MdDelete/></button>,
    },
    {
        checkbox: <input type="checkbox" />,
        id: 2,
        profile: "static/media/profile.cfe9f79c746ba3002568.jpg",
        customer_name: "Mohammed Fasiuddin",     
        hashtag_icon: <HiOutlineHashtag />,
        customer_id: 2345678,
        customer_mobile: "+91-8142032861",
        mobile_icon: <MdCall />,
        customer_email: "mdfasiuddin@gmail.com",
        email_icon: <MdAlternateEmail />,
        address: "Hyderabad, Telangana.",
        order_date: "Nov 24, 2022",
        status: "LAST ORDER",
        total_order: 155,
        order_title: "TOTAL ORDERS",
        edit: <button><FiEdit/></button>,
        delete: <button><MdDelete/></button>,
    },

];
export default CustomerDetails ;
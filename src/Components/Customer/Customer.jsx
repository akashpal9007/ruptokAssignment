import React, { useState, useContext, useEffect } from 'react'
import './Customer.css'
import ModalContext from '../../Context/ModalContext'
import UserContext from '../../Context/UserContext/UserContext';
import axios from 'axios';
import Pagination from '../Pagination/Pagination';

const Customer = () => {
  const context = useContext(ModalContext);
  const {users, setUsers} = useContext(UserContext);
  const [currentPage, setCurrentPage] = useState(1);
   const [usersPerPage] = useState(10);

   const indexOfLastUser = currentPage * usersPerPage;
   const indexOfFirstUser = indexOfLastUser - usersPerPage;
   const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
  const totalUsers = users.length;
  const fetchData = async () => {
    const res = await axios.get('https://dummyjson.com/users');
    setUsers(res.data.users)
  }

  const handleDelete = (id) => {
    let newData = users.filter((user)=>{
      return user.id !== id;
    })
    setUsers(newData);
  }

  useEffect(() => {    
    fetchData();
  },[])
  console.log(users);
  return (
    <div className='customer'>
        <div className='customer-topbar'>
            <span className='cust-head'>Customer List</span>
            <button className='addCust-btn' onClick={()=>{context.setShowModal(true)}}>Add Customer</button>
        </div>
        <div className='custTable'>
          <table>
            <tr>
              <th>Customer Name</th>
              <th>GST Number</th>
              <th>STATUS</th>
              <th>TOTAL INVOICES</th>
              <th>TOTAL INVOICES DUE</th>
              <th>ACTIONS</th>
            </tr>
            {users !== [] && currentUsers.map((user)=>(
            <tr className='tableData'>
              <td>
                <div className='custName-col'>
                <img src={user.image} alt="" />
                <div className='custName-col2'>
                <div>
                  {user.firstName + " " + user.lastName}
                </div>
                <div>{user.email}</div>
                </div>
                </div>
                </td>
              <td>{user.ein}</td>
              <td>STATUS</td>
              <td>{"₹" + user.age}</td>
              <td>{"₹" + user.height}</td>
              <td>
                <button className='delete-btn' onClick={()=>handleDelete(user.id)}>Delete</button>
              </td>
            </tr>
            ))
          }
          </table>
        </div>
        <Pagination usersPerPage={usersPerPage} totalUsers={totalUsers} setCurrentPage={setCurrentPage}/>
    </div>
  )
}

export default Customer
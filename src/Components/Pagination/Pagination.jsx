import React from 'react'
import './Pagination.css'

const Pagination = ({ usersPerPage, totalUsers, setCurrentPage }) => {
    const pageNumbers = [];
  
    for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
       pageNumbers.push(i);
    }
  
    return (
       <div className="pagination-container">
          {
            pageNumbers.map((page,index) => {
                return <button key={index} onClick={()=> setCurrentPage(page)}>{page}</button>
            })
          }
       </div>
    );
 };
 
export default Pagination
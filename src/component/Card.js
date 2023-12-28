import React from 'react'
import { Link } from 'react-router-dom'

const Card =({ data }) => {
  return (
   <Link to={data.title === "No. of students" ? "/student" : "/mentor"} className='col-xl-5 col-md-5 text-decoration-none'><div className={`card border-left-${data.color} shadow h-100 py-2`}>
    <div className='card-body'>
      <div className='row no-gutter align-item-center'>
        <div className='col mr-2'>
          <div className={`text-md font-weight-bold text-${data.color} text-uppercase mb-1`}>
            {data.title}
          </div>
          <div className='h5 mb-0 font-weight-bold text-gray-800'>
            {data.value}
          </div>
          <div className='col-auto'>
            <i className={`fas ${data.icon} fa-2x text-${data.color}`}></i>
          </div>
        </div>
      </div>
    </div>
   </div>
   </Link>
  )
}

export default Card;
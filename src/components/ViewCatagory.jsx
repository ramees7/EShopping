import React, { useEffect } from 'react'
import { Button, Card } from 'react-bootstrap'
import { deleteProduct } from '../services/allApis'
import { toast } from 'react-toastify'

function ViewCatagory({product}) {






  return (

    <div className='d-flex justify-content-center'>
      <Card style={{ height: '350px', width:"250px",backgroundColor:"#9adbff" }} className='mx-5 my-3  '>
        <Card.Img variant="top"  src={product?.imageurl}  style={{backgroundColor:"#fff", height:"280px"}}  className='py-3'/>
        <Card.Body className='d-flex justify-content-between'>
          <div className='text-center ' style={{width:"85%"}}>
            <h5 className='w-100'>{product?.name} </h5>
            <h6>price:
              {product?.price}
            </h6>
          </div>

        </Card.Body>
      </Card>
    </div>
  )
}

export default ViewCatagory
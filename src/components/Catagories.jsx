import React, { useEffect } from 'react'
import { Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { deleteCatagory } from '../services/allApis'
import { toast } from 'react-toastify'
// import App from '../App'

function Catagories({catagory,getCatagories,resState}) {

  const removeCatagory=async(id)=>{
    const res=await deleteCatagory(id)
    console.log(res)
    if (res.status >= 200 || res.status < 300) {
      toast.success("Catagory Removed")
      getCatagories()

    }
    else {
      toast.error("Failed")
    }
  }

  // useEffect(()=>{})


  return (
    <div className='d-flex justify-content-center mb-3'>


        <Card style={{ width: '250px',backgroundColor:"#9adbff" }} className=' my-2 ' >
        <Link to={`/products/${catagory?.catagoryname}`}><Card.Img variant="top" height={"200px" }  src={catagory?.catagoryimg} style={{backgroundColor:"#fff",width:"100%"}} /></Link>
          <Card.Body className='d-flex justify-content-between py-0 px-3'>
          <Link to={`/products/${catagory?.catagoryname}`} style={{textDecoration:"none", width:"85%", height:"80px"}} className='d-flex justify-content-center align-items-center'><Card.Title  >{catagory?.catagoryname} </Card.Title></Link>
            <i className="fa-solid fa-trash fa-lg d-flex align-items-center" onClick={()=>removeCatagory(catagory?.id)}></i>
          </Card.Body>
        </Card>

    </div>

  )
}

export default Catagories
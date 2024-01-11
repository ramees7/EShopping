import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Add from '../components/Add'
import ViewCatProducts from '../components/ViewCatProducts'
import { Link } from 'react-router-dom'

function Home() {


  const [resState, setResState] = useState(false)
  const changeResState = () => {
    setResState(true)
  }



  return (
    <div style={{ backgroundColor: "#256c93" }}>
      <Link to={'/'}>
        <div style={{ width: "30px", backgroundColor: "#9adbff", borderRadius: "50%", height: "30px"}} className='d-flex justify-content-center align-items-center float-start mt-5 ms-5'>
          <i className="fa-solid fa-backward   " style={{ color: "#000" }}></i>
        </div>
      </Link>

      <Link to={'/products'}>
        <div style={{ width: "30px", backgroundColor: "#9adbff", borderRadius: "50%", height: "30px" }} className='d-flex justify-content-center align-items-center float-end mt-5 me-5'>
          <i className="fa-solid fa-forward " style={{ color: "#000" }}></i>
        </div>
        
      </Link>
      <Row>
        <Col md={12} sm={12} className='d-flex justify-content-center '>
          <Add changeResState={changeResState} resState={resState}/>
        </Col>
        <Col md='12'>
          <ViewCatProducts resState={resState} changeResState={changeResState}/>
        </Col>

      
      </Row>
 
    </div>
  )
}

export default Home
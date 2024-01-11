import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import AllprodView from '../components/AllprodView'
import { Link } from 'react-router-dom'

function Allproducts() {

  const [refreshAllProd, setRefreshAllProd] = useState(false)
  const changeRefresh = () => {
    setRefreshAllProd(true)
  }

  return (
    <div style={{ backgroundColor: "#256c93" }}>
      <Link to={'/home'}>
        <div style={{ width: "30px", backgroundColor: "#9adbff", borderRadius: "50%", height: "30px" }} className='d-flex justify-content-center align-items-center float-start mt-5 ms-5'>
          <i className="fa-solid fa-backward   " style={{ color: "#000" }}></i>
        </div>
      </Link>
      <h2 className='text-center my-5' style={{ color: "#9adbff" }}>All Products</h2>

      <Row>
        <Col >
          <AllprodView refreshAllProd={refreshAllProd} changeRefresh={changeRefresh} />
        </Col>

      </Row>

    </div>
  )
}

export default Allproducts
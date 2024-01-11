import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div>
            <div className='' style={{ width: "100%", height: "100%", backgroundImage: "linear-gradient(to bottom right, #c0d3dc, #67b9e6)" }}>
                <Row className='p-5'>
                    <Col md={4} sm={12} xs={12} className='p-5 d-flex align-items-center justify-content-center'>
                        <img alt="" src="https://seeklogo.com/images/M/magento-logo-3EDB101875-seeklogo.com.png" width="80" height="80" className="d-inline-block align-top mx-3" />
                            <div className=''>
                                <h2 className='fw-bolder mb-0' style={{color:"#000"}}>E-Shopping</h2>
                                <h6 className='text-center fw-bold'>Enjoy Your Shopping</h6>
                            </div>
                    </Col>
                    <Col md='4' xs='6' sm={6} className='d-flex justify-content-center  my-4' >
                        <div className='d-flex flex-column '>
                            <span style={{ color: "#000", fontSize:"20px"}}  className='fw-bolder mb-4'>LINKS</span>
                            <Link to={'/'} style={{ textDecoration: "none", color: "black" }}>
                                Landing Page
                            </Link>
                            <Link to={'/home'} style={{ textDecoration: "none", color: "black" }}>
                                Home Page
                            </Link>
                            <Link to={'/products'} style={{ textDecoration: "none", color: "black" }}>
                                Product page
                            </Link>
                        </div>
                    </Col>
                    <Col md='4' xs='6' sm={6} className='d-flex justify-content-center my-4'>
                        <div className='d-flex flex-column'>
                        <span style={{ color: "#000", fontSize:"20px"}}  className='fw-bolder mb-4'>Guides</span>
                            <Link to={'https://react.dev/'} style={{ textDecoration: "none", color: "black" }}>React</Link>
                            <Link to={'https://react-bootstrap.netlify.app/'} style={{ textDecoration: "none", color: "black" }}>React Bootstrap</Link>
                            <Link to={'https://fontawesome.com/'} style={{ textDecoration: "none", color: "black" }}>Font Awsome</Link>
                            <Link to={'https://fonts.google.com/'} style={{ textDecoration: "none", color: "black" }}>Google font</Link>
                        </div>
                    </Col>

                </Row>
                <div style={{width:"100%", height:"2px", backgroundColor:"#256c93"}}></div>
                <p className='text-center py-4' style={{ marginBottom: "0", color: "#000" }}>Copyright © 2023 E-Shopping. All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Footer
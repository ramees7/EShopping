import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './Landing.css'
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <div >
        <Row className='row' style={{backgroundColor:"#e19a00"}}>
          <Col md="6" className='d-flex align-items-center justify-content-center p-4'>
            <div className='d-flex flex-column w-75 ' >
              <h1 className='text-center'>E-SHOPPING</h1>
              <p style={{textAlign:"justify", color:"#000"}}> the buying and selling of goods and services, or the transmitting of funds or data, over an electronic network, primarily the internet</p>
              <div className=''>
                <button className='w-25 p-1 shadow me-3' style={{backgroundColor:"#256c93", border:"none", borderRadius:"0% 25% 0% 25%"}}><Link to={'/home'} style={{textDecoration:"none", color:"#9adbff"}}>Shop Now</Link></button>
                <button className='w-25 p-1 shadow ' style={{backgroundColor:"#9adbff", border:"none", borderRadius:" 25% 0% 25% 0%"}}><Link to={'/features'} style={{textDecoration:"none", color:"#256c93"}}>Features</Link></button>
              </div>
              <div className='d-flex justify-content-center mt-5 ' style={{height:"30px"}}>
                <img src="https://i.pinimg.com/originals/20/60/2d/20602d43cc993811e5a6bd1886af4f33.png" width={"50px"} height={"13px"} alt="nike"  className='m-3'/>
                <img src="https://upload.wikimedia.org/wikipedia/commons/8/88/Puma-Logo.png" width={"50px"} alt="puma"  className='me-3'/>
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/24/Adidas_logo.png" width={"40px"} alt="adidas"  className='me-3'/>
                <img src="https://www.freepnglogos.com/uploads/samsung-logo-text-png-1.png" width={"70px"} alt="samsung"  className='me-3'/>
                <img src="https://www.freepnglogos.com/uploads/apple-logo-png/carve-apple-logo-pumpkin-5.png" width={"25px"} alt="apple"  className='me-3'/>
                <img src="https://1000logos.net/wp-content/uploads/2017/12/Haier-Logo.png" width={"50px"} alt="haier"  className='me-3'/>
              </div>
            </div>  
          </Col>
          
          <Col className='d-flex' md='6' >
            <img src="https://png.pngtree.com/thumb_back/fh260/background/20230717/pngtree-d-render-of-blue-background-featuring-shopping-cart-with-mobile-phone-image_3897700.jpg" width={"100%"} alt="" />
          </Col>  
        </Row>
    </div> 
  )
}

export default Landing
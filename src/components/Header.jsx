import React from 'react'
import {  Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
      <Navbar className="py-4" style={{ backgroundImage: "linear-gradient(to bottom right, #c0d3dc, #67b9e6)" }}>
        <Container>
          <Link to={'/'} style={{ textDecoration: "none" }}>
            <Navbar.Brand href="#home"><img alt="" src="https://seeklogo.com/images/M/magento-logo-3EDB101875-seeklogo.com.png" width="30" height="30" className="d-inline-block align-top" />
              {' '} <span style={{fontFamily: 'Teko ,sans-serif', fontSize:"25px", letterSpacing:"2px"}}>E-Shopping</span>
            </Navbar.Brand>
          </Link>
          <div>
          <button className='py-1 px-4 me-3 border-0 rounded'>Sign Up</button>
          <button className='py-1 px-4 border-0 rounded'>Sign In</button>
          </div>

        </Container>
      </Navbar>
    </div>
  )
}

export default Header
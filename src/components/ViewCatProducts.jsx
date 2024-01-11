import React, { useEffect, useState } from 'react'
import { getCatagory } from '../services/allApis'
import Catagories from './Catagories'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function ViewCatProducts({resState,changeResState}) {

const [allCatagory,setAllCatagory]=useState([])

const getCatagories=async()=>{
    let res=await getCatagory()
    setAllCatagory(res.data)
    console.log(res.data)

}
useEffect(()=>{
    getCatagories()
    // changeResState()
    // getCatagory()
},[resState])



  return (
    <div>
        <Row className=''>
            <Col lg={12} className='text-center pb-5 mt-5 mb-3' style={{fontSize:"30px", color:"#9adbff"}}>Catagories</Col>
            {
                allCatagory.map(item=>(
                    <Col md={6} lg={3}>
                        <Catagories catagory={item} getCatagories={getCatagories} resState={resState}/>
                    </Col>
                ))
            }
        </Row>
    </div>
  )
}

export default ViewCatProducts
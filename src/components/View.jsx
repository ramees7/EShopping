import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { getCatagory } from '../services/allApis'
import ViewCatagory from './ViewCatagory'
import { Link } from 'react-router-dom'

function View({ productState, proid }) {
    const [allProductss, setAllProductss] = useState([])





    const getProducts = async () => {
        let res = await getCatagory()
        setAllProductss(res.data)
        console.log("dsafgsdgfg", res.data)
    }
    useEffect(() => {
        getProducts()
    }, [productState])


    console.log(allProductss)
    // console.log("allProductss",proid)

    return (
        <div>
            <Row className='m-5'>
                <Col md={12} className='mb-4'>
                    <Link to={'/home'}>
                        <div style={{ width: "30px", backgroundColor: "#9adbff", borderRadius: "50%", height: "30px" }} className='d-flex justify-content-center align-items-center float-start '>
                            <i className="fa-solid fa-backward   " style={{ color: "#000" }}></i>
                        </div>
                    </Link>
                    <Link to={'/products'}>
                        <div style={{ width: "30px", backgroundColor: "#9adbff", borderRadius: "50%", height: "30px" }} className='d-flex justify-content-center align-items-center float-end '>
                            <i className="fa-solid fa-forward " style={{ color: "#000" }}></i>
                        </div>

                    </Link>
                    <h3 className='text-center'><span style={{ fontSize: "30px", color: "#9adbff" }}>Catagory Products</span></h3>
                </Col>

                {
                    allProductss.filter(productitem => productitem.id === proid).map(productitem => (
                        <div style={{ border: "3px solid #9adbff" }} className='my-3 rounded'>

                            <div className='row ' >
                                <h2 className='col-md-12 text-center my-5' style={{ color: "#fff" }}>{productitem?.catagoryname}</h2>
                                {
                                    productitem?.allproducts?.map(items => (
                                        <div className='col-md-3' >

                                            <ViewCatagory product={items} getProducts={getProducts} />
                                        </div>
                                    ))

                                }
                            </div>
                        </div>

                    ))

                }

            </Row>
        </div>
    )
}

export default View
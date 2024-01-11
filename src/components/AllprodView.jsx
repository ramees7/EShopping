import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import {  deleteProduct, getProduct } from '../services/allApis'
import { toast } from 'react-toastify'

function AllprodView({ changeRefresh, refreshAllProd }) {

    const [allProd, setAllProd] = useState([])

    const getAllProd = async () => {
        let res = await getProduct()
        setAllProd(res.data)
        console.log(AllprodView)
    }


    const removeProduct = async (id) => {
        let ress = await deleteProduct(id)
        console.log("deleteproduct", ress)
        if (ress.status >= 200 || ress.status > 300) {
            toast.success("Product Deleted")
            changeRefresh()

        }
    }

    useEffect(() => {
        getAllProd()

    }, [refreshAllProd])



    console.log("allproductsview", allProd)

    return (
        <div style={{ border: "3px solid #9adbff" }} className='m-5 p-3 rounded'>
            <Row>

                {
                    allProd.map(item => (
                        <Col md={4} lg={3}>
                            <div className='d-flex justify-content-center' >
                                <Card style={{ height: '350px', width: "250px", backgroundColor: "#9adbff" }} className='mx-5 my-3  '>
                                    <Card.Img variant="top" src={item?.imageurl} style={{ backgroundColor: "#fff", height: "280px" }} className='py-3' />
                                    <Card.Body className='d-flex justify-content-between'>
                                        <div className='text-center ' style={{ width: "85%" }}>
                                            <h5 className='w-100'>{item?.name} </h5>
                                            <h6>price:
                                                {item?.price}
                                            </h6>
                                        </div>
                                        <i className="fa-solid fa-trash fa-lg d-flex align-items-center" onClick={() => removeProduct(item?.id)}></i>

                                    </Card.Body>
                                </Card>
                            </div>
                        </Col>
                    ))
                }
            </Row>
        </div>
    )
}

export default AllprodView

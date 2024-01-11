import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

function Features() {
  return (
    <div className='p-5' style={{ backgroundColor:"#256c93"}}>
        <h2 className='text-center' style={{color:"#9adbff"}}>Features</h2>
        <div className='d-flex justify-content-around py-5' style={{flexWrap:"wrap"}}>

            <Card style={{ width: '18rem' , backgroundColor:"#fff" }} className='mb-5 rounded '>
                <Card.Img variant="top" className='p-5' style={{backgroundColor:"#fff"}}  height={"240px"} src="https://static.thenounproject.com/png/2706371-200.png" />
                <Card.Body style={{backgroundColor:"#9adbff"}}> 
                    <Card.Title className='text-center py-2 fw-bold' style={{color:"#000"}}>Add Catagory Product</Card.Title>
                    <Card.Text style={{textAlign:"justify", color:""}}>
                        Simple To Add New Catagory List & Delete Catagory
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem', backgroundColor:"#fff" }}  className='mb-5 rounded '>
                <Card.Img variant="top"  className='p-5'  height={"240px"}  src="https://static.thenounproject.com/png/3022246-200.png" />
                <Card.Body style={{backgroundColor:"#9adbff"}}>
                    <Card.Title className='text-center py-2  fw-bold' style={{color:"#000"}}>Add New Products</Card.Title>
                    <Card.Text style={{textAlign:"justify"}}>
                        Easy To Add New Products On Thats Specific Catagory & Delete Product
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem', backgroundColor:"#fff" }}  className='mb-5 rounded '>
                <Card.Img variant="top" className='p-5'   height={"240px"} src="https://icons.veryicon.com/png/o/miscellaneous/t3-linear-icon/category-8.png" />
                <Card.Body style={{backgroundColor:"#9adbff"}}>
                    <Card.Title className='text-center py-2  fw-bold' style={{color:"#000"}}>List Specific Catagory</Card.Title>
                    <Card.Text style={{textAlign:"justify"}}>
                        Here We can Easily to View The Specific Catagory Products
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' , backgroundColor:"#fff" }}  className='mb-5 rounded '>
                <Card.Img variant="top" className='p-5'  height={"240px"} src="https://thumbs.dreamstime.com/b/checklist-product-list-icon-design-226637256.jpg" />
                <Card.Body style={{backgroundColor:"#9adbff"}}>
                    <Card.Title className='text-center py-2  fw-bold' style={{color:"#000"}}>All Products</Card.Title>
                    <Card.Text style={{textAlign:"justify"}}>
                        Here We Can See All Added Products Without Catagory List
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
        
    </div>
  )
}

export default Features
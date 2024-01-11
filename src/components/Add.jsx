import React, { useEffect, useState } from 'react'
import { Button, Dropdown, FloatingLabel, Form, Modal } from 'react-bootstrap';
import { addCatagory, addProducts, getCatagory, getSpecificCatagory, getSpecificCatagoryVideo, getSpecificProduct, updateCatagory } from '../services/allApis';
import './Add.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Add({ changeResState, resState }) {
  const [show, setShow] = useState(false);
  const [products, setProducts] = useState({
    id: "", name: "", price: "", imageurl: "", catagoryname: ""
  })

  const [catagoryNames, setCatagoryNames] = useState([])

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);




  const handleProductDetails = (e) => {
    const { name, value } = e.target
    console.log(e.target)
    setProducts({ ...products, [name]: value })
  }

  const getCatagoryName = async () => {
    let res = await getCatagory()
    setCatagoryNames(res.data)
    console.log(res.data)
  }






  const uploadProucts = async () => {
    const { id, name, price, imageurl, catagoryname } = products
    if (!id || !name || !price || !imageurl || !catagoryname) {
      toast.warning("fill the product details")
    }
    else {
      let response = await addProducts(products)
      console.log(response)
      if (response.status >= 200 || response.status < 300) {
        setShow(false)
        changeResState()
        toast.success("New Product Uploaded !!")
      }
      else {
        toast.error("Product Upload Failed")
      }
    }
  }
  console.log(products)

  // -------------------------------------------catagory function------------------------------------------------------------------------

  const [show1, setShow1] = useState(false);
  const [catagory, setCatagory] = useState({
    id: "", catagoryname: "", catagoryimg: "", allproducts: []
  })

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const handleCatagoryDetails = (e) => {
    const { name, value } = e.target
    console.log(e.target)
    setCatagory({ ...catagory, [name]: value })
  }



  const uploadCatagory = async () => {
    const { id, catagoryname, catagoryimg } = catagory
    if (!id || !catagoryname || !catagoryimg  ) {
      toast.warning("Fill The Details")
    }
    else {
      let response = await addCatagory(catagory)
      console.log(response)
      if (response.status >= 200 || response.status < 300) {
        setShow1(false)
        changeResState()
        toast.success("New Catagory Uploaded !!")
      }
      else {
        toast.error("Catagory Upload Failed")
      }
    }
  }

  console.log(catagory)

  


  // -----------------------------------------------catagory function---------------------------------------------------------------------

  const onClickCatagory = async (e, catagoryname,id) => {
    
    console.log("Target catagory Id", catagoryname)

    const catpro = await  (catagoryname)
    console.log(catpro.data)


    console.log("Target Product Id", id)
    const catprooo =  products
    console.log(catprooo)

    
      let selectedCatagory= catagoryNames?.find(item=>item?.id===catagoryname)
      console.log("sfdfdsf" ,selectedCatagory)
    selectedCatagory.allproducts.push(catprooo)
    console.log(selectedCatagory)
    const ress=await updateCatagory(catagoryname,selectedCatagory)
    console.log(ress)
    if (ress.status >= 200 || ress.status < 300) {
          uploadProucts()
        }
      
  }

  
  useEffect(() => {
    getCatagoryName()
  }, [resState])


  return (
    <>
    {/* ----------------------------------------------------------product button-------------------------------------------------- */}
      <div className='d-flex justify-content-center me-2'>
        <button onClick={handleShow} className='p-2 mt-5 rounded add-btn'  ><i className="fa-solid fa-plus" style={{ color: " #000000" }}> Add Products</i></button>

        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>

          <Modal.Header closeButton>
            <Modal.Title >Product Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FloatingLabel controlId="floatingID" label="product ID" className="mb-3">
              <Form.Control type="text" placeholder="Product ID" name='id' onChange={(e) => handleProductDetails(e)} />
            </FloatingLabel>
            <FloatingLabel controlId="floatingname" label="product name" className="mb-3">
              <Form.Control type="text" placeholder="Product Name" name='name' onChange={(e) => handleProductDetails(e)} />
            </FloatingLabel>
            <FloatingLabel controlId="floatingprice" label="product Price" className="mb-3">
              <Form.Control type="text" placeholder="Product Price" name='price' onChange={(e) => handleProductDetails(e)} />
            </FloatingLabel>
            <FloatingLabel controlId="floatingimage" label="product Image Url" className="mb-3">
              <Form.Control type="text" placeholder="Product Image Url" name='imageurl' onChange={(e) => handleProductDetails(e)} />
            </FloatingLabel>

            <FloatingLabel controlId="floatingimage" label="Product Catagory" className="mb-3" >
              <Form.Select aria-label="Default select example" name="catagoryname" onChange={(e) => handleProductDetails(e)}  >
                <option disabled   >Select Catagory</option>
                {
                  catagoryNames.map(item => (
                    <option value={item?.id}  >{item?.catagoryname}</option>
                  ))
                }
              </Form.Select>
            </FloatingLabel>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={(e) => onClickCatagory(e, products?.catagoryname ,products?.id)}  >Add</Button>
          </Modal.Footer>
        </Modal>
      </div>
{/* ----------------------------------------------------------product button-------------------------------------------------- */}


      {/* -----------------------------------------------catagory button--------------------------------------------------------- */}

      <div className='d-flex justify-content-center ms-2'>
        <button onClick={handleShow1} className='p-2 mt-5 rounded add-btn '><i className="fa-solid fa-plus" style={{ color: " #000000" }}>Add Catagory</i></button>


        <Modal show={show1} onHide={handleClose1} backdrop="static" keyboard={false}>
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FloatingLabel controlId="floatingID" label="Catagory ID" className="mb-3">
              <Form.Control type="text" placeholder="Product ID" name='id' onChange={(e) => handleCatagoryDetails(e)} />
            </FloatingLabel>
            <FloatingLabel controlId="floatingname" label="Catagory name" className="mb-3">
              <Form.Control type="text" placeholder="Product Name" name='catagoryname' onChange={(e) => handleCatagoryDetails(e)} />
            </FloatingLabel>
            <FloatingLabel controlId="floatingname" label="Catagory image" className="mb-3">
              <Form.Control type="text" placeholder="Product Name" name='catagoryimg' onChange={(e) => handleCatagoryDetails(e)} />
            </FloatingLabel>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose1}>
              Close
            </Button>
            <Button variant="primary" onClick={uploadCatagory} >Add</Button>
          </Modal.Footer>
        </Modal>
      </div>
{/* -----------------------------------------------catagory button--------------------------------------------------------- */}

    </>
  )
}

export default Add
import React, { useEffect, useState } from 'react'
import View from '../components/View'
import { Col, Row } from 'react-bootstrap'


function Products({proid}) {
  const [productState, setProductState] = useState(false)
  const changeproductState= () => {
    setProductState(true)
  }

  // useEffect(()=>{
  //   changeproductState()
  // },[productState])


  return (
    <div style={{backgroundColor:"#256c93"}}>
      <Row >
        
        <Col >
        
          <View productState={productState} proid={proid} changeproductState={changeproductState}/>
        </Col>
      </Row>

    </div>
  )
}

export default Products
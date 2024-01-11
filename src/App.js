
import { Route, Routes, useParams } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Landing from './pages/Landing';
import Home from './pages/Home';
import Products from './pages/Products';
import Footer from './components/Footer';
import Features from './pages/Features'
import { useEffect, useState } from 'react';
import { getCatagory } from './services/allApis';
import Allproducts from './pages/Allproducts';
import { ToastContainer } from 'react-toastify';

function App() {

  const [allCatagory, setAllCatagory] = useState([])


  const getProducts = async () => {
      let res = await getCatagory()
      setAllCatagory(res.data)
      console.log(res.data)
  }
  useEffect(() => {
      getProducts()
  }, [])



  return (
    <div className="App" >
      <Header/>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/features' element={<Features/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/products' element={<Allproducts />}/>
        {
          allCatagory.map(item=>(
           <Route path={`/products/${item.catagoryname}`} element={<Products proid={item.id} />}/> 
          ))
        }

      </Routes>
      <Footer/>
      <ToastContainer/>
    </div>
  );
}

export default App;

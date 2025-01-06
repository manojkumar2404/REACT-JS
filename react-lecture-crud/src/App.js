import React from 'react'
import Myproduct from './Myproduct'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Singleproduct from './Singleproduct'
import Login from './Login'
import Registration from './Registration'
import { Provider } from 'react-redux'
import mystore from './store/store'
import Home from './components/Home'
import Cart from './components/Cart'
import Wish from './components/Wish'
import Cloth from './components/Cloth'
import Electronics from './components/Electronics'
import Toys from './components/Toys'
import Header from './components/Header'
import Footer from './components/Footer'


export default function App() {
  return (
    <div>
      {/* <Router>
        <Routes>
          <Route path='/' element={<Registration></Registration>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route></Route>
          <Route path='/product' element={<Myproduct></Myproduct>}></Route>
          <Route path="/product/:id" element={<Singleproduct />} />

        </Routes>
      </Router> */}

    <Header/>
      <Provider store={mystore}>
        <Router>
          <Routes>
            <Route path='' element= {<Home></Home>}></Route>
            <Route path='' element= {<Cart></Cart>}></Route>
            <Route path='' element={<Wish></Wish>}></Route>
            <Route path='' element={<Cloth></Cloth>}></Route>
            <Route path='' element={<Electronics></Electronics>}></Route>
            <Route path='' element={<Toys></Toys>}></Route>
          </Routes>
        </Router>
      </Provider>
    <Footer/>
    </div>
  )
}




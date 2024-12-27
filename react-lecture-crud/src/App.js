import React from 'react'
import Myproduct from './Myproduct'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Singleproduct from './Singleproduct'
import Login from './Login'
import Registration from './Registration'
import { Provider } from 'react-redux'
import mystore from './store/store'


export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Registration></Registration>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route></Route>
          <Route path='/product' element={<Myproduct></Myproduct>}></Route>
          <Route path="/product/:id" element={<Singleproduct />} />

        </Routes>
      </Router>

      <Provider store={mystore}>

      </Provider>
    </div>
  )
}




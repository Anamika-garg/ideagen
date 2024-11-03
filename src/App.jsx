import React from 'react'
import SignUp from './components/SignUp'
import Login from './components/Login'
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Layout from './components/Layout'

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>} />
        <Route path="/product" element={<Layout/>} />
        <Route path="/theme" element={<Layout/>} />
        <Route path="/analytics" element={<Layout/>} />
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
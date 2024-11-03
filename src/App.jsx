import React from 'react'
import SignUp from './components/SignUp'
import Login from './components/Login'
import {BrowserRouter , Routes , Route} from 'react-router-dom';

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
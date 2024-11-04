import React from 'react'
import SignUp from './components/SignUp'
import Login from './components/Login'
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Layout from './components/Layout'
import SetupGuide from "./components/SetupGuide";
import ProductSection from "./components/ProductSection";
import AnalyticsSection from "./components/AnalyticsSection";
import Theme from "./components/Theme";

const App = () => {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<SetupGuide />} />
          <Route path="product" element={<ProductSection />} />
          <Route path="analytics" element={<AnalyticsSection />} />
          <Route path="theme" element={<Theme />} />
        </Route>
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
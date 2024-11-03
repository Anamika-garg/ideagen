import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import SetupGuide from "./SetupGuide";
import ProductSection from "./ProductSection";
import AnalyticsSection from "./AnalyticsSection";
import { useLocation } from 'react-router-dom';
import Theme from "./Theme";


function Layout() {
  const [item , setItem] = useState(<SetupGuide/>)

  const location = useLocation();
  const currentURL = window.location.href;
  console.log(currentURL);

  useEffect(()=>{
    if(currentURL.includes('/product')){
      setItem(<ProductSection/>)
    }
    else if(currentURL.includes('/analytics')){
      setItem(<AnalyticsSection/>)
    }
    else if(currentURL.includes('/theme')){
      setItem(<Theme/>)
    }
    else{
      setItem(<SetupGuide/>)
    }
  },[])

  
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Header />
        <main className="p-4">
          
          {item}
          
        </main>
      </div>
    </div>
  );
}

export default Layout;

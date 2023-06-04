import React from 'react'
import { useEffect, useState } from 'react'
// import { Route, Routes } from 'react-router-dom'
// import Header from './components/Header'
import Home from 'src/views/Home'
// import Project from './views/Project'
// import { ToastContainer } from 'react-toastify'


const CrowdFunding = () => {
  const [loaded, setLoaded] = useState(false)


  return (
    <div className="min-h-screen relative">
      <Home/>
    </div>
  )
}

export default CrowdFunding
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import HomePage from './components/pages/frontend/homepage/HomePage'
import Single from './components/pages/frontend/single/Single'

const App = () => {

  return (

      <Router>
        <Routes>
          <Route index element={<HomePage/>}/>
          <Route path='/recipe/single/:slug' element={<Single/>}/>
        </Routes>
      </Router>

  )
}

export default App
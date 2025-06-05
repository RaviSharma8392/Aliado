import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import AppLayout from './layout/AppLayout'
import Service from './Pages/Service'
import ProjectsSection from './Pages/Projects'
import TeamPage from './Pages/Teams'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<AppLayout/>}>
        <Route index element={<Home/>}/>
                        <Route path='/service' element={<Service/>}/>
                        <Route path='/projects' element={<ProjectsSection/>}/>
                                                <Route path='/team' element={<TeamPage/>}/>

                        </Route>
 

      </Routes>
    </div>
  )
}

export default App

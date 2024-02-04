
import { Navigate, Route, Routes } from 'react-router-dom'

import './App.css'

import Registration from './Pages/Registration'
import Dashboard from './Pages/Dashboard'

function App() {
  

  return (
    <>
     <div>
      <Routes>
        <Route path='/' element = {<Registration/>}/>
        <Route path='/dash' element = {<Dashboard/>}/>
        <Route path='/*' element = {<Navigate to={'/'}/>}/>
      </Routes>
     </div>
    </>
  )
}

export default App

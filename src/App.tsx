

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Activate from './pages/Activate/Activate'
import Authenticate from './pages/Authenticate/Authenticate'
import { CakeView } from './store/CakeSlice/cakeView'
import ForgotPassword from './pages/ForgotPassword/ForgotPassword'

function App() {


  return (
  <>
  
  <div className="App">
  <BrowserRouter>
  <Routes>
  
   <Route path='/forgot' element={<ForgotPassword/>}/>
    <Route path='/' element={<Authenticate/>}/>
    <Route path='/activate' element={<Activate/>}/>

  </Routes>
  </BrowserRouter>
  </div>
  </>
  )
}

export default App

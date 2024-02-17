import { Form, Outlet, Route ,Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import Banner from './Components/Banner'
import Home from './Components/Home'
import Read from './Components/Read'
import Footer from './Components/Footer'
import Form1 from './Components/Form1'
import Dashboard from './Components/Dashboard'
import Login from './Components/Login'
import Register from './Components/Register'
import Notfound from './Components/Notfound'


function App() {

  return (
    <>
      
      
      <Routes>
      <Route path='/' element={<MainLayOut/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/read/:id' element={<Read/>}/>
        <Route path='/form' element={<Form1 edit={false} />}/>
        <Route path='/edit' element={<Form1 edit={true} />}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/*' element={<Notfound/>}/>
      </Route>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      </Routes>
      
      
      
    </>
  )
}

export default App


function MainLayOut(){
  return(
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

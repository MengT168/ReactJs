import { Form, Route ,Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import Banner from './Components/Banner'
import Home from './Components/Home'
import Read from './Components/Read'
import Footer from './Components/Footer'
import Form1 from './Components/Form1'
import Dashboard from './Components/Dashboard'


function App() {

  return (
    <>
      <Header/>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/read/:id' element={<Read/>}/>
        <Route path='/form' element={<Form1/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    
      <Footer/>
      
    </>
  )
}

export default App

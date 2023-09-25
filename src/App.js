//import logo from './logo.svg';
import { Component } from 'react';
import './App.css';
import PageInicio from './components/PageInicio';
import Menu from './components/Menu';
import Servicios from './components/Servicios';
import Consulta from './components/Consulta';
import Casos from './components/Casos';
import Somos from './components/Somos';
import Contacto from './components/Contacto';
import { CartProvider } from 'react-use-cart';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

class App extends Component{
  render (){


      return (
      <>
<CartProvider>
        <Router>
          <Menu />
          <Routes>
            <Route path='/' element={<PageInicio />}/>
            <Route path='/PageInicio' element={<PageInicio/>}/> 
            <Route path='/Casos' element={<Casos/>}/> 
            <Route path='/Consulta' element={<Consulta/>}/> 
            <Route path='/Contacto' element={<Contacto/>}/>
            <Route path='/Servicios' element={<Servicios/>}/>
            <Route path='/Somos' element={<Somos/>}/>
        

          </Routes>
        </Router>
        </CartProvider>

      </>

    )






  };
}

export default App;

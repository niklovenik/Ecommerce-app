import {BrowserRouter,Routes, Route} from "react-router-dom"

import Header from "./Component/Header/Header"
import Footer from "./Component/Footer/Footer"
import Home from './Component/Home/Home'
import Category from './Component/Category/Category'
import SingleProduct from './Component/SingleProduct/SinglrProduct'
import Newsletter from './Component/Footer/Newsletter/Newsletter'
import AppContext from "./utils/context"


function App() {
  return (
    <div >
      <BrowserRouter>
      <AppContext>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/category/:id" element={<Category/>}/>
        <Route path="/product/:id" element={<SingleProduct/>}/>
      </Routes>
      <Newsletter/>
      <Footer/>
      </AppContext>
      </BrowserRouter>
    
      
    </div>
  );
}

export default App;

import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import CartWidget from './components/CartWidget'
import ItemDetail from './components/ItemDetail'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    
    <div>
      <BrowserRouter>
        <NavBar />
      <Routes>
        <Route exact path='/' element={<ItemListContainer />} />
        <Route exact path='/ItemListContainer' element={<ItemListContainer />} />
        <Route exact path='/ItemDetailContainer' element={<ItemDetailContainer />} />
        <Route exact path='/CartWidget' element={<CartWidget />} />
        <Route exact path='/category/:category' element={<ItemListContainer />} />
        <Route exact path='/item/:id' element={<ItemDetailContainer />} />
      </Routes>
      </BrowserRouter>
    </div>
    
  )
}

export default App

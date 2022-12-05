import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import ExpoCarreras from './component/ExpoCarreras'
import N1 from './pages/N1'
import N2 from './pages/N2'
import N3 from './pages/N3'
import N4 from './pages/N4'
import N5 from './pages/N5'
import N6 from './pages/N6'
import N7 from './pages/N7'

import Noticia1 from './pages/Noticia1'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>} />

      <Route path='/Noticia1' element={<N1/>}/>
      <Route path='/Noticia2' element={<N2/>}/>
      <Route path='/Noticia3' element={<N3/>}/>
      <Route path='/Noticia4' element={<N4/>}/>
      <Route path='/Noticia5' element={<N5/>}/>
      <Route path='/Noticia6' element={<N6/>}/>
      <Route path='/Noticia7' element={<N7/>}/>

    



    </Routes>
  </BrowserRouter>
)

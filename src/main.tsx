import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.tsx'
import TemplateCasamiento from './pages/TemplateCasamiento.tsx'
import TemplateCumpleanos from './pages/TemplateCumpleanos.tsx'
import TemplateQuinceanos from './pages/TemplateQuinceanos.tsx'
import TemplateBabyShower from './pages/TemplateBabyShower.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/template/casamiento" element={<TemplateCasamiento />} />
        <Route path="/template/cumpleanos" element={<TemplateCumpleanos />} />
        <Route path="/template/quince" element={<TemplateQuinceanos />} />
        <Route path="/template/babyshower" element={<TemplateBabyShower />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

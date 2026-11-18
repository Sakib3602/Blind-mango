import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MenuPage from './components/MenuPage.tsx'
import ScrollToTop from './components/ScrollToTop.tsx'
import BookingRoute from './components/BookingRoute.tsx'
import { HelmetProvider } from 'react-helmet-async'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <HelmetProvider>
    <ScrollToTop></ScrollToTop>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/book" element={<BookingRoute/>} />
      </Routes>
      </HelmetProvider>
    </BrowserRouter>
  </StrictMode>,
)
"use client"

import { useState } from "react"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Categories from "./components/Categories"
import ProductGrid from "./components/ProductGrid"
import ProductModal from "./components/ProductModal"
import Cart from "./components/Cart"
import { CartProvider } from "./context/CartContext"
import Footer from "./components/Footer"
import ClientesDestacados from "./components/ClientesDestacados"
import AboutUs from "./components/AboutUs"
import "./App.css"

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState("home")

  const handleNavigation = (page) => {
    setCurrentPage(page)
    setSelectedProduct(null) // Close any open product modal when navigating
  }

  const renderPageContent = () => {
    switch (currentPage) {
      case "home":
        return (
          <>
            <Hero />
            <Categories />
            <ProductGrid onProductClick={setSelectedProduct} />
          </>
        )
      case "productos":
        return (
          <div className="min-h-screen pt-8">
            <div className="container mx-auto px-4">
              <h1 className="text-3xl font-bold text-center mb-8">Nuestros Productos</h1>
              <ProductGrid onProductClick={setSelectedProduct} />
            </div>
          </div>
        )
      case "categorias":
        return (
          <div className="min-h-screen pt-8">
            <div className="container mx-auto px-4">
              <h1 className="text-3xl font-bold text-center mb-8">Categorías</h1>
              <Categories />
              <ProductGrid onProductClick={setSelectedProduct} />
            </div>
          </div>
        )
      case "nosotros":
        return (
          <div className="min-h-screen">
            <AboutUs />
          </div>
        )
      case "contacto":
        return (
          <div className="min-h-screen pt-8">
            <div className="container mx-auto px-4">
              <h1 className="text-3xl font-bold text-center mb-8">Contacto</h1>
              <div className="max-w-2xl mx-auto">
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h2 className="text-2xl font-semibold mb-6">¿Tienes alguna pregunta?</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold">Dirección:</h3>
                      <p className="text-gray-600">Calle Skate 123, Ciudad Skate, SK 12345</p>
                    </div>
                    <div>
                      <h3 className="font-semibold">Teléfono:</h3>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                    <div>
                      <h3 className="font-semibold">Email:</h3>
                      <p className="text-gray-600">info@northskate.com</p>
                    </div>
                    <div>
                      <h3 className="font-semibold">Horarios:</h3>
                      <p className="text-gray-600">Lunes a Viernes: 9:00 AM - 8:00 PM</p>
                      <p className="text-gray-600">Sábados: 10:00 AM - 6:00 PM</p>
                      <p className="text-gray-600">Domingos: 12:00 PM - 5:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      case "clientes-destacados":
        return (
          <div className="min-h-screen pt-8">
            <ClientesDestacados />
          </div>
        )
      default:
        return (
          <>
            <Hero />
            <Categories />
            <ProductGrid onProductClick={setSelectedProduct} />
          </>
        )
    }
  }

  return (
    <CartProvider>
      <div className="App">
        <Header onCartClick={() => setIsCartOpen(true)} onNavigate={handleNavigation} currentPage={currentPage} />

        {renderPageContent()}

        <Footer onNavigate={handleNavigation} />

        {selectedProduct && <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />}

        {isCartOpen && <Cart onClose={() => setIsCartOpen(false)} />}
      </div>
    </CartProvider>
  )
}

export default App

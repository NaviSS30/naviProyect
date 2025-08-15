"use client"

import { useState } from "react"
import { useCart } from "../context/CartContext"
import RegisterModal from "./RegisterModal"

const Header = ({ onCartClick, onNavigate, currentPage }) => {
  const [searchTerm, setSearchTerm] = useState("")
  const [showRegisterModal, setShowRegisterModal] = useState(false)
  const { cartItems } = useCart()

  const cartItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0)

  return (
    <>
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <h1
                onClick={() => onNavigate("home")}
                className="text-2xl font-bold text-orange-600 cursor-pointer hover:text-orange-700 transition-colors"
              >
                NorthSkate Co
              </h1>
            </div>

            <nav className="hidden md:flex space-x-8">
              <button
                onClick={() => onNavigate("home")}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentPage === "home"
                    ? "bg-orange-100 text-orange-700"
                    : "text-gray-700 hover:text-orange-600 hover:bg-gray-50"
                }`}
              >
                Inicio
              </button>
              <button
                onClick={() => onNavigate("productos")}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentPage === "productos"
                    ? "bg-orange-100 text-orange-700"
                    : "text-gray-700 hover:text-orange-600 hover:bg-gray-50"
                }`}
              >
                Productos
              </button>
              <button
                onClick={() => onNavigate("categorias")}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentPage === "categorias"
                    ? "bg-orange-100 text-orange-700"
                    : "text-gray-700 hover:text-orange-600 hover:bg-gray-50"
                }`}
              >
                Categorías
              </button>
            </nav>

            <div className="flex-1 max-w-lg mx-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar patinetas..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 pl-10 pr-4 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button
                className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                onClick={() => setShowRegisterModal(true)}
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                Registrarse
              </button>
              <button
                className="relative flex items-center px-4 py-2 text-sm font-medium text-white bg-orange-600 rounded-lg hover:bg-orange-700 transition-colors"
                onClick={onCartClick}
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"
                  />
                </svg>
                {cartItemsCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItemsCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      <RegisterModal isOpen={showRegisterModal} onClose={() => setShowRegisterModal(false)} />
    </>
  )
}

export default Header

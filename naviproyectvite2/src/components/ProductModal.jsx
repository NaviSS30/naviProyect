"use client"

import { useCart } from "../context/CartContext"

const ProductModal = ({ product, onClose }) => {
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    addToCart(product)
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div
        className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold z-10 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-md"
          onClick={onClose}
        >
          ×
        </button>

        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 p-6">
            <img
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              className="w-full h-64 md:h-80 object-cover rounded-lg"
            />
          </div>

          <div className="md:w-1/2 p-6 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="inline-block bg-orange-100 text-orange-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
                {product.category}
              </span>

              <h2 className="text-2xl font-bold text-gray-900 leading-tight">{product.name}</h2>

              <p className="text-gray-600 leading-relaxed">{product.description}</p>

              <p className="text-3xl font-bold text-orange-600">${product.price}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <button
                className="flex-1 bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                onClick={handleAddToCart}
              >
                Agregar al Carrito
              </button>
              <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                Comprar Ahora
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductModal

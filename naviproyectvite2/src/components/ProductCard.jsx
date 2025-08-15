"use client"

import { useCart } from "../context/CartContext"

const ProductCard = ({ product, onProductClick }) => {
  const { addToCart } = useCart()

  const handleAddToCart = (e) => {
    e.stopPropagation()
    addToCart(product)
  }

  return (
    <div className="product-card" onClick={() => onProductClick && onProductClick(product)}>
      <img
        src={product.image || "/placeholder.svg?height=200&width=200&query=skateboard"}
        alt={product.name}
        className="product-image"
      />
      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <h3 className="product-name">{product.name}</h3>
        <div className="product-rating">
          {[...Array(5)].map((_, i) => (
            <span key={i} className={i < Math.floor(product.rating || 4) ? "star filled" : "star"}>
              ★
            </span>
          ))}
          <span className="rating-text">({product.rating || 4.0})</span>
        </div>
        <p className="product-price">${product.price}</p>
        <button className="add-to-cart-btn" onClick={handleAddToCart}>
          Agregar al Carrito
        </button>
      </div>
    </div>
  )
}

export default ProductCard

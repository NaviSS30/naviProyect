"use client"

import { useCart } from "../context/CartContext"

const FeaturedProducts = ({ onProductClick }) => {
  const { addToCart } = useCart()

  const products = [
    {
      id: 1,
      name: "Patineta Pro Street",
      price: 89.99,
      image: "/professional-skateboard-complete.png",
      category: "Patinetas Completas",
      description:
        "Patineta completa profesional perfecta para street skating. Incluye tabla de arce canadiense, trucks de aluminio y ruedas de alta calidad.",
    },
    {
      id: 2,
      name: "Tabla Maple Premium",
      price: 45.99,
      image: "/premium-maple-skateboard-deck.png",
      category: "Tablas",
      description:
        "Tabla de skateboard de arce canadiense de 7 capas. Diseño gráfico exclusivo y construcción duradera.",
    },
    {
      id: 3,
      name: "Trucks Independent",
      price: 34.99,
      image: "/independent-skateboard-trucks.png",
      category: "Trucks",
      description:
        "Trucks de alta calidad Independent. Construcción sólida en aluminio para máxima durabilidad y rendimiento.",
    },
    {
      id: 4,
      name: "Ruedas Spitfire",
      price: 24.99,
      image: "/placeholder-j7ldu.png",
      category: "Ruedas",
      description: "Set de 4 ruedas Spitfire de 52mm. Perfectas para street skating con excelente grip y durabilidad.",
    },
    {
      id: 5,
      name: "Patineta Cruiser",
      price: 69.99,
      image: "/assorted-skateboards.png",
      category: "Patinetas Completas",
      description: "Cruiser ideal para desplazamientos urbanos. Ruedas suaves y tabla cómoda para un ride relajado.",
    },
    {
      id: 6,
      name: "Tabla Artist Series",
      price: 52.99,
      image: "/artistic-skateboard-deck.png",
      category: "Tablas",
      description: "Tabla con diseño artístico exclusivo. Edición limitada con gráficos únicos y construcción premium.",
    },
  ]

  const handleAddToCart = (product, e) => {
    e.stopPropagation()
    addToCart(product)
  }

  return (
    <section className="featured-products" id="productos">
      <div className="container">
        <h2>Productos Destacados</h2>
        <p>Descubre nuestros productos más populares</p>

        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card" onClick={() => onProductClick(product)}>
              <img src={product.image || "/placeholder.svg"} alt={product.name} />
              <div className="product-info">
                <span className="product-category">{product.category}</span>
                <h3>{product.name}</h3>
                <p className="product-price">${product.price}</p>
                <button className="add-to-cart-btn" onClick={(e) => handleAddToCart(product, e)}>
                  Agregar al Carrito
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts

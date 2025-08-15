"use client"

import { useState, useEffect } from "react"
import ProductCard from "./ProductCard"

const ProductGrid = ({ onProductClick }) => {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [sortBy, setSortBy] = useState("name")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // const mockProducts = [
  //   {
  //     id: 1,
  //     name: "Patineta Pro Street",
  //     price: 89.99,
  //     image: "/professional-skateboard-complete.png",
  //     category: "Patinetas Completas",
  //     rating: 4.8,
  //     description:
  //       "Patineta completa profesional perfecta para street skating. Incluye tabla de arce canadiense, trucks de aluminio y ruedas de alta calidad.",
  //   },
  //   {
  //     id: 2,
  //     name: "Tabla Maple Premium",
  //     price: 45.99,
  //     image: "/placeholder-00spj.png",
  //     category: "Tablas",
  //     rating: 4.6,
  //     description:
  //       "Tabla de skateboard de arce canadiense de 7 capas. Diseño gráfico exclusivo y construcción duradera.",
  //   },
  //   {
  //     id: 3,
  //     name: "Trucks Independent",
  //     price: 34.99,
  //     image: "/independent-skateboard-trucks.png",
  //     category: "Trucks",
  //     rating: 4.9,
  //     description:
  //       "Trucks de alta calidad Independent. Construcción sólida en aluminio para máxima durabilidad y rendimiento.",
  //   },
  //   {
  //     id: 4,
  //     name: "Ruedas Spitfire",
  //     price: 24.99,
  //     image: "/placeholder-zzmcl.png",
  //     category: "Ruedas",
  //     rating: 4.7,
  //     description: "Set de 4 ruedas Spitfire de 52mm. Perfectas para street skating con excelente grip y durabilidad.",
  //   },
  //   {
  //     id: 5,
  //     name: "Patineta Cruiser",
  //     price: 69.99,
  //     image: "/cruiser-skateboard.png",
  //     category: "Patinetas Completas",
  //     rating: 4.5,
  //     description: "Cruiser ideal para desplazamientos urbanos. Ruedas suaves y tabla cómoda para un ride relajado.",
  //   },
  //   {
  //     id: 6,
  //     name: "Tabla Artist Series",
  //     price: 52.99,
  //     image: "/placeholder-9y9eh.png",
  //     category: "Tablas",
  //     rating: 4.4,
  //     description: "Tabla con diseño artístico exclusivo. Edición limitada con gráficos únicos y construcción premium.",
  //   },
  //   {
  //     id: 7,
  //     name: "Patineta Longboard",
  //     price: 129.99,
  //     image: "/placeholder-yv5eb.png",
  //     category: "Patinetas Completas",
  //     rating: 4.6,
  //     description: "Longboard premium para cruising y carving. Tabla flexible y ruedas grandes para máximo confort.",
  //   },
  //   {
  //     id: 8,
  //     name: "Rodamientos ABEC 7",
  //     price: 19.99,
  //     image: "/skateboard-bearings.png",
  //     category: "Accesorios",
  //     rating: 4.3,
  //     description: "Set de 8 rodamientos ABEC 7 de alta precisión. Rodamiento suave y duradero para mejor rendimiento.",
  //   },
  // ]

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true)
        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 1000))

        // In a real app, you would uncomment this and use your actual API:
        const res = await fetch("http://localhost/apiskateshop/apiproductosskateshop.php")
        if (!res.ok) throw new Error("Error al obtener productos")
        const data = await res.json()

        setProducts(data)
        setFilteredProducts(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  useEffect(() => {
    const sorted = [...products]
    switch (sortBy) {
      case "price-low":
        sorted.sort((a, b) => a.price - b.price)
        break
      case "price-high":
        sorted.sort((a, b) => b.price - a.price)
        break
      case "rating":
        sorted.sort((a, b) => (b.rating || 0) - (a.rating || 0))
        break
      default:
        sorted.sort((a, b) => a.name.localeCompare(b.name))
    }
    setFilteredProducts(sorted)
  }, [sortBy, products])

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Cargando productos...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="error-container">
        <p>Error: {error}</p>
        <button onClick={() => window.location.reload()}>Reintentar</button>
      </div>
    )
  }

  return (
    <section className="product-grid-section">
      <div className="container">
        <div className="grid-header">
          <div className="grid-info">
            <h2>Todos los Productos</h2>
            <p className="products-count">Mostrando {filteredProducts.length} productos</p>
          </div>
          <div className="sort-controls">
            <label htmlFor="sort-select">Ordenar por:</label>
            <select id="sort-select" value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="sort-select">
              <option value="name">Nombre</option>
              <option value="price-low">Precio: menor a mayor</option>
              <option value="price-high">Precio: mayor a menor</option>
              <option value="rating">Mejor valorados</option>
            </select>
          </div>
        </div>

        <div className="products-grid">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} onProductClick={onProductClick} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductGrid

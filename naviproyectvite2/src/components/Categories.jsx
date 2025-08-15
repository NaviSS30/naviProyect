const Categories = () => {
  const categories = [
    {
      id: 1,
      name: "Patinetas Completas",
      image: "/complete-skateboard-deck.png",
    },
    {
      id: 2,
      name: "Tablas",
      image: "/premium-maple-skateboard-deck.png",
    },
    {
      id: 3,
      name: "Trucks",
      image: "/skateboard-trucks-metal.png",
    },
    {
      id: 4,
      name: "Ruedas",
      image: "/green-skateboard-wheels.png",
    },
  ]

  return (
    <section className="categories" id="categorias">
      <div className="container">
        <h2>Categorías</h2>
        <p>Explora nuestra amplia gama de productos para skateboarding</p>

        <div className="categories-grid">
          {categories.map((category) => (
            <div key={category.id} className="category-card">
              <img src={category.image || "/placeholder.svg"} alt={category.name} />
              <h3>{category.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Categories

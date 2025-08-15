"use client"

function Footer({ onNavigate }) {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Company Info */}
          <div className="footer-section">
            <h3 className="text-2xl font-bold text-orange-600 mb-4">NorthSkate Co</h3>
            <p className="text-gray-400 mb-4">
              Tu tienda de confianza para todo lo relacionado con skateboarding. Calidad, estilo y pasión en cada
              producto.
            </p>
            <div className="social-icons flex space-x-4">
              {/* Facebook */}
              <svg
                className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              {/* Instagram */}
              <svg
                className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z" />
              </svg>
              {/* Twitter */}
              <svg
                className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
              {/* YouTube */}
              <svg
                className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button onClick={() => onNavigate("home")} className="hover:text-white text-left">
                  Inicio
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate("productos")} className="hover:text-white text-left">
                  Productos
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate("categorias")} className="hover:text-white text-left">
                  Categorías
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate("clientes-destacados")} className="hover:text-white text-left">
                  Clientes Destacados
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate("nosotros")} className="hover:text-white text-left">
                  Nosotros
                </button>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="footer-section">
            <h4 className="font-semibold mb-4">Atención al Cliente</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button onClick={() => onNavigate("contacto")} className="hover:text-white text-left">
                  Contacto
                </button>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Envíos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Devoluciones
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer-section">
            <h4 className="font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">Suscríbete para recibir ofertas exclusivas y novedades.</p>
            <div className="newsletter-form flex">
              <input
                type="email"
                placeholder="Tu email"
                className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-md focus:outline-none focus:border-orange-600"
              />
              <button className="px-4 py-2 bg-orange-600 hover:bg-orange-700 rounded-r-md">Suscribir</button>
            </div>
          </div>
        </div>

        <hr className="footer-divider border-gray-800 my-8" />

        <div className="footer-bottom flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2024 NorthSkate Co. Todos los derechos reservados.</p>
          <div className="footer-links flex space-x-6 text-sm text-gray-400 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">
              Privacidad
            </a>
            <a href="#" className="hover:text-white">
              Términos
            </a>
            <a href="#" className="hover:text-white">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

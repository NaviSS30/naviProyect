"use client"

import { useState, useEffect } from "react"

export default function ClientesDestacados() {
  const [clients, setClients] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState("")
  const [deletingId, setDeletingId] = useState(null)

  useEffect(() => {
    fetchClients()
  }, [])

  const fetchClients = async () => {
    try {
      setIsLoading(true)
      const response = await fetch("http://localhost/apiskateshop/apiver_clientes.php")

      if (!response.ok) {
        throw new Error("Error al cargar los clientes")
      }

      const data = await response.json()
      setClients(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error desconocido")
    } finally {
      setIsLoading(false)
    }
  }

  const deleteClient = async (clientId) => {
    if (!confirm("¿Estás seguro de que quieres eliminar este cliente?")) {
      return
    }

    try {
      setDeletingId(clientId)
      const response = await fetch("http://localhost/apiskateshop/apieliminar_cliente.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: clientId }),
      })

      if (response.ok) {
        await fetchClients()
        setError("") // Limpiar cualquier error previo
      } else {
        const data = await response.json()
        throw new Error(data.message || "Error al eliminar cliente")
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al eliminar cliente")
    } finally {
      setDeletingId(null)
    }
  }

  // SVG Icons
  const UserIcon = () => (
    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
      />
    </svg>
  )

  const MailIcon = () => (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  )

  const PhoneIcon = () => (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    </svg>
  )

  const MapPinIcon = () => (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  )

  const BuildingIcon = () => (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
      />
    </svg>
  )

  const TrashIcon = () => (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
      />
    </svg>
  )

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center items-center min-h-[400px]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Cargando clientes...</p>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <p className="text-red-600 mb-4">Error: {error}</p>
          <button onClick={fetchClients} className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700">
            Reintentar
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Clientes Destacados</h1>
        <p className="text-gray-600">Conoce a nuestra comunidad de skaters registrados</p>
        <span className="inline-block mt-2 px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">
          {clients.length} clientes registrados
        </span>
      </div>

      {clients.length === 0 ? (
        <div className="text-center py-12">
          <div className="h-16 w-16 text-gray-400 mx-auto mb-4">
            <UserIcon />
          </div>
          <p className="text-gray-600">No hay clientes registrados aún</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clients.map((client) => (
            <div key={client.id} className="client-card">
              <div className="client-card-header">
                <div className="flex items-center space-x-3">
                  <div className="h-12 w-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <div className="text-orange-600">
                      <UserIcon />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">
                      {client.first_name} {client.last_name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      Miembro desde {new Date(client.created_at).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => deleteClient(client.id)}
                  disabled={deletingId === client.id}
                  className="delete-client-btn"
                >
                  {deletingId === client.id ? (
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-red-600"></div>
                  ) : (
                    <TrashIcon />
                  )}
                </button>
              </div>
              <div className="client-card-content">
                <div className="client-info-item">
                  <MailIcon />
                  <span>{client.email}</span>
                </div>
                <div className="client-info-item">
                  <PhoneIcon />
                  <span>{client.phone}</span>
                </div>
                <div className="client-info-item">
                  <MapPinIcon />
                  <span>{client.address}</span>
                </div>
                <div className="client-info-item">
                  <BuildingIcon />
                  <span>{client.city}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

import React, { useState, useRef, useEffect, FormEvent } from "react"
import { Client } from "types/types"
import { db } from "services/firebase"

const Customers = () => {
  const [name, setName] = useState<string>("")
  const [ruc, setRuc] = useState<string>("")
  const [contact, setContact] = useState<string>("")
  const [phone, setPhone] = useState<string>("")
  const [address, setAddress] = useState<string>("")
  const [clients, setClients] = useState<Client[]>([])

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    addClient(name, ruc, contact, phone, address)

    setName("")
    setRuc("")
    setContact("")
    setPhone("")
    setAddress("")
  }

  const addClient = (
    name: string,
    ruc: string,
    contact: string,
    phone: string,
    address: string
  ): void => {
    if (!name || !ruc || !contact || !phone || !address) return
    const newClients: Client[] = [
      ...clients,
      { name, ruc, contact, phone, address },
    ]
    setClients(newClients)
    db.collection("customers").doc().set({ name, ruc, contact, phone, address })
  }

  const deleteClient = (index: number): void => {
    const newClients: Client[] = [...clients]
    newClients.splice(index, 1)
    setClients(newClients)
  }

  const nameInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    nameInputRef.current?.focus()
  }, [name])

  return (
    <div className="container h-100">
      <h2 className="text-center my-4">Crear nuevo cliente</h2>
      <form onSubmit={handleSubmit} className="input-group my-3">
        <div className="input-group my-1">
          <input
            type="text"
            className="form-control"
            placeholder="Ingrese el nombre o razón social"
            ref={nameInputRef}
            onChange={e => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className="input-group my-1">
          <input
            type="text"
            className="form-control"
            placeholder="Ingrese CI o RUC"
            onChange={e => setRuc(e.target.value)}
            value={ruc}
          />
        </div>
        <div className="input-group my-1">
          <input
            type="text"
            className="form-control"
            placeholder="Ingrese el representante legal o contacto"
            onChange={e => setContact(e.target.value)}
            value={contact}
          />
        </div>
        <div className="input-group my-1">
          <input
            type="text"
            className="form-control"
            placeholder="Ingrese el número de teléfono de contacto"
            onChange={e => setPhone(e.target.value)}
            value={phone}
          />
        </div>
        <div className="input-group my-1">
          <input
            type="text"
            className="form-control"
            placeholder="Ingrese la dirección física"
            onChange={e => setAddress(e.target.value)}
            value={address}
          />
        </div>
        <div className="text-center my-3 w-100">
          <button className="btn btn-outline-success">Cargar</button>
        </div>
      </form>
      {clients.length > 0 ? (
        <div className="table-responsive">
          <table className="table align-middle table-striped table-hover table-bordered caption-top">
            <caption>Listado de clientes</caption>
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Cliente</th>
                <th scope="col">RUC o CI</th>
                <th scope="col">Contacto</th>
                <th scope="col">Teléfono</th>
                <th scope="col">Dirección</th>
                <th scope="col">Eliminar</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client: Client, index: number) => {
                return (
                  <tr>
                    <th>{index + 1}</th>
                    <td>{client.name}</td>
                    <td>{client.ruc}</td>
                    <td>{client.contact}</td>
                    <td>{client.phone}</td>
                    <td>{client.address}</td>
                    <td>
                      <button
                        className="btn btn-outline-danger"
                        onClick={() => deleteClient(index)}
                      >
                        🗑
                      </button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-secondary text-center">Sin Clientes</p>
      )}
    </div>
  )
}

export default Customers

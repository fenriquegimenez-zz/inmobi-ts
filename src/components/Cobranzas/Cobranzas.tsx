import React, { FormEvent, useState, useEffect, useRef } from "react"
const thousands = require("thousands")
import clsx from "clsx"
import { CobranzaClient } from "types/types"

const Cobranzas = () => {
  const [client, setClient] = useState<string>("")
  const [clients, setClients] = useState<CobranzaClient[]>([])
  const [montoCuota, setMontoCuota] = useState<string>("")
  const [nroCuota, setNroCuota] = useState<string>("")
  const [total, setTotal] = useState<number>(0)
  const [cobrado, setCobrado] = useState<boolean>(false)
  const clientInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    clientInputRef.current?.focus()
  }, [client])

  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault()

    addClient(client, montoCuota, nroCuota)

    setClient("")
    setMontoCuota("")
    setNroCuota("")
  }

  const addClient = (client: string, monto: string, nro: string): void => {
    if (!client || !monto || !nro) return
    const newClients: CobranzaClient[] = [
      ...clients,
      { client, monto, nro, cobrado },
    ]
    setClients(newClients)
  }

  const addTotal = (monto: string): void => {
    setTotal(prevTotal => prevTotal + Number.parseInt(monto, 10))
  }

  const subTotal = (monto: string): void => {
    setTotal(prevTotal => prevTotal - Number.parseInt(monto, 10))
  }

  const setCobradoStatus = (monto: string, index: number) => {
    addTotal(monto)
    const newClients: CobranzaClient[] = [...clients]
    newClients[index].cobrado = !newClients[index].cobrado
    setClients(newClients)
  }

  const anularCobro = (index: number, monto: string): void => {
    subTotal(monto)
    const newClients: CobranzaClient[] = [...clients]
    newClients[index].cobrado = !newClients[index].cobrado
    setClients(newClients)
  }

  const deleteCobranza = (index: number, monto: string) => {
    const newClients: CobranzaClient[] = [...clients]
    newClients.splice(index, 1)
    setClients(newClients)
    setTotal(prevTotal => prevTotal - Number.parseInt(monto, 10))
  }
  if (total < 0) {
    setTotal(0)
  }

  return (
    <div>
      <h2 className="text-center my-4">Cargar cobranzas</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            className="form-control my-1"
            placeholder="Ingrese el cliente"
            value={client}
            ref={clientInputRef}
            onChange={e => setClient(e.target.value)}
          />
        </div>
        <div className="input-group">
          <input
            type="number"
            className="form-control my-1"
            placeholder="Ingrese el monto de la cuota"
            value={montoCuota}
            onChange={e => setMontoCuota(e.target.value)}
          />
        </div>
        <div className="input-group">
          <input
            type="number"
            className="form-control my-1"
            placeholder="Ingrese el número de la cuota"
            value={nroCuota}
            onChange={e => setNroCuota(e.target.value)}
          />
        </div>
        <div className="text-center my-3">
          <button className="btn btn-outline-success">Cargar</button>
        </div>
      </form>
      {clients.length > 0 ? (
        <table className="table table-hover caption-top table-bordered">
          <caption>Total cobrado: {`Gs. ${thousands(total, ".")}`}</caption>
          <thead>
            <tr>
              <th>Nro cobranza</th>
              <th>Cliente</th>
              <th>Monto cuota</th>
              <th>Nro cuota</th>
              <th>Cobrado?</th>
              <th>Anular cobro</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client: CobranzaClient, index: number) => {
              const cobradoRowStyle = clsx({
                "table-success": client.cobrado,
              })
              return (
                <tr className={cobradoRowStyle}>
                  <th scope="row">{index}</th>
                  <td>{client.client}</td>
                  <td>{`Gs. ${thousands(client.monto, ".")}`}</td>
                  <td>{client.nro}</td>
                  <td>
                    <button
                      className="btn btn-outline-success"
                      onClick={() => setCobradoStatus(client.monto, index)}
                      disabled={client.cobrado}
                    >
                      "✓"
                    </button>
                  </td>
                  <td>
                    <button
                      disabled={!client.cobrado}
                      onClick={() => anularCobro(index, client.monto)}
                      className="btn btn-outline-success"
                    >
                      ✗
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => deleteCobranza(index, client.monto)}
                      className="btn btn-outline-danger"
                      disabled={client.cobrado}
                    >
                      🗑
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      ) : (
        <p className="text-center text-secondary">Sin cobranzas</p>
      )}
    </div>
  )
}

export default Cobranzas

export interface Client {
  name: string
  ruc: string
  contact: string
  phone: string
  address: string
}

export interface CobranzaClient {
  client: string
  monto: string
  nro: string
  cobrado: boolean
}

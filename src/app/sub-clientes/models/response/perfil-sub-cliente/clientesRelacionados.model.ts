import { ISubclienteGrid } from "../listado-sub-clientes/subClientes-grid.model";

export interface IClientesRelacionados {
  ClienteID: number;
  DescripCliente: string;
  Status: number;
  Nit: number;
  selected: boolean;
}

export interface IRelaciones {
  ClienteCodigo: number;
  ClienteNombre: string;
  ClienteStatus: number;
}

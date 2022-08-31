import { ISubclienteGrid } from "../listado-sub-clientes/subClientes-grid.model";
import { IRelaciones } from "./clientesRelacionados.model";

export interface IPerfilSubCliente extends ISubclienteGrid{
  Relaciones: IRelaciones;
}

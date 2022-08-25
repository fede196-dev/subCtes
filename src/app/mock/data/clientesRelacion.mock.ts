
import { IClientesRelacionados } from "src/app/sub-clientes/models/perfil-sub-cliente/clientesRelacionados.model";
import { ISubclienteGrid } from "src/app/sub-clientes/models/perfil-sub-cliente/subClientes-grid.model";

const clientesRelacionados: IClientesRelacionados[] = [
  {
    ClienteID: 25,
    DescripCliente: 'GOMEZ',
    Status: 1,
    Nit: 1212350332,
    selected: false
  },
  {
    ClienteID: 21,
    DescripCliente: 'DOMINGUEZ',
    Status: 1,
    Nit: 3431132,
    selected: false
  },
  {
    ClienteID: 32,
    DescripCliente: 'FRAN',
    Status: 1,
    Nit: 30312312,
    selected: false
  }
];

export default clientesRelacionados;

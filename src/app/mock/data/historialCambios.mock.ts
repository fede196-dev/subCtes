import { IHistorialCambios } from "src/app/sub-clientes/models/response/perfil-sub-cliente/historialCambios.model";


const historialCambios: IHistorialCambios[] = [
  {
    CodigoSubCliente: 1,
    ClienteID: 5542,
    FechaMod: '10/12/2014',
    DescripCliente: 'AG. JUNIOR',
    DescripCambio: 'INGRESADA NUEVA RELACIÓN',
    Status: 1
  },
  {
    CodigoSubCliente: 1,
    ClienteID: 1231,
    FechaMod: '10/12/2016',
    DescripCliente: 'CHUI JUAN JOSE',
    DescripCambio: 'INGRESADA NUEVA RELACIÓN',
    Status: 0
  },
  {
    CodigoSubCliente: 1,
    ClienteID: 5522,
    FechaMod: '10/12/2022',
    DescripCliente: 'G. PEÑARANDA',
    DescripCambio: 'INGRESADA NUEVA RELACIÓN',
    Status: 0
  },

  {
    CodigoSubCliente: 2,
    ClienteID: 2211,
    FechaMod: '10/12/2022',
    DescripCliente: 'D. ROMERO',
    DescripCambio: 'INGRESADA NUEVA RELACIÓN',
    Status: 1
  },
];

export default historialCambios;

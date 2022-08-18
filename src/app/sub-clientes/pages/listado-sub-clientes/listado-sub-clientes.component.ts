import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Form, FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import Swal from 'sweetalert2';
import { ISubclienteGrid } from '../../models/listado-sub-clientes/subClientes-grid.model';
import { SubClientesService } from '../../services/sub-clientes.service';



@Component({
  selector: 'app-listado-sub-clientes',
  templateUrl: './listado-sub-clientes.component.html',
  styleUrls: ['./listado-sub-clientes.component.scss']
})
export class ListadoSubClientesComponent implements OnInit {
  displayedColumns: string[] = ['Opciones','Codigo', 'RazonSocial', 'Status', 'NIT'];
  dataSource: MatTableDataSource<ISubclienteGrid>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  subClientesItems: ISubclienteGrid [] = []
  panelOpenState = false;
  expandedBox=false;

  formFilters: FormGroup;
  constructor(private subClienteService: SubClientesService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.createFormGroup();
    this.getSubClientesGrid();
  }

  getSubClientesGrid() {
    this.subClienteService.getSubClientes().subscribe(subClientesItems => {
      this.subClientesItems = subClientesItems;
      this.dataSource = new MatTableDataSource(subClientesItems);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  expandBox(){
    this.expandedBox = !this.expandedBox;
  }
  createFormGroup() {
    this.formFilters = new FormGroup({
      CodigoSubCliente: new FormControl(null),
      RazonSocial: new FormControl(''),
      Status: new FormControl("1"),
      NIT: new FormControl(''),
    })
  }

  cleanFilters()
  {
    this.formFilters.reset()
  }
  findSubCliente(){


      const codigo= this.formFilters.get(['CodigoSubCliente'])?.value;
      const razon= this.formFilters.get(['RazonSocial'])?.value;
      const estado =  this.formFilters.get(['Status'])?.value;
      const nit =  this.formFilters.get(['NIT'])?.value;

      if(codigo === razon === estado === nit === null){
        this.dataSource.data = this.subClientesItems;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }


    this.subClienteService.getSubClientes().subscribe(subClientesItems => {
      const found = subClientesItems.filter(subClientes => {
        return subClientes.Codigo.toString() === codigo && subClientes.Status.toString() === estado  ;
      });
      console.log(found);

      this.dataSource.data = found;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  changeStatusSubCliente(subCliente: ISubclienteGrid, estado:number){
    let texto = estado === 1 ? 'reactivará': 'dará de baja';
    Swal.fire({
      title: '¿Desea Realizar esta acción?',
      text: 'Se ' + texto + ' al sub cliente ' + subCliente.RazonSocial,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'rgb(27 167 22)',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        texto = estado === 1 ? 'reactivación': 'baja';
        subCliente.Status = estado;
        Swal.fire(
          'Éxito!',
          'Se efectuó la ' + texto,
          'success'
        )
      }
    })
  }

}


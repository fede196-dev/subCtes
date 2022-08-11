import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ISubclienteGrid } from '../../models/listado-sub-clientes/subClientes-grid.model';
import { SubClientesService } from '../../services/sub-clientes.service';
import { PerfilSubClienteComponent } from '../perfil-sub-cliente/perfil-sub-cliente.component';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  fruit: string;
}

/** Constants used to fill up our data base. */
const FRUITS: string[] = [
  'blueberry',
  'lychee',
  'kiwi',
  'mango',
  'peach',
  'lime',
  'pomegranate',
  'pineapple',
];
const NAMES: string[] = [
  'Maia',
  'Asher',
  'Olivia',
  'Atticus',
  'Amelia',
  'Jack',
  'Charlotte',
  'Theodore',
  'Isla',
  'Oliver',
  'Isabella',
  'Jasper',
  'Cora',
  'Levi',
  'Violet',
  'Arthur',
  'Mia',
  'Thomas',
  'Elizabeth',
];

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
  constructor(private subClienteService: SubClientesService, private dialog: MatDialog) {


  }

  ngOnInit(): void {
    this.getSubClientesGrid();
  }

  getSubClientesGrid() {
    this.subClienteService.getSubClientes().subscribe(subClientesItems => {
      this.subClientesItems = subClientesItems;
      this.dataSource = new MatTableDataSource(subClientesItems);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(this.subClientesItems);

    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  verPerfilDialog(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    this.dialog.open(PerfilSubClienteComponent)
  }
  editDialog(){

  }
}


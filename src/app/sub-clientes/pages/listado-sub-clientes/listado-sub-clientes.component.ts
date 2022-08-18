import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
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
  constructor(private subClienteService: SubClientesService, public dialog: MatDialog) {


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
}


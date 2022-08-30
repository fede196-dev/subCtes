import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ISubclienteGrid } from 'src/app/sub-clientes/models/listado-sub-clientes/subClientes-grid.model';
import { SubClientesService } from 'src/app/sub-clientes/services/sub-clientes.service';


@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  expandedBox: boolean;
  formFilters: FormGroup;
  @Output() foundSubCliente: EventEmitter<ISubclienteGrid> = new EventEmitter();
  constructor(private subClienteService: SubClientesService) { }

  ngOnInit(): void {
    this.createFormGroup();
  }

  expandBox() {
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

  cleanFilters() {
    this.formFilters.reset()
  }
  findSubCliente() {
    const codigo = this.formFilters.get(['CodigoSubCliente'])?.value;
    const razon = this.formFilters.get(['RazonSocial'])?.value;
    const estado = this.formFilters.get(['Status'])?.value;
    const nit = this.formFilters.get(['NIT'])?.value;

    this.subClienteService.getSubClientes().subscribe(subClientesItems => {
      const found = subClientesItems.filter(subClientes => {
        return subClientes.SubClienteCodigo.toString() === codigo && subClientes.SubClienteStatus.toString() === estado;
      });
      this.foundSubCliente.emit(found[0])
    });

  }
}

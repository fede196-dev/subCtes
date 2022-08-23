import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IHistorialCambios } from 'src/app/sub-clientes/models/perfil-sub-cliente/historialCambios';

@Component({
  selector: 'app-dialog-new-relacion',
  templateUrl: './dialog-new-relacion.component.html',
  styleUrls: ['./dialog-new-relacion.component.scss']
})
export class DialogNewRelacionComponent implements OnInit {

  constructor(  public dialogRef: MatDialogRef<DialogNewRelacionComponent>, @Inject(MAT_DIALOG_DATA) public data: IHistorialCambios) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

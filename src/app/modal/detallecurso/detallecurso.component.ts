import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-detallecurso',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detallecurso.component.html',
  styleUrl: './detallecurso.component.scss',
})
export class DetallecursoComponent {
  constructor(
    public dialogRef: MatDialogRef<DetallecursoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onClose(): void {
    this.dialogRef.close();
  }
}

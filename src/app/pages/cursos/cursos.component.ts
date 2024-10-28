import { Component, OnInit } from '@angular/core';
import { CursoService } from '../../services/cursos.service';
import { CommonModule } from '@angular/common';
import { DetallecursoComponent } from '../../modal/detallecurso/detallecurso.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.scss',
})
export class CursosComponent implements OnInit {
  cursos: any[] = [];

  constructor(private cursoService: CursoService, public dialog: MatDialog) {}

  ngOnInit() {
    this.cargarCursos();
  }

  cargarCursos() {
    this.cursos = this.cursoService.cargarCursos();
  }

  eliminarCurso(index: number) {
    this.cursoService.eliminarCurso(index);
    this.cargarCursos();
  }
  mostrarDetallesCurso(curso: any) {
    this.dialog.open(DetallecursoComponent, {
      data: curso,
      width: '500px',
    });
  }
}

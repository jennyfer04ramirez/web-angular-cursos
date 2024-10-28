import { Component } from '@angular/core';
import { CursoService } from '../../services/cursos.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-agregar-curso',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './agregar-curso.component.html',
  styleUrl: './agregar-curso.component.scss',
})
export class AgregarCursoComponent {
  curso = {
    nombre: '',
    instructor: '',
    fechaInicio: '',
    duracion: '',
    descripcion: '',
  };

  constructor(private cursoService: CursoService) {}

  agregarCurso() {
    this.cursoService.obtenerImagenAleatoria().subscribe((imagenes) => {
      const randomIndex = Math.floor(Math.random() * imagenes.length);
      const imagenSeleccionada = imagenes[randomIndex].download_url;

      const nuevoCurso = {
        ...this.curso,
        imagenUrl: imagenSeleccionada,
      };

      // Guardar el curso con la imagen
      this.cursoService.agregarCurso(nuevoCurso);
    });
  }
}

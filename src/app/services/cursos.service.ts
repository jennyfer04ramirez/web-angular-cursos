import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CursoService {
  private cursos: any[] = [];

  constructor(private http: HttpClient) {}

  obtenerImagenAleatoria(): Observable<any> {
    return this.http.get('https://picsum.photos/v2/list');
  }

  agregarCurso(curso: any) {
    this.cursos = localStorage.getItem('cursos')
      ? JSON.parse(localStorage.getItem('cursos') || '[]')
      : [];
    this.cursos.push(curso);
    localStorage.setItem('cursos', JSON.stringify(this.cursos));
  }

  cargarCursos(): any[] {
    return localStorage.getItem('cursos')
      ? JSON.parse(localStorage.getItem('cursos') || '[]')
      : [];
  }

  eliminarCurso(index: number) {
    this.cursos = this.cargarCursos();
    this.cursos.splice(index, 1);
    localStorage.setItem('cursos', JSON.stringify(this.cursos));
  }
}

import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { CursosComponent } from './pages/cursos/cursos.component';
import { AgregarCursoComponent } from './pages/agregar-curso/agregar-curso.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'pages/cursos', component: CursosComponent },
  { path: 'pages/agregarcurso', component: AgregarCursoComponent },
  { path: 'pages/contacto', component: ContactoComponent },
];

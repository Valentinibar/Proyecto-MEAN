
  import { Routes, RouterModule} from '@angular/router';

import { ListarSitiosComponent } from './components/listar-sitios/listar-sitios.component';
import { CrearSitioComponent } from './components/crear-sitio/crear-sitio.component';




//componentes
export const routes: Routes = [
    {path: "", component: ListarSitiosComponent},
    {path: "crear-sitio", component: CrearSitioComponent},
    {path: "editar-sitio/:id", component: CrearSitioComponent},
    {path: "**", redirectTo: "", pathMatch: "full"}
];



/* import { Routes, RouterModule} from '@angular/router';

import { ListarSitiosComponent } from './components/listar-sitios/listar-sitios.component';
import { CrearSitioComponent } from './components/crear-sitio/crear-sitio.component';


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';


//componentes
export const routes: Routes = [
    {path: "", component: ListarSitiosComponent},
    {path: "crear-sitio", component: CrearSitioComponent},
    {path: "editar-sitio/:id", component: CrearSitioComponent},
    {path: "**", redirectTo: "", pathMatch: "full"}
];

@NgModule({
  
    imports: [
        RouterModule.forRoot(routes),
        BrowserModule,
        CommonModule,
      ReactiveFormsModule,
      BrowserAnimationsModule,
      ToastrModule.forRoot(),
      HttpClientModule
    ],
    exports: [RouterModule]
  })

  export class AppRoutes { } */
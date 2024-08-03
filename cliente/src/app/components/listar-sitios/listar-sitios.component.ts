import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SitioService } from '../../services/sitio.service';
import { Sitio } from '../../models/sitio';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listar-sitios',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './listar-sitios.component.html',
  styleUrls: ['./listar-sitios.component.css']
})
export class ListarSitiosComponent  implements OnInit{
  listSitios: Sitio[] = [];

  constructor(private sitioService: SitioService, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.obtenerSitios();
  }

  obtenerSitios() {
    this.sitioService.getSitios().subscribe(data => {
      console.log(data);
      this.listSitios = data;
    }, error => {
      console.log(error);
    }) 
  }

eliminarSitio(id: any) {
  this.sitioService.eliminarSitio(id).subscribe(data =>{
    this.toastr.error("El sitio fue eliminado con exito", "Producto eliminado");
    this.obtenerSitios();
  }, error => {
    console.log(error);
  }

)
}






}

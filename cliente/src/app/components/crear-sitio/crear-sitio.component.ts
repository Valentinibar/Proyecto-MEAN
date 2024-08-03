import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Sitio } from '../../models/sitio';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SitioService } from '../../services/sitio.service';

@Component({
  selector: 'app-crear-sitio',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './crear-sitio.component.html',
  styleUrls:[ './crear-sitio.component.css']
})
export class CrearSitioComponent implements OnInit {
  sitioForm: FormGroup;
  titulo= "Crear sitio";
  id: string| null;

  constructor(private fb: FormBuilder,
    private router: Router,
  private toastr: ToastrService,
  private sitioService: SitioService,
  private aRouter: ActivatedRoute)
    {
    this.sitioForm = this.fb.group({
      id: ["", Validators.required],
      nombre: ["", Validators.required],
      descripcion: ["", Validators.required],
      direccion: ["", Validators.required],
    })
    this.id = this.aRouter.snapshot.paramMap.get("id")
  }

  ngOnInit(): void {
    this.esEditar();
    
  }

  agregarSitio(){
    

    const SITIO: Sitio = {
      _id: this.sitioForm.get("id")?.value,
      nombre: this.sitioForm.get("nombre")?.value,
      descripcion: this.sitioForm.get("descripcion")?.value,
      direccion: this.sitioForm.get("direccion")?.value
    }

    if(this.id !== null){
      //editamos sitio
      this.sitioService.editarSitio(this.id, SITIO).subscribe(data=>{
        this.toastr.info("El producto fue actualizado con éxito", "Producto registrado!");
        this.router.navigate(["/"]);
      }, error =>{
        console.log(error);
        this.sitioForm.reset();
      })

    }else{
      //agregamos sitio
      console.log(SITIO);
      this.sitioService.guardarSitio(SITIO).subscribe(data=>{
      this.toastr.info("El producto fue registrado con éxito", "Producto actualizado!");
      this.router.navigate(["/"]);
      }, error =>{
        console.log(error);
        this.sitioForm.reset();
      })
    }}

    esEditar() {
      if(this.id !==null) {
        this.titulo ="Editar sitio";
        this.sitioService.obtenerSitio(this.id).subscribe(data=>{
          this.sitioForm.setValue({
            id: data.id,
            nombre: data.nombre,
            descripcion: data.descripcion,
            direccion: data.direccion
          })
        })
      }

    }

}

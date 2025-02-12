import { Component, inject } from '@angular/core';
import { WeatherforecastService } from '../weatherforecast.service';
import { LaptopService } from '../laptop.service';
import { Laptop, LaptopCreacion } from '../laptops.models';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing',
  imports: [ReactiveFormsModule, MatFormFieldModule,MatInputModule,MatButtonModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {
  WeatherforecastService = inject(WeatherforecastService)
  LaptopService = inject(LaptopService);
  router = inject(Router)
  climas: any[]=[];
  sugerencias:string[] = []
  sg:boolean = false;
  constructor(){
    this.WeatherforecastService.obtenerClima().subscribe(datos=>{
      this.climas=datos;
    })
  }
  private readonly formBuilder = inject(FormBuilder);
  form = this.formBuilder.group({
    nombre: [''],
  })

  existe = true;
  verificarExistencia(){
    let laptop = this.form.value as LaptopCreacion
    this.LaptopService.Login(laptop).subscribe({
      next:(laptop)=>{
        this.router.navigate(['productos/crear']);
      },
      error: (err)=>{

        if(err.status === 400){
          this.sugerencias =  err.error.sugerencias.map((s:any) =>s.nombre || s.Nombre)
          this.sg = true
        }else if(err.status === 404){
          this.sg = false;
          this.existe = false
          this.sugerencias = [];
        }else{
          alert(err)
        }

      },
      complete: ()=>{
        alert('peticion terminada');
      }
    })
  }
}

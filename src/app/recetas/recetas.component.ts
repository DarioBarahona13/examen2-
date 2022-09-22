import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { RecetasModel } from './recetas.model';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.css']
})
export class RecetasComponent implements OnInit {
  formValue!:FormGroup
  RecetasModelObj : RecetasModel = new RecetasModel;
  datosReceta!: any;

  constructor(private formbuilder:FormBuilder,private api:ApiService) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      name: [''],
      ingredientes: [''],
      descripcion: [''],
      precio: [''],
    })
    this.getALLRecetas()
  }

postRecetasDetails(){
  this.RecetasModelObj.name = this.formValue.value.name;
  this.RecetasModelObj.ingredientes = this.formValue.value.ingredientes;
  this.RecetasModelObj.descripcion = this.formValue.value.descripcion;
  this.RecetasModelObj.precio = this.formValue.value.precio;

  this.api.postRecetas(this.RecetasModelObj).subscribe(res=> {
    console.log(res)
    alert("Receta agregada exitosamente!")
    let ref = document.getElementById('cancel')
    ref?.click();
    this.formValue.reset();
    this.getALLRecetas();
  },
  err=>{
    alert("Algo salio mal :(")
  })
}
getALLRecetas(){
  this.api.getRecetas().subscribe(res=>{
    this.datosReceta = res;
  })
}
}

import { Component, OnInit } from '@angular/core';
import { Producto } from "../models/tabla.model";
import  Swal  from 'sweetalert2';

@Component({
  selector: 'app-romance',
  templateUrl: './romance.component.html',
  styleUrls: ['./romance.component.scss']
})
export class RomanceComponent implements OnInit {
  productos: Producto[];
  constructor() { 
    this.productos=[]
  }

  ngOnInit(): void {
  }

  guardar(id2:string, nombre:string, precio:string,envio2:string):boolean{
    let subtotal = parseInt(precio) + parseInt(envio2)
    let impuesto=  subtotal * 0.15;
    let totalNeto= subtotal+impuesto

    console.log(this.productos);
    this.productos.push(new Producto(id2,nombre,precio,envio2,subtotal,impuesto,totalNeto));
    return false;
  }

  facturar(): void{
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Comprado',
      showConfirmButton: false,
      timer: 1500
    })
  }
  eliminar(): void{
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'eliminado',
      showConfirmButton: false,
      timer: 1500
    })
  }
  

}

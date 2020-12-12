import { Component, OnInit,Input } from '@angular/core';
import { Producto } from '../models/tabla.model';
import { Router } from '@angular/router';
import { EMPTY } from 'rxjs';

import  Swal  from 'sweetalert2';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.scss']
})
export class CompraComponent implements OnInit {
  @Input() productos: Producto;
  constructor() {
       }

  ngOnInit(): void {
  }
  
  //   data:any=[{
  //     id:'1',
  //     nombre:'Un Mundo Feliz',
  //     precio:'1736.63',
  //     envio:'100.00',
  //     subtotal:'1836.63',
  //     impuesto:'260.49',
  //     totalNeto:'209712' 

  //   },
  //   {
  //     id:2,
  //     nombre:'Un Mundo InFeliz',
  //     precio:1736.63,
  //     envio:100.00,
  //     subtotal:1836.63,
  //     impuesto:260.49,
  //     totalNeto:209712 

  //   }
    
  // ]

    
    
  
  
}


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EMPTY } from 'rxjs';
import  Swal  from 'sweetalert2';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss']
})
export class RegistrarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  registrado(): void {
    event.preventDefault()
    var nombre = (<HTMLInputElement>document.getElementById("nombrec")).value
    var apellido = (<HTMLInputElement>document.getElementById("apellidoc")).value
    var email = (<HTMLInputElement>document.getElementById("email")).value
    var contra1 = (<HTMLInputElement>document.getElementById("password")).value


    if(nombre == ""){
      document.getElementById("nombrec").focus();
      Swal.fire('Debes ingresar tu nombre','','error')

    }else if(apellido == ""){
      document.getElementById("apellidoc").focus();
      Swal.fire('Debes ingresar tu Apellido','','error')

    }else if(email == ""){
      document.getElementById("email").focus();
      Swal.fire('Debes ingresar el correo','','error')

    
    }else if(contra1 == ""){
      document.getElementById("password").focus();
      Swal.fire('Debes ingresar la contraseña','','error')

    } else{
      if(contra1 !=''){
        this.router.navigate(['/explorar'])
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Registrado & Logeado!',
          showConfirmButton: false,
          timer: 1500
        })
      }else{
        Swal.fire('Datos Incorrectos!','Las contraseñas no coinciden','error')
      }
    }
    }
    
    


  
  

}

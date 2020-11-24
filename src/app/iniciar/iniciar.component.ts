import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EMPTY } from 'rxjs';

import  Swal  from 'sweetalert2';

@Component({
  selector: 'app-iniciar',
  templateUrl: './iniciar.component.html',
  styleUrls: ['./iniciar.component.scss']
})
export class IniciarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  gohome(){
    event.preventDefault()
    var email = (<HTMLInputElement>document.getElementById("email")).value
    var contra =(<HTMLInputElement>document.getElementById("password")).value

    if(email == ""){
      document.getElementById("email").focus();
      Swal.fire('Debes ingresar el correo','','error')
    }else if(contra == ""){
      document.getElementById("password").focus();
      Swal.fire('Debes ingresar la contraseña','','error')
      
    }else{
      if(email=="grupo2@gmail.com" && contra=="1234"){
        this.router.navigate(['/explorar'])
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Logeado!',
          showConfirmButton: false,
          timer: 1500
        })
      }else{
        Swal.fire('Datos Incorrectos!','Revisa bien el correo o la contraseña','error')
      }
    }
  }


}

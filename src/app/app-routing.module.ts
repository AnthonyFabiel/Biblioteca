import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcercaComponent } from './acerca/acerca.component';
import { ExplorarComponent } from './explorar/explorar.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { IniciarComponent } from './iniciar/iniciar.component';
import { CompraComponent } from './compra/compra.component';

import { RomanceComponent } from './romance/romance.component';
import { ComediaComponent } from './comedia/comedia.component';
import { TerrorComponent } from './terror/terror.component';
import { CienciaComponent } from './ciencia/ciencia.component';
import { CuentoComponent } from './cuento/cuento.component';


const routes: Routes = [
  {path:'', redirectTo:'iniciar', pathMatch:'full'}, 
  {path:'acerca', component:AcercaComponent},
  {path:'explorar', component:ExplorarComponent},
  {path:'registrar', component:RegistrarComponent},
  {path:'iniciar', component:IniciarComponent},
  {path:'compra', component:CompraComponent},

  {path:'romance', component:RomanceComponent},
  {path:'comedia', component:ComediaComponent},
  {path:'terror', component:TerrorComponent},
  {path:'ciencia', component:CienciaComponent},
  {path:'cuento', component:CuentoComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

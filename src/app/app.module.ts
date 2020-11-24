import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcercaComponent } from './acerca/acerca.component';
import { ExplorarComponent } from './explorar/explorar.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { IniciarComponent } from './iniciar/iniciar.component';
import { RomanceComponent } from './romance/romance.component';
import { ComediaComponent } from './comedia/comedia.component';
import { TerrorComponent } from './terror/terror.component';
import { CienciaComponent } from './ciencia/ciencia.component';
import { CuentoComponent } from './cuento/cuento.component';
import { CompraComponent } from './compra/compra.component';

@NgModule({
  declarations: [
    AppComponent,
    AcercaComponent,
    ExplorarComponent,
    RegistrarComponent,
    IniciarComponent,
    RomanceComponent,
    ComediaComponent,
    TerrorComponent,
    CienciaComponent,
    CuentoComponent,
    CompraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { BookCardComponent } from './book-card/book-card.component';
import { BookImagenComponent } from './book-imagen/book-imagen.component';
import { OpacityComponent } from './opacity/opacity.component';
import { LoadingComponent } from './loading/loading.component';
import { TitulosComponent } from './titulos/titulos.component';
import { AntiguedadPorAntiguedadPipe } from './antiguedad-por-antiguedad.pipe';
import { CargaDeLibrosComponent } from './carga-de-libros/carga-de-libros.component';
import { BookService } from './book.service';


@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    BookCardComponent,
    BookImagenComponent,
    OpacityComponent,
    LoadingComponent,
    TitulosComponent,
    AntiguedadPorAntiguedadPipe,
    CargaDeLibrosComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule {
  
}

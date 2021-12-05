import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Importar router module 
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http'
//Formulario Angular
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { StatsComponent } from './components/stats/stats.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    StatsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

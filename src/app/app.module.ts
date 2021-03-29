import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { NavigationMenuComponent } from './shared/navigation-menu/navigation-menu.component';
import { DistributorService } from './services/distributor.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SimpleModalModule } from 'ngx-simple-modal';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { ProductService } from './services/product.service';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgSelectModule,
    FormsModule,
    CommonModule,
    SimpleModalModule.forRoot({container: "modal-container"}),
    ToastrModule.forRoot()
  ],
  providers: [DistributorService,HttpClient,ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }

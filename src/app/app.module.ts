import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ItemListComponent } from './item-list/item-list.component';
import { BagComponent } from './bag/bag.component';
import { ItemComponent } from './item/item.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { ItemService } from './services/item.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { myRoutes } from './app.routes';
import { UserService } from './services/user.service';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    BagComponent,
    ItemComponent,
    MainComponent,
    HeaderComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(myRoutes),
    FormsModule
  ],
  providers: [ItemService, UserService],
  bootstrap: [AppComponent],
})
export class AppModule { }

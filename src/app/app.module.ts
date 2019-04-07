import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { IndexComponent } from './index/index.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { AdminCPComponent } from './admin-cp/admin-cp.component';
import { LogoutComponent } from './logout/logout.component';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { TodoComponent } from './todo/todo.component';
import { GraaljsonComponent } from './graaljson/graaljson.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    IndexComponent,
    AboutComponent,
    ContactComponent,
    AdminCPComponent,
    LoginComponent,
    LogoutComponent,
    ListTodosComponent,
    TodoComponent,
    GraaljsonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

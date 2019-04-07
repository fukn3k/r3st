import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AdminCPComponent } from './admin-cp/admin-cp.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './services/route-guard.service';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { TodoComponent } from './todo/todo.component';
import { GraaljsonComponent } from './graaljson/graaljson.component';

const routes: Routes = [
  {path: '', component: LoginComponent },

  {path: 'login', component: LoginComponent },
  {path: 'logout', component: LogoutComponent, canActivate: [RouteGuardService]  },

  {path: 'index', component: IndexComponent },
  {path: 'index/:username', component: IndexComponent },
  {path: 'about', component: AboutComponent },
  {path: 'contact', component: ContactComponent },

  {path: 'admin', component: AdminCPComponent, canActivate: [RouteGuardService] },

  {path: 'todos', component: ListTodosComponent, canActivate: [RouteGuardService] },
  {path: 'todos/:id', component: TodoComponent, canActivate: [RouteGuardService] },

  {path: 'gr', component: GraaljsonComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { DeleteComponent } from './delete/delete.component';
import { SearchCnpjComponent } from './search-cnpj/search-cnpj.component';
import { AuthGuard } from './auth.guard';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'list-all', component: ListComponent, canActivate: [AuthGuard] },
  { path: 'create', component: CreateComponent, canActivate: [AuthGuard] },
  { path: 'delete/:id', component: DeleteComponent, canActivate: [AuthGuard] },
  { path: 'search-cnpj', component: SearchCnpjComponent, canActivate: [AuthGuard] },
  { path: 'view-details/:id', component: ViewDetailsComponent, canActivate: [AuthGuard] },
  { path: 'update/:id', component: UpdateComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

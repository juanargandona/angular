import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './services/auth.guard';

import { AuthorizeComponent } from './components/authorize/authorize.component';
import { CallbackComponent } from './components/callback/callback.component';
import { HomeComponent } from './components/home/home.component';
import { PreciosComponent } from './components/precios/precios.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'precios', component: PreciosComponent },
  { path: 'protegida', component: ProtegidaComponent, canActivate: [AuthGuard] },
  { path: 'callback', component: CallbackComponent },
  { path: 'authorize', component: AuthorizeComponent },
  { path: '**', pathMatch:'full', redirectTo: 'home' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

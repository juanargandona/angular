import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { HeroesBuscarComponent } from './components/heroes-buscar/heroes-buscar.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HomeComponent } from './components/home/home.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'heroe/:id', component: HeroeComponent },
    { path: 'heroes-buscar/:termino', component: HeroesBuscarComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
];


export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES)

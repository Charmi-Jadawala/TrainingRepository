import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtlanticComponent } from './atlantic/atlantic.component';
import { IndiaUsaComponent } from './india-usa/india-usa.component';
import { MenuComponent } from './menu/menu.component';
import { PacificComponent } from './pacific/pacific.component';

const routes: Routes = [
    {path: '', redirectTo: 'india-usa', pathMatch: 'full'},
    {path: 'india-usa', component: IndiaUsaComponent, 
        children: [
            {path: 'atlantic', component: AtlanticComponent},
            {path: 'atlantic/:id', component: MenuComponent},
            {path: 'pacific', component: PacificComponent},
            {path: 'pacific/:id', component: MenuComponent}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

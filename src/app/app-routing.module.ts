import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ContractingComponent } from './contracting/contracting.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'contacto', component:ContactComponent},
  {path:'contrataciones', component:ContractingComponent},
  {path:'', redirectTo:'/home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

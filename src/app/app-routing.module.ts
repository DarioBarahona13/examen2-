import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { InformacionComponent } from './informacion/informacion.component';


const routes: Routes = [
  {path: 'about-us', component:AboutUsComponent},
  {path: 'informacion', component:InformacionComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BindComponent } from './content/bind/bind.component';
import { TabsComponent } from './content/tabs/tabs.component';

const routes: Routes = [
  { path: '', component: TabsComponent},
  { path:'bind', component: BindComponent}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

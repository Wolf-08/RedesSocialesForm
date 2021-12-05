import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { StatsComponent } from './components/stats/stats.component';

const routes: Routes = [
  {path: 'form', component: FormComponent},
  {path: 'stats', component: StatsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

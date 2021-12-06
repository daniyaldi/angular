import { DisplayDataComponent } from './display-data/display-data.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollegeComponent } from './college/college.component';
import { SchoolComponent } from './school/school.component';
import { UniversityComponent } from './university/university.component';

const routes: Routes = [
  { path: '',   redirectTo: 'school', pathMatch: 'full' },
  {path:'college',component:CollegeComponent},
  {path:'university',component:UniversityComponent},
  {path:'school',component:SchoolComponent},
  {path:'display-data',component:DisplayDataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

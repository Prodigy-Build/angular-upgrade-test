import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AuthGuard } from "@auth/guards/auth.guard";
import { StudentListComponent } from "./students/student-list/student-list.component";
import { StudentDetailsComponent } from "./students/student-details/student-details.component";
import { StudentAddEditComponent } from "./students/student-add-edit/student-add-edit.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'students', component: StudentListComponent, canActivate: [AuthGuard] },
  { path: 'students/add', component: StudentAddEditComponent, canActivate: [AuthGuard] },
  { path: 'students/:id', component: StudentDetailsComponent, canActivate: [AuthGuard] },
  { path: 'students/:id/edit', component: StudentAddEditComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
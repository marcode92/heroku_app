import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScannedComponent } from './scanned/scanned.component';
import { CreateUserComponent } from './create-user/create-user.component';


const routes: Routes = [
 { path: 'nfc/:id', component: ScannedComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

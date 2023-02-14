import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScannedComponent } from './scanned/scanned.component';

const routes: Routes = [
 { path: 'nfc', component: ScannedComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

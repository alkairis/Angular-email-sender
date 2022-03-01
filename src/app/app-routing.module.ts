import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailcardComponent } from './emailcard/emailcard.component';
import { PageComponent } from './page/page.component';

const routes: Routes = [
  {
    path: "sendemail",
    component: EmailcardComponent,
    pathMatch : "full"
  },
  {
    path: '',
    component : PageComponent,
    pathMatch : 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

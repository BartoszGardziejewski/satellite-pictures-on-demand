import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {OfferComponent} from "./offer/offer.component";
import {SubscriptionsComponent} from './subscriptions/subscriptions.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'offer', component: OfferComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'subscriptions', component: SubscriptionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

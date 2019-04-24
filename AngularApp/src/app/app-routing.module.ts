import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {OfferComponent} from "./offer/offer.component";
import {SubscriptionsComponent} from './subscriptions/subscriptions.component';
import {LogoutComponent} from './logout/logout.component';
import {SubscriptionComponent} from './subscription/subscription.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'offer', component: OfferComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'subscriptions', component: SubscriptionsComponent},
  { path: 'logout', component: LogoutComponent},
  { path: 'subscription/:id', component: SubscriptionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

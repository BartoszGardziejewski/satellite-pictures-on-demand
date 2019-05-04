import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {OfferComponent} from "./offer/offer.component";
import {SubscriptionsComponent} from './subscriptions/subscriptions.component';
import {SubscriptionComponent} from './subscription/subscription.component';
import {AddSubscriptionComponent} from './add-subscription/add-subscription.component';
import {AccountComponent} from './account/account.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'offer', component: OfferComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'subscriptions', component: SubscriptionsComponent},
  { path: 'account', component: AccountComponent},
  { path: 'subscription/:id', component: SubscriptionComponent},
  { path: 'addSubscription', component: AddSubscriptionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

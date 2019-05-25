import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { OfferComponent } from './offer/offer.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import {FormsModule} from '@angular/forms';
import { SubsciptionThumbnailComponent } from './subsciption-thumbnail/subsciption-thumbnail.component';
import { AddSubscriptionComponent } from './add-subscription/add-subscription.component';
import { AccountComponent } from './account/account.component';
import { WorldMapComponent } from './world-map/world-map.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    OfferComponent,
    SubscriptionsComponent,
    SubscriptionComponent,
    SubsciptionThumbnailComponent,
    AddSubscriptionComponent,
    AccountComponent,
    WorldMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'CHAVES_GOOGLE_MAPS'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

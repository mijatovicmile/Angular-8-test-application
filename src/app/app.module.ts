import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Browser Animation Module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//  HttpClientModule and Http_Interceptors
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// AppComponent
import { AppComponent } from './app.component';

// Header Component
import { HeaderComponent } from './header/header.component';

// Customer Offer Component
import { CustomerOfferComponent } from './customers/customer-offer/customer-offer.component';

// Customer Subscription Component
import { CustomerSubscriptionComponent } from './customers/customer-subscription/customer-subscription.component';

// Error Component
import { ErrorComponent } from './error/error.component';

// Page Not Found Component
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// Angular Material Module
import { AngularMaterialModule } from './angular-material.module';

// HTTP Error Interceptor
import { ErrorInterceptor } from './error.interceptor';

// App Routing Module
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CustomerOfferComponent,
    CustomerSubscriptionComponent,
    ErrorComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    AppRoutingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
  // Inform Angular that this component is goint to get used, even though Angular can't see it.
  entryComponents: [ErrorComponent]
})
export class AppModule { }

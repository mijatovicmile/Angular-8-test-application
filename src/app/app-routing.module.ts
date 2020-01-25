import { NgModule } from "@angular/core";

// Angular Router Module
import { RouterModule, Routes } from "@angular/router";

// Customer Offer Component
import { CustomerOfferComponent } from './customers/customer-offer/customer-offer.component';

// Customer Subscription Component
import { CustomerSubscriptionComponent } from './customers/customer-subscription/customer-subscription.component';

// Page Not Found Component
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// Routes
const appRoutes: Routes = [
  { path: "",  redirectTo: 'offers', pathMatch: 'full' },
  { path: "offers", component: CustomerOfferComponent },
  { path: "subscriptions", component: CustomerSubscriptionComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  providers: []
})

export class AppRoutingModule {}
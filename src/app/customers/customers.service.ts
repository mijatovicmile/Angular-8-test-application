import { Injectable } from '@angular/core';

// HttpClient
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

/**
 * Map method allows us to transform every element of an array 
 * info a new element and store them back into a new array
 */
import { map } from 'rxjs/operators';

// Offer model 
import { Offer } from './customer-offer/customer-offer.model';

// Subscription model
import { Sub } from './customer-subscription/customer-subscription.model';

// Environment variables
import { environment } from '../../environments/environment';

// Define Resftul APIs by using environment variables 
const OFFERS_API = environment.apiUrl;
const SUBSCRIPTIONS_API = environment.apiUrl + '/100/subscriptions';

// Provide this service in application root
@Injectable({ providedIn: 'root' })

export class CustomersService {

    // Inject httpClient dependency
    constructor(private http: HttpClient) {}

    /**
     * Http get method to reach Offers Restful API Endpoint and 
     * fetch customers offers information
     */
    getOffers(): Observable<Offer[]> {
        return this.http
            .get<{offers: Offer[]}>(OFFERS_API)
            .pipe(
                map(response => response.offers)
        );
    }


    /**
     * Http get method to reach Subscriptions Restful API Endpoint and 
     * fetch customers subscription information
     */
    getSubscriptions() {
        return this.http
            .get<{subscriptions: Sub[]}>(SUBSCRIPTIONS_API)
            .pipe(
                map(response => response.subscriptions)
        );
    }
}
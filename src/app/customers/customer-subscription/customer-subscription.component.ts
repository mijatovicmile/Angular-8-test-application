import { Component } from '@angular/core';

// Customers Service
import { CustomersService } from '../customers.service';

// Subscription model
import { Sub } from '../customer-subscription/customer-subscription.model';

@Component({
    selector: 'app-customer-subscription',
    templateUrl: './customer-subscription.component.html',
    styleUrls: ['./customer-subscription.component.scss']
})

export class CustomerSubscriptionComponent {

    /**
     * Loading of Angular material spinner is set to true by default 
     * and will be disabled when we receive the subscriptions data
     */
    isLoading: boolean = true;

    // Define subscriptions property as an empty array which I will use to store lists of subscriptions
    subscriptions: Sub[] = [];

    constructor(private customersService: CustomersService) {}

    // Column titles (subscription table)
    displayedColumns: string[] = ['id', 'name', 'type'];

    // A lifecycle hook that is called after Angular has initialized all data
    ngOnInit() {
        this.customersService.getSubscriptions()            
            // Subscribe to transformed Subscription Data
            .subscribe((subscriptionData) => {
                // Store subscriptions data in subscriptions array    
                this.subscriptions = subscriptionData;

                // Stop Angular Material loading spinner
                this.isLoading = false;
            }, error => {
                // Stop Angular Material loading spinner if error occurs
                this.isLoading = false;
            }
        )
    }  

}
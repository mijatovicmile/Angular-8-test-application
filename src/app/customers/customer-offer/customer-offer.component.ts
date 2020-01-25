import { Component, OnInit } from '@angular/core';

// Offer model
import { Offer } from './customer-offer.model';

// Customers Service
import { CustomersService } from '../customers.service';


@Component({
    selector: 'app-customer-offer',
    templateUrl: './customer-offer.component.html',
    styleUrls: ['./customer-offer.component.scss']
})

export class CustomerOfferComponent implements OnInit {

    /**
     * Loading of Angular material spinner is set to true by default 
     * and will be disabled when we receive the offers data
     */
    isLoading: boolean = true;

    // Define offers as an empty array which I will use to store lists of offers
    offers: Offer[] = [];

    constructor(private customersService: CustomersService) {}

    // Column titles (offers table)
    displayedColumns: string[] = ['id', 'name', 'contractStartDate', 'contractEndDate'];

    // A lifecycle hook that is called after Angular has initialized all data
    ngOnInit() {
        this.customersService.getOffers()            
            // Subscribe to transformed Data
            .subscribe((transformedData) => {
                // Store offers data in offers array    
                this.offers = transformedData;

                // Stop Angular Material loading spinner
                this.isLoading = false;
            }, error => {
                // Stop Angular Material loading spinner if error occurs
                this.isLoading = false;
            }
        )
    }  
}
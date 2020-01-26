import { Component, ViewChild } from '@angular/core';

// Angular Material (DataSource, Paginator, Sort)
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

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

    /**
     * Data source that accepts a client-side data array and includes 
     * native support of filtering, sorting (using MatSort), and pagination (using MatPaginator).
     */
    listData: MatTableDataSource<Sub>;
    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
    @ViewChild(MatSort, { static: true }) sort: MatSort;

    // Column titles (subscription table)
    displayedColumns: string[] = ['id', 'name', 'type'];

    constructor(private customersService: CustomersService) {}


    // A lifecycle hook that is called after Angular has initialized all data
    ngOnInit() {
        this.customersService.getSubscriptions()            
            // Subscribe to transformed Subscription Data
            .subscribe((subscriptionData) => {
                
                // Store subscription data in listData array
                this.listData = new MatTableDataSource(subscriptionData);

                // Paginator
                this.listData.paginator = this.paginator;

                // Sorting Data
                this.listData.sort = this.sort;

                // Stop Angular Material loading spinner
                this.isLoading = false;
            }, error => {
                // Stop Angular Material loading spinner if error occurs
                this.isLoading = false;
            }
        )
    }  

}
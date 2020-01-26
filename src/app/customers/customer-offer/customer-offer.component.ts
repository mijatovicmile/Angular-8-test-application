import { Component, OnInit, ViewChild } from '@angular/core';

// Angular Material (DataSource, Paginator, Sort)
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

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
     * and will be disabled when we receive the offers data or if http error occurs
     */
    isLoading: boolean = true;


    /**
     * Data source that accepts a client-side data array and includes 
     * native support of filtering, sorting (using MatSort), and pagination (using MatPaginator).
     */
    listData: MatTableDataSource<Offer>;
    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
    @ViewChild(MatSort, { static: true }) sort: MatSort;
    
    // Column titles (offers table)
    displayedColumns: string[] = ['id', 'name', 'contractStartDate', 'contractEndDate'];
    
    constructor(private customersService: CustomersService) {}
    

    // A lifecycle hook that is called after Angular has initialized all data
    ngOnInit() {
        this.customersService.getOffers()           
            // Subscribe to transformed Data
            .subscribe((transformedData) => {
                
                // Store offers data in listData array
                this.listData = new MatTableDataSource(transformedData);

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
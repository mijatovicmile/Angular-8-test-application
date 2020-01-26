import { NgModule } from "@angular/core";

// Import the @angular/material modules
import { 
    MatToolbarModule, 
    MatButtonModule, 
    MatIconModule,
    MatTableModule,
    MatDialogModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule 
} from "@angular/material";

@NgModule({
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatDialogModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule
  ]
})

export class AngularMaterialModule {}
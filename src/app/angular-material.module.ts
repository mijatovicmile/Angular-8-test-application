import { NgModule } from "@angular/core";

// Import the @angular/material modules
import { 
    MatToolbarModule, 
    MatButtonModule, 
    MatIconModule,
    MatTableModule,
    MatDialogModule,
    MatProgressSpinnerModule 
} from "@angular/material";

@NgModule({
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatDialogModule,
    MatProgressSpinnerModule
  ]
})

export class AngularMaterialModule {}
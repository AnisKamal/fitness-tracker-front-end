import { NgModule } from '@angular/core';

import {MatFormFieldModule} from '@angular/material/form-field' ; 
import {MatInputModule} from '@angular/material/input'; 
import { MatButtonModule } from '@angular/material/button'; 
import { MatDatepickerModule } from '@angular/material/datepicker'; 
import { MatNativeDateModule } from '@angular/material/core';
import { MatPseudoCheckboxModule } from '@angular/material/core';
import { MatSidenavModule } from '@angular/material/sidenav'; 
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatCheckboxModule } from '@angular/material/checkbox'; 
import { MatIconModule } from '@angular/material/icon'; 
import { MatListModule } from '@angular/material/list'; 
import { MatTabsModule } from '@angular/material/tabs'; 
import { MatCardModule } from '@angular/material/card'; 
import { MatSelectModule } from '@angular/material/select'; 
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'; 
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
    imports: [ MatButtonModule, 
               MatFormFieldModule, 
               MatInputModule,
                MatDatepickerModule,
                MatNativeDateModule, 
                MatPseudoCheckboxModule, 
                MatSidenavModule, 
                MatToolbarModule, 
                MatIconModule, 
                MatListModule, 
                MatTabsModule, 
                MatCardModule, 
                MatSelectModule, 
                MatProgressSpinnerModule, 
                MatDialogModule, 
                MatCheckboxModule
                ], 

    exports: [ MatButtonModule, 
               MatFormFieldModule,
               MatInputModule, 
               MatDatepickerModule,
               MatNativeDateModule, 
               MatPseudoCheckboxModule, 
               MatSidenavModule, 
               MatToolbarModule, 
               MatIconModule, 
               MatListModule, 
               MatTabsModule, 
               MatCardModule, 
               MatSelectModule, 
               MatProgressSpinnerModule, 
               MatDialogModule, 
               MatCheckboxModule
               ], 
})

export class MaterialModule{}
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { DistributorsRoutingModule } from './distributors-routing.module'
import { DistributorsComponent } from './distributors/distributors.component'
import { DistributorAddEditComponent } from './distributors/distributor-add-edit/distributor-add-edit.component'
import { ReactiveFormsModule } from '@angular/forms'
import { FormsModule } from '@angular/forms'
import { NgxDatatableModule } from '@swimlane/ngx-datatable'

@NgModule({
    declarations: [DistributorsComponent, DistributorAddEditComponent],
    imports: [
        CommonModule,
        DistributorsRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        NgxDatatableModule,
    ],
})
export class DistributorsModule {}

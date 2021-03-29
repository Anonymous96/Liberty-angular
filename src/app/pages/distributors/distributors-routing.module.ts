import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { DistributorAddEditComponent } from './distributors/distributor-add-edit/distributor-add-edit.component'
import { DistributorsComponent } from './distributors/distributors.component'

const routes: Routes = [
    {
        path: '',
        component: DistributorsComponent,
    },
    {
        path: 'add-distributor',
        component: DistributorAddEditComponent,
    },
    {
        path: 'edit-distributor/:id',
        component: DistributorAddEditComponent,
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DistributorsRoutingModule {}

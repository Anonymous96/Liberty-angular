import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { DistributorAddComponent } from './distributors/distributor-add/distributor-add.component'
import { DistributorsComponent } from './distributors/distributors.component'

const routes: Routes = [
    {
        path: '',
        component: DistributorsComponent,
    },
    {
        path: 'add-distributor',
        component: DistributorAddComponent,
    },
    {
        path: 'edit-distributor/:id',
        component: DistributorAddComponent,
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DistributorsRoutingModule {}

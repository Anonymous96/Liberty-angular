import { Component, OnInit, Input } from '@angular/core'
import { ColumnMode } from '@swimlane/ngx-datatable'
import { ToastrService } from 'ngx-toastr'
import { distributor } from 'src/app/models/distributor.model'
import { DistributorService } from 'src/app/services/distributor.service'

type DistributorForTree = distributor & { treeStatus: string }

@Component({
    selector: 'app-distributors',
    templateUrl: './distributors.component.html',
    styleUrls: ['./distributors.component.css'],
})
export class DistributorsComponent implements OnInit {
    public distributors: DistributorForTree[]
    public children = []
    ColumnMode = ColumnMode

    constructor(
        private distributorService: DistributorService,
        private toastr: ToastrService
    ) {}

    ngOnInit(): void {
        this.getDistributors()
    }

    getDistributors() {
        this.distributorService.getDistributors().subscribe(
            (data) => {
                this.distributors = data as DistributorForTree[]

                data.map((distributor) => {
                    distributor.treeStatus = 'collapsed'
                    return distributor
                })
                console.log(data)
            },
            (err) => console.log(err),
            () => console.log('sucess')
        )
    }

    deleteDistributor(distributor: DistributorForTree) {
        var index = this.distributors.indexOf(distributor)
        this.distributorService
            .deleteDistributor(distributor.id)
            .subscribe((data) => {
                this.toastr.success('დისტრიბუტორი წარმატებით წაიშალა')
                this.distributors.splice(index, 1)
            })
    }

    onTreeAction(event: any) {
        const index = event.rowIndex
        const row = event.row
        if (row.treeStatus === 'collapsed') {
            row.treeStatus = 'expanded'
        } else {
            row.treeStatus = 'collapsed'
        }
        this.distributors = [...this.distributors]
    }
}

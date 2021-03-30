import { Component, Input, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { throwError } from 'rxjs'
import { Distributor } from 'src/app/models/Distributor.model'
import { DistributorService } from 'src/app/services/distributor.service'
import { ToastrService } from 'ngx-toastr'

@Component({
    selector: 'app-distributor-add-edit',
    templateUrl: './distributor-add-edit.component.html',
    styleUrls: ['./distributor-add-edit.component.css'],
})
export class DistributorAddEditComponent implements OnInit {
    parentId: number
    distributors: Distributor[]
    distributorForm: FormGroup
    public distributor: Distributor
    public recommendedDistributors = []
    public children = []
    public distributorId: number = this.route.snapshot.params.id

    constructor(
        private distributorService: DistributorService,
        private toastr: ToastrService,
        private route: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.getDistributorById(this.distributorId)
        this.getDistributors()

        this.distributorForm = new FormGroup({
            firstname: new FormControl('', [
                Validators.required,
                Validators.maxLength(50),
            ]),
            lastname: new FormControl('', [
                Validators.required,
                Validators.maxLength(50),
            ]),
            gender: new FormControl('', Validators.required),
            birthdate: new FormControl('', Validators.required),
            imageUrl: new FormControl(''),
            passportType: new FormControl('', Validators.required),
            documentSeries: new FormControl('', Validators.maxLength(10)),
            passportNumber: new FormControl('', Validators.maxLength(10)),
            releaseDate: new FormControl('', Validators.required),
            validDate: new FormControl('', Validators.required),
            persNumber: new FormControl('', [
                Validators.required,
                Validators.maxLength(50),
            ]),
            issuedBy: new FormControl('', Validators.maxLength(100)),
            contactType: new FormControl('', Validators.required),
            contactInfo: new FormControl('', [
                Validators.required,
                Validators.maxLength(100),
            ]),
            addressType: new FormControl('', Validators.required),
            address: new FormControl('', [
                Validators.required,
                Validators.maxLength(100),
            ]),
            parentId: new FormControl(''),
        })
    }

    getDistributors() {
        this.distributorService.getDistributors().subscribe(
            (data) => {
                this.distributors = data
            },
            (err) => console.log(err),
            () => this.filterChild()
        )
    }

    getDistributorById(id: number) {
        this.distributorService.getDistributorById(id).subscribe(
            (data) => {
                this.distributor = data
            },
            (err) => console.log(err),
            () => this.FormInsertData()
        )
    }

    addDistributor() {
        if (this.distributorForm.valid) {
            this.toastr.success('დისტრიბუტორი წარმატებით დაემატა')

            this.distributorService
                .insertDistributor(this.distributorForm.value)
                .subscribe(
                    (data) => {
                        this.distributors.push(data)
                        this.addParent(data)
                        this.navigateToDistributor()

                        return true
                    },
                    (error) => {
                        return throwError(error)
                    }
                )
        } else {
            this.toastr.warning('გთხოვთ შეავსოთ ფორმა')
        }
    }
    navigateToDistributor() {
        this.router.navigateByUrl('/distributors')
    }
    filterChild() {
        for (let distributor of this.distributors) {
            if (
                distributor.recommendedDistributors?.length <= 2 ||
                !distributor.recommendedDistributors
            ) {
                this.children.push(distributor)
            }
        }
    }

    addParent(data: any) {
        this.distributorService
            .addDisttributorParent(data, this.distributors)
            .subscribe((res) => {
                this.navigateToDistributor()
            })
    }

    updateDistributor() {
        this.toastr.success('დისტრიბუტორი წარმატებით დარედაქტირდა')
        this.distributorService
            .editDistributor(this.distributor.id, this.distributorForm.value)
            .subscribe((data) => {
                this.addParent(data)
                return true
            })
    }
    saveButton() {
        if (!this.distributorId) {
            this.addDistributor()
        } else {
            this.updateDistributor()
        }
    }
    FormInsertData() {
        this.distributorForm.patchValue({
            firstname: this.distributor.firstname,
            lastname: this.distributor.lastname,
            gender: this.distributor.gender,
            birthdate: this.distributor.birthdate,
            imageUrl: this.distributor.imageUrl,
            passportType: this.distributor.passportType,
            documentSeries: this.distributor.documentSeries,
            passportNumber: this.distributor.passportNumber,
            releaseDate: this.distributor.releaseDate,
            validDate: this.distributor.validDate,
            persNumber: this.distributor.persNumber,
            issuedBy: this.distributor.issuedBy,
            contactType: this.distributor.contactType,
            contactInfo: this.distributor.contactInfo,
            addressType: this.distributor.addressType,
            address: this.distributor.address,
            parentId: this.distributor.parentId,
        })
    }
}

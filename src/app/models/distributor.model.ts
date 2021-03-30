export class Distributor {
    id?: number
    firstname?: string
    lastname?: string
    gender?: string
    imageUrl?: string
    birthdate?: Date
    documentSeries?: string
    passportType?: string
    passportNumber?: string
    releaseDate?: Date
    validDate?: Date
    persNumber?: string
    issuedBy?: string
    contactType?: string
    contactInfo?: string
    addressType?: string
    address?: string
    parentId?: number
    recommendedDistributors?: Distributor[]
    treeStatus?: string
}

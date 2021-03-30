import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from 'src/environments/environment'
import { Observable } from 'rxjs'
import { Distributor } from '../models/Distributor.model'

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
}

@Injectable({
    providedIn: 'root',
})
@Injectable()
export class DistributorService {
    constructor(private http: HttpClient) {}

    public getDistributors(): Observable<Array<Distributor>> {
        return <Observable<Array<Distributor>>>(
            this.http.get(environment.apiUrl + '/distributions')
        )
    }

    public getDistributorById(id: number): Observable<Distributor> {
        return <Observable<Distributor>>(
            this.http.get(environment.apiUrl + '/distributions/' + id)
        )
    }

    public insertDistributor(distributor: Distributor): Observable<any> {
        return this.http.post(
            environment.apiUrl + '/distributions',
            distributor
        )
    }

    public insertrecommendedDistributors(distributor: Distributor) {
        return this.http.post(
            environment.apiUrl + '/distributions/' + distributor.parentId,
            distributor.id
        )
    }

    public deleteDistributor(id: number): Observable<any> {
        return this.http.delete(environment.apiUrl + '/distributions/' + id)
    }

    public addDisttributorParent(data: any, distributors) {
        const parent = distributors.find((item) => item.id === data.parentId)
        if (typeof parent.recommendedDistributors === 'undefined') {
            parent.recommendedDistributors = []
        }

        if (parent.recommendedDistributors.length <= 3) {
            parent.recommendedDistributors.push(data.id)
        }
        return this.editDistributor(parent.id, parent)
    }

    public editDistributor(id: number, distributor: Distributor) {
        return this.http.put(
            environment.apiUrl + '/distributions/' + id,
            distributor
        )
    }
}

import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from 'src/environments/environment'
import { Observable } from 'rxjs'
import { distributor } from '../models/distributor.model'

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
}

@Injectable({
    providedIn: 'root',
})
@Injectable()
export class DistributorService {
    constructor(private http: HttpClient) {}

    public getDistributors(): Observable<Array<distributor>> {
        return <Observable<Array<distributor>>>(
            this.http.get(environment.apiUrl + '/distributions')
        )
    }

    public getDistributorById(id: number): Observable<distributor> {
        return <Observable<distributor>>(
            this.http.get(environment.apiUrl + '/distributions/' + id)
        )
    }

    public insertDistributor(distributor: distributor): Observable<any> {
        return this.http.post(
            environment.apiUrl + '/distributions',
            distributor
        )
    }

    public insertrecommendedDistributors(distributor: distributor) {
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

    public editDistributor(id: number, distributor: distributor) {
        return this.http.put(
            environment.apiUrl + '/distributions/' + id,
            distributor
        )
    }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestapiService {

  constructor(private http: HttpClient) { }

  getPerson(id: number) {
    return this.http.get<any>(environment.api + 'person/' + id);
  }

  getParents(id: number) {
    return this.http.get<any>(environment.api + 'person/' + id + '/parents');
  }

  getSiblings(id: number) {
    return this.http.get<any>(environment.api + 'person/' + id + '/siblings');
  }

  getPartners(id: number) {
    return this.http.get<any>(environment.api + 'person/' + id + '/partners');
  }

  getChildren(id: number) {
    return this.http.get<any>(environment.api + 'person/' + id + '/children');
  }
}

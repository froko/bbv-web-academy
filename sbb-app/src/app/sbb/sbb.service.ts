import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Connection, FlatConnection } from './sbb.model';
@Injectable({
  providedIn: 'root'
})
export class SbbService {
  constructor(@Inject('baseUrl') private baseUrl: string, private http: HttpClient) {}

  getConnections(from: string, to: string): Observable<FlatConnection[]> {
    const url = `${this.baseUrl}/v1/connections?from=${from}&to=${to}&limit=12`;
    return this.http.get<any>(url).pipe(
      map((result) => result.connections as Connection[]),
      map((connections) => connections.map((connection) => FlatConnection.from(connection)))
    );
  }
}

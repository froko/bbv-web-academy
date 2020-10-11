import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Project, Time } from './time.model';

@Injectable()
export class TimeService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient, @Inject('baseUrl') private baseUrl: string) {}

  getAllTimes(): Observable<Time[]> {
    const url = `${this.baseUrl}/times`;
    return this.http.get<Time[]>(url);
  }

  getAllProjects(): Observable<Project[]> {
    const url = `${this.baseUrl}/projects`;
    return this.http.get<Project[]>(url);
  }

  getTime(id: number): Observable<Time> {
    const url = `${this.baseUrl}/times/${id}`;
    return this.http.get<Time>(url);
  }

  saveTime(date: string, project: string, costType: string, amount: number, comment: string): Observable<Time> {
    const url = `${this.baseUrl}/times`;
    const body = JSON.stringify({ date, amount, project, costType, comment });

    return this.http.post<Time>(url, body, this.httpOptions);
  }

  updateTime(time: Time): Observable<Time> {
    const url = `${this.baseUrl}/times/${time.id}`;
    return this.http.put<Time>(url, time);
  }
}

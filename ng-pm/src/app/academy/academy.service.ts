import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Course } from './academy.model';

@Injectable({
  providedIn: 'root'
})
export class AcademyService {
  constructor(@Inject('baseUrl') private baseUrl: string, private http: HttpClient) {}

  getAll(): Observable<Course[]> {
    const url = `${this.baseUrl}/courses`;
    return this.http.get<Course[]>(url);
  }

  getCourse(id: number): Observable<Course> {
    const url = `${this.baseUrl}/courses/${id}`;
    return this.http.get<Course>(url);
  }
}

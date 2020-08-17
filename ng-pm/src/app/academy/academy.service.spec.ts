import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { Course } from './academy.model';
import { AcademyService } from './academy.service';

describe('AcademyService', () => {
  const testEnvironmentProvider = { provide: 'baseUrl', useValue: 'http://localhost:3000' };

  const courses = [{ id: 1 }, { id: 2 }, { id: 3 }];

  let service: AcademyService;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AcademyService, testEnvironmentProvider]
    });

    service = TestBed.inject(AcademyService);
    http = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    http.verify();
  });

  it('should get all courses from API backend', () => {
    service.getAll().subscribe((result) => {
      expect(result.length).toBe(3);
    });

    const response = http.expectOne('http://localhost:3000/courses');
    expect(response.request.method).toEqual('GET');

    response.flush(courses);
  });

  it('should get single course by id from API backend', () => {
    const courseId = 42;

    service.getCourse(courseId).subscribe((result: Course) => {
      expect(result.id).toBe(courseId);
    });

    const response = http.expectOne(`http://localhost:3000/courses/${courseId}`);
    expect(response.request.method).toEqual('GET');

    response.flush({ id: courseId });
  });
});

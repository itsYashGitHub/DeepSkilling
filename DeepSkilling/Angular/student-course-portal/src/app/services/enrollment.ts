import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { CourseService } from './course';
import { Course } from '../models/course.model';

// Hands-On 6, Task 2: EnrollmentService demonstrates service-to-service injection
// (it depends on CourseService) and hierarchical DI patterns.
@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  private enrolledCourseIds: number[] = [];

  constructor(private courseService: CourseService) {}

  enroll(courseId: number): void {
    if (!this.enrolledCourseIds.includes(courseId)) {
      this.enrolledCourseIds.push(courseId);
    }
  }

  unenroll(courseId: number): void {
    this.enrolledCourseIds = this.enrolledCourseIds.filter(id => id !== courseId);
  }

  isEnrolled(courseId: number): boolean {
    return this.enrolledCourseIds.includes(courseId);
  }

  getEnrolledCourses(): Observable<Course[]> {
    // Resolves enrolled IDs to full Course objects via CourseService.
    return this.courseService.getCourses().pipe(
      map(courses => courses.filter(c => this.enrolledCourseIds.includes(c.id)))
    );
  }

  // Hands-On 8, Task 2: dependent HTTP call example - loads students enrolled in a course.
  getStudentsByCourse(courseId: number): Observable<any> {
    return this.courseService.getCourseById(courseId);
  }
}

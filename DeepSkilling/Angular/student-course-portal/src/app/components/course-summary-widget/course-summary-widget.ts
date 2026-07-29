import { Component, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { selectAllCourses } from '../../store/course/course.selectors';
import { selectEnrolledCourses } from '../../store/enrollment/enrollment.selectors';

// Hands-On 6, Task 1: second component injecting the SAME root CourseService instance,
// used to demonstrate the singleton pattern (providedIn: 'root').
@Component({
  selector: 'app-course-summary-widget',
  imports: [AsyncPipe],
  templateUrl: './course-summary-widget.html',
  styleUrl: './course-summary-widget.css',
})
export class CourseSummaryWidget implements OnInit {
  availableCourses$: Observable<number>;
  enrolledCourses$: Observable<number>;

  constructor(private store: Store) {
    this.availableCourses$ = this.store.select(selectAllCourses).pipe(
      map(courses => courses.length)
    );
    this.enrolledCourses$ = this.store.select(selectEnrolledCourses).pipe(
      map(courses => courses.length)
    );
  }

  ngOnInit(): void {}
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CourseService } from '../../services/course';
import { loadCourses } from '../../store/course/course.actions';
import { selectEnrolledIds } from '../../store/enrollment/enrollment.selectors';

@Component({
  selector: 'app-home',
  imports: [FormsModule, AsyncPipe, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit, OnDestroy {
  portalName = 'Student Course Portal';
  isPortalActive = true;
  message = '';
  searchTerm = '';
  coursesCount = 0;
  enrolledCount$: Observable<number>;

  constructor(private courseService: CourseService, private store: Store) {
    this.enrolledCount$ = this.store.select(selectEnrolledIds).pipe(
      map(ids => ids.length)
    );
  }

  ngOnInit(): void {
    // Load courses into the store
    this.store.dispatch(loadCourses());

    // Hands-On 2, Task 2: log on init - fetch a live course count from the service.
    this.courseService.getCourses().subscribe({
      next: (courses) => (this.coursesCount = courses.length),
      error: () => (this.coursesCount = 0),
    });
    console.log('HomeComponent initialised - courses loaded');
  }

  ngOnDestroy(): void {
    console.log('HomeComponent destroyed');
  }

  onEnrollClick(): void {
    this.message = 'Enrollment opened!';
  }
}

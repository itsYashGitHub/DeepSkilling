import { Component, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CourseCard } from '../../components/course-card/course-card';
import { Course } from '../../models/course.model';
import { loadCourses } from '../../store/course/course.actions';
import { loadEnrollments } from '../../store/enrollment/enrollment.actions';
import { selectAllCourses, selectCoursesLoading, selectCoursesError } from '../../store/course/course.selectors';

// Hands-On 9: course list is now driven entirely by the NgRx store instead of a direct
// service subscription (compare with the Hands-On 6/8 version that called CourseService directly).
@Component({
  selector: 'app-course-list',
  imports: [AsyncPipe, CourseCard],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css',
})
export class CourseList implements OnInit {
  courses$: Observable<Course[]>;
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;

  searchTerm = '';
  selectedCourseId: number | null = null;

  constructor(private store: Store, private router: Router, private route: ActivatedRoute) {
    this.courses$ = this.store.select(selectAllCourses);
    this.isLoading$ = this.store.select(selectCoursesLoading);
    this.error$ = this.store.select(selectCoursesError);
  }

  ngOnInit(): void {
    // Hands-On 9: dispatch the load action; the CourseEffects handles the actual HTTP call.
    this.store.dispatch(loadCourses());
    this.store.dispatch(loadEnrollments());

    // Hands-On 7: read the `search` query param set when navigating here.
    this.searchTerm = this.route.snapshot.queryParamMap.get('search') ?? '';
  }

  // Hands-On 3: trackBy avoids re-rendering every card when only one item changes.
  trackByCourseId(index: number, course: Course): number {
    return course.id;
  }

  onSearchChange(term: string): void {
    this.searchTerm = term;
    this.router.navigate(['courses'], { queryParams: { search: term || null } });
  }

  onEnroll(courseId: number): void {
    console.log('Enrolling in course: ' + courseId);
    this.selectedCourseId = courseId;
  }

  goToDetail(courseId: number): void {
    this.router.navigate(['courses', courseId]);
  }
}

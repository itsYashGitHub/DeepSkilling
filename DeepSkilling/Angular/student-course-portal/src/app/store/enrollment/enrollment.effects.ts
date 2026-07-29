import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { loadEnrollments, loadEnrollmentsSuccess, loadEnrollmentsFailure, setEnrolledCourses } from './enrollment.actions';

@Injectable()
export class EnrollmentEffects {
  private actions$ = inject(Actions);
  private http = inject(HttpClient);

  loadEnrollments$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadEnrollments),
      switchMap(() =>
        this.http.get<any[]>('http://localhost:3000/enrollments').pipe(
          map((enrollments) => {
            // Extract unique courseIds from enrollments
            const courseIds = [...new Set(enrollments.map(e => e.courseId))];
            return setEnrolledCourses({ courseIds });
          }),
          catchError((error) => of(loadEnrollmentsFailure({ error: error.message })))
        )
      )
    )
  );
}

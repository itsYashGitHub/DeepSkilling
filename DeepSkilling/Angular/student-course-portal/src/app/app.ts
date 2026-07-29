import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { Store } from '@ngrx/store';
import { Header } from './components/header/header';
import { LoadingService } from './services/loading';
import { loadCourses } from './store/course/course.actions';
import { loadEnrollments } from './store/enrollment/enrollment.actions';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, AsyncPipe],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  public loadingService = inject(LoadingService);
  private store = inject(Store);

  ngOnInit(): void {
    // Load initial data on app initialization
    this.store.dispatch(loadCourses());
    this.store.dispatch(loadEnrollments());
  }
}

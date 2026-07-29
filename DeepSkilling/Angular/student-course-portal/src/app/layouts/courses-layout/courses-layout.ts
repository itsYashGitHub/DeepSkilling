import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Hands-On 7, Task 1: parent layout for nested /courses routes.
@Component({
  selector: 'app-courses-layout',
  imports: [RouterOutlet],
  templateUrl: './courses-layout.html',
  styleUrl: './courses-layout.css',
})
export class CoursesLayout {}

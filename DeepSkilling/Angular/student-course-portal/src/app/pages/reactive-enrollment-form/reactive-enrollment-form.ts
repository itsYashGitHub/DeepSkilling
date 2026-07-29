import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { CanComponentDeactivate } from '../../guards/unsaved-changes-guard';

// Hands-On 5: reactive form - structure lives in the component class (TypeScript),
// the template just binds to it. Fully unit-testable without touching the DOM.
@Component({
  selector: 'app-reactive-enrollment-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-enrollment-form.html',
  styleUrl: './reactive-enrollment-form.css',
})
export class ReactiveEnrollmentForm implements OnInit, CanComponentDeactivate {
  enrollForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.enrollForm = this.fb.group({
      studentName: ['', [Validators.required, Validators.minLength(3)]],
      studentEmail: [
        '',
        [Validators.required, Validators.email],
        [this.simulateEmailCheck],
      ],
      courseId: [null, [Validators.required, this.noCourseCode]],
      preferredSemester: ['Odd', Validators.required],
      agreeToTerms: [false, Validators.requiredTrue],
      additionalCourses: this.fb.array([]),
    });
  }

  // Hands-On 5, Task 2: custom synchronous validator - rejects course codes starting with 'XX'.
  noCourseCode(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (typeof value === 'string' && value.toUpperCase().startsWith('XX')) {
      return { noCourseCode: true };
    }
    return null;
  }

  // Hands-On 5, Task 2: custom async validator - simulates a server-side "email taken" check.
  simulateEmailCheck(control: AbstractControl): Observable<ValidationErrors | null> {
    const value: string = control.value ?? '';
    return of(value).pipe(
      delay(800),
      map((v) => (v.includes('test@') ? { emailTaken: true } : null))
    );
  }

  get additionalCourses(): FormArray {
    return this.enrollForm.get('additionalCourses') as FormArray;
  }

  addCourseControl(): void {
    this.additionalCourses.push(this.fb.control('', Validators.required));
  }

  removeCourse(index: number): void {
    this.additionalCourses.removeAt(index);
  }

  onSubmit(): void {
    // value excludes disabled controls; getRawValue() includes everything.
    console.log('value:', this.enrollForm.value);
    console.log('getRawValue:', this.enrollForm.getRawValue());
  }

  // Used by the CanDeactivate guard (Hands-On 7).
  hasUnsavedChanges(): boolean {
    return this.enrollForm.dirty;
  }
}

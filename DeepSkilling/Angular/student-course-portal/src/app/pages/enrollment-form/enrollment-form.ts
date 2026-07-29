import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

// Hands-On 4: template-driven enrollment form - form structure lives in the template,
// ngModel + name attributes wire each control up to the NgForm instance.
@Component({
  selector: 'app-enrollment-form',
  imports: [FormsModule],
  templateUrl: './enrollment-form.html',
  styleUrl: './enrollment-form.css',
})
export class EnrollmentForm {
  submitted = false;

  onSubmit(form: NgForm): void {
    console.log(form.value, form.valid);
    if (form.valid) {
      this.submitted = true;
    }
  }
}

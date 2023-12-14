import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  studentForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.studentForm = this.formBuilder.group({
      id: [],
      name: ['', Validators.required],
      email: [],
      phone: [],
      gender: ['', Validators.required],
      bloodGroup: ['', Validators.required],
      address: this.formBuilder.group({
        street: [],
        city: [],
        state: [],
        country: []
      })
    });
  }
}
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HelperService } from '../helper.service';

@Component({
  selector: 'app-signgnup',
  templateUrl: './signgnup.component.html',
  styleUrls: ['./signgnup.component.css']
})
export class SigngnupComponent implements OnInit {
  signupForm = this.fb.group({
    name: [],
    email: [''],
    password: [''],
    phone: [''],
    gender: ['']

  })
  constructor(private fb: FormBuilder, private helper: HelperService) { }

  ngOnInit(): void {
  }
  signup() {
    // console.log(this.signupForm.value);
    this.helper.signup(this.signupForm.value);
  }

}

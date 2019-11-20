import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  constructor(private router:Router) { }

  registerForm : FormGroup = new FormGroup({
    firstName : new FormControl('',Validators.required),
    lastName : new FormControl('',Validators.required),
    email : new FormControl('',Validators.required),
    password : new FormControl('',Validators.required)
  })

  // firstName = new FormControl();
  // lastName = new FormControl();
  // email = new FormControl();
  // password = new FormControl();

  ngOnInit() {
  }

  onRegister(){
    console.log(this.registerForm.value);
    if(this.registerForm.valid){
      this.router.navigateByUrl('login');
    }
  }

}

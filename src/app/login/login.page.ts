import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router, private userService: UserService,
              private controller: ToastController) { }

  loginForm = new FormGroup({
    userName : new FormControl('',Validators.required),
    password : new FormControl('',Validators.required) 
  });

  // controller = document.querySelector('ion-toast-controller');

  ngOnInit() {
  }

  onLogin(){
    const inputData = JSON.stringify(this.loginForm.value);
    
    this.userService.login(inputData)
    .then((data:any) =>{
      console.log('data in then',data.userName);
      this.controller.create({
        color: 'dark',
        duration: 2000,
        message: 'LogIn Successfull.'
      }).then(toast => {
        toast.present();
      })
      this.router.navigateByUrl('/home'); 
    })
    .catch(err => {
      this.controller.create({
        color: 'dark',
        duration: 2000,
        message: 'LogIn Failed .'
      }).then(toast => {
        toast.present();
      })
      console.log(err);
    });
  }

}

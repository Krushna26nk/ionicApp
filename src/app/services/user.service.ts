import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }


  private loginData = {
    userName : 'Krushna26nk',
    password : '123456'
  }

  login(data){
    const privateData = JSON.stringify(this.loginData);
    return new Promise((resolve,reject)=>{
      if(data === privateData){
        console.log(data);
        resolve(JSON.parse(data));
      }
      else {
        console.log('error');
        reject('error');
      }
    })
  }

}

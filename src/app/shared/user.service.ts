import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fb: FormBuilder, private http: HttpClient) { }
  readonly BaseURI = 'https://localhost:44388';

  formModel = this.fb.group({
    Email:['', [Validators.required, Validators.email]],
    Sex:[Validators.required],
    BirthDate:[Validators.required],
    Passwords : this.fb.group({
      Password:['', [Validators.required, Validators.minLength(6)]],
    ConfirmPassword:['', Validators.required]
    }, { validator: this.comparePasswords })
    
  });


  comparePasswords(fb: FormGroup) {
    let confirmPswrdCtrl = fb.get('ConfirmPassword');
    //passwordMismatch
    //confirmPswrdCtrl.errors={passwordMismatch:true}
    if (confirmPswrdCtrl.errors == null || 'passwordMismatch' in confirmPswrdCtrl.errors) {
      if (fb.get('Password').value != confirmPswrdCtrl.value)
        confirmPswrdCtrl.setErrors({ passwordMismatch: true });
      else
        confirmPswrdCtrl.setErrors(null);
    }
  }

  register() {
    var body = {
      email: this.formModel.value.Email,
      sex: this.formModel.value.Sex,
      birthDate: this.formModel.value.BirthDate,
      password: this.formModel.value.Passwords.Password
    };
    return this.http.post(this.BaseURI + '/api/users', body);
  }

  login(formData){
    return this.http.post(this.BaseURI + '/login', formData);
  }

  getUserProfile(){
    return this.http.get(this.BaseURI+'/api/users/MyProfile');
  }

  roleMatch(allowedRoles): boolean {
    var isMatch = false;
    var payLoad = JSON.parse(window.atob(localStorage.getItem('token').split('.')[1]));
    var userRole = payLoad.role;
    allowedRoles.forEach(element => {
      if (userRole == element) {
        isMatch = true;
        return false;
      }
    });
    return isMatch;
  }

}

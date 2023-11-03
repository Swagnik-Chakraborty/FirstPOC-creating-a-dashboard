import { AuthService } from './../services/auth.service';
import { Router, Routes, UrlSerializer, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormsModule, Validators, FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  display = '';
  user = '';



  constructor(private authservice:AuthService,private Routs: Router,private route:ActivatedRoute) {

  }



  ngOnInit(): void {

  }


  title = 'Assignment';
  signup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-z]+([\s][a-zA-Z]+)*$")]),
    Password: new FormControl('', [Validators.required,  Validators.pattern("^[a-zA-Z0-9]+$")]),
  })

  Signup() {
    return this.signup.value;
  }
  get g() {
    return this.signup.controls;

  }



  check(username: any, password: any) {
    var g = JSON.parse(localStorage.getItem('Session1') || '')



    for (let l = 0; l < g.length; l++) {
      if (g[l].username == username && g[l].Password == password) {
      
     
        this.user = username;
        localStorage.setItem('data',JSON.stringify(this.user))
        this.authservice.login();
        this.Routs.navigate(['/dashboard']);
        
      

      }
      else {
        this.display = 'Invalid Credentials!! Please Register ';
  
      }

    }
  }

  register() {
    this.Routs.navigate(['/register'])
  }




}

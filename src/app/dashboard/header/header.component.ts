import { Router, ActivatedRoute, Data } from '@angular/router';
import { Component, OnInit,Input } from '@angular/core';
import { SignupComponent } from 'src/app/signup/signup.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  username='';
  
  constructor(private route:Router,private routes:ActivatedRoute) {
   
    var g = JSON.parse(localStorage.getItem('data') || '')
    this.username=g
   }

  ngOnInit(): void {
   
  }
logout()
{
  this.route.navigate(['/signup']);
}
}

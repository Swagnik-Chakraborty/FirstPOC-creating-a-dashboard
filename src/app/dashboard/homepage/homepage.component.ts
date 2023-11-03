import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
username=''
  constructor(private route:Router,private activate:ActivatedRoute) { 
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

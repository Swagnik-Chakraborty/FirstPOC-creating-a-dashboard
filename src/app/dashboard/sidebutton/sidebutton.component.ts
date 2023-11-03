import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebutton',
  templateUrl: './sidebutton.component.html',
  styleUrls: ['./sidebutton.component.css']
})
export class SidebuttonComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  feedback()
  {
    this.route.navigate(['/feedback']);
    
  }
  welcome()
  {
    this.route.navigate(['/maintainaince']);
  }
}

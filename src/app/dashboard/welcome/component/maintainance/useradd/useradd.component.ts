import { Data, NavigationExtras, Router, ActivatedRoute } from '@angular/router';
import { Search1 } from './../../../../../services/user';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UsermainService } from 'src/app/services/usermain.service';
import { UserMaintainanceComponent } from '../usermaintainance/usermaintainance.component';

@Component({
  selector: 'app-useradd',
  templateUrl: './useradd.component.html',
  styleUrls: ['./useradd.component.css']
})
export class UserAddComponent {

  constructor(private http: UsermainService, private route: Router, private rout: ActivatedRoute) {

  }
  ngOnInit(): void {
  }
  adddata() {
    return this.add.value
  }


  add = new FormGroup({
    No: new FormControl(''),
    ID: new FormControl(''),
    UserName: new FormControl(''),
    Status: new FormControl(''),
    UserCreationDate: new FormControl('')
  })



  reset() {
    this.add.reset();
  }




  Save() {


 
    sessionStorage.setItem('newvalue', JSON.stringify(this.add.value));
  
    this.route.navigate(['dashboard/maintainance/usermaintainance'])
  }

  


}


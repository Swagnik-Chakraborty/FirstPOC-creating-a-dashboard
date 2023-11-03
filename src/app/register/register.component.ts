import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ValidatorFn,AbstractControl, FormBuilder, ValidationErrors } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


ngOnInit(): void {
  }
  constructor(private route: Router) { }

register = new FormGroup({
    fullname: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required]),
    Password: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z0-9]+$")]),
    email: new FormControl('', [Validators.email, Validators.required]),
    confirmemail: new FormControl('', [Validators.required, Validators.email]),
    check: new FormControl('', Validators.required)
},
{
  validators:this.controlvaluesareequal('email','confirmemail')
}
  )
  
  get f() {
    return this.register.controls;
  }
  Register() {
    return this.register.value;
  }



  names: any = [];
  Registernow(data: any) {
    // var g=JSON.parse(localStorage.getItem('Session1')||'');
    // if(g)
    // {
    //   this.names=g;
    // }
    
     this.names.push(data)
    


    localStorage.setItem('Session1', JSON.stringify(this.names));
    this.route.navigate(['/signup']);
  }

  
  private controlvaluesareequal(controlNameA:string,controlNameB:string):ValidatorFn
  {
    return (control:AbstractControl):ValidationErrors | null =>
    {
      const formGroup=control as FormGroup
      const emailvalue=formGroup.get(controlNameA)?.value
      const confirmemailvalue=formGroup.get(controlNameB)?.value
      if (emailvalue===confirmemailvalue)
      {
        return null
      }
      else{
        return{valuesnotmatch:true}
      }
    }
  }


  }


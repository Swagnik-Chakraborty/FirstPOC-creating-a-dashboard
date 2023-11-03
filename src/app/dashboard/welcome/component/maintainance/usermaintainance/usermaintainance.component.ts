import { ActivatedRoute, Router, Data } from '@angular/router';
import { UsermainService } from './../../../../../services/usermain.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Search1 } from 'src/app/services/user';
@Component({
    selector: 'app-usermaintainance',
    templateUrl: './usermaintainance.component.html',
    styleUrls: ['./usermaintainance.component.css']
})
export class UserMaintainanceComponent {
    userdata: Array<any> = []

    p: number = 1;
    usermaintainence = new FormGroup({
        ID: new FormControl('', [Validators.required]),
        Status: new FormControl('', [Validators.required])
    })


    constructor(private usermainservice: UsermainService, private route: Router, private rout: ActivatedRoute) {

    }

    ngOnInit(): void {
        if (sessionStorage.hasOwnProperty('masterdata')) {
            this.userdata = JSON.parse(sessionStorage.getItem('masterdata') || '');
            if (sessionStorage.hasOwnProperty('newvalue')) {
                var g = JSON.parse(sessionStorage.getItem('newvalue') || "")
                if (g) {
                    this.userdata.push(g);
                    sessionStorage.removeItem('newvalue')
                    sessionStorage.setItem('masterdata',JSON.stringify(this.userdata));
                }
            }
        }
        else {
            this.usermainservice.getAlldata().subscribe((response) => {
                this.userdata = response;
                sessionStorage.setItem('masterdata', JSON.stringify(response));
            })
        }

    }





    delete(element: any) {
        this.userdata.forEach((value, index) => {
            if (value == element) {
                this.userdata.splice(index, 1);
                sessionStorage.setItem('masterdata',JSON.stringify(this.userdata));
            }
        })

    }




    Usermaintainence() {
        return this.usermaintainence.value;
    }
    get f() {
        return this.usermaintainence.controls;
    }



    match(ID: any, Status: any) {
        this.usermainservice.search(ID, Status).subscribe((response) => {
            this.userdata = response

        })

    }



    useradd() {
        this.route.navigate(['dashboard/maintainance/useradd'])
    }










}


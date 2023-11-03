import { Search1 } from './user';
import { map, Observable, filter, observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsermainService {

  constructor(
    private _http: HttpClient
  ) { }

  getAlldata(): Observable<any> {
    return this._http.get("assets/demodata.json")
  }

  
  //for searching
  search(ID?:any,Status?:any): Observable<any[]> {
    console.log(ID);
    console.log(Status);
    return this._http.get<any[]>("assets/demodata.json").pipe(map((val:any[]) => {
      return val.filter((val1) => {

       if (ID && Status)
       {
        return val1.Status==Status && val1.ID==ID;
       }
       else if(ID){

        return val1.ID==ID;

      }
      
      else
      {
        return val1.Status==Status 
      }

      })}))
   
  }
 
  

}




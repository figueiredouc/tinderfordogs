import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {

  apiUrl = 'http://10.128.166.165:5000';
  constructor(public http: HttpClient) {
    console.log('Hello ApiProvider Provider');
  }

  getDogs() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/list_dogs').subscribe(data => {
        console.log(data);
        resolve(data);

      }, err => {
        console.log(err);
      });
    });
  }

  getUsers(){
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/list_users').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }


  add(data, endpoint) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/'+endpoint, JSON.stringify(data.value))
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
}

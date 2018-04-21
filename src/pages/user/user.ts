import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HttpClient, HttpHeaders } from "@angular/common/http";
/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})

export class UserPage {
  user: any = {
    name: null,
    username: null,
    contact: null,
    city: null,
    address: null,
    isBreeder: false,
    latitude: null,
    longitude: null,
  }
  api = "http://10.128.166.165:5000";
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPage');
  }

  addUser(user) {
    return new Promise((resolve, reject) => {
      this.http.post(this.api + '/create_user', JSON.stringify(this.user), {headers: "Content-Type", "application/json"})
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
}

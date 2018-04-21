import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { User } from '../../Services/Interfaces';

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
  
  api = "http://10.128.166.165:5000";
  private user: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, private formBuilder: FormBuilder ) {
    this.user = this.formBuilder.group({
      name: ['', Validators.required],
      username: [''],
      contact: [''],
      city: [''],
      address: [''],
      isBreeder: [''],
      latitude: [''],
      longitude: [''],
    });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPage');
  }

  addUser(user) {
    return new Promise((resolve, reject) => {
    //   this.http.post(this.api + '/create_user', JSON.stringify(this.user), {headers: "Content-Type", "application/json"})
    //     .subscribe(res => {
    //       resolve(res);
    //     }, (err) => {
    //       reject(err);
    //     });
     });
  }
}

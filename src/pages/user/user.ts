import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";

import { ApiProvider } from "../../providers/api/api";
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
  api = "http://10.128.166.165";
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public apiProvider: ApiProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPage');
  }

  saveUser() {
    console.log("user:", this.user);
    this.apiProvider.addUser(this.user).then((result) => {
      console.log(result);
    }, (err) => {
      console.log(err);
    });
  }
}
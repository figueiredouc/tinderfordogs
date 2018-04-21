import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { User } from '../../Services/Interfaces';

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
  
  api = "http://10.128.166.165:5000";
  private user: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public http: HttpClient, private formBuilder: FormBuilder,
    public apiProvider: ApiProvider) 
  {
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

  saveUser() {
    console.log("user:", this.user);
    this.apiProvider.addUser(this.user).then((result) => {
      console.log(result);
    }, (err) => {
      console.log(err);
    });
  }
}
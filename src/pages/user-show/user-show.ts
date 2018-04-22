import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';

/**
 * Generated class for the UserShowPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-show',
  templateUrl: 'user-show.html',
})
export class UserShowPage {
  users: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
  public apiProvider: ApiProvider) {
    this.getUser();
  }

  getUser(){
    this.apiProvider.getUsers()
    .then((data:any) =>{
      this.users = Object.keys(data).map((key) => data[key]);
    })
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad UserShowPage');
  }

}

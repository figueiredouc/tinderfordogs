import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  createUser(){
    this.navCtrl.push('UserPage');
  }

  createAnimal(){
    this.navCtrl.push('AnimalPage');
  }

  showAnimal() {
    this.navCtrl.push('AnimalShowPage');
  }
  selectFilters() {
    this.navCtrl.push('SelectFiltersPage');
  }
}

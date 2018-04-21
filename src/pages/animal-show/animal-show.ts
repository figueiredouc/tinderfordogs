import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Animal } from '../../Services/Interfaces';

/**
 * Generated class for the AnimalShowPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-animal-show',
  templateUrl: 'animal-show.html',
})
export class AnimalShowPage {

   animals: Animal[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.animals = 
      this.animals = [{ name: "becas" }, { name: "carlota" }]; 

    // ionViewDidLoad() {
    //   // save nav params to company object
    //   this.company = this.navParams.get('company');
    // }


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AnimalShowPage');
  }




}

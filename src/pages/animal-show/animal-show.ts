import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Animal } from '../../Services/Interfaces';
import { ApiProvider } from "../../providers/api/api";


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
  dogs: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public apiProvider: ApiProvider) {
    this.getAnimals();
  }

  getAnimals() {
    this.apiProvider.getDogs()
      .then((data:any) => {
        this.dogs = Object.keys(data.data).map((key) => data.data[key]);
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AnimalShowPage');
  }
}

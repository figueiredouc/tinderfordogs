import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Filters } from '../../Services/Interfaces';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

/**
 * Generated class for the SelectFiltersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-select-filters',
  templateUrl: 'select-filters.html',
})
export class SelectFiltersPage {
   structure : any = { lower: 1, upper: 100 }; 
   private filters:FormGroup;
   private hasBreed:boolean;
   private hasColor: boolean;
   private hasLandOfStanding:boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder) {
    this.hasBreed = false;
    this.hasColor = false;
    this.hasLandOfStanding = false;
    this.filters = this.formBuilder.group({
      rangeMinWeight: [''],
      rangeMaxWeight: [''],
      breed: ['',Validators.required],
      color: [''],
      landOfStanding: [''],
      
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectFiltersPage');
  }

  rangeWeight(){
   // this.filters.rangeWeight = this.structure;
  }

  addLanOfStanding(){
    this.hasLandOfStanding = !this.hasLandOfStanding;
    console.log(this.hasLandOfStanding);
  }
  addColor() {
    this.hasColor = !this.hasColor;
    console.log(this.hasColor);
  }

  addBreed() {
    this.hasBreed = !this.hasBreed;
    console.log(this.hasBreed);
  }

  createFilter(){
    console.log(this.filters.value);
  }


}

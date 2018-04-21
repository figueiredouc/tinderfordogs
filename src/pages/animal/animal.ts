import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{Animal} from '../../Services/Interfaces';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
/**
 * Generated class for the AnimalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */



@IonicPage()
@Component({
  selector: 'page-animal',
  templateUrl: 'animal.html',
})
export class AnimalPage {
  
  private animal : FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder) {
    this.animal = this.formBuilder.group({
      name: ['', Validators.required],
      description: [''],
      breederName: [''],
      ownerName: [''],
      sex: [''],
      birthDate: [''],
      landOfBirth: [''],
      size: [''],
      weigth: [''],
      color: [''],
      titles: [''],
      features: [''],
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AnimalPage');
  }

  createAnimal(){
   console.log(this.animal.value);
  }
} 

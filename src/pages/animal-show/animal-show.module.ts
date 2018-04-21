import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AnimalShowPage } from './animal-show';

@NgModule({
  declarations: [
    AnimalShowPage,
  ],
  imports: [
    IonicPageModule.forChild(AnimalShowPage),
  ],
})
export class AnimalShowPageModule {}

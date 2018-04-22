import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelectFiltersPage } from './select-filters';

@NgModule({
  declarations: [
    SelectFiltersPage,
  ],
  imports: [
    IonicPageModule.forChild(SelectFiltersPage),
  ],
})
export class SelectFiltersPageModule {}

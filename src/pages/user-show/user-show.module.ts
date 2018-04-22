import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserShowPage } from './user-show';

@NgModule({
  declarations: [
    UserShowPage,
  ],
  imports: [
    IonicPageModule.forChild(UserShowPage),
  ],
})
export class UserShowPageModule {}

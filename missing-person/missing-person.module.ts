import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MissingPersonPageRoutingModule } from './missing-person-routing.module';

import { MissingPersonPage } from './missing-person.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MissingPersonPageRoutingModule
  ],
  declarations: [MissingPersonPage]
})
export class MissingPersonPageModule {}

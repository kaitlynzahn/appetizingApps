import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [ FooterComponent ],
  imports: [
    CommonModule, RouterModule, IonicModule
  ],
  exports: [FooterComponent]
})
export class FooterModule { }

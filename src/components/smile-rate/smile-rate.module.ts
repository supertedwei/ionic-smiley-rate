import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { SmileRate } from './smile-rate';

@NgModule({
  declarations: [
    SmileRate,
  ],
  imports: [
    IonicModule.forChild(SmileRate),
  ],
  exports: [
    SmileRate
  ]
})
export class SmileRateModule {}

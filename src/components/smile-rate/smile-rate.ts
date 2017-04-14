import { Component } from '@angular/core';

/**
 * Generated class for the SmileRate component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'smile-rate',
  templateUrl: 'smile-rate.html'
})
export class SmileRate {

  text: string;

  constructor() {
    console.log('Hello SmileRate Component');
    this.text = 'Hello World';
  }

}

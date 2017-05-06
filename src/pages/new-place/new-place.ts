import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PlacesService } from '../../services/places.service';

@IonicPage()
@Component({
  selector: 'page-new-place',
  templateUrl: 'new-place.html',
})
export class NewPlace {

  constructor(public navCtrl: NavController, public navParams: NavParams, private PlacesService: PlacesService) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewPlace');
  }

  onAddPlace(value: {title: string}){
    this.PlacesService.addPlace(value);
    this.navCtrl.pop();
  }

}

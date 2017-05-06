import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewPlace } from '../new-place/new-place';
import { PlacesService } from '../../services/places.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  places:{title:string}[] = [];
  constructor(public navCtrl: NavController, private PlacesService: PlacesService) {

  }

  ionViewWillEnter(){
    this.places = this.PlacesService.getPlaces();
  }

  GoToAddNewPlace(){
    this.navCtrl.push(NewPlace);
  }

}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    PlacesService,
  ],
  imports: [
    IonicPageModule.forChild(PlacesService),
  ],
  exports: [
    PlacesService
  ]
})
export class PlacesService{
    private places:{title: string}[] = [];

    addPlace(place: {title: string}){
        this.places.push(place);
    }

    getPlaces(){
        return this.places.slice();
    }
}


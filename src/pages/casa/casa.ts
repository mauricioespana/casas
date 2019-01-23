import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CasaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-casa',
  templateUrl: 'casa.html',
})
export class CasaPage {
  casa = '';
  fav = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.casa = navParams.get("casa");
    this.fav = this.navParams.get('fav');
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CasaPage');
  }

  
}

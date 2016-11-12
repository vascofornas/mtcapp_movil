import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { OrganizacionService } from '../../providers/organizacion-service';

import { ENV } from '../../config/environment';

/*
  Generated class for the Organizaciones page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-organizaciones',
  templateUrl: 'organizaciones.html',
  providers: [OrganizacionService]
})
export class OrganizacionesPage {

  public organizaciones = null;

  public urlBase : string = ENV.API_URL;

  constructor(public navCtrl: NavController, public params: NavParams, public service: OrganizacionService) {
    this.cargarOrganizaciones(params.get("url"));
  }

  ionViewDidLoad() {

  }

  openUrl(url){
    window.open(url);
  }

  cargarOrganizaciones(url){
    this.service.load(url).then(data => {
      console.log(data);
      this.organizaciones = data;
    });
  }

}

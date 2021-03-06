import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { QueHacerPage } from '../pages/que-hacer/que-hacer';
import { HomePage } from '../pages/home/home';
import { QueHacerCategoriasPage } from '../pages/que-hacer-categorias/que-hacer-categorias';
import { ActividadesPage } from '../pages/actividades/actividades';
import { ActividadPage } from '../pages/actividad/actividad';
import { ZonasWifiPage } from '../pages/zonas-wifi/zonas-wifi';
import { QueHacerCalendarioPage } from '../pages/que-hacer-calendario/que-hacer-calendario';
import { TiposUbicacionesPage } from '../pages/tipos-ubicaciones/tipos-ubicaciones';
import { OrganizacionesPage } from '../pages/organizaciones/organizaciones';
import { TiposOrganizacionesPage } from '../pages/tipos-organizaciones/tipos-organizaciones';
import { ConsultanosPage } from '../pages/consultanos/consultanos';
import { NgCalendarModule  } from 'ionic2-calendar';
import { OrganizacionComponent } from '../components/organizacion/organizacion';
import { ActividadComponent } from '../components/actividad/actividad';
import { ValePage } from '../pages/vale/vale';
import { InscripcionesPage } from '../pages/inscripciones/inscripciones';
import { SuscripcionesAltaPage } from '../pages/suscripciones-alta/suscripciones-alta';
import { SuscripcionesBajaPage } from '../pages/suscripciones-baja/suscripciones-baja';

import { ConnectivityService } from '../providers/connectivity-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    QueHacerPage,
    QueHacerCategoriasPage,
    ActividadesPage,
    QueHacerCalendarioPage,
    TiposUbicacionesPage,
    OrganizacionesPage,
    TiposOrganizacionesPage,
    ConsultanosPage,
    ActividadPage,
    ZonasWifiPage,
    ValePage,
    InscripcionesPage,
    SuscripcionesAltaPage,
    SuscripcionesBajaPage,
    OrganizacionComponent,
    ActividadComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp, {
      backButtonText: '',
      iconMode: 'ios'
    }),
    NgCalendarModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    QueHacerPage,
    QueHacerCategoriasPage,
    ActividadesPage,
    QueHacerCalendarioPage,
    TiposUbicacionesPage,
    OrganizacionesPage,
    TiposOrganizacionesPage,
    ConsultanosPage,
    ActividadPage,
    ZonasWifiPage,
    ValePage,
    InscripcionesPage,
    SuscripcionesAltaPage,
    SuscripcionesBajaPage,
    OrganizacionComponent,
    ActividadComponent
  ],
  providers: [
    ConnectivityService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}

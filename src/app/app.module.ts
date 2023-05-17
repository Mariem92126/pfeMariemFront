import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AminHomeComponent } from './amin-home/amin-home.component';
import { CaptchaComponent } from './captcha/captcha.component';
import { EnvoyerComponent } from './envoyer/envoyer.component';
import { FactureComponent } from './facture/facture.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AbonnementComponent } from './abonnement/abonnement.component';
import { ReclamationComponent } from './reclamation/reclamation.component';
import { ModalBasicComponent } from './modal-basic/modal-basic.component';
import { WelcomeComponent } from './welcome/welcome.component';

import { SettingsComponent } from './settings/settings.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { Info1Component } from './info1/info1.component';
import { AdminaminHomeComponent } from './adminamin-home/adminamin-home.component';
import { AdminlogaminComponent } from './adminlogamin/adminlogamin.component';
import { AdminSettingsComponent } from './admin-settings/admin-settings.component';
import { AdminnotificationsComponent } from './adminnotifications/adminnotifications.component';
import { AdminfacturesComponent } from './adminfactures/adminfactures.component';
import { ContactComponent } from './contact/contact.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdminreclamationComponent } from './adminreclamation/adminreclamation.component';
import { AdmincontratComponent } from './admincontrat/admincontrat.component';
import { HistoriqueComponent } from './historique/historique.component';
import { FactstegComponent } from './factsteg/factsteg.component';
import { AccesComponent } from './acces/acces.component';
import { Contact1Component } from './contact1/contact1.component';
import { InfoComponent } from './info/info.component';
import { Adminfacture1Component } from './adminfacture1/adminfacture1.component';
import { AdminprofilComponent } from './adminprofil/adminprofil.component';
import { ModuleComponent } from './module/module.component';
import { AdminutilisateurComponent } from './adminutilisateur/adminutilisateur.component';

@NgModule({
  declarations: [
    AppComponent,

    InscriptionComponent,
    HomeComponent,
    LoginComponent,
    AminHomeComponent,
    CaptchaComponent,
    EnvoyerComponent,
    FactureComponent,
    DashboardComponent,
    AbonnementComponent,
    ReclamationComponent,
    ModalBasicComponent,
    WelcomeComponent,

    SettingsComponent,
    MapsComponent,
    NotificationsComponent,
    Info1Component,
    AdminaminHomeComponent,
    AdminlogaminComponent,
    AdminSettingsComponent,
    AdminnotificationsComponent,
    AdminfacturesComponent,
    ContactComponent,
    AdmindashboardComponent,
    AdminreclamationComponent,
    AdmincontratComponent,
    HistoriqueComponent,
    FactstegComponent,
    AccesComponent,
    Contact1Component,
    InfoComponent,
    Adminfacture1Component,
    AdminprofilComponent,
    ModuleComponent,
    AdminutilisateurComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

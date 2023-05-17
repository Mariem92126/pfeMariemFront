import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModalBasicComponent } from './modal-basic/modal-basic.component';
import { EnvoyerComponent } from './envoyer/envoyer.component';
import { ContactComponent } from './contact/contact.component';
import { CaptchaComponent } from './captcha/captcha.component';
import { SettingsComponent } from './settings/settings.component';
import { Info1Component } from './info1/info1.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { HomeComponent } from './home/home.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';

import { AminHomeComponent } from './amin-home/amin-home.component';
import { FactureComponent } from './facture/facture.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AbonnementComponent } from './abonnement/abonnement.component';
import { ReclamationComponent } from './reclamation/reclamation.component';
import { AdminlogaminComponent } from './adminlogamin/adminlogamin.component';
import { AdminaminHomeComponent } from './adminamin-home/adminamin-home.component';
import { AdminfacturesComponent } from './adminfactures/adminfactures.component';
import { AdminSettingsComponent } from './admin-settings/admin-settings.component';
import { AdminnotificationsComponent } from './adminnotifications/adminnotifications.component';
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

const routes: Routes =
[
  {path:'modal-basic',component:ModalBasicComponent},
  {path:'envoyer',component:EnvoyerComponent},
  {path:'contact',component:ContactComponent},
  {path:'captcha',component:CaptchaComponent},
  {path:'settings',component:SettingsComponent},
  {path:'info1',component:Info1Component},
  {path:'maps',component:MapsComponent},
  {path:'acces',component:AccesComponent},
  {path:'contact1',component:Contact1Component},
  {path:'info',component:InfoComponent},
  {path:'notifications',component:NotificationsComponent},
  { path: '', component: HomeComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'login', component: LoginComponent },
  {path:'welcome',component:WelcomeComponent},
   

  
  { path: 'amin-home', component: AminHomeComponent},
  { path: 'factures', component: FactureComponent },
  { path: 'abonnements', component: AbonnementComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'reclamations', component: ReclamationComponent },
  {path:'factsteg',component:FactstegComponent},

{path:'adminlogamin', component:AdminlogaminComponent},
{path:'adminamin-home',component:AdminaminHomeComponent},
{path:'adminfactures',component:AdminfacturesComponent},
{path:'admindashboard',component:AdmindashboardComponent},
{path:'adminreclamation',component:AdminreclamationComponent},
{path:'admincontrat',component:AdmincontratComponent},
{path:'historique',component:HistoriqueComponent},
{path:'admin-settings',component:AdminSettingsComponent},
{path:'adminnotifications',component:AdminnotificationsComponent},
{path:'adminfacture1',component:Adminfacture1Component},
{path:'adminprofil',component:AdminprofilComponent},
{path:'module',component:ModuleComponent},
{path:'adminutilisateur',component:AdminutilisateurComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

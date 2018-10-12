import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ToAfficherComponent } from './to-afficher/to-afficher.component';
import { EnvoyerComponent } from './envoyer/envoyer.component';

@NgModule({
  declarations: [
    AppComponent,
    ToAfficherComponent,
    EnvoyerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}

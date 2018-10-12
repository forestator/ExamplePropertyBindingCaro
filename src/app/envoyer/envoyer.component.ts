import {Component, Input, OnInit} from '@angular/core';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-envoyer',
  templateUrl: './envoyer.component.html',
  styleUrls: ['./envoyer.component.css']
})
export class EnvoyerComponent implements OnInit {

  constructor(private appComp: AppComponent) { }

  ngOnInit() {
  }

  changerNom() {
    this.appComp.sayBonsoir('TOTO');
  }
}

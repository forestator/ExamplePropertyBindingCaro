import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-to-afficher',
  templateUrl: './to-afficher.component.html',
  styleUrls: ['./to-afficher.component.css']
})
export class ToAfficherComponent implements OnInit {

  @Input() name: string;
  prenom = 'max';

  constructor() { }

  ngOnInit() {
  }

}

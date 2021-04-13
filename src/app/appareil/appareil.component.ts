import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss'],
})
export class AppareilComponent implements OnInit {
  @Input() appareilName: string;

  @Input() appareilStatus: string;

  constructor() { }

  ngOnInit(): void { }

  // Méthodes getStatus(), getColor()
  getStatus() {
    return this.appareilStatus;
  }
  getColor() {
    if (this.appareilStatus === 'allumé') {
      return 'green';
      'éteint'
      {
      return 'red';
    }
  }
}
}

import { Component, Input, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.services';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss'],
})
export class AppareilComponent implements OnInit {
  @Input() appareilName: string;

  @Input() appareilStatus: string;
  /* On va rajouter un index "i" pour le localiser dans la liste et le bindé dans le template parent app.component.html */
  @Input() index: number;

  constructor(private appareilService: AppareilService) {}

  ngOnInit(): void {}

  /* Méthodes getStatus(), getColor() */
  getStatus() {
    return this.appareilStatus;
  }
  getColor() {
    if (this.appareilStatus === 'allumé') {
      return 'green';
      ('éteint');
      {
        return 'red';
      }
    }
  }
  /* Méthode allumé<-->éteint */
  onSwitch() {
    if (this.appareilStatus === 'allumé') {
      this.appareilService.switchOffOne(this.index);
    } else if (this.appareilStatus === 'éteint') {
      this.appareilService.switchOnOne(this.index);
    }
  }
}

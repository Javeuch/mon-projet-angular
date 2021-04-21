import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppareilService } from '../services/appareil.services';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss'],
})
export class AppareilViewComponent implements OnInit, OnDestroy {
  /* les attributs--------------------------------------------*/
  isAuth = false;

  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(() => {
      resolve(date);
    }, 2000);
  });
  // tableau déplacé dans le service.ts, on garde juste la décl. du tableau
  appareils: any[];
  // On déclare une souscription:
  appareilSubscription: Subscription;
  /*------------------------------------------------------------*/

  constructor(private appareilService: AppareilService) {
    setTimeout(() => {
      this.isAuth = true;
    }, 4000);
  }

  /* Méthode s'exécutant à la création du Component et après  le constructor
  (on la met avant les autres méthodes de la classe) */
  ngOnInit() {
    this.appareilSubscription = this.appareilService.appareilsSubject.subscribe(
      (appareils: any[]) => {
        this.appareils = appareils;
      }
    );
    this.appareilService.emitAppareilSubject();
  }
  /* Les méthodes allumer et éteindre */
  onAllumer() {
    this.appareilService.switchOnAll();
  }
  onEteindre() {
    if (confirm('Etes-vous sûr de vouloir éteindre tous vos appareils ?')) {
      this.appareilService.switchOffAll();
    } else {
      return null;
    }
  }
/* Méthode de destruction de la souscription */
  ngOnDestroy() {
    this.appareilSubscription.unsubscribe();
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppareilService } from './services/appareil.services';
/*  l'observable s'importe comme ceci depuis RxJS6 */
import { Observable, interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  /* Attributs */
  secondes: number;
  /* On cré un objet de type Subscription */
  counterSubscription: Subscription;

  ngOnInit() {
    /* Déclaration d'un compteur qui envoie un nombre à interval de 1000 ms */
    const counter = interval(1000);

    /* On stocke la souscription dans l'objet Subscription */
    this.counterSubscription = counter.subscribe(
      (value) => {
        this.secondes = value;
      },
      /* ici, subscribe() ne les déclenche pas -------------*/
      (error) => {
        console.log('Uh-oh, an error occurred! : ' + error);
      },
      () => {
        console.log('Observable complete!');
      }
      /*----------------------------------------------------*/
    );
  }

  ngOnDestroy() {
    this.counterSubscription.unsubscribe();
  }
}

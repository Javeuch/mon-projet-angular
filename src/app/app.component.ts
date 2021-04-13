import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  //attribut: boolean
  isAuth = false;
  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });
  // appareilOne = 'Machine à laver';
  // appareilTwo = 'Frigo';
  // appareilThree = 'Ordinateur';

  // tabeau appareils []
  appareils = [
    {
      name: 'Machine à laver',
      status: 'éteint',
    },
    {
      name: 'Frigo',
      status: 'allumé'
    },
    {
      name: 'Ordinateur',
      status: 'éteint'
    }
  ];

  // Méthode "constructor() qui fait un timeout au bout de 4 sec"
  constructor() {
    setTimeout(() => {
      this.isAuth = true;
    }, 4000);
  }
  // Méthode "click" pour actionner le bouton
  onAllumer() {
    // Renvoie le message en console
    console.log('On allume tout !');
  }
}

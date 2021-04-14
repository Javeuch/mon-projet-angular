export class AppareilService {
  /* La liste des appareils: */
  appareils = [
    {
      name: 'Machine à laver',
      status: 'éteint',
    },
    {
      name: 'Frigo',
      status: 'allumé',
    },
    {
      name: 'Ordinateur',
      status: 'éteint',
    },
  ];
  // Méthodes "allumerTout" et "eteindreTout"
  switchOnAll() {
    for (let appareil of this.appareils) {
      appareil.status = 'allumé';
    }
  }

  switchOffAll() {
    for (let appareil of this.appareils) {
      appareil.status = 'éteint';
    }
  }
  // Méthodes "allumerUn" et "eteindreUn"
  switchOnOne(i: number) {
    this.appareils[i].status = 'allumé';
  }

  switchOffOne(i: number) {
    this.appareils[i].status = 'éteint';
  }
}

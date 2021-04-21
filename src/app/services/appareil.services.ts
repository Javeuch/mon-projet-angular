import { Subject } from "rxjs";

export class AppareilService {
  /* Création d'un subject */
  appareilsSubject = new Subject<any[]>();

  /* La liste des appareils: */
  // avec subject on met en private */
  private appareils = [
    {
      id: 1,
      name: 'Machine à laver',
      status: 'éteint',
    },
    {
      id: 2,
      name: 'Frigo',
      status: 'allumé',
    },
    {
      id: 3,
      name: 'Ordinateur',
      status: 'éteint',
    },
  ];
  /* Méthodes "allumerTout" et "eteindreTout" */
  switchOnAll() {
    for (let appareil of this.appareils) {
      appareil.status = 'allumé';
    }
    // méthode emettre
    this.emitAppareilSubject();
  }

  switchOffAll() {
    for (let appareil of this.appareils) {
      appareil.status = 'éteint';
    }
    // méthode emettre
    this.emitAppareilSubject();
  }
  /* Méthodes "allumerUn" et "eteindreUn" */
  switchOnOne(i: number) {
    this.appareils[i].status = 'allumé';
    // méthode emettre
    this.emitAppareilSubject();
  }

  switchOffOne(i: number) {
    this.appareils[i].status = 'éteint';
    // méthode emettre
    this.emitAppareilSubject();
  }
  /* Méthode permettant d'obtenir un appareil par son "id" */
  getAppareilById(id: number) {
    const appareil = this.appareils.find((s) => {
      return s.id === id;
    });
    return appareil;
  }
  /* Création de la méthode d'émission du Subject */
  emitAppareilSubject() {
    this.appareilsSubject.next(this.appareils.slice());
  }
}

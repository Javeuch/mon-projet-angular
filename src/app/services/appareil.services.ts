import { Subject } from "rxjs";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable()
export class AppareilService {

  /* Création d'un subject */
  appareilsSubject = new Subject<any[]>();

  /* La liste des appareils: */
  // avec subject on met en private */
  private appareils: any[];

  /*-------importé depuis BDD------------------
  [
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
-----------------------------------------------*/

  /* on ajoute un constructor pour l'injection de HttpClient */
  constructor(private httpClient: HttpClient) { }

  /* méthode qui génèrere le nouvel appareil */
  addAppareil(name: string, status: string) {
    const appareilObject = {
      id: 0,
      name: '',
      status: ''
    };
    appareilObject.name = name;
    appareilObject.status = status;
    appareilObject.id = this.appareils[(this.appareils.length - 1)].id + 1;
    this.appareils.push(appareilObject);
    this.emitAppareilSubject();
  }

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

  /* Création de la méthode de sauvegarde sur le serveur Http */
  saveAppareilsToServer() {
    this.httpClient.put('https://httpclient-demo-cc67f-default-rtdb.europe-west1.firebasedatabase.app/appareils.json', this.appareils)
      .subscribe(
        () => {
          console.log('Enregistrement terminé !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

  /* Création de la méthode de récupération des données du serveur Firebase */
    getAppareilsFromServer() {
    this.httpClient.get<any[]>('https://httpclient-demo-cc67f-default-rtdb.europe-west1.firebasedatabase.app/appareils.json').subscribe(
        (response) => {
          this.appareils = response;
          this.emitAppareilSubject();
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }
}

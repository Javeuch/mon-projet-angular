import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppareilService } from '../services/appareil.services';

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrls: ['./single-appareil.component.scss'],
})
export class SingleAppareilComponent implements OnInit {
  /* Ses attributs */
  name: string = 'Appareil';
  status: string = 'Statut';

  /* On injecte le service & le ActvatedRoute
  contanant les infos de la route active, dans son constructor */
  constructor(
    private appareilService: AppareilService,
    private route: ActivatedRoute
  ) {}

  /*On récup. l'id dans l'url et => méth. getAppareilById */
  ngOnInit() {
       const id = this.route.snapshot.params['id'];
       this.name = this.appareilService.getAppareilById(+id).name;
       this.status = this.appareilService.getAppareilById(+id).status;
   }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../models/User.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit, OnDestroy {
  /* Les attributs */
  users: User[];
  userSubscription: Subscription;

  /* Injection du service correspondant */
  constructor(private userService: UserService) { }


  ngOnInit() {
    this.userSubscription = this.userService.userSubject.subscribe(
      (users: User[]) => {
        this.users = users;
      }
    );
    this.userService.emitUsers();
  }

  /* Méthode de destruction quand utilisateur supprimé */
  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }
}

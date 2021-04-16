import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  /* Création d'une variable booléenne d'authentification: */
  authStatus: boolean;

  /* On injecte le SERVICE authService
  Et le ROUTER dans le constructor */
  constructor(private authService: AuthService, private router: Router) {
  }

  /* On cré l'état d'authentification */
  ngOnInit() {
    this.authStatus = this.authService.isAuth;
  }
  /* Méthodes de connexion et de déconnexion: */
  onSignIn() {
    this.authService.signIn().then(
      () => {
        console.log('Sign in successful!');
        this.authStatus = this.authService.isAuth;
        this.router.navigate(['appareils']);
      }
    );
  }

  onSignOut() {
    this.authService.signOut();
    this.authStatus = this.authService.isAuth;
    console.log('Disconnected!');
  }
}

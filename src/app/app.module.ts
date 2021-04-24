import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppareilComponent } from './appareil/appareil.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppareilService } from './services/appareil.services';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from './services/auth.service';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { AuthGuard } from './services/auth-guard.service';
import { UserService } from './services/user.service';
import { UserListComponent } from './user-list/user-list.component';

/* appRoutes: constante de routage type Routes --> tableau */
const appRoutes: Routes = [
  {
    path: 'appareils',
    canActivate: [AuthGuard],
    component: AppareilViewComponent,
  },
  {
    path: 'appareils/:id',
    canActivate: [AuthGuard],
    component: SingleAppareilComponent,
  },
  {
    path: 'auth',
    component: AuthComponent,
  },
  {
    path: 'users',
    component: UserListComponent
  },
  {
    path: '',
    component: AppareilViewComponent,
  },
  {
    path: 'not-found',
    component: FourOhFourComponent,
  },
  {
    path: '**',
    redirectTo: 'not-found',
  },
];

@NgModule({

  declarations: [
    AppComponent,
    AppareilComponent,
    AuthComponent,
    AppareilViewComponent,
    SingleAppareilComponent,
    FourOhFourComponent,
    UserListComponent,
  ],

  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],

  providers: [
    AppareilService,
    AuthService,
    AuthGuard,
    UserService
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}

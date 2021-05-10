import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

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
import { NewUserComponent } from './new-user/new-user.component';
import { from } from 'rxjs';
import { EditAppareilComponent } from './edit-appareil/edit-appareil.component';

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
    path: 'edit',
    canActivate: [AuthGuard],
    component: EditAppareilComponent,
  },
  {
    path: 'users',
    component: UserListComponent,
  },
  {
    path: 'new-user',
    component: NewUserComponent
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
    NewUserComponent,
    EditAppareilComponent,
  ],

  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
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
